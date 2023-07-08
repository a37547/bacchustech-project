import React, { Component, Fragment, useContext, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Image,
  Modal,
  ModalBody,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context/appContext";
import logo from "../../assets/images/logo.png";
import "../../assets/styles/entrar.css";
import banner from "../../assets/images/banner.jpg";
import axios from "axios";
import Cookie from "js-cookie";
import * as jose from "jose";

const Entrar = (props) => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const [spinner, setSpinner] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  return (
    <Row
      style={{ height: "100vh", maxHeight: "100vh" }}
      className="m-0 py-0 px-3 px-lg-0"
    >
      <Col
        lg={4}
        className="d-none d-lg-block p-0"
        style={{ height: "100%", maxHeight: "100%" }}
      >
        <Image
          src={banner}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Col>
      <Col lg={8} className="d-flex flex-column justify-content-center px-lg-5">
        <span
          style={{
            fontFamily: "Bad Script",
            textTransform: "uppercase",
            fontWeight: "600",
            color: "#578554",
            paddingBottom: "40px",
          }}
        >
          Bacchustech
        </span>
        <div className="d-flex flex-column mb-3">
          <span style={{ fontFamily: "Sora" }}>
            Por favor, entre na sua conta.
          </span>
          <span style={{ fontFamily: "Sora" }}>
            Não tem uma conta? <Link to="/register">Registe-se.</Link>
          </span>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup className="mb-3">
              <Form.Label>Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Palavra-passe"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Manter-me logado" />
        </Form.Group>

        {error != null && <Alert variant="danger">{error}</Alert>}

        <hr />
        <div className="mt-2 d-flex justify-content-end align-items-center">
          <span>Recuperar palavra-passe</span>
          <Button
            style={{
              backgroundColor: "#578554",
              marginLeft: "20px",
              paddingLeft: "50px",
              paddingRight: "50px",
              borderRadius: "20px",
            }}
            onClick={async () => {
              await axios
                .post("http://localhost:5000/api/users/login", {
                  email: email,
                  password: password,
                })
                .then((res) => {
                  if (res.data.Result === 0) {
                    if (res.data.Success) {
                      Cookie.set("token", res.data.Token);
                      setError(null);

                      localStorage.setItem(
                        "loggedUserCompany",
                        jose.decodeJwt(res.data.Token).user["company"]
                      );

                      context.setLoggedUser(
                        jose.decodeJwt(res.data.Token).user
                      );

                      //context.setUser(res.data.User);
                      navigate("/introducaodedados");
                    }
                  } else {
                    setError("Dados incorretos");
                  }
                });
            }}
          >
            Login
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Entrar;
