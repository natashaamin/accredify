import { getCareer } from "../controllers/career.controller";
import { getDocument } from "../controllers/document.controller";
import express from "express";
import { getUser } from "../controllers/user.controller";
import { handleMethodNotAllowed } from "../services/service";

const defaultRoute = express.Router()

defaultRoute.route('/api/user').get(getUser).all(handleMethodNotAllowed)
defaultRoute.route('/api/document').get(getDocument).all(handleMethodNotAllowed)
defaultRoute.route('/api/career').get(getCareer).all(handleMethodNotAllowed)

export default defaultRoute