import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useContext } from "react";
import { Badge, Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";
import { AppContext } from "../../context/appContext";
import { getWaterByYearAndCompany } from "../../services/water";

const WaterReport = ({
  fromNetwork,
  fromWell,
  fromCistern,
  reusedWater,
  pressing,
  trasfega,
  estabilization,
  filtration,
  cleaningDifferentFloors,
  sterilization,
  filling,
  labeling,
  bottlingDifferentFloors,
  pressingByProcess,
  trasfegaByProcess,
  estabilizationByProcess,
  filtrationByProcess,
  sterilizationByProcess,
  fillingByProcess,
  labelingByProcess,
  conductivityHighSeasonGeneratedWaterPercentage,
  turbidityHighSeasonGeneratedWaterPercentage,
  CQOHighSeasonGeneratedWaterPercentage,
  CBOHighSeasonGeneratedWaterPercentage,
  SSTHighSeasonGeneratedWaterPercentage,
  NTKHighSeasonGeneratedWaterPercentage,
  fenoisHighSeasonGeneratedWaterPercentage,
  fosforoHighSeasonGeneratedWaterPercentage,
  nitratosHighSeasonGeneratedWaterPercentage,
  sulfatosHighSeasonGeneratedWaterPercentage,
  ferroHighSeasonGeneratedWaterPercentage,
  aluminumHighSeasonGeneratedWaterPercentage,
  cadmioHighSeasonGeneratedWaterPercentage,
  cobreHighSeasonGeneratedWaterPercentage,
  cromioHighSeasonGeneratedWaterPercentage,
  manganesHighSeasonGeneratedWaterPercentage,
  conductivityLowSeasonGeneratedWaterPercentage,
  turbidityLowSeasonGeneratedWaterPercentage,
  CQOLowSeasonGeneratedWaterPercentage,
  CBOLowSeasonGeneratedWaterPercentage,
  SSTLowSeasonGeneratedWaterPercentage,
  NTKLowSeasonGeneratedWaterPercentage,
  fenoisLowSeasonGeneratedWaterPercentage,
  fosforoLowSeasonGeneratedWaterPercentage,
  nitratosLowSeasonGeneratedWaterPercentage,
  sulfatosLowSeasonGeneratedWaterPercentage,
  ferroLowSeasonGeneratedWaterPercentage,
  aluminumLowSeasonGeneratedWaterPercentage,
  cadmioLowSeasonGeneratedWaterPercentage,
  cobreLowSeasonGeneratedWaterPercentage,
  cromioLowSeasonGeneratedWaterPercentage,
  manganesLowSeasonGeneratedWaterPercentage,
}) => {
  const context = useContext(AppContext);
  const waterConsumptionBySourceGraphRef = useRef(null);
  const waterConsumptionByWinemakingProcessGraphRef = useRef(null);
  const waterConsumptionByBottlingProcessGraphRef = useRef(null);
  const waterConsumptionByProcessGraphRef = useRef(null);
  const pollutantRemovalPercentageGraphRef = useRef(null);

  useEffect(() => {}, []);

  const data = {
    labels: ["Proveniente da rede", "Captada de poço", "Captada de cisterna"],
    datasets: [
      {
        data: [fromNetwork, fromWell, fromCistern],
        backgroundColor: ["#4472c4", "#ed7d31", "#a5a5a5"],
        hoverBackgroundColor: ["#4472c4", "#ed7d31", "#a5a5a5"],
      },
    ],
  };

  const data2 = {
    labels: [
      "Prensagem",
      "Trasfega",
      "Estabilização",
      "Filtração",
      "Limpeza de pavimentos diversos",
    ],
    datasets: [
      {
        data: [
          pressing,
          trasfega,
          estabilization,
          filtration,
          cleaningDifferentFloors,
        ],
        backgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#212321",
          "#928571",
        ],
        hoverBackgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#212321",
          "#928571",
        ],
      },
    ],
  };

  const data3 = {
    labels: [
      "Esterilização das garrafas",
      "Enchimento",
      "Rotulagem",
      "Limpeza de pavimentos diversos",
    ],
    datasets: [
      {
        data: [sterilization, filling, labeling, bottlingDifferentFloors],
        backgroundColor: ["#4472c4", "#ed7d31", "#a5a5a5", "#928571"],
        hoverBackgroundColor: ["#4472c4", "#ed7d31", "#a5a5a5", "#928571"],
      },
    ],
  };

  const data4 = {
    labels: [
      "Prensagem",
      "Trasfega",
      "Estabilização",
      "Filtração",
      "Esterilização das garrafas",
      "Enchimento",
      "Rotulagem",
    ],
    datasets: [
      {
        data: [
          pressingByProcess,
          trasfegaByProcess,
          estabilizationByProcess,
          filtrationByProcess,
          sterilizationByProcess,
          fillingByProcess,
          labelingByProcess,
        ],
        backgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#928571",
          "#9f8ea1",
          "#918471",
        ],
        hoverBackgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#928571",
          "#9f8ea1",
          "#918471",
        ],
      },
    ],
  };

  const data5 = {
    labels: [
      "Condutividade",
      "Turbidez",
      "CQO",
      "CBO5, 20oC",
      "SST",
      "Azoto Total (NTK)",
      "Fenóis (C6H5OH)",
      "Fósforo total (P)",
      "Nitratos (NO3-)",
      "Sulfatos (SO4 2-)",
      "Ferro total (Fe) ",
      "Alumínio (Al3+)",
      "Cádmio total (Cd)",
      "Cobre total (Cu)",
      "Crómio total (Cr)",
      "Manganês total (Mn)",
    ],
    datasets: [
      {
        label: "Época Alta",
        data: [
          conductivityHighSeasonGeneratedWaterPercentage,
          turbidityHighSeasonGeneratedWaterPercentage,
          CQOHighSeasonGeneratedWaterPercentage,
          CBOHighSeasonGeneratedWaterPercentage,
          SSTHighSeasonGeneratedWaterPercentage,
          NTKHighSeasonGeneratedWaterPercentage,
          fenoisHighSeasonGeneratedWaterPercentage,
          fosforoHighSeasonGeneratedWaterPercentage,
          nitratosHighSeasonGeneratedWaterPercentage,
          sulfatosHighSeasonGeneratedWaterPercentage,
          ferroHighSeasonGeneratedWaterPercentage,
          aluminumHighSeasonGeneratedWaterPercentage,
          cadmioHighSeasonGeneratedWaterPercentage,
          cobreHighSeasonGeneratedWaterPercentage,
          cromioHighSeasonGeneratedWaterPercentage,
          manganesHighSeasonGeneratedWaterPercentage,
        ],
        backgroundColor: ["#4472c4"],
        hoverBackgroundColor: ["#4472c4"],
      },
      {
        label: "Época Baixa",
        data: [
          conductivityLowSeasonGeneratedWaterPercentage,
          turbidityLowSeasonGeneratedWaterPercentage,
          CQOLowSeasonGeneratedWaterPercentage,
          CBOLowSeasonGeneratedWaterPercentage,
          SSTLowSeasonGeneratedWaterPercentage,
          NTKLowSeasonGeneratedWaterPercentage,
          fenoisLowSeasonGeneratedWaterPercentage,
          fosforoLowSeasonGeneratedWaterPercentage,
          nitratosLowSeasonGeneratedWaterPercentage,
          sulfatosLowSeasonGeneratedWaterPercentage,
          ferroLowSeasonGeneratedWaterPercentage,
          aluminumLowSeasonGeneratedWaterPercentage,
          cadmioLowSeasonGeneratedWaterPercentage,
          cobreLowSeasonGeneratedWaterPercentage,
          cromioLowSeasonGeneratedWaterPercentage,
          manganesLowSeasonGeneratedWaterPercentage,
        ],
        backgroundColor: ["#ed7d31"],
        hoverBackgroundColor: ["#ed7d31"],
      },
    ],
  };

  return (
    <Fragment>
      <Col
        md={4}
        style={{ height: "250px", maxHeight: "250px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
          ref={waterConsumptionBySourceGraphRef}
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
                text: "Consumo de água por fonte proveniente (%)",
                font: {
                  size: 17,
                },
              },
            },
            /*animation: 0,*/
            animation: {
              onComplete: () => {
                if (context.isCompleted5 == false) {
                  let chart = waterConsumptionBySourceGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setWaterConsumptionBySourceImage(image);
                  context.setIsCompleted5(true);
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
          ref={waterConsumptionByWinemakingProcessGraphRef}
          datakey="value"
          data={data2}
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
                text: "Percentual do volume de água gasto por processo de vinificação",
                font: {
                  size: 17,
                },
              },
            },
            /*animation: 0,*/
            animation: {
              onComplete: () => {
                if (context.isCompleted6 == false) {
                  let chart =
                    waterConsumptionByWinemakingProcessGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setWaterConsumptionByWinemakingProcessImage(image);
                  context.setIsCompleted6(true);
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
          ref={waterConsumptionByBottlingProcessGraphRef}
          datakey="value"
          data={data3}
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
                text: "Percentual do volume de água gasto por processo de engarrafamento",
                font: {
                  size: 17,
                },
              },
            },
            /*animation: 0,*/
            animation: {
              onComplete: () => {
                if (context.isCompleted7 == false) {
                  let chart = waterConsumptionByBottlingProcessGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setWaterConsumptionByBottlingProcessImage(image);
                  context.setIsCompleted7(true);
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
          ref={waterConsumptionByProcessGraphRef}
          datakey="value"
          data={data4}
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
                text: "Percentual do volume total de água gasto por processo",
                font: {
                  size: 17,
                },
              },
            },
            /*animation: 0,*/
            animation: {
              onComplete: () => {
                if (context.isCompleted8 == false) {
                  let chart = waterConsumptionByProcessGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setWaterConsumptionByProcessImage(image);
                  context.setIsCompleted8(true);
                }
              },
            },
          }}
        />
      </Col>
      <Col
        md={12}
        style={{ height: "250px", maxHeight: "250px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Bar
          ref={pollutantRemovalPercentageGraphRef}
          datakey="value"
          data={data5}
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
                  usePointStyle: false,
                },
              },
              datalabels: {
                display: false,
                /*color: "white",
                labels: {
                  title: {
                    font: {
                      weight: "bold",
                      size: 17,
                    },
                  },
                },*/
              },
              title: {
                display: true,
                text: "Percentual de Remoção de Poluentes",
                font: {
                  size: 17,
                },
              },
            },
            /*animation: 0,*/
            animation: {
              onComplete: () => {
                if (context.isCompleted9 == false) {
                  let chart = pollutantRemovalPercentageGraphRef.current;
                  let image = chart.canvas.toDataURL();
                  context.setPollutantRemovalPercentageImage(image);
                  context.setIsCompleted9(true);
                }
              },
            },
          }}
        />
      </Col>
    </Fragment>
  );
};

export default WaterReport;
