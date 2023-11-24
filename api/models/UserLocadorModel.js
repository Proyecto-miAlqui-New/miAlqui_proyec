import { sequelize } from "../conf/db.js";

import { Sequelize, DataTypes } from "sequelize";

export const UserLocadorModel = sequelize.define(
  "UserLocador",
  {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    email: DataTypes.STRING,
    cuitcuil: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
  },
  {
    tableName: "UserLocador", // Nombre de la tabla en la base de datos
    timestamps: false,
  }
);
