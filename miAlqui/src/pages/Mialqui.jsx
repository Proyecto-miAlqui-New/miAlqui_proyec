import React from "react";
import { Header } from "../components/header/header";
import "./mialqui.css";

export const Main = () => {
  return (
    <>
      {/* header */}
      <Header />

      <main className="px-3">
        <div class="textos-hero lead ">
          {/* width="40%" height="40%" */}
          <h1 className="tex-aling">
            <span className="tex-1 tex-color">Tu nuevo Hogar</span>
            <span className="tex-1 tex-color">te esta Esperando</span>
            <img src="./img/background-image.webp" alt="" class=" imagen " />
          </h1>
          <span>
            <p class="parrafo tex-color">
              Tenemos la Mejor Selecion de Alquileres para ti
            </p>
          </span>
        </div>
        <div className="botones-alineacion">
          <a className="link-buton" href="/Public/Alquileres/alquilar.html">
            <button
              type="button"
              className="btn boton-color  iRCgEU"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            >
              Alquilar
            </button>
          </a>
          <a className="link-buton" href="/Public/publicar/publicar.html">
            <button
              type="button"
              className="btn boton-color-2  iRCgEU-2"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
              href="/Public/publicar/publicar.html"
            >
              Publicar
            </button>
          </a>
          <a href="#abajo">
            <button
              type="button"
              className="btn  boton-popular gDqqEM"
              data-toggle="button  "
              aria-pressed="false"
              autocomplete="off "
            >
              Populares
            </button>{" "}
          </a>
          <div className="col-md-4 selecion-alqui">
            <label for="state" className="form-label">
              <font className="font-1">
                <font className="font-1">¿Que quieres alquilar?</font>
              </font>
            </label>
            <select className="form-select" id="state" required="">
              <option value="">
                <font className="font-1">
                  <font className="font-1">Departamento</font>
                </font>
              </option>
              <option>
                <font className="font-1">
                  <font className="font-1">Casa</font>
                </font>
              </option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="group">
            <svg className="icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" className="input" />
          </div>
          <div className="fondo-seccion"></div>
        </div>
        <div className="fondo-seccion">
          <section className="cta section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="cta-text">
                    <h2 className="bold">
                      Sabés dónde buscás, sabés con quien tratás
                    </h2>
                    <p className="text-white">
                      En miAlqui vas a encontrar el ALQUILER que estás buscando,
                      porque tenemos la oferta unificada de más de 2000
                      corredores inmobiliarios de Formosa Capital . Además,
                      contás con la la informacion y seguridad que nesesitas y
                      la tranquilidad que te brinda tratar exclusivamente con
                      profesionales matriculados.
                    </p>
                    <p className="text-white">
                      <b>Cuando buscás en miAlqui, encontrás seguro.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
