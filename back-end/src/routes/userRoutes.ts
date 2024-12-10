import express from "express";
import { registerUser } from "../controllers/userControllers/signup";

const router = express.Router();

router.post("/register", registerUser);

export default router;
