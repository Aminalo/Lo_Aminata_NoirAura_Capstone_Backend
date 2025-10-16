import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Salon from "../models/salonModel.mjs";

async function run() {
  const uri = process.env.mongoURI;
  if (!uri) {
    console.error("Missing mongoURI in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    await Salon.deleteMany({});
    console.log("Cleared salons collection");

    await Salon.insertMany([
      {
        name: "NoirAura Beauty Lounge",
        city: "Columbus",
        photo: "https://images.unsplash.com/photo-1707930897652-6ed8e2c33d99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        services: [
          { name: "Makeup", price: 80, duration: 60 },
          { name: "Haircut", price: 45, duration: 30 }
        ]
      },
      {
        name: "Glow Essence Spa",
        city: "New York",
        photo: "https://images.unsplash.com/photo-1751827088857-88bbd0b33468?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
        services: [
          { name: "Facial", price: 65, duration: 45 },
          { name: "Massage", price: 90, duration: 60 }
        ]
      },
      {
        name: "Radiant Touch Studio",
        city: "Atlanta",
        photo: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        services: [
          { name: "Braids", price: 120, duration: 120 },
          { name: "Nails", price: 55, duration: 60 }
        ]
      }
    ]);

    console.log("Seed complete!");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err.message);
    process.exit(1);
  }
}

run();