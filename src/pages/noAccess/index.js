import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";

class NoAccess extends Component {
  static contextType = AppContext;

  state = {};
  render() {
    return (
      <div
        style={{ height: "calc(100vh - 60px)" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <FontAwesomeIcon
          icon={faLock}
          size="10x"
          className="text-danger py-3"
        />
        <span style={{ fontSize: "2rem" }} className="py-2">
          Sem acesso
        </span>
        <span style={{ fontSize: "1.5rem" }} className="py-2">
          Desculpe, não está autorizado a ver esta página
        </span>
        <div className="d-flex py-3">
          <Button
            className="mx-2"
            style={{ cursor: "pointer" }}
            // onClick={() => this.context.setIsLoginModalOpen(false)}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Voltar à página inicial
            </Link>
          </Button>
          <Link to="/login">
            <Button className="mx-2">Efetuar login</Button>{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default NoAccess;
