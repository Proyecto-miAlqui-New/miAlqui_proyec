import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../conf/db.js";

export const AlojamientoModel = sequelize.define(
  "Alojamiento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL,
    servicios: DataTypes.TEXT,
    lugaresSercanos: DataTypes.TEXT,
    DercripcionCaracteristicas: DataTypes.TEXT,
    cantHabitacion: DataTypes.INTEGER,
    cantBaños: DataTypes.INTEGER,
    
  },
  {
    tableName: "Alojamiento",
    timestamps: false,
  }
);
