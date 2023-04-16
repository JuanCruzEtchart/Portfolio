import React from "react";
import logo from "../logo.svg";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Social from "./Social";
import About from "./About";
import CustomScrollbar from "./CustomScrollbar";
import "../assets/css/App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App bg-[#0A192F] flex justify-center overflow-x-hidden h-screen w-screen scrollbar-hide">
        <CustomScrollbar className="relative z-50">
          <div className="h-screen w-screen">
            <Navbar className="app__navbar" />
            <div className="App-header w-screen flex flex-col justify-start items-center">
              {/* <Navbar /> */}
              <Introduction />
              <Social />
              <About />
            </div>
          </div>
        </CustomScrollbar>
      </div>
    </React.Fragment>
  );
}

export default App;
