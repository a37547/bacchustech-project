import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../../../context/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getGeneralDataByYearAndCompany } from "../../../services/generalData";
const Joi = require("joi");

const GeneralData = () => {
  const context = useContext(AppContext);

  const [selectedOption, setSelectedOption] = useState("Uvas");

  const [options, setOptions] = useState(["Uvas", "Mosto", "Vinho"]);

  const [yearsWithData, setYearsWithData] = useState([]);

  const schema = Joi.object({
    totalGrapesUsed: Joi.number().precision(1).optional().allow(null, ""),
    totalMustPurchased: Joi.number().precision(1).optional().allow(null, ""),
    totalMustFermented: Joi.number().precision(1).optional().allow(null, ""),
    brix: Joi.number().precision(1).optional().allow(null, ""),
    totalWineProduced: Joi.number().precision(1).optional().allow(null, ""),
    wineProducedByGrapesPercentage: Joi.number()
      .precision(2)
      .optional()
      .allow(null, ""),
    wineProducedByMustPercentage: Joi.number()
      .precision(2)
      .optional()
      .allow(null, ""),
  });

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
        console.log("General data does not exist");
      }
    });
  }, []);

  const getYears = async () => {
    return await axios.get("http://localhost:5000/years/getAll");
  };

  const insertYear = async (body) => {
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios
      .post("http://localhost:5000/years/create", body, customConfig)
      .then(() => getYears().then((res) => setYearsWithData(res.data)));
  };

  const createGeneralData = async (body, config) => {
    return await axios.post(
      "http://localhost:5000/api/users/createGeneralData",
      body,
      config
    );
  };

  const updateGeneralData = async (year, company, body, config) => {
    return await axios.put(
      `http://localhost:5000/api/users/updateGeneralData/${year}/${company}`,
      body,
      config
    );
  };

  const handleGeneralDataSaveChanges = async () => {
    console.log("CONTEXT: ", context.firstGeneralDataInsertion);
    const validation = schema.validate({
      totalGrapesUsed: context.totalGrapesUsed,
      totalMustPurchased: context.totalMustPurchased,
      totalMustFermented: context.totalMustFermented,
      brix: context.brix,
      totalWineProduced: context.totalWineProduced,
      wineProducedByGrapesPercentage: context.wineProducedByGrapesPercentage,
      wineProducedByMustPercentage: context.wineProducedByMustPercentage,
    });

    const generalData = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      total_grapes_used: validation.value["totalGrapesUsed"].toString(),
      total_must_purchased:
        validation.value["totalMustPurchased"] !== ""
          ? validation.value["totalMustPurchased"]
          : "0",
      total_must_fermented:
        validation.value["totalMustFermented"] !== ""
          ? validation.value["totalMustFermented"]
          : "0",
      brix: validation.value["brix"],
      total_wine_produced: validation.value["totalWineProduced"],
      wine_produced_by_grapes_percentage:
        validation.value["wineProducedByGrapesPercentage"],
      wine_produced_by_must_percentage:
        validation.value["wineProducedByMustPercentage"],
      company_name: context.loggedUser && context.loggedUser["company"],
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstGeneralDataInsertion) {
      console.log("The year already has data. Let's update!");
      updateGeneralData(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        JSON.stringify({
          total_grapes_used: validation.value["totalGrapesUsed"].toString(),
          total_must_purchased:
            validation.value["totalMustPurchased"] != null &&
            validation.value["totalMustPurchased"] !== ""
              ? validation.value["totalMustPurchased"].toString()
              : "0",
          total_must_fermented:
            validation.value["totalMustFermented"] != null &&
            validation.value["totalMustFermented"] !== ""
              ? validation.value["totalMustFermented"].toString()
              : "0",
          brix:
            validation.value["brix"] != null &&
            validation.value["brix"].toString(),
          total_wine_produced: validation.value["totalWineProduced"],
          wine_produced_by_grapes_percentage:
            validation.value["wineProducedByGrapesPercentage"],
          wine_produced_by_must_percentage:
            validation.value["wineProducedByMustPercentage"],
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        console.log("General data updated!", res);
        toast.success("Alterações guardadas!");
      });
    } else {
      console.log(
        "The year does not have data. Let's insert for the first time!"
      );

      createGeneralData(generalData, customConfig).then((res) => {
        context.setFirstGeneralDataInsertion(false);
        console.log("General Data created!", res);
        toast.success("Alterações guardadas!");
      });
    }
  };

  return (
    <Form>
      <Row className="mt-4">
        <Col
          xs={6}
          /*sm={3}
          md={4}
          lg={1}*/
          className="d-flex justify-content-between"
        >
          <Dropdown>
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
        <Col
          xs={6}
          /*sm={3}
          md={2}
  lg={1}*/
          className="d-flex justify-content-end"
        >
          <Button
            style={{ backgroundColor: "rgb(80, 116, 77)" }}
            onClick={handleGeneralDataSaveChanges}
          >
            Guardar alterações
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        {selectedOption === "Uvas" && (
          <Col md={12} className="mb-4">
            <Form.Group controlId="formGridEmail">
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
                    Uvas
                  </span>{" "}
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                    }}
                  >
                    * Preencha com o valor da quantidade total de uvas
                    utilizadas no ano. Formato: XX,X toneladas
                  </span>
                </div>
              </div>
              <Row>
                <Col sm={4}>
                  <Form.Label>
                    <span>Total utilizado no ano (toneladas)</span>
                  </Form.Label>
                  <Form.Control
                    //id="totalGrapesUsed"
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
        )}

        {selectedOption === "Mosto" && (
          <Col md={12}>
            <Form.Group controlId="formGridEmail">
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
                    Mosto
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                    }}
                  >
                    * Caso a sua empresa compre mosto para vinificação, preencha
                    com o valor da quantidade total de mosto comprado no ano.
                    Formato: XX,X toneladas
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                    }}
                  >
                    * O Brix é um dado importante para o cálculo de liberação
                    natural de CO2 durante a fermentação. Você pode indicar um
                    ºBrix médio.
                  </span>
                </div>
              </div>

              <Row>
                <Col sm={4}>
                  <Form.Label>
                    <span>Total adquirido no ano (hectolitros)</span>
                  </Form.Label>
                  <Form.Control
                    className="mb-3"
                    size="sm"
                    value={context.totalMustPurchased}
                    onChange={(e) =>
                      context.setTotalMustPurchased(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>
                    <span>Total fermentado no ano (hectolitros)</span>
                  </Form.Label>
                  <Form.Control
                    className="mb-3"
                    size="sm"
                    value={context.totalMustFermented}
                    onChange={(e) =>
                      context.setTotalMustFermented(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label className="d-flex flex-column">
                    <span>ºBrix</span>
                  </Form.Label>
                  <Form.Control
                    className="mb-3"
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
        )}

        {selectedOption === "Vinho" && (
          <Col md={12} className="mb-4">
            <Form.Group controlId="formGridEmail">
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
                    Vinho
                  </span>
                  <div className="d-flex flex-column">
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontStyle: "italic",
                      }}
                    >
                      * Preencha com o valor da quantidade total de vinho
                      produzido no ano, sem diferenciar o tipo de vinho.
                      Formato: XX,X hectolitros
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontStyle: "italic",
                      }}
                    >
                      * Caso sua empresa utilize uvas e mosto para vinificação,
                      indique a porcentagem do vinho produzido a partir de cada
                      um deles. Formato: XX,X %
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <Row>
                  <Col sm={4}>
                    <Form.Label>
                      <span>Produção total anual (hectolitros)</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      size="sm"
                      value={context.totalWineProduced}
                      onChange={(e) =>
                        context.setTotalWineProduced(
                          e.currentTarget.value.toString()
                        )
                      }
                    />
                  </Col>

                  <Col sm={4}>
                    <Form.Label>
                      <span>
                        Percentagem de vinho produzido a partir das uvas
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className="mb-3"
                      size="sm"
                      value={context.wineProducedByGrapesPercentage}
                      onChange={(e) =>
                        context.setWineProducedByGrapesPercentage(
                          e.currentTarget.value.toString()
                        )
                      }
                    />
                  </Col>
                  <Col sm={4}>
                    <Form.Label>
                      <span>
                        Percentagem de vinho produzido a partir do mosto
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className="mb-3"
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
              </div>
            </Form.Group>
          </Col>
        )}
      </Row>
      <ToastContainer />
    </Form>
  );
};

export default GeneralData;
