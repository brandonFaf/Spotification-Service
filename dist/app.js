"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const morgan = require('morgan');
// const helmet = require('helmet');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const middlewares = require('./middlewares');
// const api = require('./api');
// const auth = require('./data/auth');
const app = express_1.default();
// app.use(morgan('dev'));
// app.use(helmet());
// app.use(cookieParser('asdufhiaisudhfasdf'));
// app.use(cors());
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.json({
        message: 'Here is my api 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
});
// app.use('/api/v1', api);
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);
// module.exports = app;
exports.default = app;
