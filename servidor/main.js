import express from "express";
import "dotenv/config.js";
// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
import { sequelize } from "./db.js";

// Se inicializa express para poder usar sus métodos
const app = express();

const port = process.env.PORT || 5500;

// Conexión a base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
