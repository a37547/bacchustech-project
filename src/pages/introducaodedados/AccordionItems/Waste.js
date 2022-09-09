import React, { Component } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";

class Waste extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Row className="mt-2 mb-3 mx-0">
          <div>
            <div className="d-flex flex-column mb-2">
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "rgba(13,27,62,0.7)",
                }}
              >
                Resíduos
              </span>
              * Preencha com o valor da quantidade total de vinho produzido no
              ano (não fazer diferenciação por tipo de vinho)
            </div>
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Geral</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Engaço (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="1">Co - produto</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Bagaço (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="1">Co - produto</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Borra (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="1">Co - produto</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Terras diatomáceas (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="1">Co - produto</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Resíduos municipais (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Vidro</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Comida e bebida (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Verde (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Mistura (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Plástico</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Mistura (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={4}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={4}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        type="number"
                        className="mb-3"
                        size="sm"
                        placeholder="Código"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>HDPE (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>LDPE (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>PET (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>PP (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>PVC (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Papel</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Mistura (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Cartão (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Ferro velho</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Fios</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Mistura (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Aço (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Alumínio (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Latas</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Mistura (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Madeira</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Mistura (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Baterias</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Doméstica (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Carro (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>Eletrónicos</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>Pneus</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Form.Label>
                    <span>Congelador (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Frigorífico (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col md={12}>
                  <Form.Label>
                    <span>Alumínio (ton)</span>
                  </Form.Label>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" />
                    </Col>
                    <Col md={6}>
                      <Form.Select>
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>Eletrónicos</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>Óleo</Accordion.Header>
              <Accordion.Body>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <Form.Control type="number" className="mb-3" size="sm" />
                    </Col>
                    <Col md={6}>
                      <Form.Select size="sm">
                        <option>Selecionar uma opção</option>
                        <option value="2">Aterro</option>
                        <option value="3">Compostagem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Form>
    );
  }
}

export default Waste;
