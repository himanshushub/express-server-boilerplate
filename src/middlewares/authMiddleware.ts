import { Request, Response, NextFunction } from "express";

export function isLoggedin(req: Request, res: Response, next: NextFunction){
  if (!req.body.user) {
    return res.status(401).send({ error: "Please Login" });
  }
  next();
};
