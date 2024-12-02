import express from "express";
import { login, rentalDetails } from "../controllers/controller.js";

const router = express.Router();

router.post("/login", login);
router.get("/rentalDashboard/:userId", rentalDetails);

export default router;
