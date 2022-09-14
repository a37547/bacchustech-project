import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";

const Waste = () => {
  return (
    <Tabs defaultActiveKey="winemaking" id="wasteTab" className="mb-3">
      <Tab eventKey="winemaking" title="Vinificação">
        <Row className="mb-3">
          <Col>
            <span
              style={{
                fontSize: "0.9rem",
                fontStyle: "italic",
              }}
            >
              <span
                style={{
                  color: "rgb(80, 116, 77)",
                  fontSize: "1rem",
                  marginRight: "5px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Importante:
              </span>
              Caso a sua empresa compre mosto para vinificação, preencha com o
              valor da quantidade total de mosto comprado no ano. Formato: XX,X
              toneladas. O Brix é um dado importante para o cálculo de liberação
              natural de CO2 durante a fermentação. Você pode indicar um ºBrix
              médio.
            </span>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-4">
            <Row>
              <Col md={6} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Engaço</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição direta em solo</option>
                    <option>Deposição em aterro</option>
                    <option>Tratamento mecânico seguido de compostagem</option>
                    <option>Valorização energética (incineração)</option>
                    <option>
                      Valorização orgânica (compostagem e/ou digestão aeróbia)
                    </option>
                    <option>Outro processo de valorização</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="mb-4">
            <Row>
              <Col md={6} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Bagaço</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição direta em solo</option>
                    <option>Deposição em aterro</option>
                    <option>Tratamento mecânico seguido de compostagem</option>
                    <option>Valorização energética (incineração)</option>
                    <option>
                      Valorização orgânica (compostagem e/ou digestão aeróbia)
                    </option>
                    <option>Outro processo de valorização</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="mb-4">
            <Row>
              <Col md={6} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Borra</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição direta em solo</option>
                    <option>Deposição em aterro</option>
                    <option>Tratamento mecânico seguido de compostagem</option>
                    <option>Valorização energética (incineração)</option>
                    <option>
                      Valorização orgânica (compostagem e/ou digestão aeróbia)
                    </option>
                    <option>Outro processo de valorização</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="mb-4">
            <Row>
              <Col md={6} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Terras diatomáceas usadas</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição direta em solo</option>
                    <option>Deposição em aterro</option>
                    <option>Tratamento mecânico seguido de compostagem</option>
                    <option>Valorização energética (incineração)</option>
                    <option>
                      Valorização orgânica (compostagem e/ou digestão aeróbia)
                    </option>
                    <option>Outro processo de valorização</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="bottling" title="Engarrafamento">
        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Vidro
            </span>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>Mistura</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Plástico
            </span>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>Mistura</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>HDPE</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>LDPE</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>PET</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>PP</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>PVC</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label
                style={{ color: "transparent" }}
                className="d-none d-md-flex"
              >
                .
              </Form.Label>
              <Form.Select size="sm">
                <option>Deposição em aterro</option>
                <option>Tratamento mecânico seguido de reciclagem</option>
                <option>Valorização energética (incineração)</option>
                <option>Outro processo de valorização</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Papel
            </span>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Mistura</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>Tratamento mecânico seguido de reciclagem</option>
                    <option>Valorização energética (incineração)</option>
                    <option>Outro processo de valorização</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Cartão</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>Tratamento mecânico seguido de reciclagem</option>
                    <option>Valorização energética (incineração)</option>
                    <option>Outro processo de valorização</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4"></Row>
      </Tab>
      <Tab eventKey="general" title="Geral">
        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Resíduos equilaventes aos municipais
            </span>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Vidro</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Plástico/Metal</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Papel</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Indiferenciados</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Ferro velho
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Fios
            </span>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Mistura</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Aço</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Alumínio</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Latas
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Mistura</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Madeira
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Mistura</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Baterias
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Domésticas</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Máquinas e equip.</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Pneus
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Todos os tipos</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Eletrónicos
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Equip. informáticos</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Equip. refrigeração</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Óleos e lubrificantes
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Máquinas e equip.</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-2">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Resíduos sólidos provenientes do tratamento de águas residuais
            </span>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Lamas</Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Deposição em aterro</option>
                    <option>
                      Tratamento mecânico seguido de reciclagem e/ou compostagem
                    </option>
                    <option>Reutilização</option>
                    <option>Reciclagem</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
};

export default Waste;
