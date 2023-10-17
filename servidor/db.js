import { Sequelize, Model, DataTypes } from "sequelize";

// Se crea una instancia de la conexión a la base de datos
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, //localhost
    dialect: process.env.DB_DIALECT, // 'mysql' | 'mariadb' | 'postgres' | 'mssql'
  }
);

// Se exportan la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
export { sequelize, DataTypes, Model };
