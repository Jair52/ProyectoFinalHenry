"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express') -> commonjs
const food_1 = __importDefault(require("./routes/food"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la rq.body a un json
const PORT = 3000;
app.use((req, res, next) => {
    const { method, originalUrl } = req; // Desestructura solo las propiedades que necesitas
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    console.log(`${method} ${originalUrl}`); // Usa las propiedades desestructuradas
    next();
});
app.use('/api/food', food_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
