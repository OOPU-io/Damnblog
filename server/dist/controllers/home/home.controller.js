"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class homeController {
    constructor() {
        this.initRoute();
    }
    initRoute() {
        const router = express.Router();
        const path = "/";
        router.get(path, (req, res) => {
            res.send("Hello World!");
        });
    }
}
exports.default = homeController;
//# sourceMappingURL=home.controller.js.map