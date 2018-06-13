export * from './createAccount';
export * from './createLoginToken';
import * as admin from 'firebase-admin';
const serviceAccount = require('./service-account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});
