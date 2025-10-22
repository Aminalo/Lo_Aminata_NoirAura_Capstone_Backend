import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  try {
    const uri = process.env.mongoURI;
    if (!uri) throw new Error("Missing mongoURI in .env");

    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
}

export default connectDB;