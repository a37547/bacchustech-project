import axios from "axios";
import Joi from "joi";
import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../../context/appContext";
import { getMaterialsByYearAndCompany } from "../../../services/generalData";

const Materials = () => {
  const context = useContext(AppContext);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState({});

  const [activeListGroupItem, setActiveListGroupItem] = useState(
    "Produtos enológicos"
  );

  const [selectedOption, setSelectedOption] = useState("Produtos enológicos");

  const [options, setOptions] = useState([
    "Produtos enológicos",
    "Embalagem",
    "Limpeza",
  ]);

  const schema = Joi.object({
    citricAcid: Joi.number().precision(1).optional().allow(null, ""),
    tartricAcid: Joi.number().precision(1).optional().allow(null, ""),
    sorbicAcid: Joi.number().precision(1).optional().allow(null, ""),
    otherAcids: Joi.number().precision(1).optional().allow(null, ""),
    bentonitaCaulim: Joi.number().precision(1).optional().allow(null, ""),
    potassiumBissulfit: Joi.number().precision(1).optional().allow(null, ""),
    calciumCarbonate: Joi.number().precision(1).optional().allow(null, ""),
    woodChips: Joi.number().precision(1).optional().allow(null, ""),
    arabicGoma: Joi.number().precision(1).optional().allow(null, ""),
    milkProteins: Joi.number().precision(1).optional().allow(null, ""),
    salmoura: Joi.number().precision(1).optional().allow(null, ""),
    liquidSo2: Joi.number().precision(1).optional().allow(null, ""),
    sugar: Joi.number().precision(1).optional().allow(null, ""),
    taninos: Joi.number().precision(1).optional().allow(null, ""),
    amoniumSulfate: Joi.number().precision(1).optional().allow(null, ""),
    diatomito: Joi.number().precision(1).optional().allow(null, ""),
    etanol: Joi.number().precision(1).optional().allow(null, ""),
    ovalbumina: Joi.number().precision(1).optional().allow(null, ""),
    microorganisms: Joi.number().precision(1).optional().allow(null, ""),
  });

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

        console.log("Materials exists");
      } else {
        context.setFirstMaterialsInsertion(true);
        console.log("Materials does not exist");
      }
    });
  }, []);

  const updateMaterials = async (year, company, body, config) => {
    return await axios.put(
      `http://localhost:5000/api/users/updateMaterials/${year}/${company}`,
      body,
      config
    );
  };

  const handleMaterialsSaveChanges = async () => {
    console.log("CONTEXT: ", context.firstMaterialsInsertion);
    const validation = schema.validate({
      citricAcid: context.citricAcid,
      tartricAcid: context.tartricAcid,
      sorbicAcid: context.sorbicAcid,
      otherAcids: context.otherAcids,
      bentonitaCaulim: context.bentonitaCaulim,
      potassiumBissulfit: context.potassiumBissulfit,
      calciumCarbonate: context.calciumCarbonate,
      woodChips: context.woodChips,
      arabicGoma: context.arabicGoma,
      milkProteins: context.milkProteins,
      salmoura: context.salmoura,
      liquidSo2: context.liquidSo2,
      sugar: context.sugar,
      taninos: context.taninos,
      amoniumSulfate: context.amoniumSulfate,
      diatomito: context.diatomito,
      etanol: context.etanol,
      ovalbumina: context.ovalbumina,
      microorganisms: context.microorganisms,
    });

    const materials = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      citric_acid: validation.value["citricAcid"],
      tartric_acid: validation.value["tartricAcid"],
      sorbic_acid: validation.value["sorbicAcid"],
      other_acids: validation.value["otherAcids"],
      bentonita_caulim: validation.value["bentonitaCaulim"],
      potassium_bissulfit: validation.value["potassiumBissulfit"],
      calcium_carbonate: validation.value["calciumCarbonate"],
      wood_chips: validation.value["woodChips"],
      arabic_goma: validation.value["arabicGoma"],
      milk_proteins: validation.value["milkProteins"],
      salmoura: validation.value["salmoura"],
      liquid_so2: validation.value["liquidSo2"],
      sugar: validation.value["sugar"],
      taninos: validation.value["taninos"],
      amonium_sulfate: validation.value["amoniumSulfate"],
      diatomito: validation.value["diatomito"],
      etanol: validation.value["etanol"],
      ovalbumina: validation.value["ovalbumina"],
      microorganisms: validation.value["microorganisms"],
      company_name: context.loggedUser && context.loggedUser["company"],
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstMaterialsInsertion) {
      console.log("The year already has data. Let's update!");
      updateMaterials(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        JSON.stringify({
          citric_acid: validation.value["citricAcid"],
          tartric_acid: validation.value["tartricAcid"],
          sorbic_acid: validation.value["sorbicAcid"],
          other_acids: validation.value["otherAcids"],
          bentonita_caulim: validation.value["bentonitaCaulim"],
          potassium_bissulfit: validation.value["potassiumBissulfit"],
          calcium_carbonate: validation.value["calciumCarbonate"],
          wood_chips: validation.value["woodChips"],
          arabic_goma: validation.value["arabicGoma"],
          milk_proteins: validation.value["milkProteins"],
          salmoura: validation.value["salmoura"],
          liquid_so2: validation.value["liquidSo2"],
          sugar: validation.value["sugar"],
          taninos: validation.value["taninos"],
          amonium_sulfate: validation.value["amoniumSulfate"],
          diatomito: validation.value["diatomito"],
          etanol: validation.value["etanol"],
          ovalbumina: validation.value["ovalbumina"],
          microorganisms: validation.value["microorganisms"],
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

      createMaterials(materials, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        context.setFirstMaterialsInsertion(false);
        console.log("Materials created!", res);
        toast.success("Alterações guardadas!");
      });
    }
  };

  const createMaterials = async (body, config) => {
    return await axios.post(
      "http://localhost:5000/api/users/createMaterials",
      body,
      config
    );
  };

  return (
    <Fragment>
      <Form>
        <Row className="mt-4">
          <Col className="d-flex justify-content-between">
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

          <Col className="d-flex justify-content-end">
            <Button
              style={{ backgroundColor: "rgb(80, 116, 77)" }}
              onClick={handleMaterialsSaveChanges}
            >
              Guardar alterações
            </Button>
          </Col>

          <Row className="mt-3">
            {selectedOption === "Produtos enológicos" && (
              <Col>
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
                        Produtos enológicos
                      </span>

                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontStyle: "italic",
                        }}
                      >
                        * Confiras as faturas e os relatórios finais anuais da
                        empresa. Todos os valores devem ser expressos em
                        toneladas.
                      </span>
                    </div>
                  </div>

                  <Row className="mt-3">
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Ácido cítrico, mono-hidratado</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.citricAcid}
                        onChange={(e) =>
                          context.setCitricAcid(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Ácido tartrico (D, L) </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.tartricAcid}
                        onChange={(e) =>
                          context.setTartricAcid(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Ácido sórbico</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.sorbicAcid}
                        onChange={(e) =>
                          context.setSorbicAcid(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Outros ácidos e sais de ácidos)</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.otherAcids}
                        onChange={(e) =>
                          context.setOtherAcids(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Bentonita, caulim</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.bentonitaCaulim}
                        onChange={(e) =>
                          context.setBentonitaCaulim(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Bissulfito de potássio</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.potassiumBissulfit}
                        onChange={(e) =>
                          context.setPotassiumBissulfit(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Carbonato de cálcio</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.calciumCarbonate}
                        onChange={(e) =>
                          context.setCalciumCarbonate(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Lascas de madeira</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.woodChips}
                        onChange={(e) =>
                          context.setWoodChips(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Goma-arábica </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.arabicGoma}
                        onChange={(e) =>
                          context.setArabicGoma(e.currentTarget.value)
                        }
                      />
                    </Col>

                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Proteínas do leite, leite em pó </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.milkProteins}
                        onChange={(e) =>
                          context.setMilkProteins(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Salmoura (cloreto de sódio) </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.salmoura}
                        onChange={(e) =>
                          context.setSalmoura(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>SO2 líquido</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.liquidSo2}
                        onChange={(e) =>
                          context.setLiquidSo2(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Açúcar (sacarose)</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.sugar}
                        onChange={(e) =>
                          context.setSugar(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Taninos</span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.taninos}
                        onChange={(e) =>
                          context.setTaninos(e.currentTarget.value)
                        }
                      />
                    </Col>

                    <Col md={4} lg={2} className="mb-3">
                      <Form.Label>
                        <span>Sulfato de amônio </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.amoniumSulfate}
                        onChange={(e) =>
                          context.setAmoniumSulfate(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={3} className="mb-3">
                      <Form.Label>
                        <span>Terra diatomácea, diatomito, perlite </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.diatomito}
                        onChange={(e) =>
                          context.setDiatomito(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={4} lg={3} className="mb-3">
                      <Form.Label>
                        <span>
                          Etanol retificado de origem vitivinicultural
                        </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.etanol}
                        onChange={(e) =>
                          context.setEtanol(e.currentTarget.value)
                        }
                      />
                    </Col>
                    <Col md={6} lg={5} className="mb-3">
                      <Form.Label>
                        <span>
                          Ovalbumina, ictiocola, gelatina, soro, caseinato de
                          potássio{" "}
                        </span>
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={context.ovalbumina}
                        onChange={(e) =>
                          context.setOvalbumina(e.currentTarget.value)
                        }
                      />
                    </Col>

                    <Col md={6} lg={5} className="mb-3">
                      <Form.Label>
                        <span>
                          Microoragnismos e extratos (bactérias, leveduras,
                          células de levedura)
                        </span>
                      </Form.Label>
                      <Form.Control
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
            )}

            {selectedOption === "Embalagem" && (
              <Col>
                <Form.Group controlId="formGridEmail">
                  <div>
                    <div className="d-flex flex-column mb-2">
                      <div className="d-flex justify-content-between">
                        <span
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            color: "rgba(13,27,62,0.7)",
                          }}
                        >
                          Embalagens
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontStyle: "italic",
                        }}
                      >
                        * Para saber a quantidade total de embalagem utilizada,
                        multiplique a quantidade unitária total anual de cada um
                        por sua respetiva massa.
                      </span>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontStyle: "italic",
                        }}
                      >
                        * Confiras as faturas e os relatórios finais anuais da
                        empresa. Todos os valores devem ser expressos em
                        toneladas.
                      </span>
                    </div>
                  </div>

                  <Row className="mt-3">
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Garrafas de vidro</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Garrafas PET</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Rótulos</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Rolhas</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Focinhos de vinho</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Cápsulas</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Alumínio (folhas)</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Polietileno (folhas)</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Tampas de coroa - aço</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Tampas de coroa - alumínio</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Bidule</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Envoltórios de filme PVC</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Envoltórios de filme LDPE</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={4} className="mb-3">
                      <Form.Label>
                        <span>Estiramento / Envoltório de paletes (LDPE)</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Caixas (kg)</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            )}

            {selectedOption === "Limpeza" && (
              <Col>
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
                        Produtos de limpeza
                      </span>

                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontStyle: "italic",
                        }}
                      >
                        * Confiras as faturas e os relatórios finais anuais da
                        empresa. Todos os valores devem ser expressos em
                        toneladas.
                      </span>
                    </div>
                  </div>

                  <Row className="mt-3">
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Nitric acid (50%)</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Phosphoric acid</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Soda liquid (50%)</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Solid sodium hydroxide</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>15% sodium hypochlorite</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                    <Col md={3} className="mb-3">
                      <Form.Label>
                        <span>Sodium sulfate</span>
                      </Form.Label>
                      <Form.Control type="number" size="sm" />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            )}
          </Row>
        </Row>
      </Form>
      <ToastContainer />
    </Fragment>
  );
};

export default Materials;
