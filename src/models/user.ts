import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
});

mongoose.model("users", userSchema);
