import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { AppContext } from "../../../context/appContext";
import { getGeneralDataByYearAndCompany } from "../../../services/generalData";
import "react-toastify/dist/ReactToastify.css";

const Joi = require("joi");

export const generalDataSchema = Joi.object({
  totalGrapesProduced: Joi.number().precision(1).allow("", null).messages({
    "number.base": "Formato inválido. Deve ser um número.",
  }),
  totalGrapesBought: Joi.number().precision(1).allow("", null),
  totalMustProducedFromGrapes: Joi.number().precision(1).allow("", null),
  totalMustPurchased: Joi.number().allow("", null),
  totalMustFermented: Joi.number().precision(1).allow("", null),
  totalWineProduced: Joi.number().precision(1).allow("", null),
});

const GeneralData = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    /*getGeneralDataByYearAndCompany(
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
        context.setWineProducedByGrapes(
          res.data.Data["wine_produced_by_grapes"]
        );
        context.setWineProducedByMust(
          res.data.Data["wine_produced_by_must"]
        );

        console.log("General data exists");
      } else {
        context.setFirstGeneralDataInsertion(true);
        context.setTotalGrapesUsed("");
        context.setTotalMustPurchased("");
        context.setTotalMustFermented("");
        context.setBrix("");
        context.setTotalWineProduced("");
        context.setWineProducedByGrapes("");
        context.setWineProducedByMust("");
        console.log("General data does not exist");
      }
    });*/
  }, []);

  return (
    <Tabs defaultActiveKey="grapes" id="generalDataTab" className="mb-3">
      <Tab eventKey="grapes" title="Uvas">
        <Row className="mb-3">
          <Col>
            <span
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              <span
                style={{
                  color: "rgb(80, 116, 77)",
                  fontSize: "1.1rem",
                  marginRight: "5px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Importante:
              </span>
              Preencha com os valores das quantidades de uvas processadas na
              empresa no ano, sem diferenciar o tipo de uva. Formato: XX,X
              toneladas
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
                      Uvas produzidas e utilizadas pela própria empresa no ano
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalGrapesProduced"
                    size="sm"
                    placeholder="XX,X toneladas"
                    value={context.totalGrapesProduced}
                    onChange={(e) =>
                      context.setTotalGrapesProduced(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col md={6} lg={4}>
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Uvas compradas de terceiros e utilizada pela empresa no
                      ano
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalGrapesBought"
                    size="sm"
                    placeholder="XX,X toneladas"
                    value={context.totalGrapesBought}
                    onChange={(e) =>
                      context.setTotalGrapesBought(
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
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              <span
                style={{
                  color: "rgb(80, 116, 77)",
                  fontSize: "1.1rem",
                  marginRight: "5px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Importante:
              </span>
              Preencha os valores relativos ao mosto produzido a partir das uvas
              e, caso sua empresa compre mosto, o volume de mosto comprado
              utilziado no ano. Formato: XX,X hl. Insira também o volume total
              de mosto fermentado.
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="must">
              <Row>
                <Col md={6} lg={3} className="mb-4 mb-lg-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Total comprado no ano
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalMustPurchased"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.totalMustPurchased}
                    onChange={(e) =>
                      context.setTotalMustPurchased(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4 mb-lg-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Total fermentado no ano
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalMustFemented"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.totalMustFermented}
                    onChange={(e) =>
                      context.setTotalMustFermented(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>

                <Col md={6} lg={6} className="mb-4 mb-lg-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Total de mosto produzido no ano a partir das uvas (uva
                      produzidas + comprada comprada)
                    </span>
                  </Form.Label>
                  <Form.Control
                    name="totalMustProducedFromGrapes"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.totalMustProducedFromGrapes}
                    onChange={(e) =>
                      context.setTotalMustProducedFromGrapes(
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
      <Tab eventKey="wine" title="Vinho">
        <Row className="mb-3">
          <Col>
            <span
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              <span
                style={{
                  color: "rgb(80, 116, 77)",
                  fontSize: "1.1rem",
                  marginRight: "5px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Importante:
              </span>
              Preencha com o valor da quantidade total de vinho produzido no
              ano, sem diferenciar o tipo de vinho. Formato: XX,X hectolitros.
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="wine">
              <Row>
                <Col md={6} lg={4} className="mb-4 mb-lg-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Produção total anual (hectolitros)
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="totalWineProduced"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.totalWineProduced}
                    onChange={(e) =>
                      context.setTotalWineProduced(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Garrafas de vidro (0,35 L)
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="glassBottles35"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.glassBottles35}
                    onChange={(e) =>
                      context.setGlassBottles35(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Garrafas de vidro (0,75 L)
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="glassBottles75"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.glassBottles75}
                    onChange={(e) =>
                      context.setGlassBottles75(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Garrafas de vidro (1 L)
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="glassBottles100"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.glassBottles100}
                    onChange={(e) =>
                      context.setGlassBottles100(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>
                      Garrafas PET (1 L)
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="petBottles"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.petBottles}
                    onChange={(e) =>
                      context.setPetBottles(e.currentTarget.value.toString())
                    }
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Bag-in-box (3 L)</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="bagInBox3"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.bagInBox3}
                    onChange={(e) =>
                      context.setBagInBox3(e.currentTarget.value.toString())
                    }
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Bag-in-box (5L)</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="bagInBox5"
                    size="sm"
                    placeholder="XX,X hl"
                    value={context.bagInBox5}
                    onChange={(e) =>
                      context.setBagInBox5(e.currentTarget.value.toString())
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
