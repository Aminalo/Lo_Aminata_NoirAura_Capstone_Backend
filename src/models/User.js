import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["client", "provider"], default: "client" }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);