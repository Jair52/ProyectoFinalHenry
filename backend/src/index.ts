
import express, { Request, Response } from 'express';
// const express = require('express') -> commonjs

import foodRouter from './routes/food';

const app = express();
app.use(express.json()); //middleware que transforma la rq.body a un json

const PORT = 3000;

app.use((req: Request, res: Response, next) => {
    const { method, originalUrl } = req; // Desestructura solo las propiedades que necesitas
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    console.log(`${method} ${originalUrl}`); // Usa las propiedades desestructuradas
  
    next();
  });

app.use('/api/food', foodRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
