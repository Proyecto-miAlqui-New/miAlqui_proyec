import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav nav-masthead justify-content-center float-md-end navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="Mialqui.jsx" class="navbar-brand logo tex-color enlace-nav">
          <h1>
            mi<span>Alqui</span>
          </h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul class="navbar-nav tex-color enlace-nav">
            <li className="nav-item menu-nav">
              <Link to="/">
                <a
                  className="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  href=""
                >
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item menu-nav">
              <Link to="/public">
                <a className="nav-link fw-bold py-1 px-0 enlace-nav" href="#">
                  Publica
                </a>
              </Link>
            </li>
            <Link to="/Contact">
              <a className="nav-link fw-bold py-1 px-0 enlace-nav" href="#">
                Contact
              </a>
            </Link>
            <li className="nav-item menu-nav">
              <Link to="/">
                <a
                  className="nav-link fw-bold py-1 px-0 active enlace-nav"
                  aria-current="page"
                  href=""
                >
                  Registrate
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="/">
          <a
            className="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            href=""
          >
            Inicia Seccion
          </a>
        </Link> */}
      </div>
    </nav>
  );
};
