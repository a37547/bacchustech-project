import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import fundo from "../assets/images/fundo.jpg";
import banner from "../assets/images/banner.jpg";
import AppNavbar from "../layout/navbar";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";
import "../assets/styles/homepage.css";

const Homepage = () => {
  return (
    <div>
      <AppNavbar />
      <Row
        className="px-0 px-lg-5 pt-4 m-0 mx-lg-5"
        style={{
          borderBottom: "1x solid lightgray",
        }}
      >
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center mb-3 p-3"
        >
          <span
            style={{
              fontSize: "30px",
              fontFamily: "Sora",
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Uma plataforma para avaliação da sustentabilidade ambiental da sua
            empresa
          </span>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              style={{
                padding: "0.5rem 3.5rem",
                borderRadius: "20px",
                backgroundColor: "#4D6C3A",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Registar
            </Button>
          </Link>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-evenly align-items-center text-center m-0 p-0"
        >
          <Image src={fundo} className="image" style={{ objectFit: "cover" }} />
        </Col>
      </Row>
      <div className="p-4 text-center">
        <span
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            fontFamily: "Bad Script",
          }}
        >
          Os nossos serviços
        </span>
      </div>

      <Row className="d-flex py-3 px-4 px-sm-3 px-md-5 card-row">
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center mb-5"
        >
          <FontAwesomeIcon icon={faCartShopping} size="3x" />
          <span style={{ fontFamily: "Sora :wght@600", fontSize: "1.2rem" }}>
            Lorem ipsum lorem ipsum
          </span>
          <span
            style={{
              fontFamily: "Sora",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
          </span>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center mb-5"
        >
          <FontAwesomeIcon icon={faCartShopping} size="3x" />
          <span style={{ fontFamily: "Sora :wght@600", fontSize: "1.2rem" }}>
            Lorem ipsum lorem ipsum
          </span>
          <span
            style={{
              fontFamily: "Sora",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
          </span>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center mb-5"
        >
          <FontAwesomeIcon icon={faCartShopping} size="3x" />
          <span style={{ fontFamily: "Sora :wght@600", fontSize: "1.2rem" }}>
            Lorem ipsum lorem ipsum
          </span>
          <span
            style={{
              fontFamily: "Sora",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
          </span>
        </Col>
      </Row>

      <Row
        className="px-0 px-lg-5 pt-4 m-0 mx-lg-5"
        style={{
          borderBottom: "1x solid lightgray",
        }}
      >
        <Col md={6} className="image-container text-center m-0 p-0">
          <Image
            src={banner}
            className="image"
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center mb-3 p-3"
        >
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              fontFamily: "Bad Script",
            }}
          >
            Quem somos
          </span>
          <span
            style={{
              fontFamily: "Sora",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum
            ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem
            ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum ipsum
            lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum
            lorem
          </span>
        </Col>
      </Row>

      <Row
        className="px-0 px-lg-5 pt-4 m-0 mx-lg-5"
        style={{
          borderBottom: "1x solid lightgray",
        }}
      >
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center mb-3 p-3"
        >
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              fontFamily: "Bad Script",
            }}
          >
            Funcionalidades
          </span>
          <span
            style={{
              fontFamily: "Sora",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum
            ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem
            ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum ipsum
            lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum
            lorem
          </span>
        </Col>
        <Col md={6} className="image-container text-center m-0 p-0">
          <Image src={fundo} className="image" style={{ objectFit: "cover" }} />
        </Col>
      </Row>

      <Row
        className="px-0 px-lg-5 pt-4 m-0 mx-lg-5"
        style={{
          borderBottom: "1x solid lightgray",
        }}
      >
        <Col md={6} className="image-container text-center m-0 p-0">
          <Image
            src={banner}
            className="image"
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center mb-3 p-3"
        >
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              fontFamily: "Bad Script",
            }}
          >
            Vantagens
          </span>
          <span
            style={{
              fontFamily: "Sora",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum
            ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem
            ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum ipsum
            lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum
            lorem
          </span>
        </Col>
      </Row>

      <div
        style={{ backgroundColor: "rgb(70, 97, 68)" }}
        className="py-4 mt-5 text-center text-white"
      >
        Footer
      </div>
    </div>
  );
};

export default Homepage;
