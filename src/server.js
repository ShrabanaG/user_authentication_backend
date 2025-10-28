import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/db.js";
import authRoutes from "./routers/authRouter.js";
import userRoutes from "./routers/userRouter.js";

dotenv.config();

const app = express();

connectToDb();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
