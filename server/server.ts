import * as bodyParser from "body-parser";
import App from "./app";
import loggerHandlerMiddleware from "./middlewares/loggerHandler";
// import errorHandlerMiddleware from './middlewares/errorHandler';
import homeController from "./controllers/home/home.controller";
// import userController from './controllers/user';
// import postController from './controllers/post';
// import { Request, Response } from 'express';
// import { config } from './config';

const app = new App({
  port: 5000,
  controllers: [
    new homeController(),
    // new postController(),
    // new userController()
  ],

  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerHandlerMiddleware,
  ],
});

app.listen();
