import { Router } from "express";

export const router = Router();

import {
  CtrlAllIdAlojamiento,
  CtrlDeleteAlojamiento,
  CtrlGetAllAlojamiento,
  CtrlUpdateAlojamiento,
  CtrlCreateAlojamiento,
} from "../controllers/Alojamiento.Controll.js";

//administrar alojamiento

router.get("/", CtrlGetAllAlojamiento);

router.get("/:Alojamientoid", CtrlAllIdAlojamiento);

//crear un alojamiento

router.post("/", CtrlCreateAlojamiento);

router.delete("/:Alojamientoid", CtrlDeleteAlojamiento);

router.put("/:Alojamientoid", CtrlUpdateAlojamiento);
