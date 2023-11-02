import React, { useState } from "react";
import { Mapa } from "./location/location.component";

import "./form.css";

export const FormAlqui = () => {
  const [step, setStep] = useState(1);
  const [link, setLink] = useState(""); // Estado para almacenar el enlace

  //estados para los datos del formulario en cada paso
  const [step1Data, setStep1Data] = useState({
    name: "",
    lastName: "",
    dni: "",
    nameAdmi: "",
    telefono: "",
    tipoAlojamiento: "",
    capacidadMax: "",
    cantDormitorios: "",
    cantBanios: "",
    equipamiento: "",
    servicios: "",
    // datos del campos paso 1
  });

  const [state2Data, setStep2Data] = useState({
    barrio: "",
    calle: "",
  });

  //manejo del estado del formulario caso 4
  const [step4Data, setStep4Data] = useState({
    // Campos del paso 4
    aceptoFlia: "",
    aceptoMacota: "",
    aceptoPareja: "",
    aceptoGrupoJ: "",
    aptoNinio: "",
    aptoDiscapacitados: "",
    permiteFumar: "",
    permiteFiesta: "",
    cuilCuit: "",
    numberCui: "",
    detalleAloja: "",
  });

  //almacena una url de imagen predeterminada (es la quetiene la camarita)
  const [noImage, setNoImage] = useState(
    "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
  );
  // estado del paso 3 con el campo imagen
  //almacena una matriz de objetos que representan archivos cargados.
  const [files, setFiles] = useState([]);
  const [imageInput, setImageInput] = useState(null); // se utiliza para controlar un campo de entrada de archivos.
  // estados del paso 3 con el campo linkvideo
  const handleLinkChange = (e) => {
    //esta función actualiza el estado link con el nuevo valor.
    setLink(e.target.value); // Actualiza el estado del enlace cuando cambia el input
  };

  //funcion uploadItem,se llama cuando se selecciona archivos para cargar
  //Esta función carga los archivos seleccionados, los convierte en objetos y los almacena en el estado files.
  const uploadItem = (e) => {
    e.preventDefault(); // Previene la acción por defecto del evento (enviar formulario o abrir archivo)
    const newFiles = Array.from(e.target.files); // Obtiene los archivos seleccionados en el campo de entrada

    for (const file of newFiles) {
      const reader = new FileReader(); // Crea una nueva instancia de FileReader
      reader.onload = () => {
        setFiles((prevFiles) => [
          ...prevFiles,
          {
            id: file.size, // Asigna un ID basado en el tamaño del archivo
            file: file, // Almacena el objeto de archivo
            imagePreviewUrl: reader.result, // Almacena la URL de la vista previa de la imagen
          },
        ]);
      };
      reader.readAsDataURL(file); // Lee el contenido del archivo como una URL de datos
    }
  };
  //eliminacion de elementos files.
  //Define una función removeItem que se llama para eliminar elementos del estado files. También limpia el campo de entrada de archivos (imageInput).
  const removeItem = (id) => {
    //edsta funcion es la "x" para eliminar la imagen
    setFiles((prevFiles) => prevFiles.filter((obj) => obj.id !== id));
    imageInput.value = ""; // Clear the file input
  };

  //navegacion entre pasos del formulario.Define las funciones nextStep, prevStep, y restar que se utilizan para navegar entre los pasos del formulario.

  // se utiliza para avanzar al siguiente paso del formulario al incrementar el estado step en 1.
  const nextStep = () => {
    setStep(step + 1);
  };
  //se utiliza para retroceder al paso anterior al decrementar el estado step en 1.
  const prevStep = () => {
    setStep(step - 1);
  };
  // restablece el estado step a 1, lo que lleva al usuario de nuevo al primer paso del formulario.
  const restar = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    // Aquí puedes enviar los datos a la base de datos
    // Utiliza una solicitud al servidor (por ejemplo, con Axios o fetch) para guardar los datos.
  };

  //Función stepsCounter:
  //stepsCounter determina el estilo de los pasos del formulario (números y títulos) en función del paso actual.
  const stepsCounter = () => {
    const styletitlemobile1 = ["stepmobiletittle"];
    const styletitlemobile2 = ["stepmobiletittle"];
    const styletitlemobile3 = ["stepmobiletittle"];
    const styletitlemobile4 = ["stepmobiletittle"];
    const styletitlemobile5 = ["stepmobiletittle"];
    const stylenumber1 = ["stepnumber"];
    const styletitle1 = ["steptittle"];
    const stylenumber2 = ["stepnumber"];
    const styletitle2 = ["steptittle"];
    const stylenumber3 = ["stepnumber"];
    const styletitle3 = ["steptittle"];
    const stylenumber4 = ["stepnumber"];
    const styletitle4 = ["steptittle"];
    const stylenumber5 = ["stepnumber"];
    const styletitle5 = ["steptittle"];
    //comprueba si el use esta en el primer paso del form.
    if (step === 1) {
      stylenumber1.push("stepnumberactive"); //se agrega la clase css "stepnumberactive"al arreglo stylenumber1
      styletitle1.push("steptittleactive");
      styletitlemobile1.push("showstepmobiletittle");
    }
    if (step === 2) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumberactive");
      styletitle2.push("steptittleactive");
      styletitlemobile2.push("showstepmobiletittle");
    }
    if (step === 3) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumbercomplete");
      stylenumber3.push("stepnumberactive");
      styletitle3.push("steptittleactive");
      styletitlemobile3.push("showstepmobiletittle");
    }
    if (step === 4) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumbercomplete");
      stylenumber3.push("stepnumbercomplete");
      stylenumber4.push("stepnumberactive");
      styletitle4.push("steptittleactive");
      styletitlemobile4.push("showstepmobiletittle");
    }
    if (step === 5) {
      stylenumber1.push("stepnumbercomplete");
      stylenumber2.push("stepnumbercomplete");
      stylenumber3.push("stepnumbercomplete");
      stylenumber4.push("stepnumbercomplete");
      stylenumber5.push("stepnumberactive");
      styletitle5.push("steptittleactive");
      styletitlemobile5.push("showstepmobiletittle");
    }

    return (
      <div className="stepscontainer">
        <div className="stepsmobiletittlecontainer">
          {/* Muestra los títulos de los pasos en dispositivos móviles */}
          <h3 className={styletitlemobile1.join("")}>Main Information</h3>
          <h3 className={styletitlemobile2.join(" ")}>
            {/*aplica clase css dinámicamente a un elemento en función del estado actual de la aplicación.  */}
            Identification Information
          </h3>
          <h3 className={styletitlemobile3.join(" ")}>Employ Information</h3>
          <h3 className={styletitlemobile4.join(" ")}>Other Information</h3>
          <h3 className={styletitlemobile5.join(" ")}>Loan Parameters</h3>
        </div>
        {/* Muestra los pasos en una barra de progreso en dispositivos de escritorio */}
        <div className="stepsdesktopcontainer">
          <div className="step">
            <span className={stylenumber1.join(" ")}>1</span>
            <h3 className={styletitle1.join(" ")}>Datos Generales</h3>
          </div>
          <div className="step">
            <span className={stylenumber2.join(" ")}>2</span>
            <h3 className={styletitle2.join(" ")}>Mapa y Ubicaciòn</h3>
          </div>
          <div className="step">
            <span className={stylenumber3.join(" ")}>3</span>
            <h3 className={styletitle3.join(" ")}>Fotos y Videos</h3>
          </div>
          <div className="step">
            <span className={stylenumber4.join(" ")}>4</span>
            <h3 className={styletitle4.join(" ")}>Terminos y Condiciones</h3>
          </div>
          <div className="step">
            <span className={stylenumber5.join(" ")}>5</span>
            <h3 className={styletitle5.join(" ")}>Finalizado</h3>
          </div>
        </div>
      </div>
    );
  };
  const renderStep = () => {
    switch (
      step // renderizar diferentes pasos o secciones de un formulario en función del valor de la variable step
    ) {
      default: // Este es el caso por defecto y se ejecutará si step no coincide con ninguno de los otros casos.
        return (
          <div>
            <h1>breack</h1>
            <button onClick={restar} value="Next">
              Siguiente
            </button>
          </div>
        );
      case 1: //Este caso se activa cuando step es igual a 1.
        return (
          <>
            <div className="applicationFormContainer applicationForm">
              <h1>¡Hola! es hora de cargar tu alojamiento</h1>
              {stepsCounter()}
              {/*indicando en qué paso del proceso se encuentra el usuario */}
              <h3 className="applicationFormContainer-tittle">
                Datos Generales
              </h3>
              <form
                action=""
                id="form"
                className="form applicationFormContainer1"
              >
                <label className="Personal">
                  <h5>Datos Personales</h5>
                </label>
                <input
                  type="text"
                  id="name"
                  className="fullwidth campo"
                  placeholder="Ingrese su Nombre"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.name}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  id="lasName"
                  className="fullwidth campo"
                  placeholder="Ingrese su Apellido"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.lastName}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, lastName: e.target.value })
                  }
                />
                <input
                  type="number"
                  id="dni"
                  className="fullwidth campo"
                  placeholder="Ingrese su DNI"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.dni}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, dni: e.target.value })
                  }
                />
                <input
                  type="text"
                  id="admi"
                  className="fullwidth campo"
                  placeholder="nombre Admi"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.nameAdmi}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, nameAdmi: e.target.value })
                  }
                />
                <input
                  type="tel"
                  id="telefono"
                  className="fullwidth campo"
                  placeholder="telefono"
                  required //es obligatorio
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.telefono}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, telefono: e.target.value })
                  }
                />
                <label className="alojamiento">
                  <h5>Datos del Alojamiento</h5>
                </label>

                <select
                  id="tipoAlojamiento"
                  className="mediowidth-left campo"
                  placeholder="Tipo Alojamiento"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.tipoAlojamiento}
                  onChange={(e) =>
                    setStep1Data({
                      ...step1Data,
                      tipoAlojamiento: e.target.value,
                    })
                  }
                >
                  <option value disabled selected>
                    {/*opcion por defecto */}
                    Tipo de Alojamiento
                  </option>
                  <option value="2">Casa</option>
                  <option value="3">Departamento</option>
                  <option value="4">Otros</option>
                </select>

                <input
                  type="text"
                  id=""
                  className="mediowidth-right campo"
                  placeholder="describir otros"
                  required
                />

                <select
                  id="capacidadMax"
                  className="mediowidth-left campo"
                  placeholder="Capacidad maxima de Personas"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.capacidadMax}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, capacidadMax: e.target.value })
                  }
                >
                  <option value disabled selected>
                    Capacidad Maxima de Personas
                  </option>
                  <option value="2">1 Persona</option>
                  <option value="3">2 Persona</option>
                  <option value="4">3 Persona</option>
                  <option value="5">4 Persona</option>
                  <option value="6">5 Persona</option>
                  <option value="7">6 Persona</option>
                  <option value="8">7 Persona</option>
                  <option value="9">8 Persona</option>
                  <option value="10">9 Persona</option>
                  <option value="11">10 Persona</option>
                </select>

                <select
                  id="cantDormitorios"
                  className="mediowidth-left campo"
                  placeholder="cantidad dormitorios"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.cantDormitorios}
                  onChange={(e) =>
                    setStep1Data({
                      ...step1Data,
                      cantDormitorios: e.target.value,
                    })
                  }
                >
                  <option value disabled selected>
                    Cantidad de Habitaciones
                  </option>
                  <option value="2">1 Habitacion</option>
                  <option value="3">2 Habitaciones</option>
                  <option value="4">3 Habitaciones</option>
                  <option value="5">4 Habitaciones</option>
                  <option value="6">5 Habitaciones</option>
                  <option value="7">6 Habitaciones</option>
                  <option value="8">7 Habitaciones</option>
                  <option value="9">8 Habitaciones</option>
                  <option value="10">9 Habitaciones</option>
                  <option value="11">10 Habitaciones</option>
                </select>

                <select
                  id="cantBaños"
                  className="mediowidth-left campo"
                  placeholder="Baños"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step1Data.cantBanios}
                  onChange={(e) =>
                    setStep1Data({ ...step1Data, cantBanios: e.target.value })
                  }
                >
                  <option value disabled selected>
                    Cantidad de Baños
                  </option>
                  <option value="2">1 Baño</option>
                  <option value="3">2 Baños</option>
                  <option value="4">3 Baños</option>
                  <option value="5">4 Baños</option>
                  <option value="6">5 Baños</option>
                  <option value="7">6 Baños</option>
                  <option value="8">7 Baños</option>
                  <option value="9">8 Baños</option>
                  <option value="10">9 Baños</option>
                  <option value="11">10 Baños</option>
                </select>
                <br />
                <label className="alojamiento">
                  <h5>Equipamiento</h5>
                  <input
                    type="text"
                    id="equipamiento"
                    className="mediowidth-left campo"
                    placeholder="ej: cocina, heladera, calefaciòn"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step1Data.equipamiento}
                    onChange={(e) =>
                      setStep1Data({
                        ...step1Data,
                        equipamiento: e.target.value,
                      })
                    }
                  />
                </label>

                <label className="alojamiento">
                  <h5>Servicios</h5>
                  <input
                    type="text"
                    id="servicios"
                    className="mediowidth-right campo"
                    placeholder="ej: internet, luz, agua"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step1Data.servicios}
                    onChange={(e) =>
                      setStep1Data({ ...step1Data, servicios: e.target.value })
                    }
                  />
                </label>

                <input
                  onClick={nextStep}
                  type="submit"
                  id="submit"
                  className="fullwidth submit campo"
                  placeholder="Guardar y Continuar"
                  value="Guardar y Continuar"
                  required
                />
              </form>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-mapa">
              {stepsCounter()}

              <form action="" id="form" className=" form-mapa">
                <Mapa />

                <input
                  onClick={nextStep}
                  type="submit"
                  id="submit"
                  className="fullwidth submit campo"
                  placeholder="Formosa"
                  value="Guardar y Continuar"
                  required
                />
                <input
                  onClick={prevStep}
                  type="submit"
                  id="submit-atras"
                  className="fullwidth submit campo"
                  placeholder="Anterior"
                  value="Anterior"
                  required
                />
              </form>
            </div>
          </>
        );
      case 3:
        return (
          <>
            {stepsCounter()}

            <div className="applicationFormContainer">
              <h3 className="applicationFormContainer-tittle">
                Imagen y Videos
              </h3>

              <form action="" id="form" className="form">
                <input
                  className="imput-img"
                  type="file"
                  onChange={uploadItem}
                  ref={(input) => setImageInput(input)}
                  multiple
                />
                <div className="imgContainer">
                  {!files.length ? (
                    <img src={noImage} alt="No Image" />
                  ) : (
                    files.map((obj, index) => (
                      <div className="imgWrapper" key={obj.id}>
                        <img src={obj.imagePreviewUrl} alt={obj.id} />
                        <button
                          type="button"
                          onClick={() => removeItem(obj.id)}
                        >
                          &times;
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <hr />
                <hr />
                <h5>¡Agrega un Video si gustas!</h5>
                <input
                  type="text"
                  placeholder="Introduce un enlace"
                  value={link}
                  onChange={handleLinkChange}
                />
                <p></p>
                <input
                  onClick={nextStep}
                  type="submit"
                  id="submit"
                  className="fullwidth submit campo"
                  placeholder="Guardar y Continuar"
                  value="Guardar y Continuar"
                  required
                />
                {/*anterior */}
                <input
                  onClick={prevStep}
                  type="submit"
                  id="submit-atras"
                  className="fullwidth submit campo"
                  placeholder="Anterior"
                  value="Anterior"
                  required
                />
              </form>
            </div>
          </>
        );
      case 4:
        return (
          <>
            {stepsCounter()}

            <div className="applicationFormContainer">
              <h3 className="applicationFormContainer-tittle">
                Terminos y Condiciones
              </h3>
              <hr />
              <p>
                Especificá tus condiciones para el alquiler, recordá que
                mientras más flexible seas más oportunidades tendrás
              </p>
              <hr />
              <form action="" id="form" className="form-condiciones">
                <h4>Normas del alojamiento</h4>
                <br />

                <div>
                  <p className="css-cp8r97">¿Se acepta familiares?</p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="Se aceptan Familias"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.aceptoFlia}
                    onChange={(e) =>
                      setStep4Data({ ...step4Data, aceptoFlia: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Se acepta familiares
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">¿Se acepta Mascotas?</p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="Se aceptan mascotas"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.aceptoMacota}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        aceptoMacota: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Se acepta Mascotas
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">¿Se acepta Pareja?</p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="Se acept pareja"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.aceptoPareja}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        aceptoPareja: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Se acepta Pareja
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">¿Se acepta grupo de jóvene?</p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="Se aceptan jovenes"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.aceptoGrupoJ}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        aceptoGrupoJ: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Se acepta grupo de jóvene
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">¿Es apto para niños?</p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="apto para niños"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.aptoNinio}
                    onChange={(e) =>
                      setStep4Data({ ...step4Data, aptoNinio: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Es apto para niños
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">
                    ¿Es apto para personas con discapacidad?
                  </p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="es apto para personas con discapacidad"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.aptoDiscapacitados}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        aptoDiscapacitados: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Apto para personas con discapacidad
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">
                    ¿se permite fumar en el interior?
                  </p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="se permite fumar en el interior"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.permiteFumar}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        permiteFumar: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      se permite fumar en el interior
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <p className="css-cp8r97">¿Se permite hacer fiestas?</p>
                  <select
                    id=""
                    className="fullwidth campo"
                    placeholder="se permite hacer fiestasr"
                    required
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.permiteFiesta}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        permiteFiesta: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Se permite hacer fiestas
                    </option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <select
                  id=""
                  className="mediowidth-left campo campo-raro"
                  placeholder="CUIL/CUIT"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step4Data.cuilCuit}
                  onChange={(e) =>
                    setStep4Data({ ...step4Data, cuilCuit: e.target.value })
                  }
                >
                  <option value="" disabled>
                    CUIL/CUIT
                  </option>
                  <option value="cuil">CUIL</option>
                  <option value="cuit">CUIT</option>
                </select>

                <input
                  type="number"
                  id="cuilt"
                  className="mediowidth-right campo"
                  placeholder="número"
                  required
                  //para que se valla guardando en el estado setStep1data
                  value={step4Data.numberCui}
                  onChange={(e) =>
                    setStep4Data({ ...step4Data, numberCui: e.target.value })
                  }
                />

                <div>
                  <hr />
                  <h6 className="h6-edit">
                    Detallá lo más que puedas tu alojamiento, esto posicionará
                    mejor tu anuncio.
                  </h6>

                  <textarea
                    aria-invalid="false"
                    aria-describedby="descripcion_ubicacion-helper-text"
                    id="descripcion_ubicacion"
                    className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline css-10oer18"
                    style={{ height: 23, overflow: "hidden" }}
                    defaultValue={""}
                    //para que se valla guardando en el estado setStep1data
                    value={step4Data.detalleAloja}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        detalleAloja: e.target.value,
                      })
                    }
                  />
                </div>
                <input
                  onClick={nextStep}
                  type="submit"
                  id="submit"
                  className="fullwidth submit campo"
                  placeholder="Guardar y Continuar"
                  value="Guardar y Continuar"
                  required
                />
                {/*anterior */}
                <input
                  onClick={prevStep}
                  type="submit"
                  id="submit-atras"
                  className="fullwidth submit campo"
                  placeholder="Anterior"
                  value="Anterior"
                  required
                />
              </form>
            </div>
          </>
        );
      case 5:
        return (
          <>
            {stepsCounter()}

            <div className="applicationFormContainer">
              <h3 className="applicationFormContainer-tittle">
                Datos Cargados
              </h3>
              <form action="" id="form" className="form">
                <input
                  type="submit"
                  id="submit"
                  className="fullwidth submit campo"
                  placeholder="Guardar y Continuar"
                  value="Guardar y Continuar"
                  required
                />
                {/*anterior */}
                <input
                  onClick={prevStep}
                  type="submit"
                  id="submit-atras"
                  className="fullwidth submit campo"
                  placeholder="Anterior"
                  value="Anterior"
                  required
                />
              </form>
            </div>
          </>
        );
    }
  };

  return renderStep();
};
