import React from "react";

function Social() {
  return (
    <div>
      <ul className="flex flex-col gap-6 text-2xl items-center justify-end fixed left-10 bottom-0 right-auto z-50 w-[40px] h-[250px] text-white after:border after:border-white after:h-[90px] after:w">
        <li className="absolute top-[30px] hover:text-detail transition duration-150 ease-in-out hover:animate-bounce">
          {" "}
          <a href="https://github.com/JuanCruzEtchart" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="absolute top-[90px] hover:text-detail transition duration-150 ease-in-out hover:animate-bounce	">
          {" "}
          <a
            href="https://www.linkedin.com/in/juan-cruz-etchart/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Social;
