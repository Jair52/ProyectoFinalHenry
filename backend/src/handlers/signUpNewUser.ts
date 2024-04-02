import { Request, Response } from "express";
import { registerNewUser } from "../controllers/postNewUser";

export const signUpNewUser = async (req: Request, res: Response) => {
  const { 
    email,
    password,
    nombre,
    apellido,
    foto,
    pais,
    ciudad,
    direccion,
    admin,
    habilitado} = req.body;
  try {
<<<<<<< HEAD:backend/src/handlers/signUpNewUser.ts
    const response = await registerNewUser(email, password);
    console.log(response);
=======
    const response = await registerNewUser( email,
      password,
      nombre,
      apellido,
      foto,
      pais,
      ciudad,
      direccion,
      admin,
      habilitado);
    console.log(response)
>>>>>>> 6d0d62304953cbc0dd54954e1f83348b97f4ca88:backend/src/handlers/register/signUpNewUser.ts
    res.status(200).json(response);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).send(error);
  }
};
