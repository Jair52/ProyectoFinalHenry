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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("./sequelize"));
const Plato_1 = require("./Plato");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sequelize_1.default.sync({ force: true }); // Precaución con force: true, ya que borrará las tablas existentes
        yield Plato_1.Plato.create({
            nombre: 'Asado con Ensalada Criolla',
            origen: 'Argentina',
            ingredientes: ['Carne de res', 'Chorizo', 'Morcilla'],
            kilocalorias: 1200,
            carbohidratos: 0,
            grasas: 80,
            peso: 450,
            precio: 15.0,
            tipo: 'plato fuerte',
            imagen: 'https://link.to/image.jpg',
        });
        console.log('Plato creado exitosamente');
    });
}
main().catch((error) => {
    console.error('Error:', error);
});
