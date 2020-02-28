// require('dotenv').config();
import fetch from 'node-fetch';
import fetchCookie from 'fetch-cookie/node-fetch';
import dotenv from 'dotenv';
import app from './app';
import authenticate from './data/authenticate';

global.fetch = fetchCookie(fetch);
(async (): Promise<void> => {
  dotenv.config();
  await authenticate();

  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });
})();
