import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./navbar";
import Sidebar from "./sidebar";
import IntroducaoDeDados from "./pages/introducaodedados";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Entrar from "./pages/entrar";
import Registar from "./pages/registar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/registar" element={<Registar />} />
        <Route path="/introducaodedados" element={<IntroducaoDeDados />} />
      </Routes>
    </div>
  );
}

export default App;
