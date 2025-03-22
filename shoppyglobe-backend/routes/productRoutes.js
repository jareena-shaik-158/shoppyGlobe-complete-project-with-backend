import express from "express";
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// ✅ Fetch all products
router.get("/", getProducts);

// ✅ Fetch a single product by ID
router.get("/:id", getProductById);

// ✅ Create a new product
router.post("/", createProduct);

// ✅ Update a product by ID
router.put("/:id", updateProduct);

// ✅ Delete a product by ID
router.delete("/:id", deleteProduct);

export default router;
