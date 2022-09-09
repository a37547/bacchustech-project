import {
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import logo from "../../assets/images/logo.png";
import Cookie from "js-cookie";
import axios from "axios";
import "../../assets/styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBullseye,
  faEdit,
  faFile,
  faSignIn,
  faSignOut,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const AppNavbar = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [offcanvasShow, setOffcanvasShow] = useState(false);

  const handleOffcanvasClose = () => setOffcanvasShow(false);
  const handleOffcanvasShow = () => setOffcanvasShow(true);

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setIsLoggedIn(Cookie.get("token"));
  });

  return (
    <Navbar className="bg-white px-4 py-3" expand="lg">
      <Container fluid>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand
            style={{ color: "rgb(80, 116, 77)", fontWeight: "bold" }}
          >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            BacchusTech
          </Navbar.Brand>
        </Link>
        <FontAwesomeIcon
          className="d-md-none"
          icon={faBars}
          size="2x"
          onClick={handleOffcanvasShow}
          style={{ cursor: "pointer" }}
        />
        <Offcanvas show={offcanvasShow} onHide={handleOffcanvasClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Barra de navegação</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {isLoggedIn && (
              <div>
                <div
                  className="py-2 d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Introdução de dados</span>
                </div>
                <div
                  className="py-2 d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Relatórios</span>
                </div>
                <div
                  className="py-2 d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faBullseye}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Objetivos e metas</span>
                </div>
                <div
                  className="py-2 d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faTasks}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Gestão</span>
                </div>
                <div
                  className="py-2 d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faSignOut}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Terminar sessão</span>
                </div>
              </div>
            )}

            {!isLoggedIn && (
              <div
                className="py-2 d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faSignIn}
                  style={{ marginRight: "10px" }}
                />
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Entrar
                </Link>
              </div>
            )}
          </Offcanvas.Body>
        </Offcanvas>

        {!isLoggedIn && (
          <div className="d-none d-md-flex">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Entrar
            </Link>
          </div>
        )}

        {isLoggedIn && (
          <div className="d-none d-md-flex">
            <Link
              to="/introducaodedados"
              style={{ textDecoration: "none", color: "black" }}
            >
              Introdução de dados
            </Link>
            <Link
              to="/reports"
              style={{
                marginLeft: "20px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Relatórios
            </Link>
            <Link
              to="/goals"
              style={{
                marginLeft: "20px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Objetivos e metas
            </Link>
            <Link
              to="/registration-approve"
              style={{
                marginLeft: "20px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Gestão
            </Link>
            <Link
              to="/"
              style={{
                marginLeft: "20px",
                textDecoration: "none",
                color: "black",
              }}
              onClick={() => Cookie.remove("token")}
            >
              Terminar sessão
            </Link>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

/*

 <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && (
              <Fragment>
                <Link
                  to="/introducaodedados"
                  className="text-decoration-none text-secondary mx-3"
                >
                  Dados
                </Link>
                <Link
                  to="/reports"
                  className="text-decoration-none text-secondary mx-3"
                >
                  Relatórios
                </Link>
                <Link
                  to="/goals"
                  className="text-decoration-none text-secondary mx-3"
                >
                  Metas
                </Link>
                <Link
                  to="/registration-approve"
                  className="text-decoration-none text-secondary mx-3"
                >
                  Gestão
                </Link>
              </Fragment>
            )}

            {isLoggedIn == null ? (
              <Link
                to="/login"
                className="text-decoration-none text-secondary mx-3"
                style={{ fontWeight: "bold" }}
              >
                Entrar
              </Link>
            ) : (
              <div className="d-flex">
                <NavDropdown
                  title={
                    <Image
                      src={banner}
                      roundedCircle
                      width={40}
                      height={40}
                      style={{ marginRight: "5px" }}
                    />
                  }
                  id="nav-dropdown"
                >
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">
                    Something else here
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    eventKey="4.4"
                    onClick={async () => {
                      await axios
                        .post("http://localhost:5000/api/users/logout")
                        .then((res) => {
                          if (res.data.Result === 0) {
                            console.log("Log out");
                          }
                        });
                    }}
                  >
                    Terminar sessão
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="d-flex flex-column justify-content-center">
                  <span style={{ fontWeight: 500 }}>Nome teste</span>
                  <span style={{ fontWeight: 300, fontSize: "0.9rem" }}>
                    Administrador
                  </span>
                </div>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>

          */
