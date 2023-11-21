import { AlojamientoModel } from "../models/AlojamientoModel.js";

//COntrol para cargar un nuevo alojamiento

export const CtrlCreateAlojamiento = async (req, res) => {
  try {
    //se crea una nueva publicacion del alojamiento
    const publicacionAlojamiento = await AlojamientoModel.create(req.body);
    res.send({
      msg: "Se publico el alojamiento correctamente",
      publicacionAlojamiento,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "error a cargar el alojamiento",
    });
  }
};
//para traer todas las publicaciones

export const CtrlGetAllAlojamiento = async (req, res) => {
  try {
    const Alquileres = await AlojamientoModel.findAll();
    return res.json(Alquileres);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "error Mostrar todos los Alquileres",
    });
  }
};

//Control para editar a un alojamiento

export const CtrlUpdateAlojamiento = async (req, res) => {
  const { id } = req.params;
  try {
    const editarAlojamiento = await AlojamientoModel.findByPk(id);
    editarAlojamiento.set(req.body);

    //se gurada en la base dee datos el cambio
    await editarAlojamiento.save;

    res.json({
      msg: "Se edito correctamente su Alquiler",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

//ctrl para eliminar un alojamiento

export const CtrlDeleteAlojamiento = async (req, res) => {
  const { id } = req.params;

  try {
    await AlojamientoModel.destroy({
      where: {
        id,
      },
    });

    res.json({
      msg: "alojamiento eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const CtrlAllIdAlojamiento = async (req, res) => {
  try {
    const TraerAlojamId = await AlojamientoModel.findByPk(req.params.id);
    return res.json(TraerAlojamId);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "error al traer el alojamiento",
    });
  }
};
