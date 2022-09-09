import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Electricity = () => {
  return (
    <Form>
      <Row className="mt-2 mb-3 mx-0">
        <Col md={12} className="mb-4">
          <Form.Group
            controlId="formGridEmail"
            style={{ height: "100%", maxHeight: "100%" }}
          >
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
                  Eletricidade
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                  }}
                >
                  * Consumo de energia utilizada anualmente, de acordo com as
                  tarifas.
                </span>
              </div>
            </div>

            <Row>
              <Col md={6}>
                <Form.Label>Consumo total anual (kWh)</Form.Label>
                <Form.Control type="number" className="mb-3" size="sm" />
              </Col>
              <Col md={12}>
                <Form.Label className="d-flex flex-column">
                  <span>Consumo de eletricidade comprada</span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      fontWeight: "400",
                    }}
                  >
                    * Preencha o bloco da percentagem se souber a % de energias
                    renováveis - consulte a sua fatura.
                  </span>
                </Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Control type="number" className="mb-3" size="sm" />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="number"
                      placeholder="%"
                      className="mb-3"
                      size="sm"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Form.Label className="d-flex flex-column">
                  <span>
                    Produzido a partir de energia eólica / solar (kWh)
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      fontWeight: "400",
                    }}
                  >
                    * Preencha se souber o consumo de energia a partir de fonte
                    eólica / solar - consulte a sua fatura.
                  </span>
                </Form.Label>
                <Form.Control type="number" className="mb-3" size="sm" />
              </Col>
              <Col md={6}>
                <Form.Label className="d-flex flex-column">
                  <span>Produzido a partir de biocombustível (kWh)</span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      fontWeight: "400",
                    }}
                  >
                    * Preencha se souber o consumo de energia a partir de fontes
                    de biocombustível - consulte a sua fatura.
                  </span>
                </Form.Label>
                <Form.Control type="number" className="mb-3" size="sm" />
              </Col>
              <Col md={6}>
                <Form.Label className="d-flex flex-column">
                  <span>Produzido a partir de gás natural (kWh)</span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      fontWeight: "400",
                    }}
                  >
                    * Preencha se souber o consumo de energia a partir de fontes
                    de gás natural - consulte a sua fatura.
                  </span>
                </Form.Label>
                <Form.Control type="number" className="mb-3" size="sm" />
              </Col>
              <Col md={6}>
                <Form.Label className="d-flex flex-column">
                  <span>Produzido a partir de óleo (kWh)</span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      fontWeight: "400",
                    }}
                  >
                    * Preencha se souber o consumo de energia a partir de fontes
                    de óleo - consulte a sua fatura.
                  </span>
                </Form.Label>
                <Form.Control type="number" className="mb-3" size="sm" />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Electricity;
