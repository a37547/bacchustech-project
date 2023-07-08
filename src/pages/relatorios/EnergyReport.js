import React, { useContext, useEffect, useRef } from "react";
import { Fragment } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { AppContext } from "../../context/appContext";

const EnergyReport = ({
  naturalGasBought,
  dieselBought,
  fuelOilBought,
  nuclearBought,
  coalBought,
  windEnergyBought,
  hidrelectricBought,
  solarBought,
  biomassBought,
  biogasBought,
  hidrelectricProduced,
  solarProduced,
  biomassProduced,
  biogasProduced,
  pureDieselUsedInCompany,
  pureGasolineUsedInCompany,
  biofuelUsedInCompany,
  lubricantUsedInCompany,
  butaneUsedInCompany,
  propaneUsedInCompany,
  gplAutoUsedInCompany,
  naturalGasUsedInCompany,
  biogasUsedInCompany,
  woodsUsedInCompany,
  pelletsUsedInCompany,
}) => {
  const context = useContext(AppContext);
  const electricityBySourceGraphRef = useRef(null);
  const electricityProducedBySourceGraphRef = useRef(null);
  const electricityConsumedInCompanyInstalationsGraphRef = useRef(null);

  const data = {
    labels: [
      "Gás natural",
      "Gasóleo",
      "Fuelóleo",
      "Nuclear",
      "Carvão",
      "Eólica",
      "Hidrelétrica",
      "Solar",
      "Biomassa",
      "Biogás",
    ],
    datasets: [
      {
        data: [
          naturalGasBought,
          dieselBought,
          fuelOilBought,
          nuclearBought,
          coalBought,
          windEnergyBought,
          hidrelectricBought,
          solarBought,
          biomassBought,
          biogasBought,
        ],
        backgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#78f6a7",
          "#98as21",
          "#ee779a",
          "#98ab74",
          "#984562",
          "#438172",
        ],
        hoverBackgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#ffc000",
          "#78f6a7",
          "#98as21",
          "#ee779a",
          "#98ab74",
          "#984562",
          "#438172",
        ],
      },
    ],
  };

  const data2 = {
    labels: ["Hidroelétrica", "Solar", "Biomassa", "Biogás"],
    datasets: [
      {
        data: [
          hidrelectricProduced,
          solarProduced,
          biomassProduced,
          biogasProduced,
        ],
        backgroundColor: ["#3568c1", "#f27724", "#9f9f9f", "#f3bf00"],
        hoverBackgroundColor: ["#3568c1", "#f27724", "#9f9f9f", "#f3bf00"],
      },
    ],
  };

  const data3 = {
    labels: [
      "Gasóleo puro",
      "Gasolina pura",
      "Biocombustível",
      "Óleo lubrificante",
    ],
    datasets: [
      {
        data: [
          pureDieselUsedInCompany,
          pureGasolineUsedInCompany,
          biofuelUsedInCompany,
          lubricantUsedInCompany,
          propaneUsedInCompany,
          butaneUsedInCompany,
          gplAutoUsedInCompany,
          naturalGasUsedInCompany,
          biogasUsedInCompany,
          woodsUsedInCompany,
          pelletsUsedInCompany,
        ],
        backgroundColor: [
          "#3568c1",
          "#f27724",
          "#9f9f9f",
          "#f3bf00",
          "#426718",
          "#912371",
          "#b4e46a",
          "#ffb233",
          "#33fff0",
          "#a533ff",
          "#ff7433",
        ],
        hoverBackgroundColor: [
          "#3568c1",
          "#f27724",
          "#9f9f9f",
          "#f3bf00",
          "#426718",
          "#912371",
          "#b4e46a",
          "#ffb233",
          "#33fff0",
          "#a533ff",
          "#ff7433",
        ],
      },
    ],
  };

  useEffect(() => {
    let year = context.selectedYear["year"];
    let company = context.loggedUser["company"];
  }, []);

  return (
    <Fragment>
      <Col
        md={4}
        style={{ height: "300px", maxHeight: "300px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
          ref={electricityBySourceGraphRef}
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
                    font: {
                      weight: "bold",
                      size: 17,
                    },
                  },
                },
              },
              title: {
                display: true,
                text: "Consumo de eletricidade comprada por fonte",
                font: {
                  size: 17,
                },
              },
            },
            animation: {
              onComplete: () => {
                if (context.isCompleted10 == false) {
                  let chart = electricityBySourceGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setElectricityBySourceImage(image);
                  context.setIsCompleted10(true);
                }
              },
            },
          }}
        />
      </Col>

      <Col
        md={4}
        style={{ height: "275px", maxHeight: "275px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
          ref={electricityProducedBySourceGraphRef}
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
                text: "Consumo de eletricidade produzida por fonte",
                font: {
                  size: 17,
                },
              },
            },
            animation: {
              onComplete: () => {
                if (context.isCompleted11 == false) {
                  let chart = electricityProducedBySourceGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setElectricityProducedBySourceImage(image);
                  context.setIsCompleted11(true);
                }
              },
            },
          }}
        />
      </Col>
      <Col
        md={4}
        style={{ height: "275px", maxHeight: "275px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
          ref={electricityConsumedInCompanyInstalationsGraphRef}
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
                text: "Percentual de energia consumida em combustíveis utilizados nas instalações da empresa",
                font: {
                  size: 17,
                },
              },
            },
            animation: {
              onComplete: () => {
                if (context.isCompleted12 == false) {
                  let chart =
                    electricityConsumedInCompanyInstalationsGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setElectricityConsumedInCompanyInstalationsImage(
                    image
                  );
                  context.setIsCompleted12(true);
                }
              },
            },
          }}
        />
      </Col>
    </Fragment>
  );
};

export default EnergyReport;
