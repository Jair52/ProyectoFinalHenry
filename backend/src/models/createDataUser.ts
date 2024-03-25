import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  // defino el modelo
  sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FotoPerfil: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Sexo: {
      type: DataTypes.ENUM("Masculino", "Femenino", "Otro"),
      allowNull: false,
    },
    Registro: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
