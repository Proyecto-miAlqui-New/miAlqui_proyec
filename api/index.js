import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import fs from "fs";
// import helmet from "helmet";
import { Server as SocketServer } from "socket.io";
import { createServer } from "http";

import { fileURLToPath } from "url"; // Importa las funciones necesarias del módulo 'url'
import { dirname } from "path"; // Importa la función 'dirname' del módulo 'path'

import "dotenv/config";

export const app = express();

const httpServer = createServer(app);
const io = new SocketServer(httpServer);

//conexiones de carpetas
import { environments } from "./conf/environments.js";

//rutas
import { router } from "./routes/Alojamiento.routes.js";

//importar configuracion de la bd
import { sequelize } from "./conf/db.js";
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { validarJWTWebsocket } from "./middlewares/validar-jwt.js"
import { listarUsuarios, mensajePersonal, usuarioConectado, usuarioDesconectado } from './controllers/sockets.controller.js';

// Aumenta el límite de oyentes para evitar la advertencia
import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 15;


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//codigo para carpeta log para el registro de errores
// Utiliza 'fileURLToPath' para obtener la ruta del archivo actual (__filename)
const __filename = fileURLToPath(import.meta.url);
// Utiliza 'dirname' para obtener el directorio del archivo (__dirname)
const __dirname = dirname(__filename);

//directorio donde se almacenan los archivos de registros de errores
const logDirectory = path.join(__dirname, "logs");
//condicion para asegurararce que el directorio exista
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
console.log(path.join(logDirectory, "access.log"));

//create un stream de escritura para el archivo de registro
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  {
    flags: "a",
  }
);

//configuracion del morgan para utilizar el stream de escritura y el formato de registro deaso
app.use(morgan("combined", { stream: accessLogStream }));

//conexion al base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

//rutas
app.use("/api", router);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/mensaje", messageRoutes);


// Middleware para validar JWT en conexiones WebSocket
io.use((socket, next) => {
  const token = socket.handshake.query['authorization'];
  const [isValid, uid] = validarJWTWebsocket(token);

  if (!isValid) {
    return next(new Error('Authentication error'));
  }

  // Agrega el uid al objeto del socket para su posterior uso
  socket.uid = uid;
  next();
});

// Websocket events
io.on('connection', async (socket) => {
  await usuarioConectado(socket.uid);
  
  // Se une al usuario a una sala de socket.io
  socket.join(socket.uid);
  
  // Agregar el usuario conectado a la lista de usuarios
  io.emit('list-users', await listarUsuarios());

  // Escuchar cuando el cliente envía un mensaje personal
  socket.on('mensaje-personal', async (payload) => {
    const msg = await mensajePersonal(payload);
    io.to(payload.to).emit('mensaje-personal', msg);
  });

  // Escuchar cuando el cliente envía un nuevo mensaje
  socket.on('new-message', (data) => {
    io.emit('new-message', data);
  });

  // Manejar la desconexión del usuario
  socket.on('disconnect', async () => {
    const user = await usuarioDesconectado(socket.uid);
    io.emit('list-users', await listarUsuarios());
    console.log('Usuario desconectado:', user.username);
  });
});

// Servidor en escucha de peticiones
httpServer.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`);
});
