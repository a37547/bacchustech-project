import React, { Fragment, useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Dropdown,
  Form,
  Row,
  Table,
} from "react-bootstrap";

const Energy = () => {
  const [options, setOptions] = useState([
    "Eletricidade",
    "Combustíveis utilizados nas instalações da empresa",
    "Combustíveis utilizados na logística de entrada e de saída de materiais",
  ]);
  const [selectedOption, setSelectedOption] = useState("Eletricidade");

  const [knowsDetailsAboutBoughtEnergy, setKnowsDetailsAboutBoughtEnergy] =
    useState(0);

  const [knowDetailsAboutProducedEnergy, setKnowDetailsAboutProducedEnergy] =
    useState(0);

  const [insertsProducedEnergyExcess, setInsertsProducedEnergyExcess] =
    useState(0);

  return (
    <Fragment>
      <Form className="mb-4">
        <Row className="mt-4">
          <Col md={4} className="d-flex justify-content-between">
            <Dropdown className="w-100">
              <Dropdown.Toggle
                style={{
                  color: "white",
                  backgroundColor: "rgb(80, 116, 77)",
                  border: "2px solid rgb(80, 116, 77)",
                  padding: "5px 20px",
                }}
                variant="primary"
                id="dropdown-basic"
                className="w-100"
              >
                {selectedOption}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                {options.map((option) => (
                  <Dropdown.Item
                    key={option}
                    active={option === selectedOption}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              style={{ backgroundColor: "rgb(80, 116, 77)" }}
              //onClick={handleMaterialsSaveChanges}
            >
              Guardar alterações
            </Button>
          </Col>
        </Row>

        {selectedOption == "Eletricidade" && (
          <Fragment>
            <Row className="mt-3">
              <Col>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Eletricidade consumida
                </span>
              </Col>
            </Row>

            <Row className="mt-2 mx-0">
              <Col>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Comprada
                </span>
              </Col>
            </Row>

            <Row className="mx-0">
              <Row className="mt-2 mx-0">
                <Col xs={12} md={6}>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>
                      <span>Total anual consumida comprada (kWh)</span>
                    </Form.Label>
                    <Form.Control
                      //id="totalGrapesUsed"
                      name="totalGrapesUsed"
                      size="sm"
                      //value={context.totalGrapesUsed}
                      /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            <Row className="mx-0">
              <Row className="mt-3 mx-0">
                <Col xs={12} className="d-flex flex-column flex-md-row">
                  <div className="mb-3 mb-md-0 mr-md-5">
                    <span>
                      Tem conhecimento se a energia comprada é de fonte
                      renovável e/ou não renovável?
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
                        checked={knowsDetailsAboutBoughtEnergy == 1}
                        onChange={(e) =>
                          setKnowsDetailsAboutBoughtEnergy(
                            e.currentTarget.value
                          )
                        } /*isValid*/
                      />
                    </Form.Check>
                    <Form.Check type="check">
                      <Form.Check.Label>Não</Form.Check.Label>
                      <Form.Check.Input
                        id="check1"
                        name="check1"
                        type="radio"
                        value={0}
                        checked={knowsDetailsAboutBoughtEnergy == 0}
                        onChange={(e) =>
                          setKnowsDetailsAboutBoughtEnergy(
                            e.currentTarget.value
                          )
                        }
                        /*isValid*/
                      />
                    </Form.Check>
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            {knowsDetailsAboutBoughtEnergy == 1 && (
              <Row className="mx-0">
                <Row className="mt-2 mx-0">
                  <Col>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        color: "rgba(13,27,62,0.7)",
                      }}
                    >
                      De origem não renovável
                    </span>
                  </Col>
                </Row>

                <Row className="mx-0">
                  <Col xs={12} md={4}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Gás natural</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Bombagem</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Cogeração fóssil</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-2 mx-0">
                  <Col>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        color: "rgba(13,27,62,0.7)",
                      }}
                    >
                      De origem renovável
                    </span>
                  </Col>
                </Row>

                <Row className="mx-0">
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Eólica</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Hídrica</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Fotovoltáica</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>
                        <span>Bioenergia</span>
                      </Form.Label>
                      <Form.Control
                        //id="totalGrapesUsed"
                        name="totalGrapesUsed"
                        size="sm"
                        //value={context.totalGrapesUsed}
                        /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Row>
            )}

            <Row className="mt-3 mx-0">
              <Col>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Produzida
                </span>
              </Col>
            </Row>

            <Row className="mx-0">
              <Row className="mt-3 mx-0">
                <Col xs={12} className="d-flex flex-column flex-md-row">
                  <div className="mb-3 mb-md-0 mr-md-5">
                    <span>
                      A sua empresa produz energia a partir de fonte renovável?
                    </span>
                  </div>
                  <Form.Group className="d-flex mx-0 mx-md-5">
                    <Form.Check type="check" style={{ marginRight: "15px" }}>
                      <Form.Check.Label>Sim</Form.Check.Label>
                      <Form.Check.Input
                        id="check2"
                        name="check2"
                        type="radio"
                        value={1}
                        checked={knowDetailsAboutProducedEnergy == 1}
                        onChange={(e) =>
                          setKnowDetailsAboutProducedEnergy(
                            e.currentTarget.value
                          )
                        } /*isValid*/
                      />
                    </Form.Check>
                    <Form.Check type="check">
                      <Form.Check.Label>Não</Form.Check.Label>
                      <Form.Check.Input
                        id="check2"
                        name="check2"
                        type="radio"
                        value={0}
                        checked={knowDetailsAboutProducedEnergy == 0}
                        onChange={(e) =>
                          setKnowDetailsAboutProducedEnergy(
                            e.currentTarget.value
                          )
                        }
                        /*isValid*/
                      />
                    </Form.Check>
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            {knowDetailsAboutProducedEnergy == 1 && (
              <Fragment>
                <Row className="mx-0">
                  <Row className="mt-2 mx-0">
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>
                          <span>Total anual consumida produzida (kWh)</span>
                        </Form.Label>
                        <Form.Control
                          //id="totalGrapesUsed"
                          name="totalGrapesUsed"
                          size="sm"
                          //value={context.totalGrapesUsed}
                          /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>

                <Row className="mx-0">
                  <Row className="mt-2 mx-0">
                    <Col>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "rgba(13,27,62,0.7)",
                        }}
                      >
                        De origem renovável
                      </span>
                    </Col>
                  </Row>

                  <Row className="mx-0">
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>
                          <span>Fotovoltáica</span>
                        </Form.Label>
                        <Form.Control
                          //id="totalGrapesUsed"
                          name="totalGrapesUsed"
                          size="sm"
                          //value={context.totalGrapesUsed}
                          /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>
                          <span>Bioenergia</span>
                        </Form.Label>
                        <Form.Control
                          //id="totalGrapesUsed"
                          name="totalGrapesUsed"
                          size="sm"
                          //value={context.totalGrapesUsed}
                          /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
              </Fragment>
            )}

            <Row className="mt-3 mx-0">
              <Col>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Excedente produzido inserido na rede
                </span>
              </Col>
            </Row>

            <Row className="mx-0">
              <Row className="mt-3 mx-0">
                <Col xs={12} className="d-flex flex-column flex-md-row">
                  <div className="mb-3 mb-md-0 mr-md-5">
                    <span>
                      A sua empresa insere na rede de distribuição de energia
                      elétrica local algum excedente de energia produzida?
                    </span>
                  </div>
                  <Form.Group className="d-flex mx-0 mx-md-5">
                    <Form.Check type="check" style={{ marginRight: "15px" }}>
                      <Form.Check.Label>Sim</Form.Check.Label>
                      <Form.Check.Input
                        id="check3"
                        name="check3"
                        type="radio"
                        value={1}
                        checked={insertsProducedEnergyExcess == 1}
                        onChange={(e) =>
                          setInsertsProducedEnergyExcess(e.currentTarget.value)
                        } /*isValid*/
                      />
                    </Form.Check>
                    <Form.Check type="check">
                      <Form.Check.Label>Não</Form.Check.Label>
                      <Form.Check.Input
                        id="check3"
                        name="check3"
                        type="radio"
                        value={0}
                        checked={insertsProducedEnergyExcess == 0}
                        onChange={(e) =>
                          setInsertsProducedEnergyExcess(e.currentTarget.value)
                        }
                        /*isValid*/
                      />
                    </Form.Check>
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            {insertsProducedEnergyExcess == 1 && (
              <Fragment>
                <Row className="mx-0">
                  <Row className="mt-2 mx-0">
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>
                          <span>Total anual do excedente inserido (kWh)</span>
                        </Form.Label>
                        <Form.Control
                          //id="totalGrapesUsed"
                          name="totalGrapesUsed"
                          size="sm"
                          //value={context.totalGrapesUsed}
                          /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>

                <Row className="mx-0">
                  <Row className="mt-2 mx-0">
                    <Col>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "rgba(13,27,62,0.7)",
                        }}
                      >
                        De origem renovável
                      </span>
                    </Col>
                  </Row>

                  <Row className="mx-0">
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>
                          <span>Fotovoltáica</span>
                        </Form.Label>
                        <Form.Control
                          //id="totalGrapesUsed"
                          name="totalGrapesUsed"
                          size="sm"
                          //value={context.totalGrapesUsed}
                          /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>
                          <span>Bioenergia</span>
                        </Form.Label>
                        <Form.Control
                          //id="totalGrapesUsed"
                          name="totalGrapesUsed"
                          size="sm"
                          //value={context.totalGrapesUsed}
                          /*onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }*/
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
              </Fragment>
            )}
          </Fragment>
        )}

        {selectedOption ==
          "Combustíveis utilizados nas instalações da empresa" && (
          <Fragment>
            <Row className="mt-2">
              <Col>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Líquido
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gasóleo simples</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gasóleo aditivado</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gasolina simples</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gasolina aditivada</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Biocombustível</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Óleo de aquecimento</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Óleo lubrificante</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Gasoso
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Butano</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Propano</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gás loquefeito de petróleo (GLP)</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gás natural</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Gás natural comprimido (CNG)</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Biogas</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Sólido
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Madeira (troncos, lascas)</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
              <Col md={4} lg={2} className="mb-3">
                <Form.Label>
                  <span>Pellets</span>
                </Form.Label>
                <Form.Control size="sm" />
              </Col>
            </Row>
          </Fragment>
        )}

        {selectedOption ==
          "Combustíveis utilizados na logística de entrada e de saída de materiais" && (
          <Fragment>
            <Row className="mt-2">
              <Col>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Veículos de empresas terceiras
                </span>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Material transportado</th>
                      <th>Fornecedor/Destinatário</th>
                      <th>Distância percorrida por entrega (km)</th>
                      <th>Massa de material transportada no ano (t)</th>
                      <th>Identificação do veículo</th>
                      <th>Tipo de veículo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                    </tr>
                    <tr>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                    </tr>
                    <tr>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    color: "rgba(13,27,62,0.7)",
                  }}
                >
                  Veículos próprios
                </span>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Material transportado</th>
                      <th>Fornecedor/Destinatário</th>
                      <th>Distância percorrida por entrega (km)</th>
                      <th>Massa de material transportada no ano (t)</th>
                      <th>Identificação do veículo</th>
                      <th>Tipo de veículo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                    </tr>
                    <tr>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                    </tr>
                    <tr>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                      <td>Teste</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Fragment>
        )}
      </Form>
    </Fragment>
  );
};

export default Energy;
