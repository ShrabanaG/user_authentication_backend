import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/db.js";
import authRoutes from "./routers/authRouter.js";

dotenv.config();

const app = express();

connectToDb();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
