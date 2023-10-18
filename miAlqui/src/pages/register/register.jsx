import React from "react";
import "./register.css";
import { Header } from "../../components/header/header";
import { Pasos } from "./pasos";
import { PasoOne } from "./pasoOne";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <Header />
      <div className="MuiGrid-root MuiGrid-container css-t4nygo">
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 css-1ha4th6">
          <Pasos />
        </div>
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 css-iol86l">
          <PasoOne />
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiMobileStepper-root MuiMobileStepper-positionStatic css-1v0npis">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall Mui-disabled MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-uaoypv"
              tabIndex={-1}
              type="button"
              disabled=""
            >
              <a
                href="/ze07/1/null"
                style={{
                  color: "rgba(0, 0, 0, 0.26)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="KeyboardArrowLeftIcon"
                >
                  <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
                <div className="MuiBox-root css-1bxnrt9">Atras</div>
              </a>
            </button>
            <span
              className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate MuiMobileStepper-progress css-1se03qo"
              role="progressbar"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span
                className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-1yy5cn0"
                style={{ transform: "translateX(-100%)" }}
              />
            </span>
            <Link to="/PasoTwo">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-uaoypv"
                tabIndex={0}
                type="button"
                style={{ color: "black" }}
              >
                Siguiente{""}
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="KeyboardArrowRightIcon"
                >
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 css-1ha4th6">
          <div className="css-peak1t">
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-65pff9">
              <main className="css-lhd4jx">
                <div className="css-v1o6ze">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-1lz9qh0"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LightbulbOutlinedIcon"
                  >
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                  </svg>
                </div>
                <p
                  className="MuiTypography-root MuiTypography-body1 css-9l3uo3"
                  data-testid="typography"
                  style={{ marginBottom: 16 }}
                >
                  Los datos de contacto que cargues aquí serán tus puntos de
                  contacto con los huéspedes, por esto es importante que
                  coloques tus canales frecuentes de comunicación.{" "}
                </p>
                <p
                  className="MuiTypography-root MuiTypography-body1 css-9l3uo3"
                  data-testid="typography"
                  style={{ marginBottom: 16 }}
                >
                  {" "}
                  ¡Mientras antes respondas tenés mas posibilidad de reservar!
                </p>
              </main>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
