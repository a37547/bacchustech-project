import React, { Component } from "react";
import Cookie from "js-cookie";
import * as jose from "jose";

export const AppContext = React.createContext(undefined);

export default class AppProvider extends Component {
  state = {
    isReportGenerationActive: false,
    selectedYear: "",
    loggedUser: "",
    isYearLoaded: false,
    totalGrapesUsed: "",
    totalMustPurchased: "",
    totalMustFermented: "",
    brix: "",
    totalWineProduced: "",
    wineProducedByGrapesPercentage: "",
    wineProducedByMustPercentage: "",
    firstGeneralDataInsertion: false,
    citricAcid: "",
    tartricAcid: "",
    sorbicAcid: "",
    otherAcids: "",
    bentonitaCaulim: "",
    potassiumBissulfit: "",
    calciumCarbonate: "",
    woodChips: "",
    arabicGoma: "",
    milkProteins: "",
    salmoura: "",
    liquidSo2: "",
    sugar: "",
    taninos: "",
    amoniumSulfate: "",
    diatomito: "",
    etanol: "",
    ovalbumina: "",
    microorganisms: "",
    firstMaterialsInsertion: false,
  };

  componentDidMount() {
    const cookie = Cookie.get("token");
    let loggedUser = null;

    if (cookie != undefined) loggedUser = jose.decodeJwt(cookie).user;

    this.setState({
      informationsModalOpen: false,
      isInformationsModal1Open: false,
      isInformationsModal2Open: false,
      isInformationsModal3Open: false,
      isInformationsModal4Open: false,
      isReportGenerationActive: false,
      selectedYear: "",
      loggedUser: loggedUser,
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          selectedYear: this.state.selectedYear,
          setSelectedYear: (selectedYear) => {
            this.setState({ selectedYear: selectedYear });
          },
          loggedUser: this.state.loggedUser,
          setLoggedUser: (loggedUser) => {
            this.setState({ loggedUser: loggedUser });
          },
          isYearLoaded: this.state.isYearLoaded,
          setIsYearLoaded: (isYearLoaded) => {
            this.setState({ isYearLoaded: isYearLoaded });
          },
          informationsModalOpen: this.state.informationsModalOpen,
          setInformationsModalOpen: (informationsModalOpen) => {
            this.setState({
              informationsModalOpen: informationsModalOpen,
              isInformationsModal1Open: true,
            });
          },
          isInformationsModal1Open: this.state.isInformationsModal1Open,
          setIsInformationsModal1Open: (isInformationsModal1Open) => {
            this.setState({
              isInformationsModal1Open: isInformationsModal1Open,
            });
          },
          isInformationsModal2Open: this.state.isInformationsModal2Open,
          setIsInformationsModal2Open: (isInformationsModal2Open) => {
            this.setState({
              isInformationsModal2Open: isInformationsModal2Open,
            });
          },
          isInformationsModal3Open: this.state.isInformationsModal3Open,
          setIsInformationsModal3Open: (isInformationsModal3Open) => {
            this.setState({
              isInformationsModal3Open: isInformationsModal3Open,
            });
          },
          isInformationsModal4Open: this.state.isInformationsModal4Open,
          setIsInformationsModal4Open: (isInformationsModal4Open) => {
            this.setState({
              isInformationsModal4Open: isInformationsModal4Open,
            });
          },
          isReportGenerationActive: this.state.isReportGenerationActive,
          setIsReportGenerationActive: (isReportGenerationActive) => {
            this.setState({
              isReportGenerationActive: isReportGenerationActive,
            });
          },
          totalGrapesUsed: this.state.totalGrapesUsed,
          totalMustPurchased: this.state.totalMustPurchased,
          totalMustFermented: this.state.totalMustFermented,
          brix: this.state.brix,
          totalWineProduced: this.state.totalWineProduced,
          wineProducedByGrapesPercentage:
            this.state.wineProducedByGrapesPercentage,
          wineProducedByMustPercentage: this.state.wineProducedByMustPercentage,
          setTotalGrapesUsed: (totalGrapesUsed) => {
            this.setState({ totalGrapesUsed });
          },
          setTotalMustPurchased: (totalMustPurchased) => {
            this.setState({ totalMustPurchased });
          },
          setTotalMustFermented: (totalMustFermented) => {
            this.setState({ totalMustFermented });
          },
          setBrix: (brix) => {
            this.setState({ brix });
          },
          setTotalWineProduced: (totalWineProduced) => {
            this.setState({ totalWineProduced });
          },
          setWineProducedByGrapesPercentage: (
            wineProducedByGrapesPercentage
          ) => {
            this.setState({ wineProducedByGrapesPercentage });
          },
          setWineProducedByMustPercentage: (wineProducedByMustPercentage) => {
            this.setState({ wineProducedByMustPercentage });
          },
          firstGeneralDataInsertion: this.state.firstGeneralDataInsertion,
          setFirstGeneralDataInsertion: (firstGeneralDataInsertion) => {
            this.setState({ firstGeneralDataInsertion });
          },
          citricAcid: this.state.citricAcid,
          tartricAcid: this.state.tartricAcid,
          sorbicAcid: this.state.sorbicAcid,
          otherAcids: this.state.otherAcids,
          bentonitaCaulim: this.state.bentonitaCaulim,
          potassiumBissulfit: this.state.potassiumBissulfit,
          calciumCarbonate: this.state.calciumCarbonate,
          woodChips: this.state.woodChips,
          arabicGoma: this.state.arabicGoma,
          milkProteins: this.state.milkProteins,
          salmoura: this.state.salmoura,
          liquidSo2: this.state.liquidSo2,
          sugar: this.state.sugar,
          taninos: this.state.taninos,
          amoniumSulfate: this.state.amoniumSulfate,
          diatomito: this.state.diatomito,
          etanol: this.state.etanol,
          ovalbumina: this.state.ovalbumina,
          microorganisms: this.state.microorganisms,
          setCitricAcid: (citricAcid) => {
            this.setState({ citricAcid });
          },
          setTartricAcid: (tartricAcid) => {
            this.setState({ tartricAcid });
          },
          setSorbicAcid: (sorbicAcid) => {
            this.setState({ sorbicAcid });
          },
          setOtherAcids: (otherAcids) => {
            this.setState({ otherAcids });
          },
          setBentonitaCaulim: (bentonitaCaulim) => {
            this.setState({ bentonitaCaulim });
          },
          setPotassiumBissulfit: (potassiumBissulfit) => {
            this.setState({ potassiumBissulfit });
          },
          setCalciumCarbonate: (calciumCarbonate) => {
            this.setState({ calciumCarbonate });
          },
          setWoodChips: (woodChips) => {
            this.setState({ woodChips });
          },
          setArabicGoma: (arabicGoma) => {
            this.setState({ arabicGoma });
          },
          setMilkProteins: (milkProteins) => {
            this.setState({ milkProteins });
          },
          setSalmoura: (salmoura) => {
            this.setState({ salmoura });
          },
          setLiquidSo2: (liquidSo2) => {
            this.setState({ liquidSo2 });
          },
          setSugar: (sugar) => {
            this.setState({ sugar });
          },
          setTaninos: (taninos) => {
            this.setState({ taninos });
          },
          setAmoniumSulfate: (amoniumSulfate) => {
            this.setState({ amoniumSulfate });
          },
          setDiatomito: (diatomito) => {
            this.setState({ diatomito });
          },
          setEtanol: (etanol) => {
            this.setState({ etanol });
          },
          setOvalbumina: (ovalbumina) => {
            this.setState({ ovalbumina });
          },
          setMicroorganisms: (microorganisms) => {
            this.setState({ microorganisms });
          },
          firstMaterialsInsertion: this.state.firstMaterialsInsertion,
          setFirstMaterialsInsertion: (firstMaterialsInsertion) => {
            this.setState({ firstMaterialsInsertion });
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
