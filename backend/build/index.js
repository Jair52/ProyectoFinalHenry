"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use((req, res, next) => {
    const { method, originalUrl } = req;
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Permitir acceso desde http://localhost:5173
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Permitir los métodos HTTP especificados
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir los encabezados especificados
    console.log(`${method} ${originalUrl}`);
    next();
});
app.use('/api/', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
