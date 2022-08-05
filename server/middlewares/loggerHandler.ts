import { Request, Response } from "express";
const loggerHandlerMiddleware = (req: Request, res: Response, next) => {
  console.log(`Request logged: ${req.method} ${req.path}`);
  next();
};

export default loggerHandlerMiddleware;
