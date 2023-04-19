import React, { useState } from "react";
import logo from "../logo.svg";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Social from "./Social";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import CustomScrollbar from "./CustomScrollbar";
import "../assets/css/App.css";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log(currentScrollY);
    console.log("hola");
    if (currentScrollY > 0 && navbarVisible) {
      setNavbarVisible(false);
    } else if (currentScrollY === 0 && !navbarVisible) {
      setNavbarVisible(true);
    }
  };

  return (
    <React.Fragment>
      <div onScroll={handleScroll}>
        <div className="App bg-[#0A192F] flex justify-center overflow-x-hidden h-screen w-screen">
          <CustomScrollbar className="relative z-50">
            <div className="h-screen w-screen">
              {navbarVisible && <Navbar className="app__navbar" />}
              <div className="App-header w-screen flex flex-col justify-start items-center">
                <Introduction />
                <Social />
                <About />
                <Experience />
                <Projects />
              </div>
            </div>
          </CustomScrollbar>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
