import React, { Component } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppNavbar from "../../navbar";
import "./style.css";

class Registar extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNavbar />
        <Row
          style={{ height: "calc(100vh - 60px)", backgroundColor: "#f3fff2" }}
          className="m-0 d-flex justify-content-center align-items-center"
        >
          <div
            style={{
              width: "85%",
              height: "85%",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            className="bg-white d-flex"
          >
            <Col
              className="d-flex flex-column justify-content-center"
              md={5}
              style={{ borderRight: "1px solid lightgray" }}
            >
              <span
                style={{ fontSize: "1.7rem", fontWeight: "600" }}
                className="text-center"
              >
                Registo
              </span>
              <span
                style={{
                  fontSize: "1.4rem",
                  textAlign: "center",
                  fontWeight: "500",
                }}
                className="my-3"
              >
                Como funciona o registo?
              </span>
              <span
                className="px-5"
                style={{
                  textAlign: "justify",
                  fontSize: "1.2rem",
                  fontWeight: "300",
                }}
              >
                O registo a ser feito é o registo da empresa. Ao fazer o registo
                da mesma, um administrador do sistema Bacchustech receberá um
                email com o registo solicitado. Após o registo ser aceite, esse
                utilizador ficará com um perfil de administrador e conseguirá
                registar utilizadores secundários a partir do sistema. A estes
                utilizadores será atribuída uma palavra passe que terá de ser
                alterada no primeiro login.
              </span>
            </Col>
            <Col
              md={7}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Form
                className="d-flex flex-column align-items-center my-3"
                style={{ width: "85%" }}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nome da empresa</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserir nome da empresa"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Morada da empresa</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserir morada da empresa"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Inserir email"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Nome de utilizador</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Inserir nome de utilizador"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Palavra-passe</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Inserir palavra-passe"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  style={{ backgroundColor: "#466144" }}
                  type="submit"
                  className="my-3 px-5 w-75"
                  size="sm"
                >
                  Registar
                </Button>
              </Form>

              <div className="text-center">
                <span>
                  Já tem uma conta?{" "}
                  <Link
                    to="/entrar"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Entrar
                  </Link>
                </span>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default Registar;
