import express from "express";
import { signUpNewUser } from "../handlers/register/signUpNewUser";
import { signInUser } from "../handlers/register/signInUser";
import { signInThirdParties } from "../handlers/register/signInThirdParties";

const router = express.Router();

router.post("/signup", signUpNewUser);
router.post("/signin", signInUser);
router.post("/signin/thirdparties", signInThirdParties);

export default router;

//Registrarse creando un nuevo usuario
//iniciar sesion con el usuario ya creada
//Registrarse con cuenta de terceros (google, facebook y gitHub)
//Iniciar sesion con alguna de las cuentas de terceros
//Una vez hecho el login el usuario va a poder completar su perfil con img,nombre completo, etc. A partir de una tabla creada con sequelize y postgreSQL
