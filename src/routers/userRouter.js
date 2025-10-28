import express from "express";
import { getUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", protect, getUserProfile);

export default router;
