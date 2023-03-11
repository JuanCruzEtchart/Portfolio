/* import "../assets/css/Navbar.css";
import React, { useState, useEffect } from "react";
import icon from "../assets/images/icon.png"; */
import "../assets/css/Navbar.css";

function Header() {
  return (
    <nav className="navbar">
      <ol className="navbar__links" type="i">
        <li>
          <a>Sobre mí</a>
        </li>
        <li>
          <a>Experiencia</a>
        </li>
        <li>
          <a>Proyectos</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
        <li>
          <a>Currículum</a>
        </li>
      </ol>
    </nav>
  );
}

export default Header;
