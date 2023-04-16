import React from "react";
import Foto from "../assets/images/Foto.png";

function About() {
  return (
    <div
      className="flex flex-col text-white text-2xl mt-36 w-screen max-w-[1000px]"
      id="About"
    >
      <div className="flex items-center">
        <h2 className="h-4ll text-detail">I.</h2>
        <div className="ml-2 w-[auto] mr-5 text text-3xl" href="#">
          Sobre mí
        </div>
        <div className="border-b border-0 border-detail w-[250px]"></div>
      </div>
      <div className="text-xl">
        <div>
          <div className="">
            Hola! Mi nombre es Juan Cruz y me encanta crear aplicaciones web.
            Siempre tuve interés en la computación y la programación, y durante
            2022 decidí hacer un bootcamp en Digital House sobre desarrollo web
            full stack. A día de hoy me encuentro desarrollando una aplicación
            completa en React.js para la visualización de datos de sensores y
            posicionamiento GPS con la API de Google Maps en MKU Tech.
          </div>
          <div>Estas son algunas de las tecnología que se usar:</div>
        </div>
        <div>
          <img src={Foto} alt="" />
        </div>
      </div>
    </div>
  );
}
export default About;
