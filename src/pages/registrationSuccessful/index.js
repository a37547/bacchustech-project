import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegistrationSuccessful = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "60%" }}
      >
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="7x"
          className="text-success"
        />
        <span
          style={{ fontFamily: "Sora", fontSize: "32px", marginTop: "35px" }}
        >
          Registo efetuado com sucesso!
        </span>
        <span style={{ fontFamily: "Sora", fontSize: "20px" }}>
          Deve aguardar pelo feedback, que será enviado para o email colocado no
          registo.
        </span>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button style={{ backgroundColor: "#578554", marginTop: "35px" }}>
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccessful;
