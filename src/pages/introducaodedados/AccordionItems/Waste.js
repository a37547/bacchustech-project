import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";

const Waste = () => {
  const [areLamasCaracterizadas, setAreLamasCaracterizadas] = useState(false);

  const [options, setOptions] = useState([
    "Comercialização como subproduto",
    "Compostagem",
    "Deposição direta em solo",
    "Deposição em aterro",
    "Digestão anaeróbica",
    "Valorização energética (incineração)",
  ]);

  const [options2, setOptions2] = useState([
    "Deposição em aterro",
    "Reciclagem em ciclo aberto",
    "Reciclagem em ciclo fechado",
    "Reutilização",
    "Valorização energética (incineração)",
  ]);

  const [options3, setOptions3] = useState([
    "Deposição em aterro para resíduos perigosos",
    "Reciclagem em ciclo aberto",
    "Reciclagem em ciclo fechado",
    "Recuperação",
    "Valorização e eliminação por incineração (CIRVER)",
    "Logística reversa",
  ]);

  const [options4, setOptions4] = useState([
    "Disposição direta em solo não produtivo",
    "Aplicação direta em solo agrícola",
  ]);

  return (
    <Tabs defaultActiveKey="winemaking" id="wasteTab" className="mb-3">
      <Tab eventKey="winemaking" title="Biomassa e terras diatomáceas">
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
              Selecione a partir das listas abaixo a opção que representa a
              destinação correspondente da maior parcela de cada tipo de
              resíduo.
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
                    {options.map((option) => (
                      <option>{option}</option>
                    ))}
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
                    {options.map((option) => (
                      <option>{option}</option>
                    ))}
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
                    {options.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="mb-4">
            <Row>
              <Col md={6} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Terras diatomáceas residuais</Form.Label>
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
                    {options.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="bottling" title="Embalagens e refugo">
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
              <Form.Label>Garrafa</Form.Label>
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                {options2.map((option) => (
                  <option>{option}</option>
                ))}
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
              Cortiça
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4"></Row>
      </Tab>
      <Tab eventKey="general" title="Resíduos de escritório">
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
              Resíduos de escritório equivalentes aos municipais
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Papel/Cartão</Form.Label>
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="sucata" title="Sucata">
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
              Cabos | Fios
            </span>
          </Col>
        </Row>
        <Row className="mb-1">
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Alumínio</Form.Label>
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
              Latas
            </span>
          </Col>
        </Row>

        <Row className="mb-1">
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
              Madeira de contentores e paletes
            </span>
          </Col>
        </Row>

        <Row className="mb-1">
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
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
              Pneus
            </span>
          </Col>
        </Row>

        <Row className="mb-1">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Todos os tipos</Form.Label>
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
                    {options2.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="dangerousWaste" title="Resíduos perigosos">
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
              Resíduos perigosos
            </span>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col lg={12}>
            <Row>
              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Lâmpadas</Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Pilhas</Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Baterias (máquinas e equipamentos)</Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Restos de óleos lubrificantes</Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>
                    Embalagens de plástico contendo ou contaminadas por
                    substâncias perigosas
                  </Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>
                    Embalagens/Latas de metal contendo ou contaminadas por
                    substâncias perigosas
                  </Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>
                    Absorventes impregnados com óleos lubrificantes
                  </Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>
                    Resíduos de equipamentos elétricos e eletrónicos
                  </Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6} lg={3} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Tinteiros e toners usados</Form.Label>
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
                    {options3.map((option) => (
                      <option>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="solidWaste" title="Resíduos sólidos">
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

        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <Form.Group>
              <Form.Label>Lamas</Form.Label>
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
                {options4.map((option) => (
                  <option>{option}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} className="d-flex flex-column flex-md-row">
            <div className="mb-3 mb-md-0 mr-md-5">
              <span>
                Tem conhecimento se a energia comprada é de fonte renovável e/ou
                não renovável?
              </span>
            </div>
            <Form.Group className="d-flex mx-0 mx-md-5">
              <Form.Check type="check" style={{ marginRight: "15px" }}>
                <Form.Check.Label>Sim</Form.Check.Label>
                <Form.Check.Input
                  id="check1"
                  name="check1"
                  type="radio"
                  value={1}
                  checked={areLamasCaracterizadas == 1}
                  onChange={(e) =>
                    setAreLamasCaracterizadas(e.currentTarget.value)
                  }
                />
              </Form.Check>
              <Form.Check type="check">
                <Form.Check.Label>Não</Form.Check.Label>
                <Form.Check.Input
                  id="check1"
                  name="check1"
                  type="radio"
                  value={0}
                  checked={areLamasCaracterizadas == 0}
                  onChange={(e) =>
                    setAreLamasCaracterizadas(e.currentTarget.value)
                  }
                />
              </Form.Check>
            </Form.Group>
          </Col>
        </Row>

        {areLamasCaracterizadas == 1 && (
          <Row>
            <Row className="mb-2">
              <Col>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Metais pesados
                </span>
              </Col>
            </Row>

            <Row>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Cádmio</Form.Label>
                  <Form.Control name="naturalGasBought" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Cobre</Form.Label>
                  <Form.Control name="pumping" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Níquel</span>
                  </Form.Label>
                  <Form.Control name="fossilCogenerationBought" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Chumbo</span>
                  </Form.Label>
                  <Form.Control name="fossilCogenerationBought" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Zinco</span>
                  </Form.Label>
                  <Form.Control name="fossilCogenerationBought" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Mercúrio</span>
                  </Form.Label>
                  <Form.Control name="fossilCogenerationBought" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Crómio</span>
                  </Form.Label>
                  <Form.Control name="fossilCogenerationBought" size="sm" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Microorganismos patogénicos
                </span>
              </Col>
            </Row>

            <Row>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Salmonella spp.</Form.Label>
                  <Form.Control name="windEnergyBought" size="sm" />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Escherichia coli.</Form.Label>
                  <Form.Control name="waterEnergyBought" size="sm" />
                </Form.Group>
              </Col>
            </Row>
          </Row>
        )}
      </Tab>
    </Tabs>
  );
};

export default Waste;
