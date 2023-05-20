"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.returnErrorResponse = exports.handleMethodNotAllowed = void 0;
const handleMethodNotAllowed = (req, res, next) => {
    (0, exports.returnErrorResponse)(res, "Invalid method", 405);
};
exports.handleMethodNotAllowed = handleMethodNotAllowed;
const returnErrorResponse = (res, error, status = 500) => {
    console.error(error);
    res.status(status).send({
        message: error,
    });
};
exports.returnErrorResponse = returnErrorResponse;
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=service.js.map