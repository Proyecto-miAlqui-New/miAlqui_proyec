import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../conf/db.js";

export const ImagenModel = sequelize.define(
  "imagen",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Imagen",
    timestamps: false,
  }
);
