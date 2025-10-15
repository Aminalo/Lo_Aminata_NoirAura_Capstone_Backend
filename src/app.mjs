import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./db/connect.mjs";

// Routes
import salonRoutes from "./routes/salonRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";

dotenv.config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Health check route
app.get("/health", (_req, res) => {
  res.json({ status: "Server running and DB connected" });
});

// Main routes
app.use("/api/salons", salonRoutes);
app.use("/api/auth", authRoutes);

// 404 fallback
app.use((_req, res) => {
  res.status(404).json({ msg: "Route Not Found" });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({ msg: err.message || "Server Error" });
});

export default app;
