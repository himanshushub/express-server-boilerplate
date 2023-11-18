import devKeys from "../config/dev";
import mongoose from "mongoose";
import "../models/user";

// mongoose.connect(devKeys.mongoLocal);
mongoose.connect(`mongodb://mongo:27017/ts_express?authSource=admin`);

mongoose.connection.on("connected", () => {
  console.log(">>>>>>Db connected");
});

mongoose.connection.on("error", (e) => {
  console.log("error mongo", e);
});
