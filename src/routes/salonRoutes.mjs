import express from "express";
import Salon from "../models/salonModel.mjs";
import auth from "../middleware/authMiddleware.mjs";


const router = express.Router();

// GET /api/salons - list all
router.get("/", async (_req, res) => {
  try {
    const salons = await Salon.find({});
    res.json(salons);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// POST /api/salons - create
router.post("/", async (req, res) => {
  try {
    const created = await Salon.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// PUT /api/salons/:id - update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Salon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// DELETE /api/salons/:id - delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Salon.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;