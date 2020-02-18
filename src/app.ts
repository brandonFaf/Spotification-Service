import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { errorHandler, notFound } from './middlewares';

// const api = require('./api');
// const auth = require('./data/auth');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser('asdufhiaisudhfasdf'));
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.json({
    message: 'Here is my api 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
