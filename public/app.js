"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const route_1 = __importDefault(require("./routes/route"));
const service_1 = require("./services/service");
exports.app = (0, express_1.default)();
exports.routes = express_1.default.Router();
dotenv_1.default.config();
const PORT = 1111;
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.routes.use(route_1.default);
exports.app.use('/', exports.routes);
exports.app.use(service_1.errorHandler);
if (process.env.NODE_ENV === "production") {
    exports.app.use("/", express_1.default.static(path_1.default.join(path_1.default.resolve(), "dist")));
}
else {
    exports.app.use("/", express_1.default.static(path_1.default.join(path_1.default.resolve(), "public")));
    exports.app.use("/server", exports.routes);
}
exports.app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map