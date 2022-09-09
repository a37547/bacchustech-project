import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Bar, Chart, Pie } from "react-chartjs-2";
import { AppContext } from "../../context/appContext";
import AppNavbar from "../../layout/navbar";
import IndicadoresAmbientais from "../indicadoresambientais";
import Relatorios from "../relatorios";
import faker from "@faker-js/faker";
import "../../assets/styles/avaliacaoambiental.css";

const data2 = {
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Septembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  datasets: [
    {
      label: "Gastos de energia em 2021",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c",
      borderWidth: 1,
      hoverBackgroundColor: "#d9534f",
      hoverBorderColor: "#d9534f",
      borderCapStyle: "round",
      data: [65, 59, 80, 81, 56, 55, 40, 23, 56, 76, 43, 78],
    },
  ],
};

const data3 = {
  labels: ["2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "Gastos de energia anuais",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c",
      borderWidth: 1,
      hoverBackgroundColor: "#d9534f",
      hoverBorderColor: "#d9534f",
      borderCapStyle: "round",
      data: [65, 59, 80, 81],
    },
  ],
};

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Septembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

class AvaliacaoAmbiental extends Component {
  static contextType = AppContext;

  state = {
    key: "",
  };

  componentDidMount() {
    const key = "indicadoresambientais";

    this.setState({ key });
  }

  render() {
    const { key } = this.state;

    return (
      <div>
        <div
          className={`py-4 px-4 ${
            this.context.isSidebarOpen ? `sidebar-open` : `sidebar-closed`
          }`}
          onClick={() => {}}
          style={{
            backgroundColor: "#F1F4F6",
            minHeight: "calc(100vh - 60px)",
          }}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => this.setState({ key: k })}
            className="mb-3"
          >
            <Tab
              eventKey="indicadoresambientais"
              title="Indicadores ambientais"
            >
              <IndicadoresAmbientais />
            </Tab>
            <Tab eventKey="graficos" title="Gráficos">
              <Relatorios />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default AvaliacaoAmbiental;
