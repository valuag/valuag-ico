
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';

export const createAccount = functions.https.onCall(async (data, context) => {
  const {
    email,
    phoneNumber,
    password,
    displayName,
    photoURL
  } = data;
  const authRecord = await admin.auth().createUser({
    email,
    emailVerified: false,
    phoneNumber,
    password,
    displayName,
    photoURL,
    disabled: false
  });
  const secret = speakeasy.generateSecret();
  const secretBase32 = secret.base32;
  admin.database().ref(`/secrets/${authRecord.uid}`).set(secretBase32);
  const qrcodeDataUrl = await QRCode.toDataURL(secret.otpauth_url);
  return {
    qrcodeDataUrl
  };
});
