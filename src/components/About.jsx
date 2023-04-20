import React from "react";
import Foto from "../assets/images/Foto.png";

function About() {
  return (
    <div
      className="flex flex-col text-white text-2xl mt-36 w-screen max-w-[1000px] "
      id="About"
    >
      <div className="flex items-center mb-12">
        <h2 className="h-4ll text-detail">I.</h2>
        <div className="ml-2 w-[auto] mr-5 text text-3xl" href="#">
          Sobre mí
        </div>
        <div className="border-b border-0 border-detail w-[250px]"></div>
      </div>
      <div className="text-xl flex justify-between gap-16">
        <div className="w-[50%] max-w-[500px]">
          <div className="max-w-[500px] mb-6">
            <p className="mb-6">
              Hola! Mi nombre es Juan Cruz y me encanta crear aplicaciones web.
              Siempre tuve interés en la computación y la programación, y
              durante 2022 decidí hacer un bootcamp en Digital House sobre
              desarrollo web full stack.
            </p>
            <p>
              A día de hoy me encuentro desarrollando una aplicación completa en
              React.js para la visualización de datos de sensores y
              posicionamiento GPS con la API de Google Maps en MKU Tech.
            </p>
          </div>
          <div className="mb-6">
            Estas son algunas de las tecnología que se usar:
          </div>
          <div className="flex gap-11 text-base marker:text-detail">
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>React.js</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>REST API</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className="relative w-[365px]">
          <img src={Foto} alt="" className="absolute max-w-[350px] rounded-[5px] z-10"/>
          <div className="absolute top-4 left-4 z-0 border-2 border-detail w-[350px] h-[308.266px] rounded-[5px]"></div>
          {/* <div className="absolute inset-0 rounded-lg transition duration-500"></div> */}
        </div>
      </div>
    </div>
  );
}
export default About;
