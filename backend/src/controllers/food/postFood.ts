import { Request, Response } from "express";
import * as foodServices from "../../services/foodServices";
import toNewFoodEntry from "../../utils/utils";

export const postFood = (req: Request, res: Response) => {
  try {
    const newFoodEntry = toNewFoodEntry(req.body);

    const addedFoodEntry = foodServices.addFood(newFoodEntry);

    res.json(addedFoodEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
