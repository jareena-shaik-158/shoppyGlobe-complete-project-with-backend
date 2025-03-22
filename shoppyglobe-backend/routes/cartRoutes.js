import express from "express";
import { addToCart, removeFromCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Add product to cart
router.post("/add", authMiddleware, addToCart);

// Remove product from cart using `productId` as a URL parameter
router.delete("/remove/:productId", authMiddleware, removeFromCart);

export default router;
