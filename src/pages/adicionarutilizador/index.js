import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import AppNavbar from "../../layout/navbar";

class AdicionarUtilizador extends Component {
  static contextType = AppContext;

  state = {};
  render() {
    return (
      <div>
        <div
          className={`py-4 px-4 ${
            this.context.isSidebarOpen ? `sidebar-open` : `sidebar-closed`
          }`}
        >
          <div className="p-3">
            <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Adicionar utilizador
            </span>
            <Form className="pt-4">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Inserir nome..." />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Inserir email..." />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Perfil</Form.Label>
                <Form.Select defaultValue="Selecione uma opção">
                  <option>Utilizador básico</option>
                  <option>Administrador</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "rgb(80, 116, 77)" }}
              >
                <Link
                  to="/gestaodeutilizadores"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Adicionar
                </Link>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdicionarUtilizador;
