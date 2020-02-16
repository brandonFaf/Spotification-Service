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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLGlEQUFpRDtBQUNqRCxnQ0FBZ0M7QUFFaEMsZ0RBQWdEO0FBRWhELGdDQUFnQztBQUNoQyx1Q0FBdUM7QUFFdkMsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIsK0NBQStDO0FBQy9DLG1CQUFtQjtBQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsT0FBTyxFQUFFLG1DQUFtQztLQUM3QyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILDJCQUEyQjtBQUUzQixpQ0FBaUM7QUFDakMscUNBQXFDO0FBRXJDLHdCQUF3QjtBQUN4QixrQkFBZSxHQUFHLENBQUMifQ==