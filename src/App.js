import "./App.css";
import AppNavbar from "./layout/navbar";
import Sidebar from "./layout/sidebar";
import IntroducaoDeDados from "./pages/introducaodedados";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Entrar from "./pages/entrar";
import ProtectedRoute from "./context/protectedRoute";
import IndicadoresAmbientais from "./pages/indicadoresambientais";
import Planeamento from "./pages/planeamento";
import Relatorios from "./pages/relatorios";
import GestaoDeUtilizadores from "./pages/gestaodeutilizadores";
import AdicionarUtilizador from "./pages/adicionarutilizador";
import { Component } from "react";
import { AppContext } from "./context/appContext";
import AvaliacaoAmbiental from "./pages/avaliacaoambiental";
import RegistrationSuccessful from "./pages/registrationSuccessful";
import PasswordChange from "./pages/passwordChange";
import RegistrationApprove from "./pages/gestaodeutilizadores";
import Register from "./pages/register";
import SomethingWentWrong from "./pages/somethingWentWrong";

class App extends Component {
  static contextType = AppContext;

  state = {};
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Entrar />} />
        <Route path="/register" element={<Register />} />
        <Route
          exact
          path="/introducaodedados"
          element={<IntroducaoDeDados />}
        />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route
            exact
            path="/avaliacaoambiental"
            element={<AvaliacaoAmbiental />}
          />
        </Route>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/goals" element={<Planeamento />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/reports" element={<Relatorios />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route
            exact
            path="/registration-approve"
            element={<RegistrationApprove />}
          />
        </Route>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route
            exact
            path="/adicionarutilizador"
            element={<AdicionarUtilizador />}
          />
        </Route>
        <Route
          exact
          path="/registration/success"
          element={<RegistrationSuccessful />}
        />
        <Route exact path="/passwordChange" element={<PasswordChange />} />
        <Route
          exact
          path="/something-went-wrong"
          element={<SomethingWentWrong />}
        />
      </Routes>
    );
  }
}

export default App;
