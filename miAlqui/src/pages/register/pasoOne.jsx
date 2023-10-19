import React from "react";
import "./register.css";
import { useState } from "react";
import Axios from 'axios';


export const PasoOne = () => {
  //estados
const [nombre,setNombre]= useState("");
const [apellido,setApellido]= useState("");
const [dni,setDni]= useState(0);
const [nombreAdmi,setNombreAdmi]= useState("");
const [email,setEmail]= useState("");
const [celular,setCelular]= useState(0);
 //boton
 const registrar = ()=>{
  Axios.post("http://localhost:3001/create",{
    nombre:nombre,
    apellido:apellido,
    dni:dni,
    nombre_admisionista:nombreAdmi,
    email:email,
    celular:celular
  }).then(()=>{
    alert("alquiler registrado")
  })
  .catch(err => console.error(err))
}

  return (
    <div className="css-1ju78ok">
      <form action="form1">
      <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 css-5vpizt">
        <h4
          className="MuiTypography-root MuiTypography-h4 css-3rptf6"
          data-testid="typography"
        >
          ¡Hola! es hora de cargar tu alojamiento
        </h4>
        <h6
          className="MuiTypography-root MuiTypography-h6 css-1bzx0i"
          data-testid="typography"
        >
          Paso 1
        </h6>
        <p
          className="MuiTypography-root MuiTypography-body1 css-9l3uo3"
          data-testid="typography"
        >
          Completá los datos del dueño del alojamiento y de la persona que va a
          administrar la priopiedad.
        </p>
        <div />
        <div className="css-f9tg1p">
          <div className="css-akmk5q">
            <h6
              className="MuiTypography-root MuiTypography-subtitle1 css-1wh3jcp"
              data-testid="typography"
            >
              Datos del Propietario
            </h6>
            <p
              className="MuiTypography-root MuiTypography-body2 css-1ye44y5"
              data-testid="typography"
            >
              No son visibles para el usuario. Deben ser los mismos que van a
              usarse para verificar la identidad.
            </p>
            
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-7f57oh">
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bz03pr"
                data-shrink="true"
                htmlFor=":r1:"
                id=":r1:-label"
              >
                Nombre
              </label>
              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1s8oh89">
                <input
                  onChange={(event)=>{
                    setNombre(event.target.value)
                  }}
                  aria-invalid="false"
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="MuiInputBase-input MuiInput-input css-mnn31"
                  defaultValue="milagros"
                />
              </div>

            </div>
            
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-7f57oh">
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bz03pr"
                data-shrink="true"
                htmlFor=":r2:"
                id=":r2:-label"
              >
                Apellido
              </label>
              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1s8oh89">
                <input
                  onChange={(event)=>{
                    setApellido(event.target.value)
                  }}
                  aria-invalid="false"
                  id="apellido"
                  name="apellido"
                  type="text"
                  className="MuiInputBase-input MuiInput-input css-mnn31"
                  defaultValue="villalba"
                />
              </div>
            </div>
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-7f57oh">
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bz03pr"
                data-shrink="true"
                htmlFor=":r3:"
                id=":r3:-label"
              >
                DNI
              </label>
              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1s8oh89">
                <input
                  onChange={(event)=>{
                    setDni(event.target.value)
                  }}
                  aria-invalid="false"
                  id="dni"
                  name="dni"
                  type="number"
                  className="MuiInputBase-input MuiInput-input css-mnn31"
                  defaultValue={45049583}
                />
              </div>
            </div>
          </div>
        </div>
        <h1
          className="MuiTypography-root MuiTypography-body1 css-9l3uo3"
          data-testid="typography"
        >
          <div className="MuiBox-root css-33l48z">Datos de Contacto</div>
        </h1>
        <p
          className="MuiTypography-root MuiTypography-body2 css-68o8xu"
          data-testid="typography"
        >
          Son los datos que va a utilizar el huésped para comunicarse y
          reservar.
        </p>
        <div
          className="MuiFormControl-root MuiFormControl-fullWidth css-ml8jhr"
          aria-describedby="nombre-contacto-text"
        >
          <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
            <label
              className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard css-u0r73m"
              data-shrink="false"
              htmlFor="nombre-contacto"
              id="nombre-contacto-label"
            >
              Nombre de contacto (Administrador)
            </label>
            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-vwv4s0">
              <input
                onChange={(event)=>{
                  setNombreAdmi(event.target.value)
                }}
                aria-invalid="false"
                id="nombreAdmi"
                name="contacto"
                type="text"
                className="MuiInputBase-input MuiInput-input css-mnn31"
                defaultValue=""
              />
            </div>
          </div>
          <p
            className="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-lqhzzd"
            id="nombre-contacto-text"
          >
            Sólo nombre, sin el apellido.
          </p>
        </div>
        <div className="css-f9tg1p">
          <div className="css-1rjhkyt">
            <div
              className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
              style={{ minHeight: 0 }}
            >
              <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                  <ul className="MuiList-root MuiList-padding css-1ontqvh">
                    <li className="MuiListItem-container css-79elbk">
                      <div className="MuiListItem-root MuiListItem-padding MuiListItem-secondaryAction css-1p66p9z">
                        <div className="MuiListItemText-root css-wdt8uk">
                          <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig">
                            soledad110203@gmail.com
                          </span>
                        </div>
                      </div>
                      <div className="MuiListItemSecondaryAction-root MuiListItemSecondaryAction-disableGutters css-1ezyabs">
                        <button
                          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-19ovt99"
                          tabIndex={0}
                          type="button"
                        >
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="DeleteIcon"
                          >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
              style={{ minHeight: 0 }}
            >
              <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                  <div
                    className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                    aria-describedby="email-text"
                  >
                    <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
                      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-vwv4s0">
                        <input
                          onChange={(event)=>{
                            setEmail(event.target.value)
                          }}
                          aria-invalid="false"
                          id="email"
                          placeholder="Emails donde recibir las consultas"
                          type="email"
                          className="MuiInputBase-input MuiInput-input css-mnn31"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="css-kn8454">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-1clexno"
                tabIndex={0}
                type="button"
              >
                + Agregar otro e-mail
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </div>
          </div>
        </div>
        <div className="css-epgsx2">
          <div className="MuiGrid-root css-rfnosa">
            <h1
              className="MuiTypography-root MuiTypography-body1 css-9l3uo3"
              data-testid="typography"
            >
              <div className="MuiBox-root css-65y7my">
                Teléfonos Celulares y Fijo
              </div>
            </h1>
            <input
                onChange={(event)=>{
                  setCelular(event.target.value)
                }}
                aria-invalid="false"
                id="celular"
                name="contacto"
                type="text"
                className="MuiInputBase-input MuiInput-input css-mnn31"
                defaultValue=""
              />
            
            
            <div className="MuiGrid-root MuiGrid-container css-kyse2m">
              <button
                onClick={registrar}
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-k8r030"
                // tabIndex={0}
                title="Guardar Datos"
                type="button"
              >
                Guardar
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};
