"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const career_controller_1 = require("../controllers/career.controller");
const document_controller_1 = require("../controllers/document.controller");
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const service_1 = require("../services/service");
const defaultRoute = express_1.default.Router();
defaultRoute.route('/api/user').get(user_controller_1.getUser).all(service_1.handleMethodNotAllowed);
defaultRoute.route('/api/document').get(document_controller_1.getDocument).all(service_1.handleMethodNotAllowed);
defaultRoute.route('/api/career').get(career_controller_1.getCareer).all(service_1.handleMethodNotAllowed);
exports.default = defaultRoute;
//# sourceMappingURL=route.js.map