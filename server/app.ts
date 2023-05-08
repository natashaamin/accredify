import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import path from "path";
import defaultRoute from './routes/route';
import { errorHandler } from "./services/service";

export const app = express();
export const routes = express.Router();
dotenv.config();

const PORT = 1111;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routes.use(defaultRoute)

app.use('/', routes);

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(path.resolve(), "dist")));
} else {
  app.use("/", express.static(path.join(path.resolve(), "public")));
  app.use("/server", routes);
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});