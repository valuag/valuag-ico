import * as express from 'express';
import * as stencil from '@stencil/core/server';
import * as path from 'path';
import * as functions from 'firebase-functions';

// create the express app
const app = express();

// load the stencil config and
// express serve-side rendering middleware
const { wwwDir, logger } = stencil.initApp({
  app,
  configPath: path.join(__dirname, '..')
});

// serve static files
app.use(express.static(wwwDir));

export const ssr = functions.https.onRequest(app);
