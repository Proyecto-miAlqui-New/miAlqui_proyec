import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../conf/db.js";

export const UbicacionModel = sequelize.define(
  "Ubicacion",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    barrio: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
  },
  {
    tableName: "Ubicacion", // Nombre de la tabla en la base de datos
    timestamps: false,
  }
);
