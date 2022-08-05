"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerHandlerMiddleware = (req, res, next) => {
    console.log(`Request logged: ${req.method} ${req.path}`);
    next();
};
exports.default = loggerHandlerMiddleware;
//# sourceMappingURL=loggerHandler.js.map