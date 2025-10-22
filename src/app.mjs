import express from "express";
import cors from "cors";
import morgan from "morgan";
import salonRoutes from "./routes/salonRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import favoritesRoutes from "./routes/favoritesRoutes.mjs";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/health", (_req, res) => res.json({ status: "Server running" }));

app.use("/api/salons", salonRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoritesRoutes);

app.use((_req, res) => res.status(404).json({ msg: "Route Not Found" }));

app.use((err, _req, res, _next) => {
  console.error("Error:", err.stack || err.message);
  res.status(err.status || 500).json({ msg: err.message || "Server Error" });
});

export default app;