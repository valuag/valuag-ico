import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as speakeasy from 'speakeasy';
import * as md5 from 'md5';

function verifyToken(secret, token) {
  return speakeasy.totp.verify({
    secret: secret,
    token,
    encoding: 'base32'
  });
}

function verifyPassword(password, passwordMd5) {
  return md5(password) === passwordMd5;
}

export const createLoginToken = functions.https.onCall(async (data) => {
  const { token, email, password } = data;
  const userRecord = await admin.auth().getUserByEmail(email);
  const usersCollection = admin.firestore().collection('users');
  const userDoc = await usersCollection.doc(userRecord.uid);
  const userDataSnapshot = await userDoc.get();
  const {
    secret,
    passwordMd5
  } = userDataSnapshot.data();
  if (verifyPassword(password, passwordMd5)) {
    if (verifyToken(secret, token)) {
      const loginToken = await admin.auth().createCustomToken(userRecord.uid);
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
