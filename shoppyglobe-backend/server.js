import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; // ✅ Import Authentication Routes
import productRoutes from "./routes/productRoutes.js"; // ✅ Import Product Routes
import cartRoutes from "./routes/cartRoutes.js"; // ✅ Import Cart Routes
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// ✅ Mount API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// ✅ Test route
app.get("/", (req, res) => {
    res.send("ShoppyGlobe API is running...");
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
