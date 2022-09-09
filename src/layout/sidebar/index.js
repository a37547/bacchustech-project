import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";
import IntroducaoDeDados from "../../pages/introducaodedados";
import Planeamento from "../../pages/planeamento";
import Relatorios from "../../pages/relatorios";

class Sidebar extends Component {
  state = { activeMenu: "dataIntroduction" };

  render() {
    return (
      <Row className="m-0 p-0">
        <Col
          className="p-0 m-0 d-none d-lg-flex"
          xs={1}
          lg={3}
          xl={2}
          style={{
            height: "100vh",
            backgroundColor: "white",
            borderRight: "1px solid rgb(80,116,177)",
          }}
        >
          <Row style={{ height: "100%" }}>
            <Col
              lg={12}
              className="d-none d-lg-flex justify-content-center align-items-center"
              style={{ height: "30%" }}
            >
              <div style={{ height: "60%", width: "50%", borderRadius: "50%" }}>
                <img
                  src={banner}
                  style={{
                    height: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
            <Col
              style={{ height: "70%" }}
              className="d-none d-lg-flex justify-content-center"
            >
              <ListGroup style={{ width: "75%" }}>
                <ListGroupItem
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: "1px solid rgb(80, 116, 77)",
                    borderRadius: 0,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    this.setState({ activeMenu: "dataIntroduction" })
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span
                    className="d-none d-lg-flex"
                    style={{
                      color: "rgb(80,116,77)",
                      fontWeight:
                        this.state.activeMenu == "dataIntroduction"
                          ? "bold"
                          : "",
                    }}
                  >
                    Introdução de dados
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: "1px solid rgb(80,116,77)",
                    borderRadius: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => this.setState({ activeMenu: "goals" })}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span
                    className="d-none d-lg-flex"
                    style={{
                      color: "rgb(80,116,77)",
                      fontWeight:
                        this.state.activeMenu == "goals" ? "bold" : "",
                    }}
                  >
                    Metas
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: "1px solid rgb(80,116,77)",
                    borderRadius: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => this.setState({ activeMenu: "reports" })}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span
                    className="d-none d-lg-flex"
                    style={{
                      color: "rgb(80,116,77)",
                      fontWeight:
                        this.state.activeMenu == "reports" ? "bold" : "",
                    }}
                  >
                    Relatórios
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  className="text-white d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: "1px solid rgb(80,116,77)",
                    borderRadius: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => this.setState({ activeMenu: "" })}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span
                      className="d-none d-lg-flex"
                      style={{
                        color: "rgb(80,116,77)",
                      }}
                    >
                      Terminar sessão
                    </span>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          lg={9}
          xl={10}
          className="py-4 px-4"
          style={{ backgroundColor: "rgb(222,222,222,0.5)" }}
        >
          <Row>
            <Col>
              <Button style={{ backgroundColor: "rgb(80, 116, 77)" }}>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{
                    marginRight: "5px",
                  }}
                />
                Menu
              </Button>
            </Col>
          </Row>

          {this.state.activeMenu == "dataIntroduction" && <IntroducaoDeDados />}
          {this.state.activeMenu == "goals" && <Planeamento />}
          {this.state.activeMenu == "reports" && <Relatorios />}
        </Col>
      </Row>
    );
  }
}

export default Sidebar;
