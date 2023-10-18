import React from "react";
import "./register.css";

export const PasoOne = () => {
  return (
    <div className="css-1ju78ok">
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
                  aria-invalid="false"
                  id=":r1:"
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
                  aria-invalid="false"
                  id=":r2:"
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
                  aria-invalid="false"
                  id=":r3:"
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
                aria-invalid="false"
                id="nombre-contacto"
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
            <ul className="MuiList-root MuiList-padding css-1ontqvh">
              <li className="MuiListItem-container css-79elbk">
                <div className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-secondaryAction css-zev9pb">
                  <div className="MuiListItemIcon-root css-19ik874">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dloeo2"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="PhoneAndroidIcon"
                    >
                      <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
                    </svg>
                  </div>
                  <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig">
                      <p
                        className="MuiTypography-root MuiTypography-body1 css-g3ky3n"
                        data-testid="typography"
                      >
                        (549) 3704619165
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-prdgjd"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="WhatsAppIcon"
                        >
                          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
                        </svg>
                      </p>
                    </span>
                    <p className="MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-mbfek">
                      <span
                        className="MuiTypography-root MuiTypography-caption css-1v2gfp5"
                        data-testid="typography"
                      >
                        alquiler
                      </span>
                    </p>
                  </div>
                </div>
                <div className="MuiListItemSecondaryAction-root css-y3qv5r">
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabIndex={0}
                    type="button"
                    aria-label="More"
                    aria-owns="long-menu"
                    aria-haspopup="true"
                    data-telefonoid={50435}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="MoreVertIcon"
                    >
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <span className="MuiTouchRipple-root css-w0pj6f" />
                  </button>
                </div>
              </li>
              <div
                className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                style={{ minHeight: 0 }}
              >
                <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                  <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                    <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-17ht52l">
                      <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-7zc8ns">
                          <input
                            aria-invalid="false"
                            id="nueva-observacion-50435"
                            type="text"
                            className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
                            defaultValue="alquiler"
                          />
                          <fieldset
                            aria-hidden="true"
                            className="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend className="css-ihdtdm">
                              <span className="notranslate">​</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
            <div
              className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
              style={{ minHeight: 0 }}
            >
              <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                  <div className="MuiGrid-root MuiGrid-container css-8rnkcc">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3 MuiGrid-grid-sm-3 css-4xkoi8">
                      <div className="MuiFormControl-root css-1exc8be">
                        <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
                          <label
                            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bz03pr"
                            data-shrink="true"
                            htmlFor=":r8:"
                            id=":r8:-label"
                          >
                            Tipo
                          </label>
                          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-vwv4s0">
                            <div
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              aria-labelledby=":r8:-label :r8:"
                              id=":r8:"
                              className="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input css-1cccqvr"
                            >
                              Celular
                            </div>
                            <input
                              aria-hidden="true"
                              tabIndex={-1}
                              className="MuiSelect-nativeInput css-1k3x8v3"
                              defaultValue="Celular"
                            />
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconStandard css-1utq5rl"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="ArrowDropDownIcon"
                            >
                              <path d="M7 10l5 5 5-5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2 MuiGrid-grid-sm-2 css-o0rlmm">
                      <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                        <label
                          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard css-u0r73m"
                          data-shrink="false"
                          htmlFor=":r9:"
                          id=":r9:-label"
                        >
                          Caract
                        </label>
                        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1s8oh89">
                          <input
                            aria-invalid="false"
                            id=":r9:"
                            placeholder="sin 0"
                            type="number"
                            className="MuiInputBase-input MuiInput-input css-mnn31"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 css-1s50f5r">
                      <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                        <label
                          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard css-u0r73m"
                          data-shrink="false"
                          htmlFor=":ra:"
                          id=":ra:-label"
                        >
                          Número
                        </label>
                        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1s8oh89">
                          <input
                            aria-invalid="false"
                            id=":ra:"
                            placeholder="sin 15"
                            type="number"
                            className="MuiInputBase-input MuiInput-input css-mnn31"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="MuiGrid-root MuiGrid-container css-j5rkdc">
                    {/* <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 css-15j76c0">
                            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                              <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-standard css-u0r73m"
                                data-shrink="false"
                                htmlFor=":rb:"
                                id=":rb:-label"
                              >
                                Observación
                              </label>
                              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1s8oh89">
                                <input
                                  aria-invalid="false"
                                  id=":rb:"
                                  type="text"
                                  className="MuiInputBase-input MuiInput-input css-mnn31"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div> */}
                    <br />
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-sm-4 css-hovnsk">
                      <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-5z5vkk">
                        <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary Mui-checked MuiCheckbox-root MuiCheckbox-colorPrimary css-m3udvk">
                          <input
                            className="PrivateSwitchBase-input css-1m9pwf3"
                            type="checkbox"
                            data-indeterminate="false"
                            defaultValue="wsp"
                            defaultChecked=""
                          />
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CheckBoxIcon"
                          >
                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </span>
                        <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3">
                          WhatsApp
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-container css-kyse2m">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-k8r030"
                tabIndex={0}
                type="button"
              >
                Guardar teléfono
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
