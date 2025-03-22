import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// ✅ Get all products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// ✅ Get a single product by ID
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
});

// ✅ Create a new product
export const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category, imageUrl, stock } = req.body;

  if (!name || !price || !description || !category || !imageUrl || !stock) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  const product = new Product({ name, price, description, category, imageUrl, stock });

  const savedProduct = await product.save();
  res.status(201).json({ message: "Product created successfully", product: savedProduct });
});

// ✅ Update a product by ID
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category, imageUrl, stock } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // Update fields only if they are provided
  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;
  product.category = category || product.category;
  product.imageUrl = imageUrl || product.imageUrl;
  product.stock = stock || product.stock;

  const updatedProduct = await product.save();
  res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
});

// ✅ Delete a product by ID
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.deleteOne();
  res.status(200).json({ message: "Product deleted successfully" });
});
