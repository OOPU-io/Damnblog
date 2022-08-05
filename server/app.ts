import * as express from "express";
import { Application } from "express";
class App {
  public app: Application;
  public port: number;

  // initializing the app constructor
  constructor(appInit: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;
    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
    this.template();
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    readonly forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private assets() {
    this.app.use(express.static("public"));
  }

  private template() {
    this.app.set("view engine", "ejs");
  }

  public listen() {
    this.app
      .listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`);
      })
      .on("error", (error: Error) => {
        console.log(error);
      })
      .on("listening", () => {
        console.log(`App listening on the port ${this.port}`);
      })
      .on("close", () => {
        console.log(`App closed on the port ${this.port}`);
      })
      .on("connection", () => {
        console.log(`App connected on the port ${this.port}`);
      })
      .on("disconnect", () => {
        console.log(`App disconnected on the port ${this.port}`);
      });
  }
}

export default App;
