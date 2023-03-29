import logo from "../logo.svg";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import "../assets/css/App.css";

function App() {
  return (
    <div className="App bg-[#0A192F] h-screen min-h-[100vh] w-screen">
      <header className="App-header">
        <Navbar />
        <Introduction />
        {/* <div className="bg-[#0A192F] h-screen"></div> */}
        {/*         <img src={logo} className="App-logo" alt="logo" />
        <p id="carlitos"> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
