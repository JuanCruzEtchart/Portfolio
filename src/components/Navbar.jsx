import React from "react";
/* import "../assets/css/Navbar.css"; */
import CV from "../assets/CV - Juan Cruz Etchart.pdf";
import LogoJS from "../assets/images/LogoJC.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar min-w-[calc(100vw-17px)] flex items-center justify-between h-[100px] fixed z-10 backdrop-blur">
      <img src={LogoJS} alt="JC Logo" className="w-10 ml-10" />
      <ol
        className="navbar__links text-white list-roman flex justify-evenly font text-[13px] items-center  mr-10"
        type="i"
      >
        <li className="flex items-center p-2.5">
          {/* <a className="items-center">Sobre mí</a> */}
          <div className="h-4ll text-detail">I.</div>
          <Link className="ml-2 w-auto" to="/#About">
            Sobre mí
          </Link>
        </li>
        <li className="flex items-center p-2.5">
          {/* <a>Experiencia</a> */}
          <div className="h-4ll text-detail">II.</div>
          <a className="ml-2" href="#">
            Experiencia
          </a>
        </li>
        <li className="flex items-center p-2.5">
          {/* <a>Proyectos</a> */}
          <div className="h-4ll text-detail">III.</div>
          <a className="ml-2" href="#">
            Proyectos
          </a>
        </li>
        <li className="flex items-center p-2.5">
          {/* <a>Contacto</a> */}
          <div className="h-4ll text-detail">IV.</div>
          <a className="ml-2" href="#">
            Contacto
          </a>
        </li>
        <li className="list-none p-3 border-2 border-detail text-detail rounded-[5px] ml-4">
          <a href={CV} target="_blank" download="CV - Juan Cruz Etchart">
            Currículum
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
