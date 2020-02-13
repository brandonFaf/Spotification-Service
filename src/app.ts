import express from 'express';
// const morgan = require('morgan');
// const helmet = require('helmet');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');

// const middlewares = require('./middlewares');

// const api = require('./api');
// const auth = require('./data/auth');

const app = express();

// app.use(morgan('dev'));
// app.use(helmet());
// app.use(cookieParser('asdufhiaisudhfasdf'));
// app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.json({
    message: 'Here is my api 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// module.exports = app;
export default app;
