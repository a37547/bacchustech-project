import { faAngleLeft, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/registar.css";
import banner from "../assets/images/banner.jpg";

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const Register = () => {
  const navigate = useNavigate();

  const schema = Joi.object({
    companyName: Joi.string().required().messages({
      "any.required": "Campo obrigatório",
      "string.base": "Campo obrigatório",
    }),
    contact: Joi.number().min(9).required().messages({
      "any.required": "Campo obrigatório",
      "number.base": "Campo obrigatório. Deve ser composto por 9 números",
      "number.min": "Campo obrigatório. Deve ser composto por 9 números",
    }),
    companyAddress: Joi.string().required().messages({
      "any.required": "Campo obrigatório",
      "string.base": "Campo obrigatório",
    }),
    name: Joi.string().required().messages({
      "any.required": "Campo obrigatório",
      "string.base": "Campo obrigatório",
    }),
    username: Joi.string().required().messages({
      "any.required": "Campo obrigatório",
      "string.base": "Campo obrigatório",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "any.required": "Campo obrigatório. Deve ser um email válido",
        "string.base": "Campo obrigatório. Deve ser um email válido",
        "string.email": "Campo obrigatório. Deve ser um email válido",
      }),
    password: Joi.string().required().messages({
      "any.required": "Campo obrigatório",
      "string.base": "Campo obrigatório",
      "string.empty": "Campo obrigatório",
    }),
  });

  const [companyName, setCompanyName] = useState(null);
  const [contact, setContact] = useState(null);
  const [companyAddress, setCompanyAddress] = useState(null);
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [errors, setErrors] = useState(null);
  const [generalError, setGeneralError] = useState(null);

  const hasError = (field) => {
    return (
      errors != null &&
      errors.find((error) => error.path[0] == field) !== undefined
    );
  };

  const getErrorMessage = (field) => {
    return (
      errors !== null &&
      errors.find((error) => error.path[0] === field)["message"]
    );
  };

  return (
    <div>
      <Row
        style={{ height: "100vh", maxHeight: "100vh" }}
        className="m-0 p-0 d-flex"
      >
        <Col lg={8} className="d-flex flex-column">
          <div
            style={{ height: "60px", maxHeight: "60px" }}
            className="d-flex align-items-center"
          >
            <Button
              style={{ backgroundColor: "#578554" }}
              className="d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
              <span style={{ marginLeft: "5px" }}>
                Voltar à página principal
              </span>
            </Button>
          </div>
          <div
            style={{ height: "calc(100vh - 60px)" }}
            className="d-flex align-items-center"
          >
            <div className="px-md-3">
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span
                  style={{
                    fontFamily: "Bad Script",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: "#578554",
                    fontSize: "1.7rem",
                  }}
                >
                  Bacchustech
                </span>
              </div>
              <div className="d-flex align-items-center flex-column justify-content-center mt-2">
                <span style={{ fontFamily: "Sora" }}>Bem vindo.</span>
                <span style={{ fontFamily: "Sora" }}>
                  Preencha os campos para criar a sua conta
                </span>
              </div>
              <Row className="mt-2">
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Nome da empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o nome da empresa"
                      style={{
                        borderRadius: "15px",
                        border: hasError("companyName") ? "1px solid red" : "",
                      }}
                      onChange={(e) => setCompanyName(e.currentTarget.value)}
                    />
                    {hasError("companyName") && (
                      <span className="text-danger">
                        * {getErrorMessage("companyName")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Contacto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o contacto"
                      style={{
                        borderRadius: "15px",
                        border: hasError("contact") ? "1px solid red" : "",
                      }}
                      onChange={(e) => setContact(e.currentTarget.value)}
                    />
                    {hasError("contact") && (
                      <span className="text-danger">
                        * {getErrorMessage("contact")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Morada da empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira a morada da empresa"
                      style={{
                        borderRadius: "15px",
                        border: hasError("companyAddress")
                          ? "1px solid red"
                          : "",
                      }}
                      onChange={(e) => setCompanyAddress(e.currentTarget.value)}
                    />
                    {hasError("companyAddress") && (
                      <span className="text-danger">
                        * {getErrorMessage("companyAddress")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o nome"
                      style={{
                        borderRadius: "15px",
                        border: hasError("name") ? "1px solid red" : "",
                      }}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                    {hasError("name") && (
                      <span className="text-danger">
                        * {getErrorMessage("name")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Nome de utilizador</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o nome de utilizador"
                      style={{
                        borderRadius: "15px",
                        border: hasError("username") ? "1px solid red" : "",
                      }}
                      onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                    {hasError("username") && (
                      <span className="text-danger">
                        * {getErrorMessage("username")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Insira o email"
                      style={{
                        borderRadius: "15px",
                        border: hasError("email") ? "1px solid red" : "",
                      }}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    {hasError("email") && (
                      <span className="text-danger">
                        * {getErrorMessage("email")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="mb-3">
                    <Form.Label>Palavra-passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Insira a palavra-passe"
                      style={{
                        borderRadius: "15px",
                        border: hasError("password") ? "1px solid red" : "",
                      }}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    {hasError("password") && (
                      <span className="text-danger">
                        * {getErrorMessage("password")}
                      </span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              {generalError !== null && (
                <Row>
                  <Col className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faWarning}
                      className="text-danger"
                      size="2x"
                      style={{ marginRight: "10px" }}
                    />
                    <span className="text-danger">{generalError}</span>
                  </Col>
                </Row>
              )}

              <hr />

              <Row className="m-0 p-0">
                <Col
                  xs={12}
                  md={6}
                  className="m-0 p-0 d-flex justify-content-center align-items-center"
                >
                  <Button
                    className="w-100"
                    style={{
                      backgroundColor: "#578554",
                      paddingLeft: "50px",
                      paddingRight: "50px",
                      borderRadius: "15px",
                    }}
                    onClick={async () => {
                      const result = schema.validate(
                        {
                          companyName: companyName,
                          contact: contact,
                          companyAddress: companyAddress,
                          name: name,
                          username: username,
                          email: email,
                          password: password,
                        },
                        { abortEarly: false }
                      );

                      if (result.error !== undefined)
                        setErrors(result.error.details);
                      else {
                        try {
                          setErrors(null);
                          await axios
                            .post("http://localhost:5000/api/users/register", {
                              company_name: companyName,
                              contact: contact,
                              company_address: companyAddress,
                              name: name,
                              username: username,
                              email: email,
                              password: bcrypt.hashSync(password, salt),
                            })
                            .then(async (response) => {
                              if (response.data.Result === 0) {
                                await axios.post(
                                  "http://localhost:5000/api/companies/create",
                                  {
                                    name: companyName,
                                    address: companyAddress,
                                    contact: contact,
                                    responsableName: name,
                                    responsableUsername: username,
                                    responsableEmail: email,
                                  }
                                );
                                setGeneralError(null);
                                navigate("/registration/success", {
                                  replace: true,
                                });
                                await axios.post(
                                  "http://localhost:5000/api/users/sendEmailAfterSuccessfullRegister"
                                );
                              } else {
                                setGeneralError(response.data.Message);
                              }
                            });
                        } catch {
                          navigate("/something-went-wrong");
                        }
                      }
                    }}
                  >
                    Registar
                  </Button>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  {" "}
                  <span>
                    Já tem uma conta?{" "}
                    <Link
                      to="/login"
                      style={{
                        color: "#578554",
                      }}
                    >
                      Faça o login.
                    </Link>
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          className="d-none d-lg-block bg-danger p-0"
          style={{ height: "100%", maxHeight: "100%" }}
        >
          <Image
            src={banner}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
