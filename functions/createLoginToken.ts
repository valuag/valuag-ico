import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as speakeasy from 'speakeasy';
import * as md5 from 'md5';

function verifyToken(secret, token) {
  return speakeasy.totp.verify({
    secret,
    token,
    encoding: 'base32'
  });
}

function verifyPassword(password, passwordMd5) {
  return md5(password) === passwordMd5;
}


export const createLoginToken = functions.https.onCall(async (data, context) => {
  const { token, email, password } = data;
  const { uid } = await admin.auth().getUserByEmail(email);
  const passwordMd5 = admin.database().ref(`/passwords/${uid}`).toString();
  if (verifyPassword(password, passwordMd5)) {
    const loginToken = await admin.auth().createCustomToken(uid);
    const secret = admin.database().ref(`/secrets/${uid}`).toString();
    if (verifyToken(secret, token)) {
      const loginToken = await admin.auth().createCustomToken(uid);
      return {
        loginToken
      };
    } else {
      throw new functions.https.HttpsError('invalid-argument', `'password' argument is invalid!`);
    }
  } else {
    throw new functions.https.HttpsError('invalid-argument', `'token' argument is invalid!`);
  }
});
