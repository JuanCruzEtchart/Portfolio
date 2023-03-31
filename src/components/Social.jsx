import React from "react";

function Social() {
  return (
    <div>
      <ul className="flex flex-col gap-6 text-2xl items-center fixed left-10 bottom-0 right-auto z-index: 10 w-[40px] text-detail after:border after:border-detail after:h-[90px] after:w">
        <li>
          {" "}
          <a href="https://github.com/JuanCruzEtchart" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="flex-grow">
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
