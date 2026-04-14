import express from "express";
import { getAllComplaints, updateComplaintStatus } from "../controllers/adminController.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/complaints", verifyToken, verifyAdmin, getAllComplaints);
router.patch("/complaints/:id/status", verifyToken, verifyAdmin, updateComplaintStatus);

export default router;
