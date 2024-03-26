import express from 'express';
import { getFood } from '../controllers/getFood';
// import { getFoodId } from '../controllers/getFoodId';
// import { postFood } from '../controllers/postFood';
// import { createFood } from '../controllers/postFood';
// import { updateFood } from '../controllers/updateFood';
// import * as foodServices from '../services/foodServices';

const router = express.Router();

router.get('/', getFood);
// router.get('/:id', getFoodId);
// router.post('/', createFood);
// router.put('/:id', async (req, res) => { 
//     const foodActualizado = req.body;
//     const foodID = req.params.id;
    
//     const index = foodServices.findById(Number(foodID));

//     foodServices[index] = 
// });

export default router;