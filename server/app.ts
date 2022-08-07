import cors from "cors";
import express, { Application } from "express";
// import swaggerFile from "./swagger_output.json";

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
    this.app.use(express.static("views"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    // this.app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  private template() {
    this.app.set("view engine", "pug");
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
