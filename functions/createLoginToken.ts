import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as speakeasy from 'speakeasy';

export const createLoginToken = functions.https.onCall(async (data, context) => {
  const { token, uid } = data;
  const secret = admin.database().ref(`/secrets/${uid}`).toString();
  const verified = await speakeasy.totp.verify({
    secret,
    token,
    encoding: 'base32'
  });
  if (verified) {
    const loginToken = await admin.auth().createCustomToken(uid);
    return {
      loginToken
    };
  } else {
    throw new functions.https.HttpsError('invalid-argument', `'token' argument is invalid!`);
  }
});
