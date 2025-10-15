import express from "express";

const router = express.Router();

// Temporary placeholder routes for salons

// @route   GET /api/salons
// @desc    Get all salons
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "NoirAura Beauty Lounge", city: "Columbus" },
    { id: 2, name: "Glow Essence Spa", city: "New York" }
  ]);
});

// @route   POST /api/salons
// @desc    Create a new salon 
router.post("/", (req, res) => {
  const newSalon = req.body;
  res.status(201).json({ msg: "Salon created", salon: newSalon });
});

export default router;