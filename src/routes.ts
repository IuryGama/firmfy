import "reflect-metadata";
import { Router } from "express";

import { UserController } from "./app/controllers/UserController";
import { TagController } from "./app/controllers/TagController";
import { SessionUserController } from "./app/controllers/SessionController";
import { ComplimentController } from "./app/controllers/ComplimentController";

import { ensureAdmin } from './middlewares/ensureAdmin';
import { authMiddleware } from './middlewares/auth';
import { TimeClockController } from "./app/controllers/TimeClockController";

const routes = Router();

const userController = new UserController();
const tagCotnroller = new TagController();
const sessionController = new SessionUserController();
const complimentController = new ComplimentController();
const timeClockController = new TimeClockController();

routes.post('/users', userController.create);
routes.post('/login', sessionController.handle);

routes.use(authMiddleware);

routes.post('/tags', ensureAdmin, tagCotnroller.handle);
routes.get('/list/tags', tagCotnroller.listAll);

routes.post('/compliments', complimentController.handle);
routes.get('/list/compliments', complimentController.listAll);
routes.put('/update/compliments/:id', complimentController.update);

routes.post('/timeclock', timeClockController.create);

routes.get('/users', userController.listAll);
routes.get('/user/:id', userController.listUser);

export default routes;