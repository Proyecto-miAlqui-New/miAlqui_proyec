import { AlojamientoModel } from "../models/AlojamientoModel.js";
import { ImagenModel } from "../models/ConverImage.Model.js";
import { TipoAlojamientoModel } from "../models/TipoAlojamientoModel.js";
import { UserLocadorModel } from "../models/UserLocadorModel.js";

//COntrol para cargar un nuevo alojamiento

export const CtrlCreateAlojamiento = async (req, res) => {
  const {
    name,
    lastName,
    dni,
    email,
    cuilt,
    telefono,
    tipoAlojamiento,
    cantDormitorios,
    cantBaños,
    precio,
    barrio,
    calle,
    equipamiento,
    servicios,
    proteccion,
    lugaresCerca,
    title,
    descripcionTotal,
    img,
  } = req.body;

  const newUserLocador = await UserModel.create({
    name: name,
    lastName: lastName,
    dni: dni,
    email: email,
    cuilt: cuilt,
    telefono: telefono,
  });
  try {
    //se crea una nueva publicacion del alojamiento
    const NewpublicacionAlojamiento = await AlojamientoModel.create({
      //asignar las llaves foraneas
      id_tipo_alojamiento: tipoAlojamiento,
      id_UserLocador: newUserLocador._id,
      id_img: img,
      cantHabitacion: cantDormitorios,
      cantBaños: cantBaños,
      precio: precio,
      barrio: barrio,
      calle: calle,
      servicios: servicios,
      equipamiento: equipamiento,
      proteccion: proteccion,
      lugaresSercanos: lugaresCerca,
      tituloAlojamiento: title,
      descripcion: descripcionTotal,
    });
    const alojamientoCreado = await NewpublicacionAlojamiento.save();
    res.send({
      msg: "Se publico el alojamiento correctamente",
      alojamientoCreado,
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
  const tipoAloj = await TipoAlojamientoModel.findAll();
  const dataLocador = await UserLocadorModel.findAll();
  const imgUrl = await ImagenModel.findAll();
  const {
    cantHabitacion,
    cantBaños,
    precio,
    barrio,
    calle,
    servicios,
    equipamiento,
    proteccion,
    lugaresSercanos,
    tituloAlojamiento,
    descripcion,
  } = await AlojamientoModel.findAll();
  try {
    return res.json(
      tipoAloj,
      dataLocador,
      imgUrl,
      cantHabitacion,
      cantBaños,
      precio,
      barrio,
      calle,
      servicios,
      equipamiento,
      proteccion,
      lugaresSercanos,
      tituloAlojamiento,
      descripcion
    );
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
