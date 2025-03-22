import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,  // ✅ Ensures email is stored in lowercase
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"] // ✅ Validates email format
        },
        password: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" }, // ✅ Role-based access
    },
    { timestamps: true } // ✅ Automatically adds createdAt & updatedAt
);

export default mongoose.model("User", userSchema);
