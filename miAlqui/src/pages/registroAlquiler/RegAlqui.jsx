import React, { useState } from "react";
import LocationCont from "./location/location.component";
import "./form.css";

export const FormAlqui = () => {
  const [step, setStep] = useState(1);
  const [link, setLink] = useState(""); // Estado para almacenar el enlace

  const handleLinkChange = (e) => {
    setLink(e.target.value); // Actualiza el estado del enlace cuando cambia el input
  };

  const [noImage, setNoImage] = useState(
    "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
  );
  const [files, setFiles] = useState([]);
  const [imageInput, setImageInput] = useState(null);

  const uploadItem = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);

    for (const file of newFiles) {
      const reader = new FileReader();
      reader.onload = () => {
        setFiles((prevFiles) => [
          ...prevFiles,
          {
            id: file.size,
            file: file,
            imagePreviewUrl: reader.result,
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };
  const removeItem = (id) => {
    setFiles((prevFiles) => prevFiles.filter((obj) => obj.id !== id));
    imageInput.value = ""; // Clear the file input
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const restar = () => {
    setStep(1);
  };

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
    if (step === 1) {
      stylenumber1.push("stepnumberactive");
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
          <h3 className={styletitlemobile1.join("")}>Main Information</h3>
          <h3 className={styletitlemobile2.join(" ")}>
            Identification Information
          </h3>
          <h3 className={styletitlemobile3.join(" ")}>Employ Information</h3>
          <h3 className={styletitlemobile4.join(" ")}>Other Information</h3>
          <h3 className={styletitlemobile5.join(" ")}>Loan Parameters</h3>
        </div>
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

  switch (step) {
    default:
      return (
        <div>
          <h1>breack</h1>
          <button onClick={restar} value="Next">
            Next
          </button>
        </div>
      );
    case 1:
      return (
        <>
          <div className="applicationFormContainer applicationForm">
            <h1>¡Hola! es hora de cargar tu alojamiento</h1>
            {stepsCounter()}
            <h3 className="applicationFormContainer-tittle">Datos Generales</h3>
            <form action="" id="form" className="form">
              <label className="Personal">
                <h5>Datos Personales</h5>
              </label>
              <input
                type="text"
                id=""
                className="fullwidth campo"
                placeholder="Ingrese su Nombre"
                required
              />
              <input
                type="text"
                id=""
                className="fullwidth campo"
                placeholder="Ingrese su Apellido"
                required
              />
              <input
                type="number"
                id=""
                className="fullwidth campo"
                placeholder="Ingrese su DNI"
                required
              />
              <input
                type="text"
                id=""
                className="fullwidth campo"
                placeholder="nombre Admi"
                required
              />
              <input
                type="tel"
                id=""
                className="fullwidth campo"
                placeholder="telefono"
                required
              />
              <label className="alojamiento">
                <h5>Datos del Alojamiento</h5>
              </label>

              <select
                id=""
                className="mediowidth-left campo"
                placeholder="Tipo Alojamiento"
                required
              >
                <option value disabled selected>
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
                id=""
                className="mediowidth-left campo"
                placeholder="Capacidad maxima de Personas"
                required
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
                id=""
                className="mediowidth-left campo"
                placeholder="cantidad dormitorios"
                required
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
                id=""
                className="mediowidth-left campo"
                placeholder="Baños"
                required
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
                  id=""
                  className="mediowidth-left campo"
                  placeholder="ej: cocina, heladera, calefaciòn"
                  required
                />
              </label>

              <label className="alojamiento">
                <h5>Servicios</h5>
                <input
                  type="text"
                  id=""
                  className="mediowidth-right campo"
                  placeholder="ej: internet, luz, agua"
                  required
                />
              </label>

              <input
                onClick={nextStep}
                type="submit"
                id="submit"
                className="fullwidth submit campo"
                placeholder="Save and continue"
                value="Save and continue"
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
              <LocationCont />

              <input
                onClick={nextStep}
                type="submit"
                id="submit"
                className="fullwidth submit campo"
                placeholder="Save and continue"
                value="Save and continue"
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
            <h3 className="applicationFormContainer-tittle">Imagen y Videos</h3>

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
                      <button type="button" onClick={() => removeItem(obj.id)}>
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
                placeholder="Save and continue"
                value="Save and continue"
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
              Especificá tus condiciones para el alquiler, recordá que mientras
              más flexible seas más oportunidades tendrás
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
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>
              <div>
                <p className="css-cp8r97">¿Se acepta Mascotas?</p>
                <select
                  id=""
                  className="fullwidth campo"
                  placeholder="Se aceptan mascotas"
                  required
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>
              <div>
                <p className="css-cp8r97">¿Se acepta Pareja?</p>
                <select
                  id=""
                  className="fullwidth campo"
                  placeholder="Se acept pareja"
                  required
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>
              <div>
                <p className="css-cp8r97">¿Se acepta grupo de jóvene?</p>
                <select
                  id=""
                  className="fullwidth campo"
                  placeholder="Se aceptan jovenes"
                  required
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>
              <div>
                <p className="css-cp8r97">¿Es apto para niños?</p>
                <select
                  id=""
                  className="fullwidth campo"
                  placeholder="apto para niños"
                  required
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
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
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>
              <div>
                <p className="css-cp8r97">¿se permite fumar en el interior?</p>
                <select
                  id=""
                  className="fullwidth campo"
                  placeholder="se permite fumar en el interior"
                  required
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>
              <div>
                <p className="css-cp8r97">¿Se permite hacer fiestas?</p>
                <select
                  id=""
                  className="fullwidth campo"
                  placeholder="se permite hacer fiestasr"
                  required
                >
                  <option value disabled selected>
                    ¡si!
                  </option>
                  <option value="2">¡No!</option>
                </select>
              </div>

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
                />
              </div>
              <input
                onClick={nextStep}
                type="submit"
                id="submit"
                className="fullwidth submit campo"
                placeholder="Save and continue"
                value="Save and continue"
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
            <h3 className="applicationFormContainer-tittle">Loan Parameters</h3>
            <form action="" id="form" className="form">
              <select
                id=""
                className="mediowidth-left campo campo-raro"
                placeholder="CUIL/CUIT"
                required
              >
                <option value disabled selected>
                  CUIL/CUIT
                </option>
                <option value="2">CUIL</option>
                <option value="3">CUIT</option>
              </select>

              <input
                type="number"
                id=""
                className="mediowidth-right campo"
                placeholder="número"
                required
              />

              <input
                type="text"
                id=""
                className="mediowidth-left campo"
                placeholder="Selling Price"
                required
              />

              <input
                type="text"
                id=""
                className="mediowidth-right campo"
                placeholder="Down Payment"
                required
              />

              <input
                type="text"
                id=""
                className="mediowidth-left campo"
                placeholder="Sales Tax Included"
                required
              />

              <input
                type="text"
                id=""
                className="mediowidth-right campo"
                placeholder="Sales Tax"
                required
              />

              <select
                id=""
                className="mediowidth-left campo campo-raro"
                placeholder="Amount Financed"
                required
              >
                <option value disabled selected>
                  Amount Financed
                </option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
              </select>

              <input
                type="text"
                id=""
                className="mediowidth-right campo"
                placeholder="Contract Language"
                required
              />

              <select
                id=""
                className="mediowidth-left campo campo-raro"
                placeholder="Contract State"
                required
              >
                <option value disabled selected>
                  Contract State
                </option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
              </select>

              <input
                type="text"
                id=""
                className="mediowidth-right campo"
                placeholder="Product of Service"
                required
              />

              <input
                type="submit"
                id="submit"
                className="fullwidth submit campo"
                placeholder="Save and Send"
                value="Save and Send"
                required
              />
            </form>
          </div>
        </>
      );
  }
};