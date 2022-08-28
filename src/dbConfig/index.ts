import devKeys from "../config/dev";
import mongoose from "mongoose";
import "../models/user";

mongoose.connect(devKeys.mongooseURI);
mongoose.connection.on("connected", () => {
  console.log("Db connected");
});
