import { Request, Response } from "express";
import { getUserThirdParties } from "../../controllers/register/getUserThirdParties";

export const signInThirdParties = async (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    const response = await getUserThirdParties(token);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).send(error);
  }
};
