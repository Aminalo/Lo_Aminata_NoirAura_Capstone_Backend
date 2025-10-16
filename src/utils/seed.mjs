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
        photo: "https://unsplash.com/fr/photos/une-chambre-rose-avec-une-chaise-et-un-miroir-y5j1Bxo94kw",
        services: [
          { name: "Makeup", price: 80, duration: 60 },
          { name: "Haircut", price: 45, duration: 30 }
        ]
      },
      {
        name: "Glow Essence Spa",
        city: "New York",
        photo: "https://unsplash.com/fr/photos/un-salon-de-coiffure-avec-chaises-et-miroirs-GPcqxtH9Gjo",
        services: [
          { name: "Facial", price: 65, duration: 45 },
          { name: "Massage", price: 90, duration: 60 }
        ]
      },
      {
        name: "Radiant Touch Studio",
        city: "Atlanta",
        photo: "https://unsplash.com/fr/photos/la-boutique-a-un-decor-elegant-et-beaucoup-de-lumiere-Deng7L_BGo8",
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