import express from "express";
import { registerUser } from "../controllers/userControllers/signup";
import { loginUser } from "../controllers/userControllers/login";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
