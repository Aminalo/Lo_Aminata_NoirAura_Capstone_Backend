import dotenv from "dotenv";
dotenv.config();

import app from "./app.mjs";
import connectDB from "./db/connect.mjs";

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await connectDB(); // 🟢 ensure DB connection before starting server
    app.listen(PORT, () => {
      console.log(`🚀 NoirAura API running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
}

startServer();