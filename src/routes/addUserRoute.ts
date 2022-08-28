import { addUserController } from "controller/addUserController";
import { Express } from "express";

export default (app: Express) => {
  app.post("/api/addUser", addUserController);
};
