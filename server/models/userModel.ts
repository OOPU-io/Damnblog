import mongoose, { HydratedDocument, model } from "mongoose";
import IUserModel from "../interfaces/IUserModel.interface";

const userSchema = new mongoose.Schema<IUserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
});
const User = model<IUserModel>("User", userSchema);

const user: HydratedDocument<IUserModel> = new User({
  name: "admin",
  email: "admin@heccuberny.com",
  avatar: "",
});

user.save();

console.log(user.email);
