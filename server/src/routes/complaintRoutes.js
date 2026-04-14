import express from "express";
import { createComplaint, getMyComplaints } from "../controllers/complaintController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// ✅ ONLY ONE POST ROUTE
router.post("/", verifyToken, upload.single("image"), createComplaint);

router.get("/my", verifyToken, getMyComplaints);

export default router;