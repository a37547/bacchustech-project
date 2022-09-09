import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

const PasswordChange = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Row className="d-flex justify-content-center align-items-center h-100 m-0">
        <Col md={4}>
          <Card>
            <Card.Header style={{ color: "#578554" }} className="py-3">
              Alterar palavra-passe
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Palavra-passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Insira a palavra-passe"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirmar palavra-passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Insira a palavra-passe"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#578554" }}
              >
                <Link
                  to="/introducaodedados"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Confirmar
                </Link>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PasswordChange;
