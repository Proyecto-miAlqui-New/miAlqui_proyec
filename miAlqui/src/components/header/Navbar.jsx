import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav nav-masthead justify-content-center float-md-end">
      <div className="container-fluid">
        <a href="Mialqui.jsx" class="navbar-brand logo tex-color">
          <h1>
            mi<span>Alqui</span>
          </h1>
        </a>
        <Link to="/home">
          <a
            className="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            href=""
          >
            Inicio
          </a>
        </Link>
        <Link to="/public">
          <a className="nav-link fw-bold py-1 px-0" href="#">
            Publica
          </a>
        </Link>

        <a className="nav-link fw-bold py-1 px-0" href="#">
          Contact
        </a>
        <Link to="/">
          <a
            className="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            href=""
          >
            Registrate
          </a>
        </Link>
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
