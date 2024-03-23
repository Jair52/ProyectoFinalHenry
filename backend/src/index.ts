import express from 'express'; //ESModules
// const express = require('express') -> commonjs
import { sequelize } from './sequelize';
import foodRouter from './routes/food';

const app = express();
app.use(express.json()); //middleware que transforma la rq.body a un json

const PORT = 3000;

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .then(() => sequelize.sync()) // Sincroniza los modelos con la base de datos
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!' + new Date().toLocaleDateString());
    res.send('pong');
});

app.use('/api/food', foodRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})