"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("Card", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreTarjeta: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        NumeroTarjeta: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: true,
        },
        ClaveTarjeta: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
