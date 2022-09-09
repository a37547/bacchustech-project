import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { AppContext } from "../../../context/appContext";

class InformationsModal extends Component {
  static contextType = AppContext;

  render() {
    return (
      <Modal show={false}>
        <ModalHeader>
          {this.context.isInformationsModal1Open && (
            <ModalTitle>
              Informações importantes{" "}
              <span style={{ fontSize: "0.9rem" }}>(1/2)</span>
            </ModalTitle>
          )}

          {this.context.isInformationsModal2Open && (
            <ModalTitle>
              Informações importantes{" "}
              <span style={{ fontSize: "0.9rem" }}>(2/2)</span>
            </ModalTitle>
          )}

          {this.context.isInformationsModal3Open && (
            <ModalTitle>Informações a serem recolhidas</ModalTitle>
          )}
          {this.context.isInformationsModal4Open && (
            <ModalTitle>Onde encontrar esta informação de novo?</ModalTitle>
          )}
        </ModalHeader>
        {this.context.isInformationsModal1Open && (
          <ModalBody className="py-0" style={{ textAlign: "justify" }}>
            <Alert
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: 0,
                borderBottom: "1px solid rgb(70, 97, 68)",
                color: "rgb(70, 97, 68)",
              }}
            >
              A abordagem metodológica para a pegada carbónica segue a
              metodologia do GHG Protocol, IWCC, “outros" (citar depois),
              internacionalmente aceita.
            </Alert>
            <Alert
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: 0,
                borderBottom: "1px solid rgb(70, 97, 68)",
                color: "rgb(70, 97, 68)",
              }}
              className="pt-0"
            >
              O primeiro passo para realizar a avaliação de sustentabilidade de
              sua empresa mediante esta aplicação, é reunir os dados requeridos.
              Os dados inseridos devem ser relativos apenas a sua empresa.
            </Alert>
            <Alert
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: 0,
                borderBottom: "1px solid rgb(70, 97, 68)",
                color: "rgb(70, 97, 68)",
              }}
              className="pt-0"
            >
              A maior parte do relatório requer dados anuais, portando use dados
              relativos a 12 meses completos. No enteando, uma pequena parte
              permitirá a inserção de dados mensais para casos onde análise
              mensal possa ser relevante.
            </Alert>
            <Alert
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: 0,
                borderBottom: "1px solid rgb(70, 97, 68)",
                color: "rgb(70, 97, 68)",
              }}
              className="pt-0"
            >
              Lembre-se de atribuir os valores as unidades de medidas adequadas.
            </Alert>
            <Alert
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: 0,
                color: "rgb(70, 97, 68)",
              }}
              className="pt-0"
            >
              Seja atencioso para não inserir o mesmo dado mais de uma vez.
            </Alert>
          </ModalBody>
        )}

        {this.context.isInformationsModal2Open && (
          <ModalBody>
            <div className="mb-3">
              <span style={{ fontSize: "1.2rem" }}>Lembre-se:</span>
            </div>

            <Alert>
              Esta ferramenta não emite nenhum tipo de certificado. Sua função é
              oferecer ao usuário uma análise de sustentabilidade da sua
              empresa, bem como permitir que você possa fazer planos e
              desenvolver ações de acordo com o seu interesse de melhorias nos
              quesitos ambientais.
            </Alert>
            <Alert>As infraestruturas não são contabilizadas.</Alert>
            <Alert>
              A plataforma oferece algumas ideias de boas praticas que poderá
              elevar a sustentabilidade de sua empresa. Fique à-vontade para
              explorar o seu potencial. Bom trabalho!
            </Alert>
          </ModalBody>
        )}

        {this.context.isInformationsModal3Open && (
          <ModalBody style={{ overflowY: "auto" }}>
            <Alert>
              Eletricidade comprada e/ou produzida pela Empresa anualmente ou
              mensalmente
            </Alert>
            <Alert>
              Inventário de todos os materiais vínicos e respetivas quantidades
              utilizadas anualmente
            </Alert>
            <Alert>
              Inventário de todos os materiais e respetivas quantidades
              utilizadas ao embalamento do produto final
            </Alert>
            <Alert>
              Indicar o uso de sistemas de refrigeração e ar condicionado assim
              como a carga inicial de refrigerante
            </Alert>
            <Alert>
              Equipamentos de combustão estacionária, tipo de combustível
              utilizado e respetivas quantidades
            </Alert>
            <Alert>
              Quantidade e tipo de veículos utilizados em todos os processos,
              tipo e quantidade de combustível utilizada
            </Alert>
            <Alert>
              Levantamento de todo resíduo de produção criado, quantidade, e
              destinação final
            </Alert>
            <Alert>
              Levantamento de toda a quantidade de águas residuais criadas e
              local do seu tratamento
            </Alert>
          </ModalBody>
        )}

        {this.context.isInformationsModal4Open && (
          <ModalBody>
            <Alert className="mb-0">
              <span>
                Para voltar a ver esta informação, clique no seguinte símbolo,
                localizado na barra de navegação:
              </span>
              <FontAwesomeIcon
                icon={faCircleInfo}
                size="3x"
                className="d-none d-lg-block"
                style={{
                  marginRight: "25px",
                  color: "rgb(80, 116, 77)",
                  marginTop: "15px",
                }}
              />
            </Alert>
          </ModalBody>
        )}

        {this.context.isInformationsModal1Open && (
          <ModalFooter>
            <Button
              onClick={() => {
                this.context.setIsInformationsModal1Open(false);
                this.context.setIsInformationsModal2Open(true);
              }}
            >
              Seguinte
            </Button>
          </ModalFooter>
        )}

        {this.context.isInformationsModal2Open && (
          <ModalFooter>
            <Button
              variant="danger"
              onClick={() => {
                this.context.setIsInformationsModal1Open(true);
                this.context.setIsInformationsModal2Open(false);
              }}
            >
              Anterior
            </Button>
            <Button
              onClick={() => {
                this.context.setIsInformationsModal2Open(false);
                this.context.setIsInformationsModal3Open(true);
              }}
            >
              Seguinte
            </Button>
          </ModalFooter>
        )}

        {this.context.isInformationsModal3Open && (
          <ModalFooter>
            <Button
              variant="danger"
              onClick={() => {
                this.context.setIsInformationsModal2Open(true);
                this.context.setIsInformationsModal3Open(false);
              }}
            >
              Anterior
            </Button>
            <Button
              onClick={() => {
                this.context.setIsInformationsModal3Open(false);
                this.context.setIsInformationsModal4Open(true);
              }}
            >
              Seguinte
            </Button>
          </ModalFooter>
        )}

        {this.context.isInformationsModal4Open && (
          <ModalFooter>
            <Button
              variant="danger"
              onClick={() => {
                this.context.setIsInformationsModal3Open(true);
                this.context.setIsInformationsModal4Open(false);
              }}
            >
              Anterior
            </Button>
            <Button
              onClick={() => {
                this.context.setIsInformationsModal4Open(false);

                this.context.setInformationsModalOpen(false);
              }}
            >
              Ok
            </Button>
          </ModalFooter>
        )}
      </Modal>
    );
  }
}

export default InformationsModal;
