import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

const WasteReport = () => {
  const data = {
    labels: ["Engaço", "Bagaço", "Borra", "Terras diatomáceas residuais"],
    datasets: [
      {
        data: [7, 50, 19, 25],
        backgroundColor: ["#4472c4", "#ed7d31", "#a5a5a5", "#ffc000"],
        hoverBackgroundColor: ["#4472c4", "#ed7d31", "#a5a5a5", "#ffc000"],
      },
    ],
  };

  const data2 = {
    labels: [
      "Garrafa de vidro",
      "Plástico Mistura",
      "Plástico HDPE",
      "Plástico LDPE",
      "Plástico PET",
      "Plástico PP",
      "Plástico PVC",
      "Papel Mistura",
      "Cartão",
      "Cortiça Mistura",
    ],
    datasets: [
      {
        data: [29, 5, 7, 4, 12, 2, 1, 13, 26, 1],
        backgroundColor: [
          "#3568c1",
          "#f27724",
          "#9f9f9f",
          "#f3bf00",
          "#4990cf",
          "#6aac3d",
          "#1b3b74",
          "#a44606",
          "#5d5d5d",
          "#a37c1a",
        ],
        hoverBackgroundColor: [
          "#3568c1",
          "#f27724",
          "#9f9f9f",
          "#f3bf00",
          "#4990cf",
          "#6aac3d",
          "#1b3b74",
          "#a44606",
          "#5d5d5d",
          "#a37c1a",
        ],
      },
    ],
  };

  const data3 = {
    labels: ["Vidro", "Plástico/Metal", "Papel/Cartão", "Indiferenciados"],
    datasets: [
      {
        data: [14, 27, 24, 35],
        backgroundColor: ["#00b050", "#ffc000", "#4472c4", "#7f7f7f"],
        hoverBackgroundColor: ["#00b050", "#ffc000", "#4472c4", "#7f7f7f"],
      },
    ],
  };

  const data4 = {
    labels: [
      "Lâmpadas",
      "Pilhas",
      "Baterias",
      "Restos de óleos lubrificantes",
      "Embalagens de plástico",
      "Embalagens/Latas de metal",
      "Absorventes com óleos lubrificantes",
      "Equipamentos elétricos e eletrónicos",
      "Tinteiros e toners usados",
    ],
    datasets: [
      {
        data: [2, 4, 9, 1, 18, 21, 12, 32, 1],
        backgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#fec104",
          "#5b9bd5",
          "#70ad47",
          "#264478",
          "#9e480e",
        ],
        hoverBackgroundColor: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5",
          "#fec104",
          "#5b9bd5",
          "#70ad47",
          "#264478",
          "#9e480e",
        ],
      },
    ],
  };

  const data5 = {
    labels: [
      "Mistura Fios",
      "Aço",
      "Alumínio",
      "Mistura latas",
      "Mistura madeira",
      "Pneus",
    ],
    datasets: [
      {
        data: [10, 8, 17, 27, 29, 8],
        backgroundColor: [
          "#3568c1",
          "#f27724",
          "#9f9f9f",
          "#f3bf00",
          "#4990cf",
          "#6aac3d",
        ],
        hoverBackgroundColor: [
          "#3568c1",
          "#f27724",
          "#9f9f9f",
          "#f3bf00",
          "#4990cf",
          "#6aac3d",
        ],
      },
    ],
  };

  return (
    <Row className="mx-0">
      <Col
        md={4}
        style={{ height: "300px", maxHeight: "300px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
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
                text: "Proporção de resíduos gerados no processo de vinificação",
                font: {
                  size: 17,
                },
              },
            },
          }}
        />
      </Col>

      <Col
        md={4}
        style={{ height: "350px", maxHeight: "350px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
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
                text: "Proporção de embalagens, refugo e regalhos do engarrafamento",
                font: {
                  size: 17,
                },
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
                text: "Proporção dos resíduos de escritório equivalentes aos municipais",
                font: {
                  size: 17,
                },
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
          datakey="value"
          data={data5}
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
                text: "Proporção dos resíduos de escritório equivalentes aos municipais",
                font: {
                  size: 17,
                },
              },
            },
          }}
        />
      </Col>

      <Col
        md={4}
        style={{ height: "350px", maxHeight: "350px" }}
        className="d-flex justify-content-center mb-md-5"
      >
        <Pie
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
                text: "Proporção de resíduos perigosos",
                font: {
                  size: 17,
                },
              },
            },
          }}
        />
      </Col>
    </Row>
  );
};

export default WasteReport;
