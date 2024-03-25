import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  // defino el modelo
  sequelize.define("Card", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreTarjeta: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    NumeroTarjeta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    ClaveTarjeta: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
