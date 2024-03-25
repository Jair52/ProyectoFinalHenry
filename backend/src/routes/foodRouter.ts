import express from "express";
import { getFood } from "../controllers/food/getFood";
import { getFoodId } from "../controllers/food/getFoodId";
import { postFood } from "../controllers/food/postFood";
// import { putFood } from '../controllers/putFood';
// import { updateFood } from '../controllers/updateFood';
// import * as foodServices from '../services/foodServices';

const router = express.Router();

router.get("/", getFood);
router.get("/:id", getFoodId);
router.post("/", postFood);
// router.put('/:id', async (req, res) => {
//     const foodActualizado = req.body;
//     const foodID = req.params.id;

//     const index = foodServices.findById(Number(foodID));

//     foodServices[index] =
// });

export default router;
