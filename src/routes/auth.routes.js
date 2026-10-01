import { Router } from "express";
import register from "../controllers/auth/register.js";
import login from "../controllers/auth/login.js";

const router = Router();

// /api/auth/register
router.post("/register", register);

// /api/auth/login
router.post("/login", login);

export default router;