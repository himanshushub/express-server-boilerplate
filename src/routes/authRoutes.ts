import requireLogin from "../middlewares/requireLogin";
import { authenticate } from "../controller/authRoutesController";
import { Express } from "express";

export default (app: Express) => {
  app.post(
    "/api/authRoutes",
    //  requireLogin,
    authenticate
  );
};
