import React from "react";
/* import "../assets/css/Navbar.css"; */
import CV from "../assets/CV - Juan Cruz Etchart.pdf";

function Navbar() {
  return (
    <nav className="navbar w-full flex items-center justify-end h-[100px]">
      <ol
        className="navbar__links text-white list-roman flex justify-evenly  font text-[13px] items-center  mr-10"
        type="i"
      >
        <li className="flex items-center p-2.5">
          {/* <a className="items-center">Sobre mí</a> */}
          <div class="h-4ll text-detail">I.</div>
          <a class="ml-2 w-auto" href="#">
            Sobre mí
          </a>
        </li>
        <li className="flex items-center p-2.5">
          {/* <a>Experiencia</a> */}
          <div class="h-4ll text-detail">II.</div>
          <a class="ml-2" href="#">
            Experiencia
          </a>
        </li>
        <li className="flex items-center p-2.5">
          {/* <a>Proyectos</a> */}
          <div class="h-4ll text-detail">III.</div>
          <a class="ml-2" href="#">
            Proyectos
          </a>
        </li>
        <li className="flex items-center p-2.5">
          {/* <a>Contacto</a> */}
          <div class="h-4ll text-detail">IV.</div>
          <a class="ml-2" href="#">
            Contacto
          </a>
        </li>
        <li className="list-none p-3 border-2 border-detail rounded-[5px] ml-4">
          <a href={CV} target="_blank" download="CV - Juan Cruz Etchart">
            Currículum
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
