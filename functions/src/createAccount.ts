
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';
import * as md5 from 'md5';

export const createAccount = functions.https.onCall(async (data) => {
  const {
    email,
    phoneNumber,
    password,
    displayName
  } = data;
  let authRecord;
  try {
    authRecord = await admin.auth().createUser({
      email,
      emailVerified: false,
      phoneNumber,
      password,
      displayName,
      disabled: false
    });
  } catch (exception) {
    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `Account couldn't created!`,
      exception
    }));
  }
  let secret;
  try {
    secret = speakeasy.generateSecret({
      name: 'ValuAg ICO'
    });
  } catch (exception) {
    admin.auth().deleteUser(authRecord.uid);
    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `Two factor auth secret couldn't generated!`,
      exception
    }));
  }
  try {
    admin.database().ref(`/passwords/${authRecord.uid}`).set(md5(password));
  } catch (exception) {
    admin.auth().deleteUser(authRecord.uid);
    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `User password couldn't put on database`,
      exception
    }));
  }
  const secretBase32 = secret.base32;
  try {
    admin.database().ref(`/secrets/${authRecord.uid}`).set(secretBase32);
  } catch (exception) {
    admin.auth().deleteUser(authRecord.uid);
    await admin.database().ref(`/passwords/${authRecord.uid}`).remove();

    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `Two factor auth secret couldn't put on database`,
      exception
    }));
  }
  try {
    const qrcodeDataUrl = await QRCode.toDataURL(secret.otpauth_url);
    return {
      qrcodeDataUrl
    };
  } catch (exception) {
    admin.auth().deleteUser(authRecord.uid);
    await admin.database().ref(`/passwords/${authRecord.uid}`).remove();
    await admin.database().ref(`/secrets/${authRecord.uid}`).remove();

    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `QRCode couldn't generated!`,
      exception
    }));
  }
});
