import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));

app.get("/health", (req, res) => res.json({ ok: true }));

export default app;