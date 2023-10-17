import React from "react";
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
        <a
          className="nav-link fw-bold py-1 px-0 active"
          aria-current="page"
          href="#"
        >
          Home
        </a>
        <a className="nav-link fw-bold py-1 px-0" href="#">
          Features
        </a>
        <a className="nav-link fw-bold py-1 px-0" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};
