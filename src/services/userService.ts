import * as UserModel from "models/userModel";

export const getUsers = async () => {
  // call the db models and return response
  return UserModel.getUsers()
};

export const createUser = () => {
  return "user is created";
};