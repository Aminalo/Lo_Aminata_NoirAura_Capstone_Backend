import dotenv from "dotenv";
dotenv.config();
import app from "./app.mjs";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`NoirAura API running on http://localhost:${PORT}`);
});