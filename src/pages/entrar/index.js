import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AppNavbar from "../../navbar";
import banner3 from "../../banner3.jpg";
import { Link } from "react-router-dom";

class Entrar extends Component {
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
              width: "75%",
              height: "75%",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            className="bg-white d-flex"
          >
            <Col
              md={6}
              className="d-flex flex-column align-items-around justify-content-center px-5"
            >
              <div
                className="d-flex justify-content-center my-3"
                style={{ height: "75%" }}
              >
                <img src={banner3} style={{ height: "100%" }} />
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <span
                className="text-center"
                style={{ fontSize: "1.7rem", fontWeight: "600" }}
              >
                Bacchutech
              </span>
              <span
                className="text-center my-3"
                style={{ fontSize: "1.2rem", fontWeight: "600" }}
              >
                Bem-vindo
              </span>
              <Form className="d-flex flex-column align-items-center my-3">
                <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                  <Form.Label>Nome de utilizador</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserir nome de utilizador"
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                  <Form.Label>Palavra-passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserir palavra-passe"
                  />
                </Form.Group>
                <span>Esqueceu-se da palavra-passe?</span>

                <Button
                  style={{ backgroundColor: "#466144" }}
                  type="submit"
                  className="my-3 px-5"
                >
                  <Link
                    to="/introducaodedados"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Entrar
                  </Link>
                </Button>
              </Form>
              <div className="text-center">
                <span>
                  Não tem uma conta?{" "}
                  <Link
                    to="/registar"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Registe-se
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

export default Entrar;
