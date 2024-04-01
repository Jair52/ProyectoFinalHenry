import express from "express";
import { getFood } from "../controllers/getFood";
import { getFoodFiltro } from "../controllers/getFoodFiltro";
const router = express.Router();

router.get("/", getFood);
router.get("/filtro", getFoodFiltro);


export default router;
