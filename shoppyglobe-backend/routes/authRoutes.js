import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js"; // ✅ Fix Import

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router; // ✅ Use ES Module Export
