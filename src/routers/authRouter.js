import express from "express";
import { registerUser, logIn } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/create_user", registerUser);
router.post("/login", logIn);

export default router;
