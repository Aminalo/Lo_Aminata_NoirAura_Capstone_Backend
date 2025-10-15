import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
  duration: { type: Number, default: 30 } // minutes
});

const salonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    photo: { type: String, default: "" },
    services: [serviceSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Salon", salonSchema);