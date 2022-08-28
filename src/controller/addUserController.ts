import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const UserSchema = mongoose.model("users");

export function addUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.body);
  const user = new UserSchema({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });
  user.save();
  res.send({ auth: "Add User called" });
}
