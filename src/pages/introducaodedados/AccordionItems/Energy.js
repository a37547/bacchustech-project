import Joi from "joi";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { AppContext } from "../../../context/appContext";
import { getEnergyByYearAndCompany } from "../../../services/energy";
import { getEnergyUsedInMaterialsLogisticByYearAndCompany } from "../../../services/generalData";

const Energy = () => {
  const context = useContext(AppContext);

  const [knowsDetailsAboutBoughtEnergy, setKnowsDetailsAboutBoughtEnergy] =
    useState(0);

  const [knowDetailsAboutProducedEnergy, setKnowDetailsAboutProducedEnergy] =
    useState(0);

  const [insertsProducedEnergyExcess, setInsertsProducedEnergyExcess] =
    useState(0);

  const [isAddThirdPartyFuelModalOpen, setIsAddThirdPartyFuelModalOpen] =
    useState(false);

  const [isAddOwnFuelModalOpen, setIsAddOwnFuelModalOpen] = useState(false);

  const [thirdPartyFuels, setThirdPartyFuels] = useState([]);
  const [transportedMaterial, setTransportedMaterial] = useState("");
  const [provider, setProvider] = useState("");
  const [distanceByDelivery, setDistanceByDelivery] = useState("");
  const [materialTransportedMass, setMaterialTransportedMass] = useState("");
  const [vehicleIdentification, setVehicleIdentification] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const schema = Joi.object({
    transportedMaterial: Joi.string()
      .required()
      .messages({ "string.empty": "Campo obrigatório" }),
    provider: Joi.string()
      .required()
      .messages({ "string.empty": "Campo obrigatório" }),
    distanceByDelivery: Joi.string()
      .required()
      .messages({ "string.empty": "Campo obrigatório" }),
    materialTransportedMass: Joi.string()
      .required()
      .messages({ "string.empty": "Campo obrigatório" }),
    vehicleIdentification: Joi.string()
      .required()
      .messages({ "string.empty": "Campo obrigatório" }),
    vehicleType: Joi.string()
      .required()
      .messages({ "string.empty": "Campo obrigatório" }),
  });

  const [errorsInMaterialsLogistic, setErrorsInMaterialsLogistic] =
    useState(null);

  useEffect(() => {
    getEnergyByYearAndCompany(
      context.selectedYear && context.selectedYear["year"],
      context.loggedUser && context.loggedUser["company"]
    ).then((res) => {
      if (res.data.Data != null) {
        context.setFirstEnergyInsertion(false);
        context.setConsumedElectricityBought(
          res.data.Data["consumed_electricity_bought"]
        );
        context.setNaturalGasBought(res.data.Data["natural_gas_bought"]);
        context.setPumping(res.data.Data["pumping"]);
        context.setFossilCogenerationBought(
          res.data.Data["fossil_cogeneration_bought"]
        );
        context.setWindEnergyBought(res.data.Data["wind_energy_bought"]);
        context.setWaterEnergyBought(res.data.Data["water_energy_bought"]);
        context.setPhotovoltaicEnergyBought(
          res.data.Data["photovoltaic_energy_bought"]
        );
        context.setBioenergyBought(res.data.Data["bioenergy_bought"]);
        context.setConsumedElectricityProduced(
          res.data.Data["consumed_electricity_produced"]
        );
        context.setPhotovoltaicEnergyProduced(
          res.data.Data["photovoltaic_energy_produced"]
        );
        context.setBioenergyProduced(res.data.Data["bioenergy_produced"]);
        context.setSurplusEntered(res.data.Data["surplus_entered"]);
        context.setPhotovoltaicEnergyEntered(
          res.data.Data["photovoltaic_energy_entered"]
        );
        context.setSimpleDiesel(res.data.Data["simple_diesel"]);
        context.setAdditiveDiesel(res.data.Data["additive_diesel"]);
        context.setPlainGasoline(res.data.Data["plain_gasoline"]);
        context.setAdditiveGasoline(res.data.Data["additive_gasoline"]);
        context.setBiofuel(res.data.Data["biofuel"]);
        context.setHeatingOil(res.data.Data["heating_oil"]);
        context.setButane(res.data.Data["butane"]);
        context.setPropane(res.data.Data["propane"]);
        context.setGpl(res.data.Data["gpl"]);
        context.setNaturalGas(res.data.Data["natural_gas"]);
        context.setCng(res.data.Data["cng"]);
        context.setBiogas(res.data.Data["biogas"]);
        context.setWood(res.data.Data["wood"]);
        context.setPellets(res.data.Data["pellets"]);

        console.log("Energy exists");
      } else {
        context.setFirstEnergyInsertion(true);
        console.log("Energy does not exist");
      }
    });
  }, []);

  const handleIsAddThirdPartyFuelModalOpen = () => {
    setIsAddThirdPartyFuelModalOpen(false);
  };

  const handleIsAddOwnFuelModalOpen = () => {
    setIsAddOwnFuelModalOpen(false);
  };

  const hasError = (field) => {
    if (
      errorsInMaterialsLogistic != null &&
      errorsInMaterialsLogistic.find((item) => item.path[0] == field) !=
        undefined
    ) {
      return (
        <div>
          <span className="text-danger" style={{ fontSize: "0.9rem" }}>
            *{" "}
            {
              errorsInMaterialsLogistic.find((item) => item.path[0] == field)
                .message
            }
          </span>
        </div>
      );
    }
  };

  return (
    <Tabs
      defaultActiveKey="electricity"
      id="energyTab"
      className="mb-3 d-flex flex-column flex-xxl-row"
      onSelect={(event) => {
        console.log(event);
        if (event === "materialsFuel") {
          getEnergyUsedInMaterialsLogisticByYearAndCompany(
            context.selectedYear["year"],
            context.loggedUser && context.loggedUser["company"]
          ).then((res) => console.log("RES: ", res));
        }
      }}
    >
      <Tab eventKey="electricity" title="Eletricidade">
        <Row className="mb-2">
          <Col>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Consumida
            </span>
          </Col>
        </Row>
        <Row className="mx-0 mb-3">
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
        <Row className="mx-0 mb-3">
          <Col>
            <Form.Group>
              <Row className="mx-0">
                <Col md={6} lg={4}>
                  <Form.Label>Total anual consumida comprada (kWh)</Form.Label>
                  <Form.Control
                    name="consumedElectricityBought"
                    size="sm"
                    value={context.consumedElectricityBought}
                    onChange={(e) =>
                      context.setConsumedElectricityBought(
                        e.currentTarget.value
                      )
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mx-0 mb-3">
          <Row className="mx-0">
            <Col xs={12} className="d-flex flex-column flex-md-row">
              <div className="mb-3 mb-md-0 mr-md-5">
                <span>
                  Tem conhecimento se a energia comprada é de fonte renovável
                  e/ou não renovável?
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
                      setKnowsDetailsAboutBoughtEnergy(e.currentTarget.value)
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
                    checked={knowsDetailsAboutBoughtEnergy == 0}
                    onChange={(e) =>
                      setKnowsDetailsAboutBoughtEnergy(e.currentTarget.value)
                    }
                  />
                </Form.Check>
              </Form.Group>
            </Col>
          </Row>
        </Row>

        {knowsDetailsAboutBoughtEnergy == 1 && (
          <Row className="mx-0">
            <Row className="mx-0 mb-2">
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
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Gás natural</Form.Label>
                  <Form.Control
                    name="naturalGasBought"
                    size="sm"
                    value={context.naturalGasBought}
                    onChange={(e) =>
                      context.setNaturalGasBought(
                        e.currentTarget.value.toString()
                      )
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Bombagem</Form.Label>
                  <Form.Control
                    name="pumping"
                    size="sm"
                    value={context.pumping}
                    onChange={(e) =>
                      context.setPumping(e.currentTarget.value.toString())
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>
                    <span style={{ fontWeight: "bold" }}>Cogeração fóssil</span>
                  </Form.Label>
                  <Form.Control
                    name="fossilCogenerationBought"
                    size="sm"
                    value={context.fossilCogenerationBought}
                    onChange={(e) =>
                      context.setFossilCogenerationBought(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2 mx-0">
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
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Eólica</Form.Label>
                  <Form.Control
                    name="windEnergyBought"
                    size="sm"
                    value={context.windEnergyBought}
                    onChange={(e) =>
                      context.setWindEnergyBought(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Hídrica</Form.Label>
                  <Form.Control
                    id="waterEnergyBought"
                    name="waterEnergyBought"
                    size="sm"
                    value={context.waterEnergyBought}
                    onChange={(e) =>
                      context.setWaterEnergyBought(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Fotovoltáica</Form.Label>
                  <Form.Control
                    name="photovoltaicEnergyBought"
                    size="sm"
                    value={context.photovoltaicEnergyBought}
                    onChange={(e) =>
                      context.setPhotovoltaicEnergyBought(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Bioenergia</Form.Label>
                  <Form.Control
                    name="bioenergyBought"
                    size="sm"
                    value={context.bioenergyBought}
                    onChange={(e) =>
                      context.setBioenergyBought(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Row>
        )}

        <Row className="mx-0 mb-3">
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

        <Row className="mx-0 mb-3">
          <Row className="mx-0">
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
                      setKnowDetailsAboutProducedEnergy(e.currentTarget.value)
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
                      setKnowDetailsAboutProducedEnergy(e.currentTarget.value)
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
              <Row className="mx-0">
                <Col md={6} lg={4} className="mb-4">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>
                      Total anual consumida produzida (kWh)
                    </Form.Label>
                    <Form.Control
                      name="consumedElectricityProduced"
                      size="sm"
                      value={context.consumedElectricityProduced}
                      onChange={(e) =>
                        context.setConsumedElectricityProduced(
                          e.currentTarget.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            <Row className="mx-0">
              <Row className="mx-0 mb-2">
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
                <Col md={6} lg={4} className="mb-4">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Fotovoltáica</Form.Label>
                    <Form.Control
                      name="photovoltaicEnergyProduced"
                      size="sm"
                      value={context.photovoltaicEnergyProduced}
                      onChange={(e) =>
                        context.setPhotovoltaicEnergyProduced(
                          e.currentTarget.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Bioenergia</Form.Label>
                    <Form.Control
                      name="bioenergyBought"
                      size="sm"
                      value={context.bioenergyBought}
                      onChange={(e) =>
                        context.setBioenergyBought(e.currentTarget.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>
          </Fragment>
        )}

        <Row className="mb-2">
          <Col>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "rgba(13,27,62,0.7)",
              }}
            >
              Excedente produzido inserido na rede
            </span>
          </Col>
        </Row>
        <Row className="mx-0 mb-3">
          <Row>
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
                    }
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
                  />
                </Form.Check>
              </Form.Group>
            </Col>
          </Row>
        </Row>

        {insertsProducedEnergyExcess == 1 && (
          <Fragment>
            <Row>
              <Row className="mx-0">
                <Col md={6} lg={4} className="mb-4">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>
                      Total anual do excedente inserido (kWh)
                    </Form.Label>
                    <Form.Control
                      name="surplusEntered"
                      size="sm"
                      value={context.surplusEntered}
                      onChange={(e) =>
                        context.setSurplusEntered(e.currentTarget.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            <Row>
              <Row className="mx-0 mb-2">
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
                <Col md={6} lg={4} className="mb-4">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Fotovoltáica</Form.Label>
                    <Form.Control
                      name="photovoltaicEnergyProduced"
                      size="sm"
                      value={context.photovoltaicEnergyProduced}
                      onChange={(e) =>
                        context.setPhotovoltaicEnergyProduced(
                          e.currentTarget.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Bioenergia</Form.Label>
                    <Form.Control
                      id="bioenergyProduced"
                      name="bioenergyProduced"
                      size="sm"
                      value={context.bioenergyProduced}
                      onChange={(e) =>
                        context.setBioenergyProduced(e.currentTarget.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>
          </Fragment>
        )}
      </Tab>
      <Tab
        eventKey="companyInstalationsFuel"
        title="Combustíveis usados nas instalações da empresa"
      >
        <Row className="mb-2">
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

        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gasóleo simples</Form.Label>
                  <Form.Control
                    name="simpleDiesel"
                    size="sm"
                    value={context.simpleDiesel}
                    onChange={(e) =>
                      context.setSimpleDiesel(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gasóleo aditivado</Form.Label>
                  <Form.Control
                    name="additiveDiesel"
                    size="sm"
                    value={context.additiveDiesel}
                    onChange={(e) =>
                      context.setAdditiveDiesel(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gasolina simples</Form.Label>
                  <Form.Control
                    name="plainGasoline"
                    size="sm"
                    value={context.plainGasoline}
                    onChange={(e) =>
                      context.setPlainGasoline(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gasolina aditivada</Form.Label>
                  <Form.Control
                    name="additiveGasoline"
                    size="sm"
                    value={context.additiveGasoline}
                    onChange={(e) =>
                      context.setAdditiveGasoline(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Biocombustível</Form.Label>
                  <Form.Control
                    name="biofuel"
                    size="sm"
                    value={context.biofuel}
                    onChange={(e) => context.setBiofuel(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Óleo de aquecimento</Form.Label>
                  <Form.Control
                    name="heatingOil"
                    size="sm"
                    value={context.heatingOil}
                    onChange={(e) =>
                      context.setHeatingOil(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Óleo lubrificante</Form.Label>
                  <Form.Control
                    name="consumedElectricityProduced"
                    size="sm"
                    value={context.consumedElectricityProduced}
                    onChange={(e) =>
                      context.setConsumedElectricityProduced(
                        e.currentTarget.value
                      )
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
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

        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Butano</Form.Label>
                  <Form.Control
                    name="butane"
                    size="sm"
                    value={context.butane}
                    onChange={(e) => context.setButane(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Propano</Form.Label>
                  <Form.Control
                    name="propane"
                    size="sm"
                    value={context.propane}
                    onChange={(e) => context.setPropane(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gás loquefeito de petróleo (GLP)</Form.Label>
                  <Form.Control
                    name="gpl"
                    size="sm"
                    value={context.gpl}
                    onChange={(e) => context.setGpl(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gás natural</Form.Label>
                  <Form.Control
                    name="naturalGas"
                    size="sm"
                    value={context.naturalGas}
                    onChange={(e) =>
                      context.setNaturalGas(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Gás natural comprimido (CNG)</Form.Label>
                  <Form.Control
                    name="cng"
                    size="sm"
                    value={context.cng}
                    onChange={(e) => context.setCng(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Biogas</Form.Label>
                  <Form.Control
                    name="biogas"
                    size="sm"
                    value={context.biogas}
                    onChange={(e) => context.setBiogas(e.currentTarget.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
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

        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Madeira (troncos, lascas)</Form.Label>
                  <Form.Control
                    name="wood"
                    size="sm"
                    value={context.wood}
                    onChange={(e) => context.setWood(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Pellets</Form.Label>
                  <Form.Control
                    name="pellets"
                    size="sm"
                    value={context.pellets}
                    onChange={(e) => context.setPellets(e.currentTarget.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>

      <Tab
        eventKey="materialsFuel"
        title="Combustíveis usados na logística de entrada/saída de materiais"
      >
        <Col md={12} className="mb-3">
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
            <Col className="d-flex justify-content-end">
              <Button
                style={{ backgroundColor: "rgb(80, 116, 77)" }}
                onClick={() => setIsAddThirdPartyFuelModalOpen(true)}
              >
                Adicionar
              </Button>
            </Col>
          </Row>

          <Modal
            show={isAddThirdPartyFuelModalOpen}
            onHide={handleIsAddThirdPartyFuelModalOpen}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Adicionar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Material transportado</Form.Label>
                    <Form.Select
                      onChange={(e) =>
                        setTransportedMaterial(e.currentTarget.value)
                      }
                    >
                      <option value=""></option>
                      <option value="Uva">Uva</option>
                      <option value="Mosto">Mosto</option>
                      <option value="Produtos enológicos">
                        Produtos enológicos
                      </option>
                      <option value="Produtos de limpeza">
                        Produtos de limpeza
                      </option>
                      <option value="Materiais de embalagem">
                        Materiais de embalagem
                      </option>
                      <option value="Resíduos sólidos orgânicos">
                        Resíduos sólidos orgânicos
                      </option>
                      <option value="Resíduos sólidos inorgânicos">
                        Resíduos sólidos inorgânicos
                      </option>
                      <option value="Sucata">Sucata</option>
                    </Form.Select>

                    {hasError("transportedMaterial")}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Fornecedor/destinatário</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setProvider(e.currentTarget.value)}
                    />
                    {hasError("provider")}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      Distância percorrida por entrega (km)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setDistanceByDelivery(e.currentTarget.value)
                      }
                    />
                    {hasError("distanceByDelivery")}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Massa de material transportado (t)</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setMaterialTransportedMass(e.currentTarget.value)
                      }
                    />

                    {hasError("materialTransportedMass")}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Identificação do veículo</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setVehicleIdentification(e.currentTarget.value)
                      }
                    />
                    {hasError("vehicleIdentification")}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Tipo de veículo</Form.Label>
                    <Form.Select
                      onChange={(e) => setVehicleType(e.currentTarget.value)}
                    >
                      <option>
                        Camião semileve a gasóleo (3,5 a 7,5 toneladas)
                      </option>
                      <option>
                        Camião leve a gasóleo (7,5 a 17 toneladas)
                      </option>
                      <option>
                        Camião médio a gasóleo (17 a 33 toneladas)
                      </option>
                      <option>
                        Camião pesado a gasóleo (acima de 33 toneladas)
                      </option>
                    </Form.Select>
                    {hasError("vehicleType")}
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={handleIsAddThirdPartyFuelModalOpen}
              >
                Cancelar
              </Button>
              <Button
                style={{ backgroundColor: "rgb(80, 116, 77)" }}
                onClick={() => {
                  handleIsAddThirdPartyFuelModalOpen();
                  let arr = [...thirdPartyFuels];

                  let obj = {
                    transportedMaterial: transportedMaterial,
                    provider: provider,
                    distanceByDelivery: distanceByDelivery,
                    materialTransportedMass: materialTransportedMass,
                    vehicleIdentification: vehicleIdentification,
                    vehicleType: vehicleType,
                    //ownVehicles: false,
                    //year: context.selectedYear["year"],
                    //companyName: context.loggedUser["company"],
                  };

                  const validation = schema.validate(obj, {
                    abortEarly: false,
                  });
                  console.log("VALIDATION: ", validation.error.details);

                  setErrorsInMaterialsLogistic(validation.error.details);

                  //setEnergyUsedInLogisticsError;

                  //arr.push(obj);

                  //setThirdPartyFuels(arr);

                  console.log(
                    transportedMaterial,
                    provider,
                    distanceByDelivery,
                    materialTransportedMass,
                    vehicleIdentification,
                    vehicleType
                  );
                }}
              >
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>

          <Row className="mt-2">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Material transportado</th>
                    <th>Fornecedor/Destinatário</th>
                    <th>Dist. percorr. por entrega (km)</th>
                    <th>Massa de material transportada (t)</th>
                    <th>Identificação do veículo</th>
                    <th>Tipo de veículo</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdPartyFuels.length !== 0 &&
                    thirdPartyFuels
                      .filter((item) => item.ownVehicles == false)
                      .map((i) => (
                        <tr>
                          <td>{i.transportedMaterial}</td>
                          <td>{i.provider}</td>
                          <td>{i.distanceByDelivery}</td>
                          <td>{i.materialTransportedMass}</td>
                          <td>{i.vehicleIdentification}</td>
                          <td>{i.vehicleType}</td>
                        </tr>
                      ))}

                  {thirdPartyFuels.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center">
                        Sem dados.
                      </td>
                    </tr>
                  )}
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

            <Col className="d-flex justify-content-end">
              <Button
                style={{ backgroundColor: "rgb(80, 116, 77)" }}
                onClick={() => setIsAddOwnFuelModalOpen(true)}
              >
                Adicionar
              </Button>
            </Col>
          </Row>

          <Modal
            show={isAddOwnFuelModalOpen}
            onHide={handleIsAddOwnFuelModalOpen}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Adicionar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Material transportado</Form.Label>
                    <Form.Select>
                      <option>Uva</option>
                      <option>Mosto</option>
                      <option>Produtos enológicos</option>
                      <option>Produtos de limpeza</option>
                      <option>Materiais de embalagem</option>
                      <option>Resíduos sólidos orgânicos</option>
                      <option>Resíduos sólidos inorgânicos</option>
                      <option>Sucata</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Fornecedor/destinatário</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      Distância percorrida por entrega (km)
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Massa de material transportado (t)</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Identificação do trabalho</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Tipo de veículo</Form.Label>
                    <Form.Select>
                      <option>
                        Camião semileve a gasóleo (3,5 a 7,5 toneladas)
                      </option>
                      <option>
                        Camião leve a gasóleo (7,5 a 17 toneladas)
                      </option>
                      <option>
                        Camião médio a gasóleo (17 a 33 toneladas)
                      </option>
                      <option>
                        Camião pesado a gasóleo (acima de 33 toneladas)
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleIsAddOwnFuelModalOpen}>
                Cancelar
              </Button>
              <Button
                style={{ backgroundColor: "rgb(80, 116, 77)" }}
                onClick={handleIsAddOwnFuelModalOpen}
              >
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>

          <Row className="mt-2">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Material transportado</th>
                    <th>Fornecedor/Destinatário</th>
                    <th>Dist. percorr. por entrega (km)</th>
                    <th>Massa de material transportada (t)</th>
                    <th>Identificação do veículo</th>
                    <th>Tipo de veículo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Select>
                        <option>Uva</option>
                        <option>Mosto</option>
                        <option>Produtos enológicos</option>
                        <option>Produtos de limpeza</option>
                        <option>Materiais de embalagem</option>
                        <option>Resíduos sólidos orgânicos</option>
                        <option>Resíduos sólidos inorgânicos</option>
                        <option>Sucata</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="number" />
                    </td>
                    <td>
                      <Form.Control type="number" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Select>
                        <option>
                          Camião semileve a gasóleo (3,5 a 7,5 toneladas)
                        </option>
                        <option>
                          Camião leve a gasóleo (7,5 a 17 toneladas)
                        </option>
                        <option>
                          Camião médio a gasóleo (17 a 33 toneladas)
                        </option>
                        <option>
                          Camião pesado a gasóleo (acima de 33 toneladas)
                        </option>
                      </Form.Select>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Tab>
    </Tabs>
  );
};

export default Energy;
