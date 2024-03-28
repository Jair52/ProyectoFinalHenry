import express from "express";
import { getFood } from "../controllers/getFood";
const router = express.Router();

router.get("/", getFood);


export default router;
