import React, { useState } from "react";
/* import "../assets/css/Navbar.css"; */
import CV from "../assets/CV - Juan Cruz Etchart.pdf";
import LogoJS from "../assets/images/LogoJC.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0 && navbarVisible) {
      setNavbarVisible(false);
    } else if (currentScrollY === 0 && !navbarVisible) {
      setNavbarVisible(true);
    }
  };

  return (
    <div onScroll={handleScroll}>
      {navbarVisible && (
        <nav className="navbar min-w-[calc(100vw-17px)] flex items-center justify-between h-[100px] fixed z-50 backdrop-blur shadow-default">
          <img src={LogoJS} alt="JC Logo" className="w-10 ml-10" />
          <ol
            className="navbar__links text-white list-roman flex justify-evenly font text-[13px] items-center mr-10"
            type="i"
          >
            <li className="flex items-center p-2.5">
              {/* <a className="items-center">Sobre mí</a> */}
              <div className="h-4ll text-detail">I.</div>
              <Link className="ml-2 w-auto hover:text-detail transition duration-150 ease-in-out" to="/#About">
                Sobre mí
              </Link>
            </li>
            <li className="flex items-center p-2.5">
              {/* <a>Experiencia</a> */}
              <div className="h-4ll text-detail">II.</div>
              <Link className="ml-2 hover:text-detail transition duration-150 ease-in-out" href="#">
                Experiencia
              </Link>
            </li>
            <li className="flex items-center p-2.5">
              {/* <a>Proyectos</a> */}
              <div className="h-4ll text-detail">III.</div>
              <Link className="ml-2 hover:text-detail transition duration-150 ease-in-out" href="#">
                Proyectos
              </Link>
            </li>
            <li className="flex items-center p-2.5">
              {/* <a>Contacto</a> */}
              <div className="h-4ll text-detail">IV.</div>
              <Link className="ml-2 hover:text-detail transition duration-150 ease-in-out" href="#">
                Contacto
              </Link>
            </li>
            <li className="list-none p-3 border-2 border-detail text-detail rounded-[5px] ml-4">
              <a href={CV} target="_blank" download="CV - Juan Cruz Etchart">
                Currículum
              </a>
            </li>
          </ol>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
