"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUpNewUser_1 = require("../handlers/register/signUpNewUser");
const signInUser_1 = require("../handlers/register/signInUser");
const signInThirdParties_1 = require("../handlers/register/signInThirdParties");
const router = express_1.default.Router();
router.post("/signup", signUpNewUser_1.signUpNewUser);
router.post("/signin", signInUser_1.signInUser);
router.post("/signin/thirdparties", signInThirdParties_1.signInThirdParties);
exports.default = router;
//Registrarse creando un nuevo usuario
//iniciar sesion con el usuario ya creada
//Registrarse con cuenta de terceros (google, facebook y gitHub)
//Iniciar sesion con alguna de las cuentas de terceros
//Una vez hecho el login el usuario va a poder completar su perfil con img,nombre completo, etc. A partir de una tabla creada con sequelize y postgreSQL
