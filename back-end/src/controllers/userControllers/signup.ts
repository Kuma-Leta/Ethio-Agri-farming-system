// src/controllers/userController.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../models/userModel";

dotenv.config();

export const registerUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const {
    fullName,
    email,
    password,
    phoneNumber,
    language,
    region,
    subscription,
  } = req.body;

  try {
    // Validate input fields
    if (
      !fullName ||
      !email ||
      !password ||
      !phoneNumber ||
      !language ||
      !region
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword, // Save the hashed password
      phoneNumber,
      language,
      region,
      subscription,
    });

    const savedUser = await newUser.save();

    // Generate a JWT token
    const token = jwt.sign(
      { id: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};
