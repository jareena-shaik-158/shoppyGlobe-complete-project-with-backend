import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";

// ✅ Add product to cart
export const addToCart = asyncHandler(async (req, res) => {
    const { userId, productId, quantity } = req.body;

    // Validate inputs
    if (!userId || !productId || !quantity || quantity < 1) {
        res.status(400);
        throw new Error("Invalid request. Provide valid userId, productId, and quantity.");
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart successfully", cart });
});

// ✅ Remove product from cart
export const removeFromCart = asyncHandler(async (req, res) => {
    const { userId, productId } = req.body;

    // Validate inputs
    if (!userId || !productId) {
        res.status(400);
        throw new Error("Invalid request. Provide valid userId and productId.");
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found.");
    }

    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
    await cart.save();

    res.status(200).json({ message: "Product removed from cart successfully", cart });
});

// ✅ Get user's cart
export const getUserCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found.");
    }

    res.status(200).json(cart);
});
