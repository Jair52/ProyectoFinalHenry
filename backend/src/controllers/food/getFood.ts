import { Response } from "express";
import * as foodServices from "../../services/foodServices";

export const getFood = (_req: any, res: Response) => {
  try {
    const finalResponse = foodServices.getEntriesWithoutSensitiveInfo();

    return res.send(finalResponse);
  } catch (error) {
    return res.status(500).json({ error: "Error searching for Foods." });
  }
};
