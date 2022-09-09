import React, { Component, Fragment } from "react";
import { AppContext } from "../../context/appContext";
import AppNavbar from "../../layout/navbar";
import { Bar, Chart, Doughnut, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import faker from "@faker-js/faker";

const data = {
  labels: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#0275d8", "#f0ad4e", "#5cb85c"],
      hoverBackgroundColor: ["#5cb85c", "#0275d8", "#d9534f"],
    },
  ],
};

const data2 = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
  datasets: [
    {
      label: "Gastos de energia em 2021",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c",
      borderWidth: 1,
      hoverBackgroundColor: "#d9534f",
      hoverBorderColor: "#d9534f",
      borderCapStyle: "round",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

class Relatorios extends Component {
  static contextType = AppContext;

  state = {
    months: [],
    onlyYear: false,
    selectedMonth: {},
    years: [],
    selectedYear: {},
  };

  componentDidMount() {
    const months = [
      { name: "Janeiro", number: 1 },
      { name: "Fevereiro", number: 2 },
      { name: "Março", number: 3 },
      { name: "Abril", number: 4 },
      { name: "Maio", number: 5 },
      { name: "Junho", number: 6 },
      { name: "Julho", number: 7 },
      { name: "Agosto", number: 8 },
      { name: "Setembro", number: 9 },
      { name: "Outubro", number: 10 },
      { name: "Novembro", number: 11 },
      { name: "Dezembro", number: 12 },
    ];

    const selectedMonth = months.find(
      (month) => month.number === new Date().getMonth() + 1
    );

    const years = [{ number: 2021 }, { number: 2022 }];

    const selectedYear = years.find(
      (year) => year.number === new Date().getFullYear()
    );

    this.setState({ months, selectedMonth, years, selectedYear });
  }

  render() {
    const { onlyYear, months, selectedMonth, years, selectedYear } = this.state;

    return (
      <Fragment>
        <AppNavbar />
        <Row className="mt-3 py-0 mx-5">
          <div className="text-center">
            <span
              style={{
                fontSize: "1.5rem",
                fontFamily: "Bad Script",
                fontSize: "48px",
              }}
            >
              Relatórios
            </span>
          </div>
          <Row className="mt-4">
            <Col xs={4} sm={3} md={2} lg={1}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    color: "white",
                    backgroundColor: "rgb(80, 116, 77)",
                    border: "2px solid rgb(80, 116, 77)",
                    padding: "5px 20px",
                  }}
                  variant="primary"
                  id="dropdown-basic"
                >
                  {selectedYear.number}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                  }}
                >
                  {years.map((year) => (
                    <Dropdown.Item
                      active={year.number === selectedYear.number}
                      onClick={() => {
                        this.setState({ selectedYear: year });
                      }}
                    >
                      {year.number}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row className="my-4">
            <Col
              md={4}
              className="d-flex justify-content-center my-md-5"
              style={{ height: "200px", maxHeight: "200px" }}
            >
              <Bar
                data={data2}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                }}
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center my-md-5"
              style={{ height: "200px", maxHeight: "200px" }}
            >
              <Bar
                options={{
                  indexAxis: "y",
                  elements: {
                    bar: {
                      borderWidth: 2,
                    },
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "right",
                    },
                    title: {
                      display: true,
                      text: "Exemplo",
                    },
                  },
                }}
                data={{
                  labels,
                  datasets: [
                    {
                      label: "Exemplo 1",
                      data: labels.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                      ),
                      borderColor: "rgb(255, 99, 132)",
                      backgroundColor: "rgba(255, 99, 132, 0.5)",
                    },
                    {
                      label: "Exemplo 2",
                      data: labels.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                      ),
                      borderColor: "rgb(53, 162, 235)",
                      backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                  ],
                }}
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col
              md={4}
              style={{ height: "200px", maxHeight: "200px" }}
              className="d-flex justify-content-center my-md-5"
            >
              <Pie
                dataKey="value"
                data={data}
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={4} style={{ height: "200px", maxHeight: "200px" }}>
              <Doughnut
                dataKey="value"
                data={data}
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                className="d-flex justify-content-center my-md-5"
              />
            </Col>
            <Col md={4} style={{ height: "200px", maxHeight: "200px" }}>
              <Bar
                data={data2}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                }}
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                className="d-flex justify-content-center my-md-5"
              />
            </Col>
            <Col
              md={4}
              style={{ height: "200px", maxHeight: "200px" }}
              className="d-flex justify-content-center my-md-5"
            >
              <Pie
                dataKey="value"
                data={data}
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>
          </Row>
        </Row>
      </Fragment>
    );
  }
}

export default Relatorios;
