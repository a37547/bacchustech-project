import React, { Component, Fragment } from "react";
import {
  Accordion,
  Alert,
  Button,
  Col,
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import AppNavbar from "../../layout/navbar";
import "../../assets/styles/planeamento.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Bar, Chart, Doughnut, Pie } from "react-chartjs-2";

class Planeamento extends Component {
  static contextType = AppContext;

  state = { years: [], selectedYear: {} };

  componentDidMount() {
    const years = [{ number: 2021 }, { number: 2022 }, { number: 2023 }];

    const selectedYear = years.find(
      (year) => year.number === new Date().getFullYear()
    );

    this.setState({ years, selectedYear });
  }

  render() {
    const { years, selectedYear } = this.state;

    return (
      <Fragment>
        <AppNavbar />
        <Row className="mt-3 py-0 px-5">
          <div>
            <div className="text-center">
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Bad Script",
                  fontSize: "48px",
                }}
              >
                Plano de ações
              </span>
            </div>
            <Row className="mt-4 mb-4">
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
            <Alert>
              Medir e registar o os valores de volume de água consumidos.
            </Alert>
            <Alert>
              Medir e registar o os valores de volume médio de água utilizado na
              lavagem de equipamentos em cada processo de produção.
            </Alert>
            <Alert>
              Medir e registar o os valores do parâmetro Carência Química de
              Oxigénio (CQO) do efluente tratado para comparação com os limites
              estipulados por lei.
            </Alert>
            <Alert>
              Encaminhar as águas residuais para um tratamento adequado,
              cumprindo os parâmetros de descarga estabelecidos pelo Decreto-Lei
              nº 236/98.
            </Alert>
          </div>
        </Row>
      </Fragment>
    );
  }
}

export default Planeamento;

/*

<Accordion className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Container fluid>
                    <Row>
                      <Col
                        md={2}
                        className="d-flex align-items-center justify-content-center"
                      >
                        Nome do indicador
                      </Col>
                      <Col>
                        <Row className="d-flex justify-content-evenly">
                          <Col className="text-center">Atual</Col>
                          <Col className="text-center">Limite</Col>
                          <Col className="text-center">Anterior</Col>
                        </Row>
                        <Row className="d-flex justify-content-evenly">
                          <Col className="text-center">
                            <span style={{ fontWeight: "400" }}>10</span>
                          </Col>
                          <Col className="text-center">
                            <span style={{ fontWeight: "400" }}>20</span>
                          </Col>
                          <Col className="text-center">
                            <span style={{ fontWeight: "400" }}>15</span>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          size="2x"
                          className="text-danger"
                        />
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Header>
                <Accordion.Body>
                  <Row style={{ height: "200px" }}>
                    <Col md={4}>
                      <Doughnut
                        dataKey="value"
                        data={{
                          labels: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
                          datasets: [
                            {
                              data: [300, 50, 100],
                              backgroundColor: [
                                "#0275d8",
                                "#f0ad4e",
                                "#5cb85c",
                              ],
                              hoverBackgroundColor: [
                                "#5cb85c",
                                "#0275d8",
                                "#d9534f",
                              ],
                            },
                          ],
                        }}
                        style={{
                          height: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                        className="d-flex justify-content-center"
                      />
                    </Col>
                    <Col md={4}>
                      <Pie
                        dataKey="value"
                        data={{
                          labels: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
                          datasets: [
                            {
                              data: [300, 50, 100],
                              backgroundColor: [
                                "#0275d8",
                                "#f0ad4e",
                                "#5cb85c",
                              ],
                              hoverBackgroundColor: [
                                "#5cb85c",
                                "#0275d8",
                                "#d9534f",
                              ],
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
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Container fluid>
                    <Row>
                      <Col
                        md={2}
                        className="d-flex align-items-center justify-content-center"
                      >
                        Nome do indicador
                      </Col>
                      <Col>
                        <Row className="d-flex justify-content-evenly">
                          <Col className="text-center">Atual</Col>
                          <Col className="text-center">Limite</Col>
                          <Col className="text-center">Anterior</Col>
                        </Row>
                        <Row className="d-flex justify-content-evenly">
                          <Col className="text-center">
                            <span style={{ fontWeight: "400" }}>10</span>
                          </Col>
                          <Col className="text-center">
                            <span style={{ fontWeight: "400" }}>20</span>
                          </Col>
                          <Col className="text-center">
                            <span style={{ fontWeight: "400" }}>15</span>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="2x"
                          className="text-success"
                        />
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Header>
                <Accordion.Body>
                  <Row style={{ height: "200px" }}>
                    <Col md={4}>
                      <Doughnut
                        dataKey="value"
                        data={{
                          labels: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
                          datasets: [
                            {
                              data: [300, 50, 100],
                              backgroundColor: [
                                "#0275d8",
                                "#f0ad4e",
                                "#5cb85c",
                              ],
                              hoverBackgroundColor: [
                                "#5cb85c",
                                "#0275d8",
                                "#d9534f",
                              ],
                            },
                          ],
                        }}
                        style={{
                          height: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                        className="d-flex justify-content-center"
                      />
                    </Col>
                    <Col md={4}>
                      <Pie
                        dataKey="value"
                        data={{
                          labels: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
                          datasets: [
                            {
                              data: [300, 50, 100],
                              backgroundColor: [
                                "#0275d8",
                                "#f0ad4e",
                                "#5cb85c",
                              ],
                              hoverBackgroundColor: [
                                "#5cb85c",
                                "#0275d8",
                                "#d9534f",
                              ],
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
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>*/
