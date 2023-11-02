import React, { useState } from "react";
import Png from "./imagen/teletrabajo.png";
// import { Data } from "../location/Data"; // Asegúrate de importar los datos

import "./styles.scss";

export const Mapa = (props) => {
  const { src, address } = props; // Ya no necesitas "loc"
  console.log(src);

  return (
    <main className="main-mapa">
      <div className="title">
        <h1>Mapa y Ubicación</h1>
        <img src={Png} alt="png" />
      </div>
      <section>
        <aside>
          {src === "" ? (
            <>
              <p className="loading">
                <div className="circle"></div>
                <p className="selectLocation">Please Select The Location</p>
              </p>
            </>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57292.09688278255!2d-58.236169602916256!3d-26.172073053714545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ca5e488cf4f05%3A0xbcaebe65a1bae72!2sFormosa!5e0!3m2!1ses!2sar!4v1698940073778!5m2!1ses!2sar"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </aside>
        <aside className="Details">
          <section>
            <div className="addressDetails">
              <img src={Png} alt="png" />
            </div>
          </section>

          <div className="addressDetails locationSelection">
            <label className="barrio">
              <h5>Barrio:</h5>
            </label>
            <input
              type="text"
              id=""
              className="fullwidth campo"
              placeholder="Ingrese sus dirección por favor!"
              required
            />
            <label className="calle">
              <h5>Calle:</h5>
            </label>
            <input
              type="text"
              id=""
              className="fullwidth campo"
              placeholder="Ingrese la calle!"
              required
            />
          </div>
        </aside>
      </section>
    </main>
  );
};
