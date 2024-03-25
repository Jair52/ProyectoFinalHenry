"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInThirdParties = void 0;
const getUserThirdParties_1 = require("../../controllers/register/getUserThirdParties");
const signInThirdParties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.body;
    try {
        const response = yield (0, getUserThirdParties_1.getUserThirdParties)(token);
        res.status(200).json(response);
    }
    catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).send(error);
    }
});
exports.signInThirdParties = signInThirdParties;
