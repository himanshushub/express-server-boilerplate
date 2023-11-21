import { Request, Response, NextFunction } from "express";

export function isLoggedin(req: Request, res: Response, next: NextFunction){
  next();
};
