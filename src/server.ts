import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import routes from './routes';

import { error as err } from "./middlewares/errors";
import "./database";

const app = express();
app.use(express.json());


app.use(routes); 
app.use(err);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});