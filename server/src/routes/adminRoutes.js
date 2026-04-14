import express from "express";
import { getAllComplaints } from "../controllers/adminController.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/complaints", verifyToken, verifyAdmin, getAllComplaints);

export default router;
