import * as userController from "controller/userController";
import * as authMiddleware from "middlewares/authMiddleware";
import { Express } from "express";


export default (app: Express) => {
  app.get('/user', authMiddleware.isLoggedin, userController.getUsers);
  app.post('/user', authMiddleware.isLoggedin, userController.createUser);
};
