import React from "react";
import { Navbar } from "./Navbar";
import './header.css'

export const Header = () => {
  return (
    <header className="mb-auto">
      <div className="contenedorHeader  cover-container">
      
        <Navbar />
      </div>
    </header> 
  );
};
