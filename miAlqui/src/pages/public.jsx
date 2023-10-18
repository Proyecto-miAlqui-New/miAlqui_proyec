import React from "react";

import { Header } from "../components/header/header";
import { Link } from "react-router-dom";
import "./public.css";

export const Public = () => {
  return (
    <>
      {/* header */}
      <Header />
      <main class="px-3">
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="img/teletrabajo.png"
            alt=""
            width={72}
            height={57}
          />
          <h1 className="display-5 fw-bold text-body-emphasis">
            ¡Publicá Ahora!
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Consegui mas visibilidad</p>
            <p className="lead mb-4">Aumenta las reservas</p>
            <p className="lead mb-4">Genera más ingresos</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 gap-3 color"
                >
                  Cargar Alojamiento
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Más Tarde
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};