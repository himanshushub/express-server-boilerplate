import { Request, Response, NextFunction } from "express";
import * as userService from "services/userService";

export function getUser(req: Request, res: Response, next: NextFunction) {
  const user = userService.getUser();
  res.send(user);
}

export function createUser(req: Request, res: Response, next: NextFunction) {
  const user = userService.createUser();

  res.send(user);
}

