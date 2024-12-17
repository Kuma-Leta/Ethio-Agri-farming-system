import express, { NextFunction, Request, Response } from "express";
import path from "path";
import http from "http";
import userRoutes from "./routes/userRoutes";
import { Router } from "express";
import { connectDB } from "./utils/connectDb";
import cors from "cors";
import bodyParser from "body-parser";
// const router = express.Router();
const app = express();
const server = http.createServer(app);

connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/userRoutes", userRoutes);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`the server is listening for port :${port}`);
});
