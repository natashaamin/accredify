import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import defaultRoute from './routes/route';
import { errorHandler } from "./services/service";

export const app = express();
export const routes = express.Router();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routes.use(defaultRoute)

app.use('/', routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});