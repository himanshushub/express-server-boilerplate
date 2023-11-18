import * as authController from "controller/authController";
import { Express } from "express";

export default (app: Express) => {
  app.post("/api/authRoutes", authController.authenticate);
};
