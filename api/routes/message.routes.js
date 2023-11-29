import { Router } from "express";
import { obtenerMensajes } from "../controllers/message.controller.js";

const router = Router();

router.get('/', obtenerMensajes)


export default router;