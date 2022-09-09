import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SomethingWentWrong = () => {
  return (
    <div
      style={{ height: "100vh", maxHeight: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center text-center"
    >
      <FontAwesomeIcon icon={faFaceFrown} size="10x" className="text-warning" />
      <h1 className="mt-3">Oh não!</h1>
      <h3>
        Algo deu errado. Por favor <Link to="/">volte a tentar</Link> ou{" "}
        <Link to="/">entre em contacto com o administrador</Link>
      </h3>
    </div>
  );
};

export default SomethingWentWrong;
