// backend/src/config/sequelize.ts

import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'InterFoods',
    dialect: 'postgres',
    username: 'postgres',
    password: 'ravyolo',
    models: [__dirname + '/../models'] // Especifica la ubicación de tus modelos
});