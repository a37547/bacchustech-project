import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { Alert, Col, Row, Tab, Tabs } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { getGeneralDataByYearAndCompany } from "../../services/generalData";
import { AppContext } from "../../context/appContext";
import { useState } from "react";
import { Fragment } from "react";

const GeneralDataReport = ({
  producedGrapes,
  boughtGrapes,
  mustProducedFromGrapes,
  mustBought,
  producedGrapesMust,
  purchasedInputsMust,
  glassBottles35,
  glassBottles75,
  glassBottles100,
  petBottles,
  bagInBox3,
  bagInBox5,
  generalData,
}) => {
  const context = useContext(AppContext);
  const producedAndBougthGrapesChartRef = useRef(null);
  const producedAndBougthMustChartRef = useRef(null);
  const mustFromProducedGrapesChartRef = useRef(null);
  const totalWineProportionsByTypeChartRef = useRef(null);

  const [isCompleted1, setIsCompleted1] = useState(false);
  const [isCompleted2, setIsCompleted2] = useState(false);
  const [isCompleted3, setIsCompleted3] = useState(false);

  useEffect(() => {
    let year = context.selectedYear["year"];
    let company = context.loggedUser["company"];

    //getGeneralData(year, company);
  }, []);

  const data = {
    labels: ["Produzidas e utilizadas", "Compradas e utilizadas"],
    datasets: [
      {
        data: [producedGrapes, boughtGrapes],
        backgroundColor: ["#ed7d31", "#4472c4"],
        hoverBackgroundColor: ["#ed7d31", "#4472c4"],
      },
    ],
  };

  const data2 = {
    labels: ["Produzidas e utilizadas", "Compradas e utilizadas"],
    datasets: [
      {
        data: [mustProducedFromGrapes, mustBought],
        backgroundColor: ["#bf9000", "#548235"],
        hoverBackgroundColor: ["#bf9000", "#548235"],
      },
    ],
  };

  const data3 = {
    labels: ["Produzidas e utilizadas", "Compradas e utilizadas"],
    datasets: [
      {
        data: [producedGrapesMust, purchasedInputsMust],
        backgroundColor: ["#767171", "#8c53ff"],
        hoverBackgroundColor: ["#767171", "#8c53ff"],
      },
    ],
  };

  const data4 = {
    labels: [
      "Garrafas de vidro (0,35L)",
      "Garrafas de vidro (0,75L)",
      "Garrafas de vidro (1L)",
      "Garrafas PET (1L)",
      "Bag-in-box (3L)",
      "Bag-in-box (5L)",
    ],
    datasets: [
      {
        data: [
          glassBottles35,
          glassBottles75,
          glassBottles100,
          petBottles,
          bagInBox3,
          bagInBox5,
        ],
        backgroundColor: [
          "#70ad47",
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
        ],
        hoverBackgroundColor: [
          "#70ad47",
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
        ],
      },
    ],
  };

  return (
    <Fragment>
      {generalData != null && (
        <Fragment>
          <Col
            md={4}
            style={{ height: "250px", maxHeight: "250px" }}
            className="d-flex justify-content-center mb-md-5"
          >
            <Pie
              ref={producedAndBougthGrapesChartRef}
              datakey="value"
              data={data}
              //data={grapesProducedAndBoughtData}
              style={{
                height: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                    },
                  },
                  datalabels: {
                    color: "white",
                    labels: {
                      title: {
                        display: true,
                        font: {
                          weight: "bold",
                          size: 17,
                        },
                      },
                    },
                  },
                  title: {
                    display: true,
                    text: "Uvas produzidas e compradas (%)",
                    font: {
                      size: 17,
                    },
                  },
                },
                /*animation: 0,*/
                animation: {
                  onComplete: () => {
                    if (context.isCompleted1 == false) {
                      let chart = producedAndBougthGrapesChartRef.current;
                      let image = chart.canvas.toDataURL();
                      context.setProducedAndBoughtGrapesImage(image);
                      context.setIsCompleted1(true);
                    }
                  },
                },
              }}
            />
          </Col>

          <Col
            md={4}
            style={{ height: "250px", maxHeight: "250px" }}
            className="d-flex justify-content-center mb-md-5"
          >
            <Pie
              ref={producedAndBougthMustChartRef}
              datakey="value"
              data={data2}
              style={{
                height: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                    },
                  },
                  datalabels: {
                    color: "white",
                    labels: {
                      title: {
                        font: {
                          weight: "bold",
                          size: 17,
                        },
                      },
                    },
                  },
                  title: {
                    display: true,
                    text: "Mosto produzido e comprado (%)",
                    font: {
                      size: 17,
                    },
                  },
                },
                /*animation: 0,*/
                animation: {
                  onComplete: () => {
                    if (context.isCompleted2 == false) {
                      let chart = producedAndBougthMustChartRef.current;
                      let image = chart.canvas.toDataURL();
                      context.setProducedAndBoughtMustImage(image);
                      context.setIsCompleted2(true);
                    }
                  },
                },
              }}
            />
          </Col>
          <Col
            md={4}
            style={{ height: "250px", maxHeight: "250px" }}
            className="d-flex justify-content-center mb-md-5"
          >
            <Pie
              ref={mustFromProducedGrapesChartRef}
              datakey="value"
              data={data3}
              style={{
                height: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                    },
                  },
                  datalabels: {
                    color: "white",
                    labels: {
                      title: {
                        font: {
                          weight: "bold",
                          size: 17,
                        },
                      },
                    },
                  },
                  title: {
                    display: true,
                    text: "Mosto proveniente de uvas produzidas e de insumos comprados (%)",
                    font: {
                      size: 17,
                    },
                  },
                },
                /*animation: 0,*/
                animation: {
                  onComplete: () => {
                    if (context.isCompleted3 == false) {
                      let chart = mustFromProducedGrapesChartRef.current;
                      let image = chart.canvas.toDataURL();
                      context.setMustFromProducedGrapesImage(image);
                      context.setIsCompleted3(true);
                    }
                  },
                },
              }}
            />
          </Col>

          <Col
            md={4}
            style={{ height: "300px", maxHeight: "300px" }}
            className="d-flex justify-content-center mb-md-5"
          >
            <Pie
              ref={totalWineProportionsByTypeChartRef}
              datakey="value"
              data={data4}
              style={{
                height: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                    },
                  },
                  datalabels: {
                    color: "white",
                    labels: {
                      title: {
                        font: {
                          weight: "bold",
                          size: 17,
                        },
                      },
                    },
                  },
                  title: {
                    display: true,
                    text: "Tipo de produto comercializado por total de vinho produzido (%)",
                    font: {
                      size: 17,
                    },
                  },
                },
                /*animation: 0,*/
                animation: {
                  onComplete: () => {
                    if (context.isCompleted4 == false) {
                      let chart = totalWineProportionsByTypeChartRef.current;
                      let image = chart.canvas.toDataURL();
                      context.setTotalWineProportionsByTypeImage(image);
                      context.setIsCompleted4(true);
                    }
                  },
                },
              }}
            />
          </Col>
        </Fragment>
      )}
      {generalData == null && (
        <Row>
          <Col>
            <Alert variant="danger">
              O ano selecionado não possui um relatório, uma vez que o mesmo
              ainda não foi gerado. Preencha todos os dados relativos a esse ano
              e gere o relatório.
            </Alert>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default GeneralDataReport;
