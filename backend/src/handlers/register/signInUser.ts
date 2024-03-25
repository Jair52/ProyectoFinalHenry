import { Request, Response } from "express";
import { getUserByEmail } from "../../controllers/register/getUserByEmail";

export const signInUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const response = await getUserByEmail(email);
    console.log(response)
    res.status(200).json(response);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).send(error);
  }
};
