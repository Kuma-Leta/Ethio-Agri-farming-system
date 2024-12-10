import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../interfaces/user interface"; // Ensure the path is correct

// Define the user schema
const userSchema: Schema<IUser> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    language: { type: String, default: "en" }, // default language
    region: { type: String, required: true },
    subscription: { type: Boolean, default: false }, // default subscription status
  },
  { timestamps: true }
);

// Create and export the user model
const User = mongoose.model<IUser>("User", userSchema);
export default User;
