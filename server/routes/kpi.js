import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch ({ message }) {
    res.status(404).json({
      message,
    });
  }
});

export default router;
