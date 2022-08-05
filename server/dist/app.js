"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    // initializing the app constructor
    constructor(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
        this.template();
    }
    middlewares(middleWares) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }
    routes(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }
    assets() {
        this.app.use(express.static("public"));
    }
    template() {
        this.app.set("view engine", "ejs");
    }
    listen() {
        this.app
            .listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
            .on("error", (error) => {
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
exports.default = App;
//# sourceMappingURL=app.js.map