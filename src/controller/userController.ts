import { Request, Response, NextFunction } from "express";
import * as userService from "services/userService";

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  const user = await userService.getUsers();
  res.send(user);
}

export function createUser(req: Request, res: Response, next: NextFunction) {
  const user = userService.createUser();

  res.send(user);
}

