
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
  let userRecord: admin.auth.UserRecord;
  try {
    userRecord = await admin.auth().createUser({
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
  const passwordMd5 = md5(password);
  const secret = speakeasy.generateSecret({
    name: 'ValuAg ICO'
  });
  const usersCollection = admin.firestore().collection('users');
  usersCollection.get().then(a => console.log(a.docs))
  const userDoc = await usersCollection.doc(userRecord.uid);
  try {
    await userDoc.set({
      passwordMd5: md5(password),
      secret: secret.base32
    });
  } catch (exception) {
    await admin.auth().deleteUser(userRecord.uid);
    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `User private data couldn't put on database`,
      exception
    }));
  }
  try {
    const qrcodeDataUrl = await QRCode.toDataURL(secret.otpauth_url);
    return {
      qrcodeDataUrl
    };
  } catch (exception) {
    await admin.auth().deleteUser(userRecord.uid);
    await userDoc.delete();

    throw new functions.https.HttpsError('aborted', JSON.stringify({
      message: `QRCode couldn't generated!`,
      exception
    }));
  }
});
