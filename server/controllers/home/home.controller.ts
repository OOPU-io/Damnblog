import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../../interfaces/IControllerBase.interface";

export default class homeController implements IControllerBase {
  constructor() {
    this.initRoute();
  }

  public initRoute(): void {
    const router = express.Router();
    const path = "/";
    router.get(path, (req: Request, res: Response) => {
      res.send("Hello World!");
    });
  }
}
