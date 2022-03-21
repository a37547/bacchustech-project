import React, { Component } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import AppNavbar from "../../navbar";
import Sidebar from "../../sidebar";

class IntroducaoDeDados extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNavbar />
        <Sidebar />
        <div
          style={{
            position: "absolute",
            left: "270px",
            top: "60px",
            width: "calc(100vw - 270px)",
          }}
        >
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>
                  Produção do vinho a partir da receção da uva
                </span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="2x"
                  className="text-success"
                />
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Vinho</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Selecionar opção</option>
                        <option value="1">Tinto</option>
                        <option value="2">Branco</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Quantidade (L/ano)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserir quantidade"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" placeholder="Inserir nome" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Tipos de uvas</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Selecionar opção</option>
                        <option value="1">Uva Teste 1</option>
                        <option value="2">Uva Teste 2</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>% de kg/L</Form.Label>
                      <Form.Control type="text" placeholder="Inserir %" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Distância origem/adega</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserir distância"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Nº de viagens</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Tipo de transporte</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Selecionar opção</option>
                        <option value="1">Transporte Teste 1</option>
                        <option value="2">Transporte Teste 2</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Button variant="primary" type="submit">
                    Gravar
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>
                  Produção do vinho a partir da receção do mosto
                </span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="2x"
                  className="text-success"
                />
              </Accordion.Header>
              <Accordion.Body>Teste</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>
                  Processo de fermentação
                </span>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  size="2x"
                  className="text-danger"
                />
              </Accordion.Header>
              <Accordion.Body>Teste</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>
                  Processo de embalamento
                </span>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  size="2x"
                  className="text-danger"
                />
              </Accordion.Header>
              <Accordion.Body>Teste</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>Consumo de água</span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="2x"
                  className="text-success"
                />
              </Accordion.Header>
              <Accordion.Body>Teste</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>
                  Consumo de energia
                </span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="2x"
                  className="text-success"
                />
              </Accordion.Header>
              <Accordion.Body>Teste</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <span style={{ marginRight: "0.5rem" }}>
                  Agente de limpezas
                </span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="2x"
                  className="text-success"
                />
              </Accordion.Header>
              <Accordion.Body>Teste</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default IntroducaoDeDados;
