import { Router } from "express";
import create from "../controllers/student/create.js";

const router = Router();

// /api/students/create
router.post("/create", create);

export default router;