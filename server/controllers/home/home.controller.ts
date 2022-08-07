import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../../interfaces/IControllerBase.interface";

export default class homeController implements IControllerBase {
  public router = express.Router();
  public paths = { homePath: "/", aboutPath: "/about" };

  constructor() {
    this.initRoute();
  }

  public initRoute(): void {
    this.router.get(this.paths.homePath, this.index);
    this.router.get(this.paths.aboutPath, this.about);
  }
  index = (req: Request, res: Response) => {
    /*
      #swagger.tags = ['Users']
    */
    const homeMenu = [
      { id: 1, name: "John", age: "25" },
      { id: 2, name: "Jane", age: "26" },
    ];
    res.render("home/index.pug", { homeMenu });
  };

  about = (req: Request, res: Response) => {
    const aboutMenu = [
      { id: 1, name: "John", age: "25" },
      { id: 2, name: "Jane", age: "26" },
    ];
    res.render("home/home", { aboutMenu });
  };
}
