import React from "react";
/* import "../assets/css/Navbar.css"; */

function Navbar() {
  return (
    <nav className="navbar w-full flex items-center justify-end h-[100px]">
      <ol
        className="navbar__links text-white list-roman flex justify-evenly w-[50%] font text-[13px] items-center marker:text-[red]"
        type="i"
      >
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
        <li className="list-none p-3 border-2 border-orange-700 rounded-[5px]">
          <a>Currículum</a>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
