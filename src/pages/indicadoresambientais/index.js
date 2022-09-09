import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faBolt,
  faFaucetDrip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import "../../assets/styles/indicadoresambientais.css";

class IndicadoresAmbientais extends Component {
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
      (month) => month.number == new Date().getMonth() + 1
    );

    const years = [{ number: 2021 }, { number: 2022 }];

    const selectedYear = years.find(
      (year) => year.number == new Date().getFullYear()
    );

    this.setState({ months, selectedMonth, years, selectedYear });
  }

  render() {
    const { onlyYear, months, selectedMonth, years, selectedYear } = this.state;

    return (
      <div>
        <Row className="mx-0 my-3 p-0">
          {!onlyYear && (
            <Col xs={3} md={2} lg={1} className="p-0 mx-1">
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    width: "100%",
                    color: "white",
                    backgroundColor: "rgb(80, 116, 77)",
                    border: "2px solid rgb(80, 116, 77)",
                  }}
                  id="dropdown-basic"
                >
                  {selectedMonth.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {months.map((month) => (
                    <Dropdown.Item
                      key={month.number}
                      active={month.number == selectedMonth.number}
                      onClick={() => {
                        this.setState({ selectedMonth: month });
                      }}
                    >
                      {month.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          )}

          <Col xs={3} md={2} lg={1} className="p-0 mx-1">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "rgb(80, 116, 77)",
                  border: "2px solid rgb(80, 116, 77)",
                }}
                variant="primary"
                id="dropdown-basic"
                className="px-4"
              >
                {selectedYear.number}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {years.map((year) => (
                  <Dropdown.Item
                    active={year.number == selectedYear.number}
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
          <Col
            xs={3}
            md={4}
            lg={2}
            className="p-0 mx-1 d-flex align-items-center"
          >
            <Form.Check
              type="checkbox"
              label="Apenas ano"
              checked={onlyYear}
              onChange={(e) =>
                this.setState({ onlyYear: e.currentTarget.checked })
              }
            />
          </Col>
        </Row>
        <Row className="p-0">
          <Col
            xs="12"
            sm="6"
            md="4"
            xl="3"
            className="mb-3 d-flex justify-content-center"
          >
            <Card
              style={{
                width: "18rem",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div
                  style={{ height: "60%", maxHeight: "60%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <Button className="border-success bg-white">
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="p-2 text-success"
                    />
                  </Button>

                  <span
                    style={{ fontSize: "2.5rem", fontWeight: 700 }}
                    className="p-2 text-success"
                  >
                    200
                  </span>
                </div>
                <div
                  style={{ height: "25%", maxHeight: "25%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <span
                    className="p-2"
                    style={{ fontSize: "1rem", fontWeight: 700 }}
                  >
                    Intens. Energética
                  </span>
                </div>
                <div
                  style={{ height: "15%", maxHeight: "15%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <span className="p-2">
                    <span className="text-success">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="mx-1">5%</span>
                    </span>{" "}
                    que o anterior
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs="12"
            sm="6"
            md="4"
            xl="3"
            className="mb-3 d-flex justify-content-center"
          >
            <Card
              style={{
                width: "18rem",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div
                  style={{ height: "60%", maxHeight: "60%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  {" "}
                  <Button className="border-success bg-white">
                    <FontAwesomeIcon
                      icon={faFaucetDrip}
                      className="p-2 text-success"
                    />
                  </Button>
                  <span
                    style={{ fontSize: "2.5rem", fontWeight: 700 }}
                    className="p-2 text-danger"
                  >
                    200
                  </span>
                </div>
                <div
                  style={{ height: "25%", maxHeight: "25%" }}
                  className="d-flex flex-column justify-content-around text-center"
                >
                  <span
                    className="p-2"
                    style={{ fontSize: "1rem", fontWeight: 700 }}
                  >
                    Intens. de uso de água
                  </span>
                </div>
                <div
                  style={{ height: "15%", maxHeight: "15%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <span className="p-2">
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faArrowUp} />
                      <span className="mx-1">5%</span>
                    </span>{" "}
                    que o anterior
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs="12"
            sm="6"
            md="4"
            xl="3"
            className="mb-3 d-flex justify-content-center"
          >
            <Card
              style={{
                width: "18rem",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div
                  style={{ height: "60%", maxHeight: "60%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <Button className="border-success bg-white">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="p-2 text-success"
                    />
                  </Button>

                  <span
                    style={{ fontSize: "2.5rem", fontWeight: 700 }}
                    className="p-2 text-danger"
                  >
                    200
                  </span>
                </div>
                <div
                  style={{ height: "25%", maxHeight: "25%" }}
                  className="d-flex flex-column justify-content-around text-center"
                >
                  <span
                    className="p-2"
                    style={{ fontSize: "1rem", fontWeight: 700 }}
                  >
                    Intens. de emissão de GEE
                  </span>
                </div>
                <div
                  style={{ height: "15%", maxHeight: "15%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <span className="p-2">
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faArrowUp} />
                      <span className="mx-1">5%</span>
                    </span>{" "}
                    que o anterior
                  </span>{" "}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs="12"
            sm="6"
            md="4"
            xl="3"
            className="mb-3 d-flex justify-content-center text-center"
          >
            <Card
              style={{
                width: "18rem",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div
                  style={{ height: "60%", maxHeight: "60%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <Button className="border-success bg-white">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="p-2 text-success"
                    />
                  </Button>

                  <span
                    style={{ fontSize: "2.5rem", fontWeight: 700 }}
                    className="p-2 text-success"
                  >
                    200
                  </span>
                </div>
                <div
                  style={{ height: "25%", maxHeight: "25%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <span
                    className="p-2"
                    style={{ fontSize: "1rem", fontWeight: 700 }}
                  >
                    Intens. resíduos de embalagens
                  </span>
                </div>
                <div
                  style={{ height: "15%", maxHeight: "15%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <span className="p-2">
                    <span className="text-success">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="mx-1">5%</span>
                    </span>{" "}
                    que o anterior
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IndicadoresAmbientais;

/*

<Tabs
            defaultActiveKey={key}
            onSelect={(key) => this.setState({ key: key })}
            id="uncontrolled-tab-example"
            className="mb-3 d-flex"
          >
            <Tab
              eventKey="indicadoresambientais"
              title="Indicadores Ambientais"
              className="d-flex justify-content-center w-100"
            >
              <div className="d-flex flex-column align-items-center justify-content-center my-3">
                <div>
                  <Row>
                    <Col
                      xs="12"
                      sm="6"
                      md="4"
                      xl="3"
                      className="mb-3 d-flex justify-content-center"
                    >
                      <Card
                        style={{
                          width: "18rem",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          border: "3px solid green",
                        }}
                      >
                        <Card.Body className="d-flex flex-column align-items-center">
                          <Button>
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="p-2"
                            />
                          </Button>

                          <span
                            style={{ fontSize: "2.5rem", fontWeight: 700 }}
                            className="p-2"
                          >
                            200
                          </span>
                          <span
                            className="p-2"
                            style={{ fontSize: "1rem", fontWeight: 700 }}
                          >
                            Intens. Energética
                          </span>
                          <span className="p-2">Lorem ipsum lorem</span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      xs="12"
                      sm="6"
                      md="4"
                      xl="3"
                      className="mb-3 d-flex justify-content-center"
                    >
                      <Card
                        style={{
                          width: "18rem",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          border: "3px solid green",
                        }}
                      >
                        <Card.Body className="d-flex flex-column align-items-center">
                          <Button>
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="p-2"
                            />
                          </Button>

                          <span
                            style={{ fontSize: "2.5rem", fontWeight: 700 }}
                            className="p-2"
                          >
                            200
                          </span>
                          <span
                            className="p-2"
                            style={{ fontSize: "1rem", fontWeight: 700 }}
                          >
                            Intens. de uso de água
                          </span>
                          <span className="p-2">Lorem ipsum lorem</span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      xs="12"
                      sm="6"
                      md="4"
                      xl="3"
                      className="mb-3 d-flex justify-content-center"
                    >
                      <Card
                        style={{
                          width: "18rem",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          border: "3px solid green",
                        }}
                      >
                        <Card.Body className="d-flex flex-column align-items-center">
                          <Button>
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="p-2"
                            />
                          </Button>

                          <span
                            style={{ fontSize: "2.5rem", fontWeight: 700 }}
                            className="p-2"
                          >
                            200
                          </span>
                          <span
                            className="p-2"
                            style={{ fontSize: "1rem", fontWeight: 700 }}
                          >
                            Intens. de emissão de GEE
                          </span>
                          <span className="p-2">Lorem ipsum lorem</span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      xs="12"
                      sm="6"
                      md="4"
                      xl="3"
                      className="mb-3 d-flex justify-content-center text-center"
                    >
                      <Card
                        style={{
                          width: "18rem",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          border: "3px solid red",
                        }}
                      >
                        <Card.Body className="d-flex flex-column align-items-center">
                          <Button>
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="p-2"
                            />
                          </Button>

                          <span
                            style={{ fontSize: "2.5rem", fontWeight: 700 }}
                            className="p-2"
                          >
                            200
                          </span>
                          <span
                            className="p-2"
                            style={{ fontSize: "1rem", fontWeight: 700 }}
                          >
                            Intens. resíduos de embalagens
                          </span>
                          <span className="p-2">Lorem ipsum lorem</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="relatorio" title="Relatório">
              <Relatorios />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              3
            </Tab>
          </Tabs>


*/
