import React, { Component } from "react";
import AppNavbar from "../navbar";
import banner1 from "../banner1.jpg";
import banner2 from "../banner2.jpg";
import { Card, Col, Row } from "react-bootstrap";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNavbar />
        <div style={{ height: "300px" }} className="bg-danger">
          <img
            src={banner1}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="p-3 text-center">
          <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Os nossos serviços
          </span>
        </div>
        <Row className="d-flex justify-content-evenly p-2">
          <Col md={3}>
            <Card
              border="secondary"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#50744d",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Quem somos
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              border="secondary"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#50744d",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Funcionalidades
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              border="secondary"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#50744d",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Vantagens
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{ height: "300px" }} className="bg-danger mt-5">
          <img
            src={banner2}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="p-3 text-center">
          <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Outras informações
          </span>
        </div>
        <Row className="d-flex justify-content-evenly p-2">
          <Col md={3}>
            <Card
              border="secondary"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#50744d",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Informação 1
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              border="secondary"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#50744d",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Informação 2
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              border="secondary"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#50744d",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Informação 3
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div
          style={{ backgroundColor: "#50744d" }}
          className="py-4 mt-5 text-center text-white"
        >
          Footer
        </div>
      </div>
    );
  }
}

export default Homepage;
