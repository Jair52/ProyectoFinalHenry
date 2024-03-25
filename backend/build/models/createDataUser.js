"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("User", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        FotoPerfil: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        Nombre: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Apellido: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        FechaNacimiento: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Direccion: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Ciudad: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Pais: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Sexo: {
            type: sequelize_1.DataTypes.ENUM("Masculino", "Femenino", "Otro"),
            allowNull: false,
        },
        Registro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Contrasena: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    });
};
