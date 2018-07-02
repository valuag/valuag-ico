export * from './createAccount';
export * from './createLoginToken';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
const serviceAccount = functions.config()['service-account'];
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
  projectId: serviceAccount.project_id,
  storageBucket: `${serviceAccount.project_id}.appspot.com`
});
