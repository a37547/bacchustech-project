import React, { Fragment, useContext, useState } from "react";
import { useEffect } from "react";
import { Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { AppContext } from "../../../context/appContext";
import { getWaterByYearAndCompany } from "../../../services/water";

const Water = () => {
  const context = useContext(AppContext);

  const [
    knowsWaterUsedInEquipmentsCleaning,
    setKnowsWaterUsedInEquipmentsCleaning,
  ] = useState(false);

  const [
    generatedResidualWaterCaracterized,
    setGeneratedResidualWaterCaracterized,
  ] = useState(false);

  const [isGeneratedResidualWaterTreated, setIsGeneratedResidualWaterTreated] =
    useState(false);

  const [
    treatedResidualWaterCaracterized,
    setTreatedResidualWaterCaracterized,
  ] = useState(false);

  useEffect(() => {
    let year = context.selectedYear["year"];
    let company = context.loggedUser["company"];

    getWaterByYearAndCompany(year, company).then((res) => {
      if (res.data.Result == 0) {
        console.log("Water: ", res.data.Data);
        context.setTotalWaterFromNetwork(
          res.data.Data["total_water_from_network"]
        );
        context.setTotalWaterFromWell(res.data.Data["total_water_from_well"]);
        context.setTotalWaterFromCistern(
          res.data.Data["total_water_from_cistern"]
        );
        context.setTotalWaterReused(res.data.Data["total_water_reused"]);

        context.setWaterConsumedByEquipmentCleaningOnPressing(
          res.data.Data["water_consumed_by_equipment_cleaning_on_pressing"]
        );
        context.setNumberOfCleaningPerMonthOnPressing(
          res.data.Data["number_of_cleaning_per_month_on_pressing"]
        );
        context.setWaterConsumedByEquipmentCleaningOnTrasfega(
          res.data.Data["water_consumed_by_equipment_cleaning_on_trasfega"]
        );
        context.setNumberOfCleaningPerMonthOnTrasfega(
          res.data.Data["number_of_cleaning_per_month_on_trasfega"]
        );
        context.setWaterConsumedByEquipmentCleaningOnEstabilization(
          res.data.Data[
            "water_consumed_by_equipment_cleaning_on_estabilization"
          ]
        );
        context.setNumberOfCleaningPerMonthOnEstabilization(
          res.data.Data["number_of_cleaning_per_month_on_estabilization"]
        );
        context.setWaterConsumedByEquipmentCleaningOnFiltration(
          res.data.Data["water_consumed_by_equipment_cleaning_on_filtration"]
        );
        context.setNumberOfCleaningPerMonthOnFiltration(
          res.data.Data["number_of_cleaning_per_month_on_filtration"]
        );
        context.setWaterConsumedByEquipmentCleaningOnDifferentFloors(
          res.data.Data[
            "water_consumed_by_equipment_cleaning_on_different_floors"
          ]
        );
        context.setNumberOfCleaningPerMonthOnDifferentFloors(
          res.data.Data["number_of_cleaning_per_month_on_different_floors"]
        );
        context.setWaterConsumedByEquipmentCleaningOnSterilization(
          res.data.Data["water_consumed_by_equipment_cleaning_on_sterilization"]
        );
        context.setNumberOfCleaningPerMonthOnSterilization(
          res.data.Data["number_of_cleaning_per_month_on_sterilization"]
        );
        context.setWaterConsumedByEquipmentCleaningOnFilling(
          res.data.Data["water_consumed_by_equipment_cleaning_on_filling"]
        );
        context.setNumberOfCleaningPerMonthOnFilling(
          res.data.Data["number_of_cleaning_per_month_on_filling"]
        );
        context.setWaterConsumedByEquipmentCleaningOnLabeling(
          res.data.Data["water_consumed_by_equipment_cleaning_on_labeling"]
        );
        context.setNumberOfCleaningPerMonthOnLabeling(
          res.data.Data["number_of_cleaning_per_month_on_labeling"]
        );
        context.setWaterConsumedByEquipmentCleaningOnBottlingDifferentFloors(
          res.data.Data[
            "water_consumed_by_equipment_cleaning_on_bottling_different_floors"
          ]
        );
        context.setNumberOfCleaningPerMonthOnBottlingDifferentFloors(
          res.data.Data[
            "number_of_cleaning_per_month_on_bottling_different_floors"
          ]
        );
        //
        context.setPhHighSeasonGeneratedWater(
          res.data.Data["ph_high_season_generated_water"]
        );
        context.setPhLowSeasonGeneratedWater(
          res.data.Data["ph_low_season_generated_water"]
        );
        context.setConductivityHighSeasonGeneratedWater(
          res.data.Data["conductivity_high_season_generated_water"]
        );
        context.setConductivityLowSeasonGeneratedWater(
          res.data.Data["conductivity_low_season_generated_water"]
        );
        context.setConductivityLowSeasonGeneratedWater(
          res.data.Data["conductivity_low_season_generated_water"]
        );
        context.setTurbidityHighSeasonGeneratedWater(
          res.data.Data["turbidity_high_season_generated_water"]
        );
        context.setTurbidityLowSeasonGeneratedWater(
          res.data.Data["turbidity_low_season_generated_water"]
        );
        context.setCQOHighSeasonGeneratedWater(
          res.data.Data["CQO_high_season_generated_water"]
        );
        context.setCQOLowSeasonGeneratedWater(
          res.data.Data["CQO_low_season_generated_water"]
        );
        context.setCBOHighSeasonGeneratedWater(
          res.data.Data["CBO_high_season_generated_water"]
        );
        context.setCBOLowSeasonGeneratedWater(
          res.data.Data["CBO_low_season_generated_water"]
        );
        context.setSSTHighSeasonGeneratedWater(
          res.data.Data["SST_high_season_generated_water"]
        );
        context.setSSTLowSeasonGeneratedWater(
          res.data.Data["SST_low_season_generated_water"]
        );
        context.setNTKHighSeasonGeneratedWater(
          res.data.Data["NTK_high_season_generated_water"]
        );
        context.setNTKLowSeasonGeneratedWater(
          res.data.Data["NTK_low_season_generated_water"]
        );
        context.setFenoisHighSeasonGeneratedWater(
          res.data.Data["fenois_high_season_generated_water"]
        );
        context.setFenoisLowSeasonGeneratedWater(
          res.data.Data["fenois_low_season_generated_water"]
        );
        context.setFosforoHighSeasonGeneratedWater(
          res.data.Data["fosforo_high_season_generated_water"]
        );
        context.setFosforoLowSeasonGeneratedWater(
          res.data.Data["fosforo_low_season_generated_water"]
        );
        context.setNitratosHighSeasonGeneratedWater(
          res.data.Data["nitratos_high_season_generated_water"]
        );
        context.setNitratosLowSeasonGeneratedWater(
          res.data.Data["nitratos_low_season_generated_water"]
        );
        context.setSulfatosHighSeasonGeneratedWater(
          res.data.Data["sulfatos_high_season_generated_water"]
        );
        context.setSulfatosLowSeasonGeneratedWater(
          res.data.Data["sulfatos_low_season_generated_water"]
        );
        context.setFerroHighSeasonGeneratedWater(
          res.data.Data["ferro_high_season_generated_water"]
        );
        context.setFerroLowSeasonGeneratedWater(
          res.data.Data["ferro_low_season_generated_water"]
        );
        context.setAluminumHighSeasonGeneratedWater(
          res.data.Data["aluminum_high_season_generated_water"]
        );
        context.setAluminumLowSeasonGeneratedWater(
          res.data.Data["aluminum_low_season_generated_water"]
        );
        context.setCadmioHighSeasonGeneratedWater(
          res.data.Data["aluminum_low_season_generated_water"]
        );
        context.setCadmioLowSeasonGeneratedWater(
          res.data.Data["cadmio_low_season_generated_water"]
        );
        context.setCobreHighSeasonGeneratedWater(
          res.data.Data["cobre_high_season_generated_water"]
        );
        context.setCobreLowSeasonGeneratedWater(
          res.data.Data["cobre_low_season_generated_water"]
        );
        context.setCromioHighSeasonGeneratedWater(
          res.data.Data["cromio_high_season_generated_water"]
        );
        context.setCromioLowSeasonGeneratedWater(
          res.data.Data["cromio_low_season_generated_water"]
        );
        context.setManganesHighSeasonGeneratedWater(
          res.data.Data["manganes_high_season_generated_water"]
        );
        context.setManganesLowSeasonGeneratedWater(
          res.data.Data["manganes_low_season_generated_water"]
        );

        //
        context.setPhHighSeasonTreatedWater(
          res.data.Data["ph_high_season_treated_water"]
        );
        context.setPhLowSeasonTreatedWater(
          res.data.Data["ph_low_season_treated_water"]
        );
        context.setConductivityHighSeasonTreatedWater(
          res.data.Data["conductivity_high_season_treated_water"]
        );
        context.setConductivityLowSeasonTreatedWater(
          res.data.Data["conductivity_low_season_treated_water"]
        );
        context.setConductivityLowSeasonTreatedWater(
          res.data.Data["conductivity_low_season_treated_water"]
        );
        context.setTurbidityHighSeasonTreatedWater(
          res.data.Data["turbidity_high_season_treated_water"]
        );
        context.setTurbidityLowSeasonTreatedWater(
          res.data.Data["turbidity_low_season_treated_water"]
        );
        context.setCQOHighSeasonTreatedWater(
          res.data.Data["CQO_high_season_treated_water"]
        );
        context.setCQOLowSeasonTreatedWater(
          res.data.Data["CQO_low_season_treated_water"]
        );
        context.setCBOHighSeasonTreatedWater(
          res.data.Data["CBO_high_season_treated_water"]
        );
        context.setCBOLowSeasonTreatedWater(
          res.data.Data["CBO_low_season_treated_water"]
        );
        context.setSSTHighSeasonTreatedWater(
          res.data.Data["SST_high_season_treated_water"]
        );
        context.setSSTLowSeasonTreatedWater(
          res.data.Data["SST_low_season_treated_water"]
        );
        context.setNTKHighSeasonTreatedWater(
          res.data.Data["NTK_high_season_treated_water"]
        );
        context.setNTKLowSeasonTreatedWater(
          res.data.Data["NTK_low_season_treated_water"]
        );
        context.setFenoisHighSeasonTreatedWater(
          res.data.Data["fenois_high_season_treated_water"]
        );
        context.setFenoisLowSeasonTreatedWater(
          res.data.Data["fenois_low_season_treated_water"]
        );
        context.setFosforoHighSeasonTreatedWater(
          res.data.Data["fosforo_high_season_treated_water"]
        );
        context.setFosforoLowSeasonTreatedWater(
          res.data.Data["fosforo_low_season_treated_water"]
        );
        context.setNitratosHighSeasonTreatedWater(
          res.data.Data["nitratos_high_season_treated_water"]
        );
        context.setNitratosLowSeasonTreatedWater(
          res.data.Data["nitratos_low_season_treated_water"]
        );
        context.setSulfatosHighSeasonTreatedWater(
          res.data.Data["sulfatos_high_season_treated_water"]
        );
        context.setSulfatosLowSeasonTreatedWater(
          res.data.Data["sulfatos_low_season_treated_water"]
        );
        context.setFerroHighSeasonTreatedWater(
          res.data.Data["ferro_high_season_treated_water"]
        );
        context.setFerroLowSeasonTreatedWater(
          res.data.Data["ferro_low_season_treated_water"]
        );
        context.setAluminumHighSeasonTreatedWater(
          res.data.Data["aluminum_high_season_treated_water"]
        );
        context.setAluminumLowSeasonTreatedWater(
          res.data.Data["aluminum_low_season_treated_water"]
        );
        context.setCadmioHighSeasonTreatedWater(
          res.data.Data["aluminum_low_season_treated_water"]
        );
        context.setCadmioLowSeasonTreatedWater(
          res.data.Data["cadmio_low_season_treated_water"]
        );
        context.setCobreHighSeasonTreatedWater(
          res.data.Data["cobre_high_season_treated_water"]
        );
        context.setCobreLowSeasonTreatedWater(
          res.data.Data["cobre_low_season_treated_water"]
        );
        context.setCromioHighSeasonTreatedWater(
          res.data.Data["cromio_high_season_treated_water"]
        );
        context.setCromioLowSeasonTreatedWater(
          res.data.Data["cromio_low_season_treated_water"]
        );
        context.setManganesHighSeasonTreatedWater(
          res.data.Data["manganes_high_season_treated_water"]
        );
        context.setManganesLowSeasonTreatedWater(
          res.data.Data["manganes_low_season_treated_water"]
        );

        context.setFirstWaterInsertion(false);
      } else {
        context.setFirstWaterInsertion(true);
      }
    });
  }, []);

  return (
    <Tabs defaultActiveKey="waterConsume" id="waterTab" className="mb-3">
      <Tab eventKey="waterConsume" title="Consumo de água">
        <Row>
          <Col lg={4} className="mb-4">
            <Form.Group>
              <Form.Label>
                Volume total de água consumida proveniente da rede
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={context.totalWaterFromNetwork}
                onChange={(e) =>
                  context.setTotalWaterFromNetwork(e.currentTarget.value)
                }
              />
            </Form.Group>
          </Col>

          <Col lg={4} className="mb-4">
            <Form.Group>
              <Form.Label>
                Volume total de água consumida captada de poço
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={context.totalWaterFromWell}
                onChange={(e) =>
                  context.setTotalWaterFromWell(e.currentTarget.value)
                }
              />
            </Form.Group>
          </Col>

          <Col lg={4} className="mb-4">
            <Form.Group>
              <Form.Label>
                Volume total de água consumida captada de cisterna
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={context.totalWaterFromCistern}
                onChange={(e) =>
                  context.setTotalWaterFromCistern(e.currentTarget.value)
                }
              />
            </Form.Group>
          </Col>

          <Col lg={4} className="mb-4">
            <Form.Group>
              <Form.Label>
                Volume total de água reutilizada na produção
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={context.totalWaterReused}
                onChange={(e) =>
                  context.setTotalWaterReused(e.currentTarget.value)
                }
              />
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab
        eventKey="residualWaterGeneration"
        title="Geração de águas residuais"
      >
        <Row>
          <Col xs={12} className="d-flex flex-column flex-md-row">
            <div className="mb-3 mb-md-0 mr-md-5">
              <span>
                Tem conhecimento do volume médio de água utilizado na lavagem de
                equipamentos e a periodicidade da lavagem/higienização em cada
                processo de produção?
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
                  checked={knowsWaterUsedInEquipmentsCleaning == 1}
                  onChange={(e) =>
                    setKnowsWaterUsedInEquipmentsCleaning(e.currentTarget.value)
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
                  checked={knowsWaterUsedInEquipmentsCleaning == 0}
                  onChange={(e) =>
                    setKnowsWaterUsedInEquipmentsCleaning(e.currentTarget.value)
                  }
                />
              </Form.Check>
            </Form.Group>
          </Col>
        </Row>

        {knowsWaterUsedInEquipmentsCleaning == "1" && (
          <Fragment>
            <Row className="mt-3">
              <Col md={6}>
                <Row className="mb-3">
                  <Col>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        color: "rgba(13,27,62,0.7)",
                      }}
                    >
                      Geração na vinificação
                    </span>
                  </Col>
                </Row>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Processo</th>
                      <th>
                        Volume médio de água consumida por lavagem padrão dos
                        equipamentos deste processo (L)
                      </th>
                      <th>
                        Número médio mensal de lavagens dos equipamentos deste
                        processo (Ex.: 4 vezes ao mês)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Prensagem</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnPressing
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnPressing(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={context.numberOfCleaningPerMonthOnPressing}
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnPressing(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Trasfega</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnTrasfega
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnTrasfega(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={context.numberOfCleaningPerMonthOnTrasfega}
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnTrasfega(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Estabilização/Clarificação</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnEstabilization
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnEstabilization(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.numberOfCleaningPerMonthOnEstabilization
                          }
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnEstabilization(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Filtração</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnFiltration
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnFiltration(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={context.numberOfCleaningPerMonthOnFiltration}
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnFiltration(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Limpeza de pavimentos diversos</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnDifferentFloors
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnDifferentFloors(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.numberOfCleaningPerMonthOnDifferentFloors
                          }
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnDifferentFloors(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={6}>
                <Row>
                  <Col className="mb-3">
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        color: "rgba(13,27,62,0.7)",
                      }}
                    >
                      Geração no engarrafamento
                    </span>
                  </Col>
                </Row>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Processo</th>
                      <th>
                        Volume médio de água consumida por lavagem padrão dos
                        equipamentos deste processo (L)
                      </th>
                      <th>
                        Número médio mensal de lavagens dos equipamentos deste
                        processo (Ex.: 4 vezes ao mês)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Esterilização das garrafas</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnSterilization
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnSterilization(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.numberOfCleaningPerMonthOnSterilization
                          }
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnSterilization(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Enchimento</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnFilling
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnFilling(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={context.numberOfCleaningPerMonthOnFilling}
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnFilling(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Rotulagem</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnLabeling
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnLabeling(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={context.numberOfCleaningPerMonthOnLabeling}
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnLabeling(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Limpeza de pavimentos diversos</th>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.waterConsumedByEquipmentCleaningOnBottlingDifferentFloors
                          }
                          onChange={(e) =>
                            context.setWaterConsumedByEquipmentCleaningOnBottlingDifferentFloors(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          size="sm"
                          value={
                            context.numberOfCleaningPerMonthOnBottlingDifferentFloors
                          }
                          onChange={(e) =>
                            context.setNumberOfCleaningPerMonthOnBottlingDifferentFloors(
                              e.currentTarget.value
                            )
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Fragment>
        )}
      </Tab>
      <Tab
        eventKey="residualWaterTreatment"
        title="Tratamento das águas residuais"
      >
        <Row className="mb-3">
          <Col xs={12} className="d-flex flex-column flex-md-row">
            <div className="mb-3 mb-md-0 mr-md-5">
              <span>
                As águas residuais geradas são caracterizadas em relação a
                parâmetros quantitativos?
              </span>
            </div>
            <Form.Group className="d-flex mx-0 mx-md-5">
              <Form.Check type="check" style={{ marginRight: "15px" }}>
                <Form.Check.Label>Sim</Form.Check.Label>
                <Form.Check.Input
                  id="generatedResidualWaterCaracterized"
                  name="generatedResidualWaterCaracterized"
                  type="radio"
                  value={1}
                  checked={generatedResidualWaterCaracterized == 1}
                  onChange={(e) =>
                    setGeneratedResidualWaterCaracterized(e.currentTarget.value)
                  }
                />
              </Form.Check>
              <Form.Check type="check">
                <Form.Check.Label>Não</Form.Check.Label>
                <Form.Check.Input
                  id="generatedResidualWaterCaracterized"
                  name="generatedResidualWaterCaracterized"
                  type="radio"
                  value={0}
                  checked={generatedResidualWaterCaracterized == 0}
                  onChange={(e) =>
                    setGeneratedResidualWaterCaracterized(e.currentTarget.value)
                  }
                />
              </Form.Check>
            </Form.Group>
          </Col>
        </Row>

        {generatedResidualWaterCaracterized == "1" && (
          <Row>
            <Col md={6}>
              <Table striped bordered hover className="mb-3">
                <thead>
                  <tr>
                    <th></th>
                    <th>ÉPOCA ALTA (vindimas e vinificação)</th>
                    <th>ÉPOCA BAIXA (armazenamento e engarrafamento)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>pH</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.phHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setPhHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.phLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setPhLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Condutividade</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.conductivityHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setConductivityHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.conductivityLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setConductivityLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Turbidez</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.turbidityHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setTurbidityHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.turbidityLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setTurbidityLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carência Química de Oxigénio (CQO)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.CQOHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCQOHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.CQOLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCQOLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carência Bioquímica de Oxigénio (CBO5, 20oC)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.CBOHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCBOHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.CBOLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCBOLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sólidos Suspensos Totais (SST)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.SSTHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setSSTHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.SSTLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setSSTLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Azoto Total (NTK)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.NTKHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setNTKHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.NTKLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setNTKLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fenóis (C6H5OH)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.fenoisHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setFenoisHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.fenoisLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setFenoisLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fósforo total (P)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.fosforoHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setFosforoHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.fosforoLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setFosforoLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <Table striped bordered hover className="mb-3">
                <thead>
                  <tr>
                    <th></th>
                    <th>ÉPOCA ALTA (vindimas e vinificação)</th>
                    <th>ÉPOCA BAIXA (armazenamento e engarrafamento)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nitratos (NO3-)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.nitratosHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setNitratosHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.nitratosLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setNitratosLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sulfatos (SO4 2-)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.sulfatosHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setSulfatosHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.sulfatosLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setSulfatosLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Ferro total (Fe) </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.ferroHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setFerroHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.ferroLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setFerroLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Alumínio (Al3+)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.aluminumHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setAluminumHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.aluminumLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setAluminumLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cádmio total (Cd) </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.cadmioHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCadmioHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.cadmioLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCadmioLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cobre total (Cu)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.cobreHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCobreHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.cobreLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCobreLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Crómio total (Cr)</td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.cromioHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCromioHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.cromioLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setCromioLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Manganês total (Mn) </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.manganesHighSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setManganesHighSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        size="sm"
                        value={context.manganesLowSeasonGeneratedWater}
                        onChange={(e) =>
                          context.setManganesLowSeasonGeneratedWater(
                            e.currentTarget.value
                          )
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        )}

        <Row className="mb-3">
          <Col xs={12} className="d-flex flex-column flex-md-row">
            <div className="mb-3 mb-md-0 mr-md-5">
              <span>
                As águas residuais geradas são destinadas a algum sistema de
                tratamento?
              </span>
            </div>
            <Form.Group className="d-flex mx-0 mx-md-5">
              <Form.Check type="check" style={{ marginRight: "15px" }}>
                <Form.Check.Label>Sim</Form.Check.Label>
                <Form.Check.Input
                  id="generatedResidualWater"
                  name="generatedResidualWater"
                  type="radio"
                  value={1}
                  checked={isGeneratedResidualWaterTreated == 1}
                  onChange={(e) =>
                    setIsGeneratedResidualWaterTreated(e.currentTarget.value)
                  }
                />
              </Form.Check>
              <Form.Check type="check">
                <Form.Check.Label>Não</Form.Check.Label>
                <Form.Check.Input
                  id="isGeneratedResidualWaterTreated"
                  name="isGeneratedResidualWaterTreated"
                  type="radio"
                  value={0}
                  checked={isGeneratedResidualWaterTreated == 0}
                  onChange={(e) =>
                    setIsGeneratedResidualWaterTreated(e.currentTarget.value)
                  }
                />
              </Form.Check>
            </Form.Group>
          </Col>
        </Row>

        {isGeneratedResidualWaterTreated == 0 && (
          <Row>
            <Col className="d-flex align-items-center">
              <span>
                Selecione na lista ao lado qual é a destinação das águas
                residuais não tratadas{" "}
              </span>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "fit-content", marginLeft: "20px" }}
              >
                <option value="1">Disposição em solo não produtivo</option>
                <option value="2">Utilização em rega</option>
                <option value="3">Descarga em corpos hídricos</option>
              </Form.Select>
            </Col>
          </Row>
        )}

        {isGeneratedResidualWaterTreated == 1 && (
          <Fragment>
            <Row className="mb-3">
              <Col className="d-flex align-items-center">
                <span>
                  Selecione na lista ao lado a qual sistema de tratamento as
                  águas residuais são encaminhadas
                </span>
                <Form.Select
                  aria-label="Default select example"
                  style={{ width: "fit-content", marginLeft: "20px" }}
                >
                  <option value="1">
                    Estação de tratamento de águas residuais da companhia de
                    saneamento
                  </option>
                  <option value="2">
                    Estação de tratamento de águas residuais própria
                  </option>
                  <option value="3">
                    Estação de tratamento de águas residuais de terceiros
                  </option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex align-items-center">
                <span>
                  Selecione na lista ao lado qual é a destinação das águas
                  residuais tratadas
                </span>
                <Form.Select
                  aria-label="Default select example"
                  style={{ width: "fit-content", marginLeft: "20px" }}
                >
                  <option value="1">Disposição em solo não produtivo</option>
                  <option value="2">Utilização em rega</option>
                  <option value="3">Descarga em corpos hídricos</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3">
              {" "}
              <Col xs={12} className="d-flex flex-column flex-md-row">
                <div className="mb-3 mb-md-0 mr-md-5">
                  <span>
                    As águas residuais tratadas são caracterizadas em relação a
                    parâmetros quantitativos?
                  </span>
                </div>
                <Form.Group className="d-flex mx-0 mx-md-5">
                  <Form.Check type="check" style={{ marginRight: "15px" }}>
                    <Form.Check.Label>Sim</Form.Check.Label>
                    <Form.Check.Input
                      id="treatedResidualWaterCaracterized"
                      name="treatedResidualWaterCaracterized"
                      type="radio"
                      value={1}
                      checked={treatedResidualWaterCaracterized == 1}
                      onChange={(e) =>
                        setTreatedResidualWaterCaracterized(
                          e.currentTarget.value
                        )
                      }
                    />
                  </Form.Check>
                  <Form.Check type="check">
                    <Form.Check.Label>Não</Form.Check.Label>
                    <Form.Check.Input
                      id="treatedResidualWaterCaracterized"
                      name="treatedResidualWaterCaracterized"
                      type="radio"
                      value={0}
                      checked={treatedResidualWaterCaracterized == 0}
                      onChange={(e) =>
                        setTreatedResidualWaterCaracterized(
                          e.currentTarget.value
                        )
                      }
                    />
                  </Form.Check>
                </Form.Group>
              </Col>
            </Row>
            {treatedResidualWaterCaracterized == "1" && (
              <Row>
                <Col md={6}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>ÉPOCA ALTA (vindimas e vinificação)</th>
                        <th>ÉPOCA BAIXA (armazenamento e engarrafamento)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>pH</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.phHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setPhHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.phLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setPhLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Condutividade</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.conductivityHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setConductivityHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.conductivityLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setConductivityLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Turbidez</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.turbidityHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setTurbidityHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.turbidityLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setTurbidityLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Carência Química de Oxigénio (CQO)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.CQOHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCQOHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.CQOLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCQOLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Carência Bioquímica de Oxigénio (CBO5, 20oC)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.CBOHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCBOHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.CBOLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCBOLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sólidos Suspensos Totais (SST)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.SSTHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setSSTHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.SSTLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setSSTLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Azoto Total (NTK)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.NTKHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setNTKHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.NTKLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setNTKLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Fenóis (C6H5OH)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.fenoisHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setFenoisHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.fenoisLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setFenoisLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Fósforo total (P)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.fosforoHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setFosforoHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.fosforoLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setFosforoLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={6}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>ÉPOCA ALTA (vindimas e vinificação)</th>
                        <th>ÉPOCA BAIXA (armazenamento e engarrafamento)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nitratos (NO3-)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.nitratosHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setNitratosHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.nitratosLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setNitratosLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Sulfatos (SO4 2-)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.sulfatosHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setSulfatosHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.sulfatosLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setSulfatosLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Ferro total (Fe) </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.ferroHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setFerroHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.ferroLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setFerroLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Alumínio (Al3+)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.aluminumHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setAluminumHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.aluminumLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setAluminumLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Cádmio total (Cd) </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.cadmioHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCadmioHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.cadmioLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCadmioLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Cobre total (Cu)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.cobreHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCobreHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.cobreLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCobreLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Crómio total (Cr)</td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.cromioHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCromioHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.cromioLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setCromioLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Manganês total (Mn) </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.manganesHighSeasonTreatedWater}
                            onChange={(e) =>
                              context.setManganesHighSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            size="sm"
                            value={context.manganesLowSeasonTreatedWater}
                            onChange={(e) =>
                              context.setManganesLowSeasonTreatedWater(
                                e.currentTarget.value
                              )
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            )}{" "}
          </Fragment>
        )}
      </Tab>
    </Tabs>
  );
};

export default Water;
