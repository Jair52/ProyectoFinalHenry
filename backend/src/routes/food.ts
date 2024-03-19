import express from 'express';
import * as foodServices from '../services/foodServices';
import toNewFoodEntry from '../utils';


const router = express.Router();
router.get('/', (_req, res) => {
    res.send(foodServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
    const food = foodServices.findById(Number(req.params.id));

    return food
        ? res.send(food)
        : res.sendStatus(404);
})

router.post('/', (req, res) => {
    try {
        const newFoodEntry = toNewFoodEntry(req.body);

        const addedFoodEntry = foodServices.addFood(newFoodEntry)

        res.json(addedFoodEntry);
    } catch (error: any ) {
        res.status(400).send(error.message);
    }

    
});

export default router;