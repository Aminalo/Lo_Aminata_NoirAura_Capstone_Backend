import express from "express";
import User from "../models/userModel.mjs";
import { verifyToken } from "../middleware/authMiddleware.mjs";

const router = express.Router();

// ✅ Get all favorites for a user
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("favorites")
      .select("favorites");
    res.json(user?.favorites || []);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ✅ Add a salon to favorites
router.post("/:salonId", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (user.favorites.includes(req.params.salonId))
      return res.status(400).json({ msg: "Already in favorites" });

    user.favorites.push(req.params.salonId);
    await user.save();

    res.json({ msg: "Added to favorites", favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ✅ Remove a salon from favorites
router.delete("/:salonId", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.favorites = user.favorites.filter(
      (id) => id.toString() !== req.params.salonId
    );
    await user.save();

    res.json({ msg: "Removed from favorites", favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;