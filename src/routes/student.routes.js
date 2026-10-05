import { Router } from "express";
import create from "../controllers/student/create.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import getAll from "../controllers/student/get.js";

const router = Router();

// /api/students/create
router.post("/create", authMiddleware, create);

// /api/students/get-all
router.get("/get-all", getAll);

export default router;