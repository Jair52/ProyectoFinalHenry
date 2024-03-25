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
exports.getUserThirdParties = void 0;
const firebaseAdmin_1 = require("../../auth/firebaseAdmin");
const getUserThirdParties = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verificar el token de autenticación de terceros
        const decodedToken = yield firebaseAdmin_1.auth.verifyIdToken(token);
        // Obtener el ID único del usuario del token decodificado
        const uid = decodedToken.uid;
        // Intentar obtener el registro del usuario a partir del ID único
        let userRecord = yield firebaseAdmin_1.auth.getUser(uid);
        // Si el usuario no existe, significa que es la primera vez que se registra con esta cuenta de terceros
        if (!userRecord) {
            // Realizar el registro del usuario utilizando el token de autenticación de terceros
            userRecord = yield firebaseAdmin_1.auth.createUser(decodedToken);
        }
        // Devolver el registro del usuario
        return userRecord;
    }
    catch (error) {
        throw new Error("Failed to authenticate with third party provider");
    }
});
exports.getUserThirdParties = getUserThirdParties;
