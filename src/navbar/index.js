import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "#466144", height: "60px" }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                textTransform: "none",
                color: "white",
              }}
            >
              Bacchutech
            </Link>
          </Navbar.Brand>
          <Form className="d-flex justify-content-end">
            <Button variant="outline-white text-white">
              <Link
                to="/entrar"
                style={{
                  textDecoration: "none",
                  textTransform: "none",
                  color: "white",
                }}
              >
                Entrar
              </Link>
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;
