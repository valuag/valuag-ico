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


export const createLoginToken = functions.https.onCall(async (data) => {
  const { token, email, password } = data;
  const { uid } = await admin.auth().getUserByEmail(email);
  const passwordMd5Snapshot = await admin.database().ref(`/passwords/${uid}`).once("value");
  const passwordMd5 = passwordMd5Snapshot.val();
  console.log({
    uid,
    passwordMd5
  });
  if (verifyPassword(password, passwordMd5)) {
    const secretSnapshot = await admin.database().ref(`/secrets/${uid}`).once("value");
    const secret = secretSnapshot.val();
    if (verifyToken(secret, token)) {
      const loginToken = await admin.auth().createCustomToken(uid);
      return {
        loginToken
      };
    } else {
      throw new functions.https.HttpsError('invalid-argument', JSON.stringify({
        message: 'Token is invalid!'
      }));
    }
  } else {
    throw new functions.https.HttpsError('invalid-argument', JSON.stringify({
      message: 'Password is invalid'
    }));
  }
});
