import { Request, Response, NextFunction } from "express";

export function getUser(req: Request, res: Response, next: NextFunction) {
  res.send("get user called");
}

export function createUser(req: Request, res: Response, next: NextFunction) {
  res.send("create user called");
}

