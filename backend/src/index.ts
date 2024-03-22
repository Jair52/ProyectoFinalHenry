import express from 'express'; //ESModules
// const express = require('express') -> commonjs

import foodRouter from './routes/food';

const app = express();
app.use(express.json()); //middleware que transforma la rq.body a un json

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!' + new Date().toLocaleDateString());
    res.send('pong');
});

app.use('/api/food', foodRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})