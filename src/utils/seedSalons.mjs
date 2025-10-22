import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "../db/connect.mjs";
import Salon from "../models/salonModel.mjs";

async function run() {
  try {
    await connectDB();

    // Optional: safety check
    if (!process.env.mongoURI) {
      throw new Error("Missing mongoURI in .env");
    }

    // Fresh seed
    await Salon.deleteMany({});

   await Salon.insertMany([
  {
    name: "NoirAura Beauty Lounge",
    city: "Columbus",
    photo:
      "https://images.unsplash.com/photo-1707930897652-6ed8e2c33d99?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "Glow Facial", price: 80, duration: 60 },
      { name: "Haircut & Style", price: 45, duration: 30 },
      { name: "Signature Makeup", price: 95, duration: 75 }
    ]
  },
  {
    name: "Glow Essence Spa",
    city: "New York",
    photo:
      "https://images.unsplash.com/photo-1637851362556-46d07c374023?auto=format&fit=crop&q=80&w=1200",
    services: [
      { name: "Hydrating Facial", price: 65, duration: 45 },
      { name: "Aromatherapy Massage", price: 120, duration: 90 },
      { name: "Body Polish", price: 85, duration: 60 }
    ]
  },
  {
    name: "Radiant Touch Studio",
    city: "Atlanta",
    photo:
      "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?auto=format&fit=crop&q=80&w=1200",
    services: [
      { name: "Protective Braids", price: 120, duration: 120 },
      { name: "Gel Manicure", price: 55, duration: 60 },
      { name: "Silk Press", price: 70, duration: 75 }
    ]
  },
  {
    name: "Velvet Skin Atelier",
    city: "Chicago",
    photo:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=1200",
    services: [
      { name: "Acne Care Facial", price: 90, duration: 60 },
      { name: "Dermaplaning", price: 110, duration: 50 }
    ]
  },
  {
    name: "Golden Hour Salon",
    city: "Los Angeles",
    photo:
      "https://images.unsplash.com/photo-1711504039975-47a6f424d8b4?auto=format&fit=crop&q=80&w=1200",
    services: [
      { name: "Balayage", price: 160, duration: 120 },
      { name: "Blowout", price: 60, duration: 45 }
    ]
  },

  // --- New salons below ---

  {
    name: "Blush & Bloom Studio",
    city: "Miami",
    photo:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    services: [
      { name: "Beach Glow Makeup", price: 85, duration: 60 },
      { name: "Hydra Facial", price: 95, duration: 60 },
      { name: "Brow Shaping", price: 35, duration: 20 }
    ]
  },
  {
    name: "Serenity Hair Haus",
    city: "Dallas",
    photo:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    services: [
      { name: "Silk Press", price: 75, duration: 75 },
      { name: "Trim & Treatment", price: 55, duration: 40 },
      { name: "Deep Conditioning", price: 45, duration: 30 }
    ]
  },
  {
    name: "Ivory & Rose Spa",
    city: "Seattle",
    photo:
      "https://images.unsplash.com/photo-1706795033728-9232ef548a16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=706",
    services: [
      { name: "Aqua Glow Facial", price: 95, duration: 60 },
      { name: "Hot Stone Massage", price: 130, duration: 90 },
      { name: "Scalp Therapy", price: 50, duration: 30 }
    ]
  },
  {
    name: "Maison Lumière",
    city: "Boston",
    photo:
      "https://images.unsplash.com/photo-1648671095069-59d78ae4b1fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    services: [
      { name: "Classic Blowout", price: 55, duration: 40 },
      { name: "Soft Glam Makeup", price: 100, duration: 75 },
      { name: "Luxe Facial", price: 110, duration: 70 }
    ]
  }
]);

    console.log("✅ Seed complete: salons inserted.");
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

run();