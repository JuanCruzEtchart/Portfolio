import React from "react";

function Introduction() {
  return (
    <div className="Introduction max-w-[1000px] flex flex-col justify-center w-screen  min-h-screen h-screen">
      <h1 className="text-lg text-detail">Hola! Mi nombre es</h1>
      <div className="text-6xl text-white mb-[28px] overflow-hidden">Juan Cruz Etchart.</div>
      <div className="texto text-xl text-[#c9c9c9] max-w-[500px]">
        Soy un desarrollador full stack especializado en aplicaciones web mobile
        first y responsive. Actualmente, estoy centrado en construir una app web
        de visualización de datos de telemetría en{" "}
        <a href="https://mkutech.com/en/" target="__blank" className="text-detail">
          MKU Tech
        </a>
        .
      </div>
    </div>
  );
}

export default Introduction;
