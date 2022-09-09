import React, { Component, Fragment, useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import AppNavbar from "../../layout/navbar";
import "../../assets/styles/gestaodeutilizadores.css";
import axios from "axios";
import { getUsersToApprove } from "../../services/user";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const RegistrationApprove = () => {
  const [usersToApprove, setUsersToApprove] = useState(null);
  const [isApproveUserModalOpen, setIsApproveUserModalOpen] = useState(false);
  const [isNotApproveUserModalOpen, setIsNotApproveUserModalOpen] =
    useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsersToApprove();
  }, []);

  const fetchUsersToApprove = () => {
    getUsersToApprove().then((res) => {
      if (res.data.Result === 0) {
        setUsersToApprove(res.data.Data);
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <Fragment>
      <AppNavbar />
      <div className="mt-3 mx-0 py-0 mx-5 text-center">
        <span
          style={{
            fontSize: "1.5rem",
            fontFamily: "Bad Script",
            fontSize: "48px",
          }}
        >
          Gestão
        </span>
      </div>
      <div className="mt-3 mx-5">
        <div className="d-flex justify-content-between">
          <span style={{ fontSize: "1.4rem", fontWeight: "500" }}>
            Aprovação de registos
          </span>
        </div>
        <Table striped bordered hover className="mt-4 mb-0">
          <thead
            style={{
              backgroundColor: "rgb(80, 116, 77)",
              color: "white",
              borderBottom: "none",
            }}
          >
            <tr>
              <th>Nome da empresa</th>
              <th>Contacto da empresa</th>
              <th>Morada da empresa</th>
              <th>Nome do responsável</th>
              <th>Nome de utilizador do responsável</th>
              <th>Email do responsável</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {usersToApprove != null && usersToApprove.length > 0 && (
            <tbody>
              {usersToApprove.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.contact}</td>
                  <td>{user.address}</td>
                  <td>{user.responsableName}</td>
                  <td>{user.responsableUsername}</td>
                  <td>{user.responsableEmail}</td>
                  <td className="text-center">
                    <Button
                      className="bg-success"
                      onClick={() => {
                        setIsApproveUserModalOpen(true);
                        setSelectedUser(user);
                      }}
                    >
                      Aprovar
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button
                      className="bg-danger"
                      onClick={() => {
                        setIsNotApproveUserModalOpen(true);
                        setSelectedUser(user);
                      }}
                    >
                      Não aprovar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>

        {usersToApprove != null && usersToApprove.length === 0 && (
          <Row
            className="p-0 m-0"
            style={{
              height: "300px",
              borderBottom: "1px solid lightgray",
              borderLeft: "1px solid lightgray",
              borderRight: "1px solid lightgray",
            }}
          >
            <Col className="d-flex justify-content-center align-items-center">
              Sem utilizadores pendentes de aprovação
            </Col>
          </Row>
        )}

        <Modal show={isApproveUserModalOpen}>
          <Modal.Header>Aprovar Utilizador</Modal.Header>
          <Modal.Body>
            Tem a certeza que pretende aprovar o utilizador selecionado?
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-danger"
              onClick={() => setIsApproveUserModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              className="bg-success"
              onClick={async () =>
                await axios
                  .put(
                    `http://localhost:5000/api/users/setCompanyApprovedState/${selectedUser.name}`,
                    { approved: true },
                    { headers: { Authorization: Cookie.get("token") } }
                  )
                  .then(async (res) => {
                    if (res.data.Result === 0) {
                      fetchUsersToApprove();
                      setIsApproveUserModalOpen(false);
                      await axios.post(
                        "http://localhost:5000/api/users/sendEmailAfterApproval"
                      );
                    } else {
                      navigate("/login");
                    }
                  })
              }
            >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={isNotApproveUserModalOpen}>
          <Modal.Header>Não aprovar Utilizador</Modal.Header>
          <Modal.Body>
            Tem a certeza que pretende não aprovar o utilizador selecionado?
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-danger"
              onClick={() => setIsNotApproveUserModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              className="bg-success"
              onClick={async () =>
                await axios
                  .put(
                    `http://localhost:5000/api/users/setCompanyApprovedState/${selectedUser.name}`,
                    { approved: false },
                    { headers: { Authorization: Cookie.get("token") } }
                  )
                  .then((res) => {
                    if (res.data.Result === 0) {
                      fetchUsersToApprove();
                      setIsNotApproveUserModalOpen(false);
                    } else {
                      navigate("/login");
                    }
                  })
              }
            >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default RegistrationApprove;
