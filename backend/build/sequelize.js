"use strict";
// import { Sequelize } from 'sequelize';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const sequelize = new Sequelize('InterFoods', 'postgres', 'ravyolo', {
//   host: 'localhost',
//   dialect: 'postgres',
//   // Opciones adicionales de pool aquí si es necesario
// });
// export default sequelize;
const sequelize_typescript_1 = require("sequelize-typescript");
const path_1 = __importDefault(require("path"));
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'InterFoods',
    dialect: 'postgres',
    username: 'postgres',
    password: 'ravyolo',
    models: [path_1.default.join(__dirname, 'models')] // O especifica directamente los modelos
});
exports.default = sequelize;
