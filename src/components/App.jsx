import logo from "../logo.svg";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Social from "./Social";
import About from "./About";
import "../assets/css/App.css";

//AGREGAR ICONO DE JC EN LA ESQUINA SUPERIOR IZQUIERDA

function App() {
  return (
    <div className="App bg-[#0A192F]  w-screen flex justify-center overflow-x-hidden">
      <header className="App-header w-screen flex flex-col justify-start items-center">
        <Navbar />
        <Introduction />
        <Social />
        <About />
      </header>
    </div>
  );
}

export default App;
