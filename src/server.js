import app from "./app.mjs";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
connectDB(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`API on :${PORT}`)))
  .catch((e) => { console.error("DB error", e); process.exit(1); });