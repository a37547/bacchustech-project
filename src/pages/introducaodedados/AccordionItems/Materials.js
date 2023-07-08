import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { AppContext } from "../../../context/appContext";
import { getMaterialsByYearAndCompany } from "../../../services/generalData";

const Materials = () => {
  const context = useContext(AppContext);

  const [informationExists, setInformationExists] = useState(false);
  const [instructionsExist, setInstructionsExist] = useState(false);

  useEffect(() => {
    getMaterialsByYearAndCompany(
      context.selectedYear && context.selectedYear["year"],
      context.loggedUser && context.loggedUser["company"]
    ).then((res) => {
      if (res.data.Data != null) {
        context.setFirstMaterialsInsertion(false);
        context.setCitricAcid(res.data.Data["citric_acid"]);
        context.setTartricAcid(res.data.Data["tartric_acid"]);
        context.setSorbicAcid(res.data.Data["sorbic_acid"]);
        context.setOtherAcids(res.data.Data["other_acids"]);
        context.setBentonitaCaulim(res.data.Data["bentonita_caulim"]);
        context.setPotassiumBissulfit(res.data.Data["potassium_bissulfit"]);
        context.setCalciumCarbonate(res.data.Data["calcium_carbonate"]);
        context.setWoodChips(res.data.Data["wood_chips"]);
        context.setArabicGoma(res.data.Data["arabic_goma"]);
        context.setMilkProteins(res.data.Data["milk_proteins"]);
        context.setSalmoura(res.data.Data["salmoura"]);
        context.setLiquidSo2(res.data.Data["liquid_so2"]);
        context.setSugar(res.data.Data["sugar"]);
        context.setTaninos(res.data.Data["taninos"]);
        context.setAmoniumSulfate(res.data.Data["amonium_sulfate"]);
        context.setDiatomito(res.data.Data["diatomito"]);
        context.setEtanol(res.data.Data["etanol"]);
        context.setOvalbumina(res.data.Data["ovalbumina"]);
        context.setMicroorganisms(res.data.Data["microorganisms"]);
        context.setGlassBottles(res.data.Data["glass_bottles"]);
        context.setGlassBottlesPercentage(
          res.data.Data["glass_bottles_percentage"]
        );
        context.setPetBottles(res.data.Data["pet_bottles"]);
        context.setPetBottlesPercentage(
          res.data.Data["pet_bottles_percentage"]
        );
        context.setLabels(res.data.Data["labels"]);
        context.setLabelsPercentage(res.data.Data["labels_percentage"]);
        context.setCorks(res.data.Data["corks"]);
        context.setCorksPercentage(res.data.Data["corks_percentage"]);
        context.setWineMuzzles(res.data.Data["wine_muzzles"]);
        context.setWineMuzzlesPercentage(
          res.data.Data["wine_muzzles_percentage"]
        );
        context.setCapsules(res.data.Data["capsules"]);
        context.setCapsulesPercentage(res.data.Data["capsules_percentage"]);
        context.setAluminumSheets(res.data.Data["aluminum_sheets"]);
        context.setAluminumSheetsPercentage(
          res.data.Data["aluminum_sheets_percentage"]
        );
        context.setPolyethyleneSheets(res.data.Data["polyethylene_sheets"]);
        context.setPolyethyleneSheetsPercentage(
          res.data.Data["polyethylene_sheets_percentage"]
        );
        context.setCrownCaps(res.data.Data["crown_caps"]);
        context.setCrownCapsPercentage(res.data.Data["crown_caps_percentage"]);
        context.setAluminumCrownCaps(res.data.Data["aluminum_crown_caps"]);
        context.setAluminumCrownCapsPercentage(
          res.data.Data["aluminum_crown_caps_percentage"]
        );
        context.setBidule(res.data.Data["bidule"]);
        context.setBidulePercentage(res.data.Data["bidule_percentage"]);
        context.setAluminumScrewCaps(res.data.Data["aluminum_screw_caps"]);
        context.setAluminumScrewCapsPercentage(
          res.data.Data["aluminum_screw_caps_percentage"]
        );
        context.setPvc(res.data.Data["pvc"]);
        context.setPvcPercentage(res.data.Data["pvc_percentage"]);
        context.setLdpeFilmWraps(res.data.Data["ldpe_film_wraps"]);
        context.setLdpeFilmWrapsPercentage(
          res.data.Data["ldpe_film_wraps_percentage"]
        );
        context.setLdpePalletWraps(res.data.Data["ldpe_pallet_wraps"]);
        context.setLdpePalletWrapsPercentage(
          res.data.Data["ldpe_pallet_wraps_percentage"]
        );
        context.setBoxes(res.data.Data["boxes"]);
        context.setBoxesPercentage(res.data.Data["boxes_percentage"]);
        context.setNitricAcid(res.data.Data["nitric_acid"]);
        context.setPhosphoricAcid(res.data.Data["phosphoric_acid"]);
        context.setSodaLiquid(res.data.Data["soda_liquid"]);
        context.setSolidSodiumHydroxide(
          res.data.Data["solid_sodium_hydroxide"]
        );
        context.setSodiumHypochlorite(res.data.Data["sodium_hypochlorite"]);
        context.setSodiumSulfate(res.data.Data["sodium_sulfate"]);
        context.setAntifoamProducts(res.data.Data["antifoam_products"]);
        context.setGrease(res.data.Data["grease"]);
        context.setLubricantOilEquipmentMaintenance(
          res.data.Data["lubricant_oil_equipment_maintenance"]
        );
      } else {
        context.setFirstMaterialsInsertion(true);
        context.setCitricAcid("");
        context.setTartricAcid("");
        context.setSorbicAcid("");
        context.setOtherAcids("");
        context.setBentonitaCaulim("");
        context.setPotassiumBissulfit("");
        context.setCalciumCarbonate("");
        context.setWoodChips("");
        context.setArabicGoma("");
        context.setMilkProteins("");
        context.setSalmoura("");
        context.setLiquidSo2("");
        context.setSugar("");
        context.setTaninos("");
        context.setAmoniumSulfate("");
        context.setDiatomito("");
        context.setEtanol("");
        context.setOvalbumina("");
        context.setMicroorganisms("");
        context.setGlassBottles("");
        context.setGlassBottlesPercentage("");
        context.setPetBottles("");
        context.setPetBottlesPercentage("");
        context.setLabels("");
        context.setLabelsPercentage("");
        context.setCorks("");
        context.setCorksPercentage("");
        context.setWineMuzzles("");
        context.setWineMuzzlesPercentage("");
        context.setCapsules("");
        context.setCapsulesPercentage("");
        context.setAluminumSheets("");
        context.setAluminumSheetsPercentage("");
        context.setPolyethyleneSheets("");
        context.setPolyethyleneSheetsPercentage("");
        context.setCrownCaps("");
        context.setCrownCapsPercentage("");
        context.setAluminumCrownCaps("");
        context.setAluminumCrownCapsPercentage("");
        context.setBidule("");
        context.setBidulePercentage("");
        context.setAluminumScrewCaps("");
        context.setAluminumScrewCapsPercentage("");
        context.setPvc("");
        context.setPvcPercentage("");
        context.setLdpeFilmWraps("");
        context.setLdpeFilmWrapsPercentage("");
        context.setLdpePalletWraps("");
        context.setLdpePalletWrapsPercentage("");
        context.setBoxes("");
        context.setBoxesPercentage("");
        context.setNitricAcid("");
        context.setPhosphoricAcid("");
        context.setSodaLiquid("");
        context.setSolidSodiumHydroxide("");
        context.setSodiumHypochlorite("");
        context.setSodiumSulfate("");
        context.setAntifoamProducts("");
        context.setGrease("");
        context.setLubricantOilEquipmentMaintenance("");
      }
    });
  }, []);

  return (
    <Tabs defaultActiveKey="enologicProducts" id="materialTab" className="mb-3">
      <Tab eventKey="enologicProducts" title="Produtos enológicos">
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
              Preencha com o valor da massa total de cada produto enológico
              utilizado no ano. Para tanto, confira as faturas e os relatórios
              anuais da empresa. Formato: XX,X toneladas.
            </span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="enologicProducts">
              <Row>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Ácido cítrico, mono-hidratado</Form.Label>
                  <Form.Control
                    name="citricAcid"
                    size="sm"
                    value={context.citricAcid}
                    onChange={(e) =>
                      context.setCitricAcid(e.currentTarget.value)
                    }
                  />
                </Col>

                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Ácido tartrico (D, L) </Form.Label>
                  <Form.Control
                    name="tartricAcid"
                    size="sm"
                    value={context.tartricAcid}
                    onChange={(e) =>
                      context.setTartricAcid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Ácido sórbico</Form.Label>
                  <Form.Control
                    name="sorbicAcid"
                    size="sm"
                    value={context.sorbicAcid}
                    onChange={(e) =>
                      context.setSorbicAcid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Outros ácidos e sais de ácidos</Form.Label>
                  <Form.Control
                    name="otherAcids"
                    size="sm"
                    value={context.otherAcids}
                    onChange={(e) =>
                      context.setOtherAcids(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Bentonita, caulim</Form.Label>
                  <Form.Control
                    name="bentonitaCaulim"
                    size="sm"
                    value={context.bentonitaCaulim}
                    onChange={(e) =>
                      context.setBentonitaCaulim(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Bissulfito de potássio</Form.Label>
                  <Form.Control
                    name="potassiumBissulfit"
                    size="sm"
                    value={context.potassiumBissulfit}
                    onChange={(e) =>
                      context.setPotassiumBissulfit(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Carbonato de cálcio</Form.Label>
                  <Form.Control
                    name="calciumCarbonate"
                    size="sm"
                    value={context.calciumCarbonate}
                    onChange={(e) =>
                      context.setCalciumCarbonate(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Aparas de madeira</Form.Label>
                  <Form.Control
                    name="woodChips"
                    size="sm"
                    value={context.woodChips}
                    onChange={(e) =>
                      context.setWoodChips(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Goma-arábica</Form.Label>
                  <Form.Control
                    name="arabicGoma"
                    size="sm"
                    value={context.arabicGoma}
                    onChange={(e) =>
                      context.setArabicGoma(e.currentTarget.value)
                    }
                  />
                </Col>

                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Proteínas do leite, leite em pó </Form.Label>
                  <Form.Control
                    name="milkProteins"
                    size="sm"
                    value={context.milkProteins}
                    onChange={(e) =>
                      context.setMilkProteins(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Salmoura (cloreto de sódio) </Form.Label>
                  <Form.Control
                    name="salmoura"
                    size="sm"
                    value={context.salmoura}
                    onChange={(e) => context.setSalmoura(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>SO2 líquido</Form.Label>
                  <Form.Control
                    name="liquidSo2"
                    size="sm"
                    value={context.liquidSo2}
                    onChange={(e) =>
                      context.setLiquidSo2(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Açúcar (sacarose)</Form.Label>
                  <Form.Control
                    name="sugar"
                    size="sm"
                    value={context.sugar}
                    onChange={(e) => context.setSugar(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Taninos</Form.Label>
                  <Form.Control
                    name="taninos"
                    size="sm"
                    value={context.taninos}
                    onChange={(e) => context.setTaninos(e.currentTarget.value)}
                  />
                </Col>

                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Sulfato de amônio </Form.Label>
                  <Form.Control
                    name="amoniumSulfate"
                    size="sm"
                    value={context.amoniumSulfate}
                    onChange={(e) =>
                      context.setAmoniumSulfate(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Terra diatomácea, diatomito, perlite </Form.Label>
                  <Form.Control
                    name="diatomito"
                    size="sm"
                    value={context.diatomito}
                    onChange={(e) =>
                      context.setDiatomito(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>
                    Etanol retificado de origem vitivinicultural
                  </Form.Label>
                  <Form.Control
                    name="etanol"
                    size="sm"
                    value={context.etanol}
                    onChange={(e) => context.setEtanol(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>
                    Microorga. e extratos (bactérias, leveduras)
                  </Form.Label>
                  <Form.Control
                    name="microorganisms"
                    size="sm"
                    value={context.microorganisms}
                    onChange={(e) =>
                      context.setMicroorganisms(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>
                    Ovalb., ictiocola, gelatina, soro, caseinato de potássio
                  </Form.Label>
                  <Form.Control
                    name="ovalbumina"
                    size="sm"
                    value={context.ovalbumina}
                    onChange={(e) =>
                      context.setOvalbumina(e.currentTarget.value)
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="packing" title="Engarrafamento">
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
              Para saber a massa total de embalagem utilizada, multiplique a
              quantidade unitária total anual de cada um por sua respetiva
              massa. Preencha com o valor da massa total de cada tipo de
              embalagem utilizado no ano. Para tanto, confira as faturas e os
              relatórios anuais da empresa. Formato: XX,X toneladas. Considere o
              percentual de cada material que é proveniente de reciclagem. Ex.:
              500 t de garrafas de vidro utilizadas, das quais 30% provêm de
              material reciclado.
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Vidro (garrafas)</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.glassBottles}
                    onChange={(e) =>
                      context.setGlassBottles(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.glassBottlesPercentage}
                    onChange={(e) =>
                      context.setGlassBottlesPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>PET (garrafas)</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.petBottles}
                    onChange={(e) =>
                      context.setPetBottles(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.petBottlesPercentage}
                    onChange={(e) =>
                      context.setPetBottlesPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Rótulos</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.labels}
                    onChange={(e) => context.setLabels(e.currentTarget.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.labelsPercentage}
                    onChange={(e) =>
                      context.setLabelsPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Rolhas</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.corks}
                    onChange={(e) => context.setCorks(e.currentTarget.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.corksPercentage}
                    onChange={(e) =>
                      context.setCorksPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Focinhos de vinho</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.wineMuzzles}
                    onChange={(e) =>
                      context.setWineMuzzles(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.wineMuzzlesPercentage}
                    onChange={(e) =>
                      context.setWineMuzzlesPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Cápsulas</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.capsules}
                    onChange={(e) => context.setCapsules(e.currentTarget.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.capsulesPercentage}
                    onChange={(e) =>
                      context.setCapsulesPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Alumínio (folhas)</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.aluminumSheets}
                    onChange={(e) =>
                      context.setAluminumSheets(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.aluminumSheetsPercentage}
                    onChange={(e) =>
                      context.setAluminumSheetsPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Polietileno (folhas)</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.polyethyleneSheets}
                    onChange={(e) =>
                      context.setPolyethyleneSheets(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.polyethyleneSheetsPercentage}
                    onChange={(e) =>
                      context.setPolyethyleneSheetsPercentage(
                        e.currentTarget.value
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Tampas de coroa de aço</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.crownCaps}
                    onChange={(e) =>
                      context.setCrownCaps(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.crownCapsPercentage}
                    onChange={(e) =>
                      context.setCrownCapsPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Tampas de coroa de alumínio</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.aluminumCrownCaps}
                    onChange={(e) =>
                      context.setAluminumCrownCaps(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.aluminumCrownCapsPercentage}
                    onChange={(e) =>
                      context.setAluminumCrownCapsPercentage(
                        e.currentTarget.value
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Bidule</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.bidule}
                    onChange={(e) => context.setBidule(e.currentTarget.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={context.bidulePercentage}
                    onChange={(e) =>
                      context.setBidulePercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Tampa roscada de alumínio</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.aluminumScrewCaps}
                    onChange={(e) =>
                      context.setAluminumScrewCaps(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.aluminumScrewCapsPercentage}
                    onChange={(e) =>
                      context.setAluminumScrewCapsPercentage(
                        e.currentTarget.value
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Envoltórios de filme PVC</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.pvc}
                    onChange={(e) => context.setPvc(e.currentTarget.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.pvcPercentage}
                    onChange={(e) =>
                      context.setPvcPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Envoltórios de filme LDPE</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.ldpeFilmWraps}
                    onChange={(e) =>
                      context.setLdpeFilmWraps(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.ldpeFilmWrapsPercentage}
                    onChange={(e) =>
                      context.setLdpeFilmWrapsPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>Papel e cartão - caixas (kg)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.boxes}
                    onChange={(e) => context.setBoxes(e.currentTarget.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.boxesPercentage}
                    onChange={(e) =>
                      context.setBoxesPercentage(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="mb-4">
            <Row>
              <Col md={7} className="mb-2 mb-lg-0">
                <Form.Group>
                  <Form.Label>
                    Estiramento / Envoltório de paletes (LDPE)
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.ldpePalletWraps}
                    onChange={(e) =>
                      context.setLdpePalletWraps(e.currentTarget.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group>
                  <Form.Label
                    style={{ color: "transparent" }}
                    className="d-none d-md-flex"
                  >
                    .
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.ldpePalletWrapsPercentage}
                    onChange={(e) =>
                      context.setLdpePalletWrapsPercentage(
                        e.currentTarget.value
                      )
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Row>
            <Col xs={12} className="d-flex flex-column flex-md-row">
              <div className="mb-3 mb-md-0 mr-md-5">
                <span>
                  Há nas embalagens informação do % de material reciclado
                  utilizado na produção do mesmo?
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
                    checked={informationExists == 1}
                    onChange={(e) =>
                      setInformationExists(e.currentTarget.value)
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
                    checked={informationExists == 0}
                    onChange={(e) =>
                      setInformationExists(e.currentTarget.value)
                    }
                  />
                </Form.Check>
              </Form.Group>
            </Col>
          </Row>
        </Row>

        <Row className="mb-3">
          <Row>
            <Col xs={12} className="d-flex flex-column flex-md-row">
              <div className="mb-3 mb-md-0 mr-md-5">
                <span>
                  Há nas embalagens instruções acerca da disposição
                  ambientalmente adequada das embalagens após ao uso ?
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
                    checked={instructionsExist == 1}
                    onChange={(e) =>
                      setInstructionsExist(e.currentTarget.value)
                    }
                  />
                </Form.Check>
                <Form.Check type="check">
                  <Form.Check.Label>Não</Form.Check.Label>
                  <Form.Check.Input
                    id="check2"
                    name="check2"
                    type="radio"
                    value={0}
                    checked={instructionsExist == 0}
                    onChange={(e) =>
                      setInstructionsExist(e.currentTarget.value)
                    }
                  />
                </Form.Check>
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Tab>
      <Tab eventKey="cleaning" title="Produtos de limpeza">
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
              Preencha com o valor da massa total de cada tipo de produto de
              limpeza utilizado no ano. Para tanto, confira as faturas e os
              relatórios anuais da empresa. Formato: XX,X kg
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Ácido nítrico (50%)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.nitricAcid}
                    onChange={(e) =>
                      context.setNitricAcid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Ácido fosfórico</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.phosphoricAcid}
                    onChange={(e) =>
                      context.setPhosphoricAcid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Soda líquida (50%)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.sodaLiquid}
                    onChange={(e) =>
                      context.setSodaLiquid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Hidróxido de sódio sólido</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.solidSodiumHydroxide}
                    onChange={(e) =>
                      context.setSolidSodiumHydroxide(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Hipoclorito de sódio 15%</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.sodiumHypochlorite}
                    onChange={(e) =>
                      context.setSodiumHypochlorite(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Sulfato de sódio</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.sodiumSulfate}
                    onChange={(e) =>
                      context.setSodiumSulfate(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Produtos antiespumantes</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.antifoamProducts}
                    onChange={(e) =>
                      context.setAntifoamProducts(e.currentTarget.value)
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="manutençao" title="Manutenção de máquina e equipamentos">
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
              Preencha com o valor da massa total de cada tipo de produto de
              limpeza utilizado no ano. Para tanto, confira as faturas e os
              relatórios anuais da empresa. Formato: XX,X toneladas
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Graxas</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.grease}
                    onChange={(e) => context.setGrease(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Form.Label>Óleos lubrificantes</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.lubricantOilEquipmentMaintenance}
                    onChange={(e) =>
                      context.setLubricantOilEquipmentMaintenance(
                        e.currentTarget.value
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

export default Materials;
