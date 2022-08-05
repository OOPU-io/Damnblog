"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const app_1 = require("./app");
const loggerHandler_1 = require("./middlewares/loggerHandler");
// import errorHandlerMiddleware from './middlewares/errorHandler';
const home_controller_1 = require("./controllers/home/home.controller");
// import userController from './controllers/user';
// import postController from './controllers/post';
// import { Request, Response } from 'express';
// import { config } from './config';
const app = new app_1.default({
    port: 5000,
    controllers: [
        new home_controller_1.default(),
        // new postController(),
        // new userController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerHandler_1.default,
    ],
});
app.listen();
//# sourceMappingURL=server.js.map