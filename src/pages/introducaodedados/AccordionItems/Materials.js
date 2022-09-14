import React, { useContext, useEffect } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { AppContext } from "../../../context/appContext";
import { getMaterialsByYearAndCompany } from "../../../services/generalData";

const Materials = () => {
  const context = useContext(AppContext);

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
        context.setPetBottles(res.data.Data["pet_bottles"]);
        context.setLabels(res.data.Data["labels"]);
        context.setCorks(res.data.Data["corks"]);
        context.setWineMuzzles(res.data.Data["wine_muzzles"]);
        context.setCapsules(res.data.Data["capsules"]);
        context.setAluminumSheets(res.data.Data["aluminum_sheets"]);
        context.setPolyethyleneSheets(res.data.Data["polyethylene_sheets"]);
        context.setCrownCaps(res.data.Data["crown_caps"]);
        context.setBidule(res.data.Data["bidule"]);
        context.setPvc(res.data.Data["pvc"]);
        context.setLdpeFilmWraps(res.data.Data["ldpe_film_wraps"]);
        context.setLdpePalletWraps(res.data.Data["ldpe_pallet_wraps"]);
        context.setBoxes(res.data.Data["boxes"]);
        context.setNitricAcid(res.data.Data["nitric_acid"]);
        context.setPhosphoricAcid(res.data.Data["phosphoric_acid"]);
        context.setSodaLiquid(res.data.Data["soda_liquid"]);
        context.setSolidSodiumHydroxide(
          res.data.Data["solid_sodium_hydroxide"]
        );
        context.setSodiumHypochlorite(res.data.Data["sodium_hypochlorite"]);
        context.setSodiumSulfate(res.data.Data["sodium_sulfate"]);

        console.log("Materials exists");
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
        context.setPetBottles("");
        context.setLabels("");
        context.setCorks("");
        context.setWineMuzzles("");
        context.setCapsules("");
        context.setAluminumSheets("");
        context.setPolyethyleneSheets("");
        context.setCrownCaps("");
        context.setBidule("");
        context.setPvc("");
        context.setLdpeFilmWraps("");
        context.setLdpePalletWraps("");
        context.setBoxes("");
        context.setNitricAcid("");
        context.setPhosphoricAcid("");
        context.setSodaLiquid("");
        context.setSolidSodiumHydroxide("");
        context.setSodiumHypochlorite("");
        context.setSodiumSulfate("");
        console.log("Materials does not exist");
      }
    });
  }, []);

  return (
    <Tabs defaultActiveKey="enologicProducts" id="materialTab" className="mb-3">
      <Tab eventKey="enologicProducts" title="Produtos enológicos">
        <Row>
          <Col>
            <Form.Group controlId="enologicProducts">
              <Row>
                <Col md={6} lg={4} className="mb-4">
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

                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Outros ácidos e sais de ácidos)</Form.Label>
                  <Form.Control
                    name="otherAcids"
                    size="sm"
                    value={context.otherAcids}
                    onChange={(e) =>
                      context.setOtherAcids(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Lascas de madeira</Form.Label>
                  <Form.Control
                    name="woodChips"
                    size="sm"
                    value={context.woodChips}
                    onChange={(e) =>
                      context.setWoodChips(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
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

                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Salmoura (cloreto de sódio) </Form.Label>
                  <Form.Control
                    name="salmoura"
                    size="sm"
                    value={context.salmoura}
                    onChange={(e) => context.setSalmoura(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Açúcar (sacarose)</Form.Label>
                  <Form.Control
                    name="sugar"
                    size="sm"
                    value={context.sugar}
                    onChange={(e) => context.setSugar(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Taninos</Form.Label>
                  <Form.Control
                    name="taninos"
                    size="sm"
                    value={context.taninos}
                    onChange={(e) => context.setTaninos(e.currentTarget.value)}
                  />
                </Col>

                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
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
                <Col md={6} lg={4} className="mb-4">
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

                <Col md={6} lg={4} className="mb-4">
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
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="packing" title="Embalagem">
        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Garrafas de vidro</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.glassBottles}
                    onChange={(e) =>
                      context.setGlassBottles(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Garrafas PET</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.petBottles}
                    onChange={(e) =>
                      context.setPetBottles(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Rótulos</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.labels}
                    onChange={(e) => context.setLabels(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Rolhas</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.corks}
                    onChange={(e) => context.setCorks(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Focinhos de vinho</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.wineMuzzles}
                    onChange={(e) =>
                      context.setWineMuzzles(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Cápsulas</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.capsules}
                    onChange={(e) => context.setCapsules(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Alumínio (folhas)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.aluminumSheets}
                    onChange={(e) =>
                      context.setAluminumSheets(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Polietileno (folhas)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.polyethyleneSheets}
                    onChange={(e) =>
                      context.setPolyethyleneSheets(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Tampas de coroa - aço</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.crownCaps}
                    onChange={(e) =>
                      context.setCrownCaps(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Bidule</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.bidule}
                    onChange={(e) => context.setBidule(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Envoltórios de filme PVC</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.pvc}
                    onChange={(e) => context.setPvc(e.currentTarget.value)}
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Envoltórios de filme LDPE</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.ldpeFilmWraps}
                    onChange={(e) =>
                      context.setLdpeFilmWraps(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
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
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Caixas (kg)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.boxes}
                    onChange={(e) => context.setBoxes(e.currentTarget.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="cleaning" title="Limpeza">
        <Row>
          <Col>
            <Form.Group>
              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Nitric acid (50%)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.nitricAcid}
                    onChange={(e) =>
                      context.setNitricAcid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Phosphoric acid</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.phosphoricAcid}
                    onChange={(e) =>
                      context.setPhosphoricAcid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Soda liquid (50%)</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.sodaLiquid}
                    onChange={(e) =>
                      context.setSodaLiquid(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Solid sodium hydroxide</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.solidSodiumHydroxide}
                    onChange={(e) =>
                      context.setSolidSodiumHydroxide(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>15% sodium hypochlorite</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.sodiumHypochlorite}
                    onChange={(e) =>
                      context.setSodiumHypochlorite(e.currentTarget.value)
                    }
                  />
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Form.Label>Sodium sulfate</Form.Label>
                  <Form.Control
                    size="sm"
                    value={context.sodiumSulfate}
                    onChange={(e) =>
                      context.setSodiumSulfate(e.currentTarget.value)
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
