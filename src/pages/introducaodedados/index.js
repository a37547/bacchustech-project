import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  OverlayTrigger,
  Row,
  Tab,
  Tabs,
  Tooltip,
} from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import InformationsModal from "./InformationsModal";
import GeneralData from "./AccordionItems/GeneralData";
import Materials from "./AccordionItems/Materials";
import Energy from "./AccordionItems/Energy";
import Electricity from "./AccordionItems/Electricity";
import Waste from "./AccordionItems/Waste";
import "../../assets/styles/introducaodedados.css";
import banner from "../../assets/images/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faWarning } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AppNavbar from "../../layout/navbar";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import * as jose from "jose";
import {
  getGeneralDataByYearAndCompany,
  getMaterialsByYearAndCompany,
} from "../../services/generalData";

const IntroducaoDeDados = () => {
  const context = useContext(AppContext);

  const [isModal1Open, setIsModal1Open] = useState(true);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [activeForm, setActiveForm] = useState("generalData");
  const [activeMenu, setActiveMenu] = useState("dataIntroduction");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState({});

  useEffect(() => {
    getYears().then((res) => {
      if (res.data.Data["length"] == 0) {
        let currentYear = new Date().getFullYear();
        let lastYear = new Date().getFullYear() - 1;

        insertYear(
          currentYear.toString(),
          context.loggedUser && context.loggedUser["company"]
        ).then((res) => console.log("Current year inserted with success", res));

        insertYear(
          lastYear.toString(),
          context.loggedUser && context.loggedUser["company"]
        ).then(async (res) => {
          console.log("Last year inserted with success", res);
          getYears().then((res) => {
            setYears(res.data.Data);
            context.setSelectedYear(
              res.data.Data.find(
                (item) => item.year == new Date().getFullYear()
              )
            );

            context.setIsYearLoaded(true);
          });
        });
      } else {
        setYears(res.data.Data);
        context.setSelectedYear(
          res.data.Data.find((item) => item.year == new Date().getFullYear())
        );
        context.setIsYearLoaded(true);
      }
    });
  }, []);

  const getYears = async () => {
    return await axios.get(
      "http://localhost:5000/api/users/getYearsByCompany",
      {
        params: {
          company_name: jose.decodeJwt(Cookie.get("token")).user["company"],
        },
      }
    );
  };

  const insertYear = async (year, company) => {
    return await axios.post(
      "http://localhost:5000/api/users/addYearToCompany",
      { year: year, company_name: company }
    );
  };

  const fetchData = (year, company) => {
    if (activeForm == "generalData") {
      getGeneralDataByYearAndCompany(year, company).then((res) => {
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
    } else if (activeForm == "materials") {
      getMaterialsByYearAndCompany(year, company).then((res) => {
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
          console.log("Materials does not exist");
        }
      });
    }
    console.log("FETCH DATA");
    console.log("Year: ", year);
    console.log("Active form: ", company);
  };

  return (
    <Fragment>
      <AppNavbar />
      <div className="mt-3 mx-0 py-0 px-5 text-center">
        <span
          style={{
            fontSize: "1.5rem",
            fontFamily: "Bad Script",
            fontSize: "48px",
          }}
        >
          Introdução de dados
        </span>
      </div>

      <Row className="mt-3 mx-0 py-0 px-md-3 px-lg-4">
        <Col md={4}>
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
            >
              {context.selectedYear && context.selectedYear["year"]}
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {years &&
                years.map((item) => (
                  <Dropdown.Item
                    key={item.year}
                    active={item.year == context.selectedYear["year"]}
                    onClick={() => {
                      context.setSelectedYear(item);
                      fetchData(
                        item.year,
                        context.loggedUser && context.loggedUser["company"]
                      );
                    }}
                  >
                    {item.year}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Link to="/reports">
            <Button
              style={{
                backgroundColor: "rgb(80, 116, 77)",
                marginRight: "20px",
              }}
              disabled={!context.isReportGenerationActive}
            >
              Gerar relatório
            </Button>
          </Link>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip" className="d-flex flex-column">
                <div className="mb-2">
                  <span>Os seguintes campos são obrigatórios</span>
                </div>

                <span>Uvas: total utilizado no ano</span>
              </Tooltip>
            }
          >
            <div>
              <FontAwesomeIcon
                icon={faWarning}
                className="text-danger"
                size="2x"
                style={{ cursor: "pointer" }}
              />
            </div>
          </OverlayTrigger>
        </Col>
        {context.isYearLoaded && (
          <Row className="m-0 p-0">
            <Col className="mt-4">
              <Tabs
                defaultActiveKey="generalData"
                id="uncontrolled-tab-example"
                className="flex-column flex-lg-row"
                onSelect={(eventKey) => setActiveForm(eventKey)}
              >
                <Tab
                  eventKey="generalData"
                  title="Dados gerais"
                  style={{
                    backgroundColor: "rgb(80, 116, 77) !important",
                  }}
                >
                  {activeForm == "generalData" && (
                    <Fragment>
                      <GeneralData />
                    </Fragment>
                  )}
                </Tab>
                <Tab eventKey="materials" title="Materiais">
                  {activeForm == "materials" && (
                    <Fragment>
                      <Materials />{" "}
                    </Fragment>
                  )}
                </Tab>
                <Tab eventKey="energy" title="Energia">
                  {activeForm == "energy" && (
                    <Fragment>
                      <Energy />
                    </Fragment>
                  )}
                </Tab>
                <Tab eventKey="electricity" title="Consumo de eletricidade">
                  Eletricidade
                </Tab>
                <Tab eventKey="waste" title="Resíduos">
                  Resíduos
                </Tab>
              </Tabs>
            </Col>
          </Row>
        )}
      </Row>
    </Fragment>
  );
};

export default IntroducaoDeDados;

/*

<Row>
              <Col xs={4} sm={3} md={2} lg={1}>
                <Dropdown style={{ width: "100%", maxWidth: "200%" }}>
                  <Dropdown.Toggle
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      color: "white",
                      backgroundColor: "rgb(80, 116, 77)",
                      border: "2px solid rgb(80, 116, 77)",
                    }}
                    variant="primary"
                    id="dropdown-basic"
                  >
                    {selectedYear.number}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    {years.map((year) => (
                      <Dropdown.Item
                        active={year.number == selectedYear.number}
                        onClick={() => {
                          this.setState({ selectedYear: year });
                        }}
                      >
                        {year.number}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={3}>
                <ListGroup>
                  <ListGroupItem
                    id="generalData"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "generalData"}
                    style={{ cursor: "pointer" }}
                  >
                    Dados gerais
                  </ListGroupItem>
                  <ListGroupItem
                    id="materials"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "materials"}
                    style={{ cursor: "pointer" }}
                  >
                    Materiais
                  </ListGroupItem>
                  <ListGroupItem
                    id="energy"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "energy"}
                    style={{ cursor: "pointer" }}
                  >
                    Energia
                  </ListGroupItem>
                  <ListGroupItem
                    id="electricity"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "electricity"}
                    style={{ cursor: "pointer" }}
                  >
                    Consumo de eletricidade
                  </ListGroupItem>
                  <ListGroupItem
                    id="waste"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "waste"}
                    style={{ cursor: "pointer" }}
                  >
                    Resíduos
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={8} lg={9}>
                {this.state.activeForm === "generalData" && <GeneralData />}
                {this.state.activeForm === "materials" && <Materials />}
                {this.state.activeForm === "energy" && <Energy />}
                {this.state.activeForm === "electricity" && <Electricity />}
                {this.state.activeForm === "waste" && <Waste />}
              </Col>
            </Row>

            */
