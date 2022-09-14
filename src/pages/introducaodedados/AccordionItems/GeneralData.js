import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { AppContext } from "../../../context/appContext";
import { getGeneralDataByYearAndCompany } from "../../../services/generalData";
import "react-toastify/dist/ReactToastify.css";

const GeneralData = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    getGeneralDataByYearAndCompany(
      context.selectedYear && context.selectedYear["year"],
      context.loggedUser && context.loggedUser["company"]
    ).then((res) => {
      if (res.data.Data != null) {
        context.setFirstGeneralDataInsertion(false);
        context.setTotalGrapesUsed(res.data.Data["total_grapes_used"]);
        context.setTotalMustPurchased(res.data.Data["total_must_purchased"]);
        context.setTotalMustFermented(res.data.Data["total_must_fermented"]);
        context.setBrix(res.data.Data["brix"]);
        context.setTotalWineProduced(res.data.Data["total_wine_produced"]);
        context.setWineProducedByGrapesPercentage(
          res.data.Data["wine_produced_by_grapes_percentage"]
        );
        context.setWineProducedByMustPercentage(
          res.data.Data["wine_produced_by_must_percentage"]
        );

        console.log("General data exists");
      } else {
        context.setFirstGeneralDataInsertion(true);
        context.setTotalGrapesUsed("");
        context.setTotalMustPurchased("");
        context.setTotalMustFermented("");
        context.setBrix("");
        context.setTotalWineProduced("");
        context.setWineProducedByGrapesPercentage("");
        context.setWineProducedByMustPercentage("");
        console.log("General data does not exist");
      }
    });
  }, []);

  return (
    <Tabs defaultActiveKey="wine" id="generalDataTab" className="mb-3">
      <Tab eventKey="grapes" title="Uvas">
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
              Preencha com o valor da quantidade total de uvas utilizadas no
              ano. Formato: XX,X toneladas
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="grapes">
              <Row>
                <Col md={6} lg={4}>
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Total utilizado no ano (toneladas)
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalGrapesUsed"
                    size="sm"
                    value={context.totalGrapesUsed}
                    onChange={(e) =>
                      context.setTotalGrapesUsed(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="must" title="Mosto">
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
          <Col>
            <Form.Group controlId="must">
              <Row>
                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Total adquirido no ano
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalMustPurchased"
                    size="sm"
                    value={context.totalMustPurchased}
                    onChange={(e) =>
                      context.setTotalMustPurchased(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Total fermentado no ano
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalMustFemented"
                    size="sm"
                    value={context.totalMustFermented}
                    onChange={(e) =>
                      context.setTotalMustFermented(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>ºBrix</span>
                  </Form.Label>
                  <Form.Control
                    name="brix"
                    size="sm"
                    value={context.brix}
                    onChange={(e) =>
                      context.setBrix(e.currentTarget.value.toString())
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="wine" title="Vinho">
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
              Preencha com o valor da quantidade total de vinho produzido no
              ano, sem diferenciar o tipo de vinho. Formato: XX,X hectolitros.
              Caso sua empresa utilize uvas e mosto para vinificação, indique a
              porcentagem do vinho produzido a partir de cada um deles. Formato:
              XX,X %
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="wine">
              <Row>
                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Produção total anual (hectolitros)
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="totalWineProduced"
                    size="sm"
                    value={context.totalWineProduced}
                    onChange={(e) =>
                      context.setTotalWineProduced(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      % de vinho produzido a partir das uvas
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="wineProducedByGrapesPercentage"
                    size="sm"
                    value={context.wineProducedByGrapesPercentage}
                    onChange={(e) =>
                      context.setWineProducedByGrapesPercentage(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      % de vinho produzido a partir do mosto
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="wineProducedByMustPercentage"
                    size="sm"
                    value={context.wineProducedByMustPercentage}
                    onChange={(e) =>
                      context.setWineProducedByMustPercentage(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
};

export default GeneralData;
