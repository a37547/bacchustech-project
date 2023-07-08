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
    //generalData
    totalGrapesProduced: "",
    totalGrapesBought: "",
    totalMustPurchased: "",
    totalMustFermented: "",
    totalMustProducedFromGrapes: "",
    totalWineProduced: "",
    glassBottles35: "",
    glassBottles75: "",
    glassBottles100: "",
    petBottles: "",
    bagInBox3: "",
    bagInBox5: "",
    firstGeneralDataInsertion: true,
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
    glassBottles: "",
    petBottles: "",
    labels: "",
    corks: "",
    wineMuzzles: "",
    capsules: "",
    aluminumSheets: "",
    polyethyleneSheets: "",
    crownCaps: "",
    aluminumCrownCaps: "",
    bidule: "",
    aluminumScrewCaps: "",
    pvc: "",
    ldpeFilmWraps: "",
    ldpePalletWraps: "",
    boxes: "",
    glassBottlesPercentage: "",
    petBottlesPercentage: "",
    labelsPercentage: "",
    corksPercentage: "",
    wineMuzzlesPercentage: "",
    capsulesPercentage: "",
    aluminumSheetsPercentage: "",
    polyethyleneSheetsPercentage: "",
    crownCapsPercentage: "",
    aluminumCrownCapsPercentage: "",
    bidulePercentage: "",
    aluminumScrewCapsPercentage: "",
    pvcPercentage: "",
    ldpeFilmWrapsPercentage: "",
    ldpePalletWrapsPercentage: "",
    boxesPercentage: "",
    nitricAcid: "",
    phosphoricAcid: "",
    sodaLiquid: "",
    solidSodiumHydroxide: "",
    sodiumHypochlorite: "",
    sodiumSulfate: "",
    antifoamProducts: "",
    grease: "",
    lubricantOilEquipmentMaintenance: "",
    firstMaterialsInsertion: false,
    topics: [],
    selectedTopic: {},
    firstEnergyInsertion: false,

    //energy - electricity
    consumedElectricityBought: "",
    naturalGasBought: "",
    dieselBought: "",
    fuelOilBought: "",
    nuclearBought: "",
    coalBought: "",
    windEnergyBought: "",
    hidrelectricBought: "",
    solarBought: "",
    biomassBought: "",
    biogasBought: "",
    solidWasteIncinerationBought: "",
    consumedElectricityProduced: "",
    hidrelectricProduced: "",
    solarProduced: "",
    biomassProduced: "",
    biogasProduced: "",
    surplusEntered: "",
    pureDieselUsedInCompany: "",
    pureGasolineUsedInCompany: "",
    biofuelUsedInCompany: "",
    lubricantUsedInCompany: "",
    butaneUsedInCompany: "",
    propaneUsedInCompany: "",
    gplAutoUsedInCompany: "",
    naturalGasUsedInCompany: "",
    biogasUsedInCompany: "",
    woodUsedInCompany: "",
    pelletsUsedInCompany: "",

    ////////////
    ///////////
    simpleDiesel: "",
    additiveDiesel: "",
    plainGasoline: "",
    additiveGasoline: "",
    biofuel: "",
    heatingOil: "",
    butane: "",
    propane: "",
    gpl: "",
    naturalGas: "",
    cng: "",
    biogas: "",
    wood: "",
    pellets: "",
    ////////////
    deceit: "",
    deceitDestination: "",
    bagasse: "",
    bagasseDestination: "",
    draff: "",
    draffDestination: "",
    usedDiatomaceous: "",
    usedDiatomaceousDestination: "",
    glassMixture: "",
    glassMixtureDestination: "",
    plasticMixture: "",
    plasticMixtureDestination: "",
    plasticHdpe: "",
    plasticHdpeDestination: "",
    plasticLdpe: "",
    plasticLdpeDestination: "",
    plasticPet: "",
    plasticPetDestination: "",
    plasticPp: "",
    plasticPpDestination: "",
    plasticPvc: "",
    plasticPvcDestination: "",
    paperMixture: "",
    paperMixtureDestination: "",
    paperCard: "",
    paperCardDestination: "",
    glassMunicipalitiesWaste: "",
    glassMunicipalitiesWasteDestination: "",
    plasticMetalMunicipalitiesWaste: "",
    plasticMetalMunicipalitiesWasteDestination: "",
    paperMunicipalitiesWaste: "",
    paperMunicipalitiesWasteDestination: "",
    undifferentiatedMunicipalitiesWaste: "",
    undifferentiatedMunicipalitiesWasteDestination: "",
    junkYardWiresMixture: "",
    junkYardWiresMixtureDestination: "",
    junkYardWiresSteel: "",
    junkYardWiresSteelDestination: "",
    junkYardWiresAluminum: "",
    junkYardWiresAluminumDestination: "",
    junkYardCansMixture: "",
    junkYardCansMixtureDestination: "",
    junkYardWoodMixture: "",
    junkYardWoodMixtureDestination: "",
    junkYardDomesticBateries: "",
    junkYardDomesticBateriesDestination: "",
    junkYardMachinesBateries: "",
    junkYardMachinesBateriesDestination: "",
    junkYardTires: "",
    junkYardTiresDestination: "",
    junkYardInformaticEquipment: "",
    junkYardInformaticEquipmentDestination: "",
    junkYardRefrigerationEquipment: "",
    junkYardRefrigerationEquipmentDestination: "",
    junkYardMachinesOils: "",
    junkYardMachinesOilsDestination: "",
    sludge: "",
    sludgeDestination: "",

    //water
    totalWaterFromNetwork: "",
    totalWaterFromWell: "",
    totalWaterFromCistern: "",
    totalWaterReused: "",
    waterConsumedByEquipmentCleaningOnPressing: "",
    numberOfCleaningPerMonthOnPressing: "",
    waterConsumedByEquipmentCleaningOnTrasfega: "",
    numberOfCleaningPerMonthOnTrasfega: "",
    waterConsumedByEquipmentCleaningOnEstabilization: "",
    numberOfCleaningPerMonthOnEstabilization: "",
    waterConsumedByEquipmentCleaningOnFiltration: "",
    numberOfCleaningPerMonthOnFiltration: "",
    waterConsumedByEquipmentCleaningOnDifferentFloors: "",
    numberOfCleaningPerMonthOnDifferentFloors: "",
    waterConsumedByEquipmentCleaningOnSterilization: "",
    numberOfCleaningPerMonthOnSterilization: "",
    waterConsumedByEquipmentCleaningOnFilling: "",
    numberOfCleaningPerMonthOnFilling: "",
    waterConsumedByEquipmentCleaningOnLabeling: "",
    numberOfCleaningPerMonthOnLabeling: "",
    waterConsumedByEquipmentCleaningOnBottlingDifferentFloors: "",
    numberOfCleaningPerMonthOnBottlingDifferentFloors: "",
    firstWaterInsertion: false,

    //tratamento de águas residuais
    phHighSeasonGeneratedWater: "",
    phLowSeasonGeneratedWater: "",
    conductivityHighSeasonGeneratedWater: "",
    conductivityLowSeasonGeneratedWater: "",
    turbidityHighSeasonGeneratedWater: "",
    turbidityLowSeasonGeneratedWater: "",
    CQOHighSeasonGeneratedWater: "",
    CQOLowSeasonGeneratedWater: "",
    CBOHighSeasonGeneratedWater: "",
    CBOLowSeasonGeneratedWater: "",
    SSTHighSeasonGeneratedWater: "",
    SSTLowSeasonGeneratedWater: "",
    NTKHighSeasonGeneratedWater: "",
    NTKLowSeasonGeneratedWater: "",
    fenoisHighSeasonGeneratedWater: "",
    fenoisLowSeasonGeneratedWater: "",
    fosforoHighSeasonGeneratedWater: "",
    fosforoLowSeasonGeneratedWater: "",
    nitratosHighSeasonGeneratedWater: "",
    nitratosLowSeasonGeneratedWater: "",
    sulfatosHighSeasonGeneratedWater: "",
    sulfatosLowSeasonGeneratedWater: "",
    ferroHighSeasonGeneratedWater: "",
    ferroLowSeasonGeneratedWater: "",
    aluminumHighSeasonGeneratedWater: "",
    aluminumLowSeasonGeneratedWater: "",
    cadmioHighSeasonGeneratedWater: "",
    cadmioLowSeasonGeneratedWater: "",
    cobreHighSeasonGeneratedWater: "",
    cobreLowSeasonGeneratedWater: "",
    cromioHighSeasonGeneratedWater: "",
    cromioLowSeasonGeneratedWater: "",
    manganesHighSeasonGeneratedWater: "",
    manganesLowSeasonGeneratedWater: "",

    // águas residuais tratadas
    phHighSeasonTreatedWater: "",
    phLowSeasonTreatedWater: "",
    conductivityHighSeasonTreatedWater: "",
    conductivityLowSeasonTreatedWater: "",
    turbidityHighSeasonTreatedWater: "",
    turbidityLowSeasonTreatedWater: "",
    CQOHighSeasonTreatedWater: "",
    CQOLowSeasonTreatedWater: "",
    CBOHighSeasonTreatedWater: "",
    CBOLowSeasonTreatedWater: "",
    SSTHighSeasonTreatedWater: "",
    SSTLowSeasonTreatedWater: "",
    NTKHighSeasonTreatedWater: "",
    NTKLowSeasonTreatedWater: "",
    fenoisHighSeasonTreatedWater: "",
    fenoisLowSeasonTreatedWater: "",
    fosforoHighSeasonTreatedWater: "",
    fosforoLowSeasonTreatedWater: "",
    nitratosHighSeasonTreatedWater: "",
    nitratosLowSeasonTreatedWater: "",
    sulfatosHighSeasonTreatedWater: "",
    sulfatosLowSeasonTreatedWater: "",
    ferroHighSeasonTreatedWater: "",
    ferroLowSeasonTreatedWater: "",
    aluminumHighSeasonTreatedWater: "",
    aluminumLowSeasonTreatedWater: "",
    cadmioHighSeasonTreatedWater: "",
    cadmioLowSeasonTreatedWater: "",
    cobreHighSeasonTreatedWater: "",
    cobreLowSeasonTreatedWater: "",
    cromioHighSeasonTreatedWater: "",
    cromioLowSeasonTreatedWater: "",
    manganesHighSeasonTreatedWater: "",
    manganesLowSeasonTreatedWater: "",

    //images
    producedAndBoughtGrapesImage: "",
    producedAndBoughtMustImage: "",
    mustFromProducedGrapesImage: "",
    totalWineProportionsByTypeImage: "",
    waterConsumptionBySourceImage: "",
    waterConsumptionByWinemakingProcessImage: "",
    waterConsumptionByBottlingProcessImage: "",
    waterConsumptionByProcessImage: "",
    pollutantRemovalPercentageImage: "",
    electricityBySourceImage: "",
    electricityProducedBySourceImage: "",
    electricityConsumedInCompanyInstalationsImage: "",

    //Completed
    isCompleted1: false,
    isCompleted2: false,
    isCompleted3: false,
    isCompleted4: false,
    isCompleted5: false,
    isCompleted6: false,
    isCompleted7: false,
    isCompleted8: false,
    isCompleted9: false,
    isCompleted10: false,
    isCompleted11: false,
    isCompleted12: false,
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
      topics: [
        { id: "generalData", name: "Dados gerais" },
        { id: "materials", name: "Materiais" },
        { id: "energy", name: "Energia" },
        { id: "waste", name: "Resíduos" },
        { id: "water", name: "Água" },
      ],
      selectedTopic: { id: "generalData", name: "Dados gerais" },
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
          //generalData
          totalGrapesProduced: this.state.totalGrapesProduced,
          totalGrapesBought: this.state.totalGrapesBought,
          totalMustPurchased: this.state.totalMustPurchased,
          totalMustFermented: this.state.totalMustFermented,
          brix: this.state.brix,
          totalMustProducedFromGrapes: this.state.totalMustProducedFromGrapes,
          totalWineProduced: this.state.totalWineProduced,
          glassBottles35: this.state.glassBottles35,
          glassBottles75: this.state.glassBottles75,
          glassBottles100: this.state.glassBottles100,
          petBottles: this.state.petBottles,
          bagInBox3: this.state.bagInBox3,
          bagInBox5: this.state.bagInBox5,
          setTotalGrapesProduced: (totalGrapesProduced) => {
            this.setState({ totalGrapesProduced });
          },
          setTotalGrapesBought: (totalGrapesBought) => {
            this.setState({ totalGrapesBought });
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
          setTotalMustProducedFromGrapes: (totalMustProducedFromGrapes) => {
            this.setState({ totalMustProducedFromGrapes });
          },
          setTotalWineProduced: (totalWineProduced) => {
            this.setState({ totalWineProduced });
          },
          setGlassBottles35: (glassBottles35) => {
            this.setState({ glassBottles35 });
          },
          setGlassBottles75: (glassBottles75) => {
            this.setState({ glassBottles75 });
          },
          setGlassBottles100: (glassBottles100) => {
            this.setState({ glassBottles100 });
          },
          setPetBottles: (petBottles) => {
            this.setState({ petBottles });
          },
          setBagInBox3: (bagInBox3) => {
            this.setState({ bagInBox3 });
          },
          setBagInBox5: (bagInBox5) => {
            this.setState({ bagInBox5 });
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
          glassBottles: this.state.glassBottles,
          petBottles: this.state.petBottles,
          labels: this.state.labels,
          corks: this.state.corks,
          wineMuzzles: this.state.wineMuzzles,
          capsules: this.state.capsules,
          aluminumSheets: this.state.aluminumSheets,
          polyethyleneSheets: this.state.polyethyleneSheets,
          crownCaps: this.state.crownCaps,
          aluminumCrownCaps: this.state.aluminumCrownCaps,
          bidule: this.state.bidule,
          aluminumScrewCaps: this.state.aluminumScrewCaps,
          pvc: this.state.pvc,
          ldpeFilmWraps: this.state.ldpeFilmWraps,
          ldpePalletWraps: this.state.ldpePalletWraps,
          boxes: this.state.boxes,
          glassBottlesPercentage: this.state.glassBottlesPercentage,
          petBottlesPercentage: this.state.petBottlesPercentage,
          labelsPercentage: this.state.labelsPercentage,
          corksPercentage: this.state.corksPercentage,
          wineMuzzlesPercentage: this.state.wineMuzzlesPercentage,
          capsulesPercentage: this.state.capsulesPercentage,
          aluminumSheetsPercentage: this.state.aluminumSheetsPercentage,
          polyethyleneSheetsPercentage: this.state.polyethyleneSheetsPercentage,
          crownCapsPercentage: this.state.crownCapsPercentage,
          aluminumCrownCapsPercentage: this.state.aluminumCrownCapsPercentage,
          bidulePercentage: this.state.bidulePercentage,
          aluminumScrewCapsPercentage: this.state.aluminumScrewCapsPercentage,
          pvcPercentage: this.state.pvcPercentage,
          ldpeFilmWrapsPercentage: this.state.ldpeFilmWrapsPercentage,
          ldpePalletWrapsPercentage: this.state.ldpePalletWrapsPercentage,
          boxesPercentage: this.state.boxesPercentage,
          nitricAcid: this.state.nitricAcid,
          phosphoricAcid: this.state.phosphoricAcid,
          sodaLiquid: this.state.sodaLiquid,
          solidSodiumHydroxide: this.state.solidSodiumHydroxide,
          sodiumHypochlorite: this.state.microorganisms,
          sodiumSulfate: this.state.sodiumSulfate,
          antifoamProducts: this.state.antifoamProducts,
          grease: this.state.grease,
          lubricantOilEquipmentMaintenance:
            this.state.lubricantOilEquipmentMaintenance,
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
          setGlassBottles: (glassBottles) => {
            this.setState({ glassBottles });
          },
          setPetBottles: (petBottles) => {
            this.setState({ petBottles });
          },
          setLabels: (labels) => {
            this.setState({ labels });
          },
          setCorks: (corks) => {
            this.setState({ corks });
          },
          setWineMuzzles: (wineMuzzles) => {
            this.setState({ wineMuzzles });
          },
          setCapsules: (capsules) => {
            this.setState({ capsules });
          },
          setAluminumSheets: (aluminumSheets) => {
            this.setState({ aluminumSheets });
          },
          setPolyethyleneSheets: (polyethyleneSheets) => {
            this.setState({ polyethyleneSheets });
          },
          setCrownCaps: (crownCaps) => {
            this.setState({ crownCaps });
          },
          setAluminumCrownCaps: (aluminumCrownCaps) => {
            this.setState({ aluminumCrownCaps });
          },
          setBidule: (bidule) => {
            this.setState({ bidule });
          },
          setAluminumScrewCaps: (aluminumScrewCaps) => {
            this.setState({ aluminumScrewCaps });
          },
          setPvc: (pvc) => {
            this.setState({ pvc });
          },
          setLdpeFilmWraps: (ldpeFilmWraps) => {
            this.setState({ ldpeFilmWraps });
          },
          setLdpePalletWraps: (ldpePalletWraps) => {
            this.setState({ ldpePalletWraps });
          },
          setBoxes: (boxes) => {
            this.setState({ boxes });
          },
          setGlassBottlesPercentage: (glassBottlesPercentage) => {
            this.setState({ glassBottlesPercentage });
          },
          setPetBottlesPercentage: (petBottlesPercentage) => {
            this.setState({ petBottlesPercentage });
          },
          setLabelsPercentage: (labelsPercentage) => {
            this.setState({ labelsPercentage });
          },
          setCorksPercentage: (corksPercentage) => {
            this.setState({ corksPercentage });
          },
          setWineMuzzlesPercentage: (wineMuzzlesPercentage) => {
            this.setState({ wineMuzzlesPercentage });
          },
          setCapsulesPercentage: (capsulesPercentage) => {
            this.setState({ capsulesPercentage });
          },
          setAluminumSheetsPercentage: (aluminumSheetsPercentage) => {
            this.setState({ aluminumSheetsPercentage });
          },
          setPolyethyleneSheetsPercentage: (polyethyleneSheetsPercentage) => {
            this.setState({ polyethyleneSheetsPercentage });
          },
          setCrownCapsPercentage: (crownCapsPercentage) => {
            this.setState({ crownCapsPercentage });
          },
          setAluminumCrownCapsPercentage: (aluminumCrownCapsPercentage) => {
            this.setState({ aluminumCrownCapsPercentage });
          },
          setBidulePercentage: (bidulePercentage) => {
            this.setState({ bidulePercentage });
          },
          setAluminumScrewCapsPercentage: (aluminumScrewCapsPercentage) => {
            this.setState({ aluminumScrewCapsPercentage });
          },
          setPvcPercentage: (pvcPercentage) => {
            this.setState({ pvcPercentage });
          },
          setLdpeFilmWrapsPercentage: (ldpeFilmWrapsPercentage) => {
            this.setState({ ldpeFilmWrapsPercentage });
          },
          setLdpePalletWrapsPercentage: (ldpePalletWrapsPercentage) => {
            this.setState({ ldpePalletWrapsPercentage });
          },
          setBoxesPercentage: (boxesPercentage) => {
            this.setState({ boxesPercentage });
          },
          setNitricAcid: (nitricAcid) => {
            this.setState({ nitricAcid });
          },
          setPhosphoricAcid: (phosphoricAcid) => {
            this.setState({ phosphoricAcid });
          },
          setSodaLiquid: (sodaLiquid) => {
            this.setState({ sodaLiquid });
          },
          setSolidSodiumHydroxide: (solidSodiumHydroxide) => {
            this.setState({ solidSodiumHydroxide });
          },
          setSodiumHypochlorite: (sodiumHypochlorite) => {
            this.setState({ sodiumHypochlorite });
          },
          setSodiumSulfate: (sodiumSulfate) => {
            this.setState({ sodiumSulfate });
          },
          setAntifoamProducts: (antifoamProducts) => {
            this.setState({ antifoamProducts });
          },
          setGrease: (grease) => {
            this.setState({ grease });
          },
          setLubricantOilEquipmentMaintenance: (
            lubricantOilEquipmentMaintenance
          ) => {
            this.setState({ lubricantOilEquipmentMaintenance });
          },
          firstMaterialsInsertion: this.state.firstMaterialsInsertion,
          setFirstMaterialsInsertion: (firstMaterialsInsertion) => {
            this.setState({ firstMaterialsInsertion });
          },
          topics: this.state.topics,
          setTopics: (topics) => {
            this.setState({ topics });
          },
          selectedTopic: this.state.selectedTopic,
          setSelectedTopic: (topic) => {
            this.setState({ selectedTopic: topic });
          },

          /* Energy - electricity */
          consumedElectricityBought: this.state.consumedElectricityBought,
          naturalGasBought: this.state.naturalGasBought,
          dieselBought: this.state.dieselBought,
          fuelOilBought: this.state.fuelOilBought,
          nuclearBought: this.state.nuclearBought,
          coalBought: this.state.coalBought,
          windEnergyBought: this.state.windEnergyBought,
          hidrelectricBought: this.state.hidrelectricBought,
          solarBought: this.state.solarBought,
          biomassBought: this.state.biomassBought,
          biogasBought: this.state.biogasBought,
          solidWasteIncinerationBought: this.state.solidWasteIncinerationBought,
          consumedElectricityProduced: this.state.consumedElectricityProduced,
          hidrelectricProduced: this.state.hidrelectricProduced,
          solarProduced: this.state.solarProduced,
          biomassProduced: this.state.biomassProduced,
          biogasProduced: this.state.biogasProduced,
          surplusEntered: this.state.surplusEntered,
          pureDieselUsedInCompany: this.state.pureDieselUsedInCompany,
          pureGasolineUsedInCompany: this.state.pureGasolineUsedInCompany,
          biofuelUsedInCompany: this.state.biofuelUsedInCompany,
          lubricantUsedInCompany: this.state.lubricantUsedInCompany,
          butaneUsedInCompany: this.state.butaneUsedInCompany,
          propaneUsedInCompany: this.state.propaneUsedInCompany,
          gplAutoUsedInCompany: this.state.gplAutoUsedInCompany,
          naturalGasUsedInCompany: this.state.naturalGasUsedInCompany,
          biogasUsedInCompany: this.state.biogasUsedInCompany,
          woodUsedInCompany: this.state.woodUsedInCompany,
          pelletsUsedInCompany: this.state.pelletsUsedInCompany,
          setConsumedElectricityBought: (consumedElectricityBought) => {
            this.setState({ consumedElectricityBought });
          },
          setNaturalGasBought: (naturalGasBought) => {
            this.setState({ naturalGasBought });
          },
          setDieselBought: (dieselBought) => {
            this.setState({ dieselBought });
          },
          setFuelOilBought: (fuelOilBought) => {
            this.setState({ fuelOilBought });
          },
          setNuclearBought: (nuclearBought) => {
            this.setState({ nuclearBought });
          },
          setCoalBought: (coalBought) => {
            this.setState({ coalBought });
          },
          setWindEnergyBought: (windEnergyBought) => {
            this.setState({ windEnergyBought });
          },
          setHidrelectricBought: (hidrelectricBought) => {
            this.setState({ hidrelectricBought });
          },
          setSolarBought: (solarBought) => {
            this.setState({ solarBought });
          },
          setBiomassBought: (biomassBought) => {
            this.setState({ biomassBought });
          },
          setBiogasBought: (biogasBought) => {
            this.setState({ biogasBought });
          },
          setSolidWasteIncinerationBought: (solidWasteIncinerationBought) => {
            this.setState({ solidWasteIncinerationBought });
          },
          setConsumedElectricityProduced: (consumedElectricityProduced) => {
            this.setState({ consumedElectricityProduced });
          },
          setHidrelectricProduced: (hidrelectricProduced) => {
            this.setState({ hidrelectricProduced });
          },
          setSolarProduced: (solarProduced) => {
            this.setState({ solarProduced });
          },
          setBiomassProduced: (biomassProduced) => {
            this.setState({ biomassProduced });
          },
          setBiogasProduced: (biogasProduced) => {
            this.setState({ biogasProduced });
          },
          setSurplusEntered: (surplusEntered) => {
            this.setState({ surplusEntered });
          },
          setPureDieselUsedInCompany: (pureDieselUsedInCompany) => {
            this.setState({ pureDieselUsedInCompany });
          },
          setPureGasolineUsedInCompany: (pureGasolineUsedInCompany) => {
            this.setState({ pureGasolineUsedInCompany });
          },
          setBiofuelUsedInCompany: (biofuelUsedInCompany) => {
            this.setState({ biofuelUsedInCompany });
          },
          setLubricantUsedInCompany: (lubricantUsedInCompany) => {
            this.setState({ lubricantUsedInCompany });
          },
          setButaneUsedInCompany: (butaneUsedInCompany) => {
            this.setState({ butaneUsedInCompany });
          },
          setPropaneUsedInCompany: (propaneUsedInCompany) => {
            this.setState({ propaneUsedInCompany });
          },
          setGplAutoUsedInCompany: (gplAutoUsedInCompany) => {
            this.setState({ gplAutoUsedInCompany });
          },
          setNaturalGasUsedInCompany: (naturalGasUsedInCompany) => {
            this.setState({ naturalGasUsedInCompany });
          },
          setBiogasUsedInCompany: (biogasUsedInCompany) => {
            this.setState({ biogasUsedInCompany });
          },
          setWoodUsedInCompany: (woodUsedInCompany) => {
            this.setState({ woodUsedInCompany });
          },
          setPelletsUsedInCompany: (pelletsUsedInCompany) => {
            this.setState({ pelletsUsedInCompany });
          },
          simpleDiesel: this.state.simpleDiesel,
          setSimpleDiesel: (simpleDiesel) => {
            this.setState({ simpleDiesel });
          },
          additiveDiesel: this.state.additiveDiesel,
          setAdditiveDiesel: (additiveDiesel) => {
            this.setState({ additiveDiesel });
          },
          plainGasoline: this.state.plainGasoline,
          setPlainGasoline: (plainGasoline) => {
            this.setState({ plainGasoline });
          },
          additiveGasoline: this.state.additiveGasoline,
          setAdditiveGasoline: (additiveGasoline) => {
            this.setState({ additiveGasoline });
          },
          biofuel: this.state.biofuel,
          setBiofuel: (biofuel) => {
            this.setState({ biofuel });
          },
          heatingOil: this.state.heatingOil,
          setHeatingOil: (heatingOil) => {
            this.setState({ heatingOil });
          },
          butane: this.state.butane,
          setButane: (butane) => {
            this.setState({ butane });
          },
          propane: this.state.propane,
          setPropane: (propane) => {
            this.setState({ propane });
          },
          gpl: this.state.gpl,
          setGpl: (gpl) => {
            this.setState({ gpl });
          },
          naturalGas: this.state.naturalGas,
          setNaturalGas: (naturalGas) => {
            this.setState({ naturalGas });
          },
          cng: this.state.cng,
          setCng: (cng) => {
            this.setState({ cng });
          },
          biogas: this.state.biogas,
          setBiogas: (biogas) => {
            this.setState({ biogas });
          },
          wood: this.state.wood,
          setWood: (wood) => {
            this.setState({ wood });
          },
          pellets: this.state.pellets,
          setPellets: (pellets) => {
            this.setState({ pellets });
          },
          firstEnergyInsertion: this.state.firstEnergyInsertion,
          setFirstEnergyInsertion: (firstEnergyInsertion) => {
            this.setState({ firstEnergyInsertion });
          },
          //
          deceit: this.state.deceit,
          deceitDestination: this.state.deceitDestination,
          bagasse: this.state.bagasse,
          bagasseDestination: this.state.bagasseDestination,
          draff: this.state.draff,
          draffDestination: this.state.draffDestination,
          usedDiatomaceous: this.state.usedDiatomaceous,
          usedDiatomaceousDestination: this.state.usedDiatomaceousDestination,
          glassMixture: this.state.glassMixture,
          glassMixtureDestination: this.state.glassMixtureDestination,
          plasticMixture: this.state.plasticMixture,
          plasticMixtureDestination: this.state.plasticMixtureDestination,
          plasticHdpe: this.state.plasticHdpe,
          plasticHdpeDestination: this.state.plasticHdpeDestination,
          plasticLdpe: this.state.plasticLdpe,
          plasticLdpeDestination: this.state.plasticLdpeDestination,
          plasticPet: this.state.plasticPet,
          plasticPetDestination: this.state.plasticPetDestination,
          plasticPp: this.state.plasticPp,
          plasticPpDestination: this.state.plasticPpDestination,
          plasticPvc: this.state.plasticPvc,
          plasticPvcDestination: this.state.plasticPvcDestination,
          paperMixture: this.state.paperMixture,
          paperMixtureDestination: this.state.paperMixtureDestination,
          paperCard: this.state.paperCard,
          paperCardDestination: this.state.paperCardDestination,
          glassMunicipalitiesWaste: this.state.glassMunicipalitiesWaste,
          glassMunicipalitiesWasteDestination:
            this.state.glassMunicipalitiesWasteDestination,
          plasticMetalMunicipalitiesWaste:
            this.state.plasticMetalMunicipalitiesWaste,
          plasticMetalMunicipalitiesWasteDestination:
            this.state.plasticMetalMunicipalitiesWasteDestination,
          paperMunicipalitiesWaste: this.state.paperMunicipalitiesWaste,
          paperMunicipalitiesWasteDestination:
            this.state.paperMunicipalitiesWasteDestination,
          undifferentiatedMunicipalitiesWaste:
            this.state.undifferentiatedMunicipalitiesWaste,
          undifferentiatedMunicipalitiesWasteDestination:
            this.state.undifferentiatedMunicipalitiesWasteDestination,
          junkYardWiresMixture: this.state.junkYardWiresMixture,
          junkYardWiresMixtureDestination:
            this.state.junkYardWiresMixtureDestination,
          junkYardWiresSteel: this.state.junkYardWiresSteel,
          junkYardWiresSteelDestination:
            this.state.junkYardWiresSteelDestination,
          junkYardWiresAluminum: this.state.junkYardWiresAluminum,
          junkYardWiresAluminumDestination:
            this.state.junkYardWiresAluminumDestination,
          junkYardCansMixture: this.state.junkYardCansMixture,
          junkYardCansMixtureDestination:
            this.state.junkYardCansMixtureDestination,
          junkYardWoodMixture: this.state.junkYardWoodMixture,
          junkYardWoodMixtureDestination:
            this.state.junkYardWoodMixtureDestination,
          junkYardDomesticBateries: this.state.junkYardDomesticBateries,
          junkYardDomesticBateriesDestination:
            this.state.junkYardDomesticBateriesDestination,
          junkYardMachinesBateries: this.state.junkYardMachinesBateries,
          junkYardMachinesBateriesDestination:
            this.state.junkYardMachinesBateriesDestination,
          junkYardTires: this.state.junkYardTires,
          junkYardTiresDestination: this.state.junkYardTiresDestination,
          junkYardInformaticEquipment: this.state.junkYardInformaticEquipment,
          junkYardInformaticEquipmentDestination:
            this.state.junkYardInformaticEquipmentDestination,
          junkYardRefrigerationEquipment:
            this.state.junkYardRefrigerationEquipment,
          junkYardRefrigerationEquipmentDestination:
            this.state.junkYardRefrigerationEquipmentDestination,
          junkYardMachinesOils: this.state.junkYardMachinesOils,
          junkYardMachinesOilsDestination:
            this.state.junkYardMachinesOilsDestination,
          sludge: this.state.sludge,
          sludgeDestination: this.state.sludgeDestination,
          setDeceit: (deceit) => {
            this.setState({ deceit });
          },
          setDeceitDestination: (deceitDestination) => {
            this.setState({ deceitDestination });
          },
          setBagasse: (bagasse) => {
            this.setState({ bagasse });
          },
          setBagasseDestination: (bagasseDestination) => {
            this.setState({ bagasseDestination });
          },
          setDraff: (draff) => {
            this.setState({ draff });
          },
          setDraffDestination: (draffDestination) => {
            this.setState({ draffDestination });
          },
          setUsedDiatomaceous: (usedDiatomaceous) => {
            this.setState({ usedDiatomaceous });
          },
          setUsedDiatomaceousDestination: (usedDiatomaceousDestination) => {
            this.setState({ usedDiatomaceousDestination });
          },
          setGlassMixture: (glassMixture) => {
            this.setState({ glassMixture });
          },
          setGlassMixtureDestination: (glassMixtureDestination) => {
            this.setState({ glassMixtureDestination });
          },
          setPlasticMixture: (plasticMixture) => {
            this.setState({ plasticMixture });
          },
          setPlasticMixtureDestination: (plasticMixtureDestination) => {
            this.setState({ plasticMixtureDestination });
          },
          setPlasticHdpe: (plasticHdpe) => {
            this.setState({ plasticHdpe });
          },
          setPlasticHdpeDestination: (plasticHdpeDestination) => {
            this.setState({ plasticHdpeDestination });
          },
          setPlasticLdpe: (plasticLdpe) => {
            this.setState({ plasticLdpe });
          },
          setPlasticLdpeDestination: (plasticLdpeDestination) => {
            this.setState({ plasticLdpeDestination });
          },
          setPlasticPet: (plasticPet) => {
            this.setState({ plasticPet });
          },
          setPlasticPetDestination: (plasticPetDestination) => {
            this.setState({ plasticPetDestination });
          },
          setPlasticPp: (plasticPp) => {
            this.setState({ plasticPp });
          },
          setPlasticPpDestination: (plasticPpDestination) => {
            this.setState({ plasticPpDestination });
          },
          setPlasticPvc: (plasticPvc) => {
            this.setState({ plasticPvc });
          },
          setPlasticPvcDestination: (plasticPvcDestination) => {
            this.setState({ plasticPvcDestination });
          },
          setPaperMixture: (paperMixture) => {
            this.setState({ paperMixture });
          },
          setPaperMixtureDestination: (paperMixtureDestination) => {
            this.setState({ paperMixtureDestination });
          },
          setPaperCard: (paperCard) => {
            this.setState({ paperCard });
          },
          setPaperCardDestination: (paperCardDestination) => {
            this.setState({ paperCardDestination });
          },
          setglassMunicipalitiesWaste: (glassMunicipalitiesWaste) => {
            this.setState({ glassMunicipalitiesWaste });
          },
          setglassMunicipalitiesWasteDestination: (
            glassMunicipalitiesWasteDestination
          ) => {
            this.setState({ glassMunicipalitiesWasteDestination });
          },
          setplasticMetalMunicipalitiesWaste: (
            plasticMetalMunicipalitiesWaste
          ) => {
            this.setState({ plasticMetalMunicipalitiesWaste });
          },
          //water
          totalWaterFromNetwork: this.state.totalWaterFromNetwork,
          totalWaterFromWell: this.state.totalWaterFromWell,
          totalWaterFromCistern: this.state.totalWaterFromCistern,
          totalWaterReused: this.state.totalWaterReused,
          waterConsumedByEquipmentCleaningOnPressing:
            this.state.waterConsumedByEquipmentCleaningOnPressing,
          numberOfCleaningPerMonthOnPressing:
            this.state.numberOfCleaningPerMonthOnPressing,
          waterConsumedByEquipmentCleaningOnTrasfega:
            this.state.waterConsumedByEquipmentCleaningOnTrasfega,
          numberOfCleaningPerMonthOnTrasfega:
            this.state.numberOfCleaningPerMonthOnTrasfega,
          waterConsumedByEquipmentCleaningOnEstabilization:
            this.state.waterConsumedByEquipmentCleaningOnEstabilization,
          numberOfCleaningPerMonthOnEstabilization:
            this.state.numberOfCleaningPerMonthOnEstabilization,
          waterConsumedByEquipmentCleaningOnFiltration:
            this.state.waterConsumedByEquipmentCleaningOnFiltration,
          numberOfCleaningPerMonthOnFiltration:
            this.state.numberOfCleaningPerMonthOnFiltration,
          waterConsumedByEquipmentCleaningOnDifferentFloors:
            this.state.waterConsumedByEquipmentCleaningOnDifferentFloors,
          numberOfCleaningPerMonthOnDifferentFloors:
            this.state.numberOfCleaningPerMonthOnDifferentFloors,
          waterConsumedByEquipmentCleaningOnSterilization:
            this.state.waterConsumedByEquipmentCleaningOnSterilization,
          numberOfCleaningPerMonthOnSterilization:
            this.state.numberOfCleaningPerMonthOnSterilization,
          waterConsumedByEquipmentCleaningOnFilling:
            this.state.waterConsumedByEquipmentCleaningOnFilling,
          numberOfCleaningPerMonthOnFilling:
            this.state.numberOfCleaningPerMonthOnFilling,
          waterConsumedByEquipmentCleaningOnLabeling:
            this.state.waterConsumedByEquipmentCleaningOnLabeling,
          numberOfCleaningPerMonthOnLabeling:
            this.state.numberOfCleaningPerMonthOnLabeling,
          waterConsumedByEquipmentCleaningOnBottlingDifferentFloors:
            this.state
              .waterConsumedByEquipmentCleaningOnBottlingDifferentFloors,
          numberOfCleaningPerMonthOnBottlingDifferentFloors:
            this.state.numberOfCleaningPerMonthOnBottlingDifferentFloors,
          firstWaterInsertion: this.state.firstWaterInsertion,
          setTotalWaterFromNetwork: (totalWaterFromNetwork) => {
            this.setState({ totalWaterFromNetwork });
          },
          setTotalWaterFromWell: (totalWaterFromWell) => {
            this.setState({ totalWaterFromWell });
          },
          setTotalWaterFromCistern: (totalWaterFromCistern) => {
            this.setState({ totalWaterFromCistern });
          },
          setTotalWaterReused: (totalWaterReused) => {
            this.setState({ totalWaterReused });
          },
          setWaterConsumedByEquipmentCleaningOnPressing: (
            waterConsumedByEquipmentCleaningOnPressing
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnPressing });
          },
          setNumberOfCleaningPerMonthOnPressing: (
            numberOfCleaningPerMonthOnPressing
          ) => {
            this.setState({ numberOfCleaningPerMonthOnPressing });
          },
          setWaterConsumedByEquipmentCleaningOnTrasfega: (
            waterConsumedByEquipmentCleaningOnTrasfega
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnTrasfega });
          },
          setNumberOfCleaningPerMonthOnTrasfega: (
            numberOfCleaningPerMonthOnTrasfega
          ) => {
            this.setState({ numberOfCleaningPerMonthOnTrasfega });
          },
          setWaterConsumedByEquipmentCleaningOnEstabilization: (
            waterConsumedByEquipmentCleaningOnEstabilization
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnEstabilization });
          },
          setNumberOfCleaningPerMonthOnEstabilization: (
            numberOfCleaningPerMonthOnEstabilization
          ) => {
            this.setState({ numberOfCleaningPerMonthOnEstabilization });
          },
          setWaterConsumedByEquipmentCleaningOnFiltration: (
            waterConsumedByEquipmentCleaningOnFiltration
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnFiltration });
          },
          setNumberOfCleaningPerMonthOnFiltration: (
            numberOfCleaningPerMonthOnFiltration
          ) => {
            this.setState({ numberOfCleaningPerMonthOnFiltration });
          },
          setWaterConsumedByEquipmentCleaningOnDifferentFloors: (
            waterConsumedByEquipmentCleaningOnDifferentFloors
          ) => {
            this.setState({
              waterConsumedByEquipmentCleaningOnDifferentFloors,
            });
          },
          setNumberOfCleaningPerMonthOnDifferentFloors: (
            numberOfCleaningPerMonthOnDifferentFloors
          ) => {
            this.setState({ numberOfCleaningPerMonthOnDifferentFloors });
          },
          setWaterConsumedByEquipmentCleaningOnSterilization: (
            waterConsumedByEquipmentCleaningOnSterilization
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnSterilization });
          },
          setNumberOfCleaningPerMonthOnSterilization: (
            numberOfCleaningPerMonthOnSterilization
          ) => {
            this.setState({ numberOfCleaningPerMonthOnSterilization });
          },
          setWaterConsumedByEquipmentCleaningOnFilling: (
            waterConsumedByEquipmentCleaningOnFilling
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnFilling });
          },
          setNumberOfCleaningPerMonthOnFilling: (
            numberOfCleaningPerMonthOnFilling
          ) => {
            this.setState({ numberOfCleaningPerMonthOnFilling });
          },
          setWaterConsumedByEquipmentCleaningOnLabeling: (
            waterConsumedByEquipmentCleaningOnLabeling
          ) => {
            this.setState({ waterConsumedByEquipmentCleaningOnLabeling });
          },
          setNumberOfCleaningPerMonthOnLabeling: (
            numberOfCleaningPerMonthOnLabeling
          ) => {
            this.setState({ numberOfCleaningPerMonthOnLabeling });
          },
          setWaterConsumedByEquipmentCleaningOnBottlingDifferentFloors: (
            waterConsumedByEquipmentCleaningOnBottlingDifferentFloors
          ) => {
            this.setState({
              waterConsumedByEquipmentCleaningOnBottlingDifferentFloors,
            });
          },
          setNumberOfCleaningPerMonthOnBottlingDifferentFloors: (
            numberOfCleaningPerMonthOnBottlingDifferentFloors
          ) => {
            this.setState({
              numberOfCleaningPerMonthOnBottlingDifferentFloors,
            });
          },
          setFirstWaterInsertion: (firstWaterInsertion) => {
            this.setState({ firstWaterInsertion });
          },

          // tratamento de águas residuais
          phHighSeasonGeneratedWater: this.state.phHighSeasonGeneratedWater,
          phLowSeasonGeneratedWater: this.state.phLowSeasonGeneratedWater,
          conductivityHighSeasonGeneratedWater:
            this.state.conductivityHighSeasonGeneratedWater,
          conductivityLowSeasonGeneratedWater:
            this.state.conductivityLowSeasonGeneratedWater,
          turbidityHighSeasonGeneratedWater:
            this.state.turbidityHighSeasonGeneratedWater,
          turbidityLowSeasonGeneratedWater:
            this.state.turbidityLowSeasonGeneratedWater,
          CQOHighSeasonGeneratedWater: this.state.CQOHighSeasonGeneratedWater,
          CQOLowSeasonGeneratedWater: this.state.CQOLowSeasonGeneratedWater,
          CBOHighSeasonGeneratedWater: this.state.CBOHighSeasonGeneratedWater,
          CBOLowSeasonGeneratedWater: this.state.CBOLowSeasonGeneratedWater,
          SSTHighSeasonGeneratedWater: this.state.SSTHighSeasonGeneratedWater,
          SSTLowSeasonGeneratedWater: this.state.SSTLowSeasonGeneratedWater,
          NTKHighSeasonGeneratedWater: this.state.NTKHighSeasonGeneratedWater,
          NTKLowSeasonGeneratedWater: this.state.NTKLowSeasonGeneratedWater,
          fenoisHighSeasonGeneratedWater:
            this.state.fenoisHighSeasonGeneratedWater,
          fenoisLowSeasonGeneratedWater:
            this.state.fenoisLowSeasonGeneratedWater,
          fosforoHighSeasonGeneratedWater:
            this.state.fosforoHighSeasonGeneratedWater,
          fosforoLowSeasonGeneratedWater:
            this.state.fosforoLowSeasonGeneratedWater,
          nitratosHighSeasonGeneratedWater:
            this.state.nitratosHighSeasonGeneratedWater,
          nitratosLowSeasonGeneratedWater:
            this.state.nitratosLowSeasonGeneratedWater,
          sulfatosHighSeasonGeneratedWater:
            this.state.sulfatosHighSeasonGeneratedWater,
          sulfatosLowSeasonGeneratedWater:
            this.state.sulfatosLowSeasonGeneratedWater,
          ferroHighSeasonGeneratedWater:
            this.state.ferroHighSeasonGeneratedWater,
          ferroLowSeasonGeneratedWater: this.state.ferroLowSeasonGeneratedWater,
          aluminumHighSeasonGeneratedWater:
            this.state.aluminumHighSeasonGeneratedWater,
          aluminumLowSeasonGeneratedWater:
            this.state.aluminumLowSeasonGeneratedWater,
          cadmioHighSeasonGeneratedWater:
            this.state.cadmioHighSeasonGeneratedWater,
          cadmioLowSeasonGeneratedWater:
            this.state.cadmioLowSeasonGeneratedWater,
          cobreHighSeasonGeneratedWater:
            this.state.cobreHighSeasonGeneratedWater,
          cobreLowSeasonGeneratedWater: this.state.cobreLowSeasonGeneratedWater,
          cromioHighSeasonGeneratedWater:
            this.state.cromioHighSeasonGeneratedWater,
          cromioLowSeasonGeneratedWater:
            this.state.cromioLowSeasonGeneratedWater,
          manganesHighSeasonGeneratedWater:
            this.state.manganesHighSeasonGeneratedWater,
          manganesLowSeasonGeneratedWater:
            this.state.manganesLowSeasonGeneratedWater,

          // águas residuais tratadas
          phHighSeasonTreatedWater: this.state.phHighSeasonTreatedWater,
          phLowSeasonTreatedWater: this.state.phLowSeasonTreatedWater,
          conductivityHighSeasonTreatedWater:
            this.state.conductivityHighSeasonTreatedWater,
          conductivityLowSeasonTreatedWater:
            this.state.conductivityLowSeasonTreatedWater,
          turbidityHighSeasonTreatedWater:
            this.state.turbidityHighSeasonTreatedWater,
          turbidityLowSeasonTreatedWater:
            this.state.turbidityLowSeasonTreatedWater,
          CQOHighSeasonTreatedWater: this.state.CQOHighSeasonTreatedWater,
          CQOLowSeasonTreatedWater: this.state.CQOLowSeasonTreatedWater,
          CBOHighSeasonTreatedWater: this.state.CBOHighSeasonTreatedWater,
          CBOLowSeasonTreatedWater: this.state.CBOLowSeasonTreatedWater,
          SSTHighSeasonTreatedWater: this.state.SSTHighSeasonTreatedWater,
          SSTLowSeasonTreatedWater: this.state.SSTLowSeasonTreatedWater,
          NTKHighSeasonTreatedWater: this.state.NTKHighSeasonTreatedWater,
          NTKLowSeasonTreatedWater: this.state.NTKLowSeasonTreatedWater,
          fenoisHighSeasonTreatedWater: this.state.fenoisHighSeasonTreatedWater,
          fenoisLowSeasonTreatedWater: this.state.fenoisLowSeasonTreatedWater,
          fosforoHighSeasonTreatedWater:
            this.state.fosforoHighSeasonTreatedWater,
          fosforoLowSeasonTreatedWater: this.state.fosforoLowSeasonTreatedWater,
          nitratosHighSeasonTreatedWater:
            this.state.nitratosHighSeasonTreatedWater,
          nitratosLowSeasonTreatedWater:
            this.state.nitratosLowSeasonTreatedWater,
          sulfatosHighSeasonTreatedWater:
            this.state.sulfatosHighSeasonTreatedWater,
          sulfatosLowSeasonTreatedWater:
            this.state.sulfatosLowSeasonTreatedWater,
          ferroHighSeasonTreatedWater: this.state.ferroHighSeasonTreatedWater,
          ferroLowSeasonTreatedWater: this.state.ferroLowSeasonTreatedWater,
          aluminumHighSeasonTreatedWater:
            this.state.aluminumHighSeasonTreatedWater,
          aluminumLowSeasonTreatedWater:
            this.state.aluminumLowSeasonTreatedWater,
          cadmioHighSeasonTreatedWater: this.state.cadmioHighSeasonTreatedWater,
          cadmioLowSeasonTreatedWater: this.state.cadmioLowSeasonTreatedWater,
          cobreHighSeasonTreatedWater: this.state.cobreHighSeasonTreatedWater,
          cobreLowSeasonTreatedWater: this.state.cobreLowSeasonTreatedWater,
          cromioHighSeasonTreatedWater: this.state.cromioHighSeasonTreatedWater,
          cromioLowSeasonTreatedWater: this.state.cromioLowSeasonTreatedWater,
          manganesHighSeasonTreatedWater:
            this.state.manganesHighSeasonTreatedWater,
          manganesLowSeasonTreatedWater:
            this.state.manganesLowSeasonTreatedWater,

          // águas residuais geradas
          setPhHighSeasonGeneratedWater: (phHighSeasonGeneratedWater) => {
            this.setState({ phHighSeasonGeneratedWater });
          },
          setPhLowSeasonGeneratedWater: (phLowSeasonGeneratedWater) => {
            this.setState({ phLowSeasonGeneratedWater });
          },
          setConductivityHighSeasonGeneratedWater: (
            conductivityHighSeasonGeneratedWater
          ) => {
            this.setState({ conductivityHighSeasonGeneratedWater });
          },
          setConductivityLowSeasonGeneratedWater: (
            conductivityLowSeasonGeneratedWater
          ) => {
            this.setState({ conductivityLowSeasonGeneratedWater });
          },
          setTurbidityHighSeasonGeneratedWater: (
            turbidityHighSeasonGeneratedWater
          ) => {
            this.setState({ turbidityHighSeasonGeneratedWater });
          },
          setTurbidityLowSeasonGeneratedWater: (
            turbidityLowSeasonGeneratedWater
          ) => {
            this.setState({ turbidityLowSeasonGeneratedWater });
          },
          setCQOHighSeasonGeneratedWater: (CQOHighSeasonGeneratedWater) => {
            this.setState({ CQOHighSeasonGeneratedWater });
          },
          setCQOLowSeasonGeneratedWater: (CQOLowSeasonGeneratedWater) => {
            this.setState({ CQOLowSeasonGeneratedWater });
          },
          setCBOHighSeasonGeneratedWater: (CBOHighSeasonGeneratedWater) => {
            this.setState({ CBOHighSeasonGeneratedWater });
          },
          setCBOLowSeasonGeneratedWater: (CBOLowSeasonGeneratedWater) => {
            this.setState({ CBOLowSeasonGeneratedWater });
          },
          setSSTHighSeasonGeneratedWater: (SSTHighSeasonGeneratedWater) => {
            this.setState({ SSTHighSeasonGeneratedWater });
          },
          setSSTLowSeasonGeneratedWater: (SSTLowSeasonGeneratedWater) => {
            this.setState({ SSTLowSeasonGeneratedWater });
          },
          setNTKHighSeasonGeneratedWater: (NTKHighSeasonGeneratedWater) => {
            this.setState({ NTKHighSeasonGeneratedWater });
          },
          setNTKLowSeasonGeneratedWater: (NTKLowSeasonGeneratedWater) => {
            this.setState({ NTKLowSeasonGeneratedWater });
          },
          setFenoisHighSeasonGeneratedWater: (
            fenoisHighSeasonGeneratedWater
          ) => {
            this.setState({ fenoisHighSeasonGeneratedWater });
          },
          setFenoisLowSeasonGeneratedWater: (fenoisLowSeasonGeneratedWater) => {
            this.setState({ fenoisLowSeasonGeneratedWater });
          },
          setFosforoHighSeasonGeneratedWater: (
            fosforoHighSeasonGeneratedWater
          ) => {
            this.setState({ fosforoHighSeasonGeneratedWater });
          },
          setFosforoLowSeasonGeneratedWater: (
            fosforoLowSeasonGeneratedWater
          ) => {
            this.setState({ fosforoLowSeasonGeneratedWater });
          },
          setNitratosHighSeasonGeneratedWater: (
            nitratosHighSeasonGeneratedWater
          ) => {
            this.setState({ nitratosHighSeasonGeneratedWater });
          },
          setNitratosLowSeasonGeneratedWater: (
            nitratosLowSeasonGeneratedWater
          ) => {
            this.setState({ nitratosLowSeasonGeneratedWater });
          },
          setSulfatosHighSeasonGeneratedWater: (
            sulfatosHighSeasonGeneratedWater
          ) => {
            this.setState({ sulfatosHighSeasonGeneratedWater });
          },
          setSulfatosLowSeasonGeneratedWater: (
            sulfatosLowSeasonGeneratedWater
          ) => {
            this.setState({ sulfatosLowSeasonGeneratedWater });
          },
          setFerroHighSeasonGeneratedWater: (ferroHighSeasonGeneratedWater) => {
            this.setState({ ferroHighSeasonGeneratedWater });
          },
          setFerroLowSeasonGeneratedWater: (ferroLowSeasonGeneratedWater) => {
            this.setState({ ferroLowSeasonGeneratedWater });
          },
          setAluminumHighSeasonGeneratedWater: (
            aluminumHighSeasonGeneratedWater
          ) => {
            this.setState({ aluminumHighSeasonGeneratedWater });
          },
          setAluminumLowSeasonGeneratedWater: (
            aluminumLowSeasonGeneratedWater
          ) => {
            this.setState({ aluminumLowSeasonGeneratedWater });
          },
          setCadmioHighSeasonGeneratedWater: (
            cadmioHighSeasonGeneratedWater
          ) => {
            this.setState({ cadmioHighSeasonGeneratedWater });
          },
          setCadmioLowSeasonGeneratedWater: (cadmioLowSeasonGeneratedWater) => {
            this.setState({ cadmioLowSeasonGeneratedWater });
          },
          setCobreHighSeasonGeneratedWater: (cobreHighSeasonGeneratedWater) => {
            this.setState({ cobreHighSeasonGeneratedWater });
          },
          setCobreLowSeasonGeneratedWater: (cobreLowSeasonGeneratedWater) => {
            this.setState({ cobreLowSeasonGeneratedWater });
          },
          setCromioHighSeasonGeneratedWater: (
            cromioHighSeasonGeneratedWater
          ) => {
            this.setState({ cromioHighSeasonGeneratedWater });
          },
          setCromioLowSeasonGeneratedWater: (cromioLowSeasonGeneratedWater) => {
            this.setState({ cromioLowSeasonGeneratedWater });
          },
          setManganesHighSeasonGeneratedWater: (
            manganesHighSeasonGeneratedWater
          ) => {
            this.setState({ manganesHighSeasonGeneratedWater });
          },
          setManganesLowSeasonGeneratedWater: (
            manganesLowSeasonGeneratedWater
          ) => {
            this.setState({ manganesLowSeasonGeneratedWater });
          },

          // águas residuais tratadas
          setPhHighSeasonTreatedWater: (phHighSeasonTreatedWater) => {
            this.setState({ phHighSeasonTreatedWater });
          },
          setPhLowSeasonTreatedWater: (phLowSeasonTreatedWater) => {
            this.setState({ phLowSeasonTreatedWater });
          },
          setConductivityHighSeasonTreatedWater: (
            conductivityHighSeasonTreatedWater
          ) => {
            this.setState({ conductivityHighSeasonTreatedWater });
          },
          setConductivityLowSeasonTreatedWater: (
            conductivityLowSeasonTreatedWater
          ) => {
            this.setState({ conductivityLowSeasonTreatedWater });
          },
          setTurbidityHighSeasonTreatedWater: (
            turbidityHighSeasonTreatedWater
          ) => {
            this.setState({ turbidityHighSeasonTreatedWater });
          },
          setTurbidityLowSeasonTreatedWater: (
            turbidityLowSeasonTreatedWater
          ) => {
            this.setState({ turbidityLowSeasonTreatedWater });
          },
          setCQOHighSeasonTreatedWater: (CQOHighSeasonTreatedWater) => {
            this.setState({ CQOHighSeasonTreatedWater });
          },
          setCQOLowSeasonTreatedWater: (CQOLowSeasonTreatedWater) => {
            this.setState({ CQOLowSeasonTreatedWater });
          },
          setCBOHighSeasonTreatedWater: (CBOHighSeasonTreatedWater) => {
            this.setState({ CBOHighSeasonTreatedWater });
          },
          setCBOLowSeasonTreatedWater: (CBOLowSeasonTreatedWater) => {
            this.setState({ CBOLowSeasonTreatedWater });
          },
          setSSTHighSeasonTreatedWater: (SSTHighSeasonTreatedWater) => {
            this.setState({ SSTHighSeasonTreatedWater });
          },
          setSSTLowSeasonTreatedWater: (SSTLowSeasonTreatedWater) => {
            this.setState({ SSTLowSeasonTreatedWater });
          },
          setNTKHighSeasonTreatedWater: (NTKHighSeasonTreatedWater) => {
            this.setState({ NTKHighSeasonTreatedWater });
          },
          setNTKLowSeasonTreatedWater: (NTKLowSeasonTreatedWater) => {
            this.setState({ NTKLowSeasonTreatedWater });
          },
          setFenoisHighSeasonTreatedWater: (fenoisHighSeasonTreatedWater) => {
            this.setState({ fenoisHighSeasonTreatedWater });
          },
          setFenoisLowSeasonTreatedWater: (fenoisLowSeasonTreatedWater) => {
            this.setState({ fenoisLowSeasonTreatedWater });
          },
          setFosforoHighSeasonTreatedWater: (fosforoHighSeasonTreatedWater) => {
            this.setState({ fosforoHighSeasonTreatedWater });
          },
          setFosforoLowSeasonTreatedWater: (fosforoLowSeasonTreatedWater) => {
            this.setState({ fosforoLowSeasonTreatedWater });
          },
          setNitratosHighSeasonTreatedWater: (
            nitratosHighSeasonTreatedWater
          ) => {
            this.setState({ nitratosHighSeasonTreatedWater });
          },
          setNitratosLowSeasonTreatedWater: (nitratosLowSeasonTreatedWater) => {
            this.setState({ nitratosLowSeasonTreatedWater });
          },
          setSulfatosHighSeasonTreatedWater: (
            sulfatosHighSeasonTreatedWater
          ) => {
            this.setState({ sulfatosHighSeasonTreatedWater });
          },
          setSulfatosLowSeasonTreatedWater: (sulfatosLowSeasonTreatedWater) => {
            this.setState({ sulfatosLowSeasonTreatedWater });
          },
          setFerroHighSeasonTreatedWater: (ferroHighSeasonTreatedWater) => {
            this.setState({ ferroHighSeasonTreatedWater });
          },
          setFerroLowSeasonTreatedWater: (ferroLowSeasonTreatedWater) => {
            this.setState({ ferroLowSeasonTreatedWater });
          },
          setAluminumHighSeasonTreatedWater: (
            aluminumHighSeasonTreatedWater
          ) => {
            this.setState({ aluminumHighSeasonTreatedWater });
          },
          setAluminumLowSeasonTreatedWater: (aluminumLowSeasonTreatedWater) => {
            this.setState({ aluminumLowSeasonTreatedWater });
          },
          setCadmioHighSeasonTreatedWater: (cadmioHighSeasonTreatedWater) => {
            this.setState({ cadmioHighSeasonTreatedWater });
          },
          setCadmioLowSeasonTreatedWater: (cadmioLowSeasonTreatedWater) => {
            this.setState({ cadmioLowSeasonTreatedWater });
          },
          setCobreHighSeasonTreatedWater: (cobreHighSeasonTreatedWater) => {
            this.setState({ cobreHighSeasonTreatedWater });
          },
          setCobreLowSeasonTreatedWater: (cobreLowSeasonTreatedWater) => {
            this.setState({ cobreLowSeasonTreatedWater });
          },
          setCromioHighSeasonTreatedWater: (cromioHighSeasonTreatedWater) => {
            this.setState({ cromioHighSeasonTreatedWater });
          },
          setCromioLowSeasonTreatedWater: (cromioLowSeasonTreatedWater) => {
            this.setState({ cromioLowSeasonTreatedWater });
          },
          setManganesHighSeasonTreatedWater: (
            manganesHighSeasonTreatedWater
          ) => {
            this.setState({ manganesHighSeasonTreatedWater });
          },
          setManganesLowSeasonTreatedWater: (manganesLowSeasonTreatedWater) => {
            this.setState({ manganesLowSeasonTreatedWater });
          },

          //IMAGES
          producedAndBoughtGrapesImage: this.state.producedAndBoughtGrapesImage,
          setProducedAndBoughtGrapesImage: (producedAndBoughtGrapesImage) => {
            this.setState({ producedAndBoughtGrapesImage });
          },
          producedAndBoughtMustImage: this.state.producedAndBoughtMustImage,
          setProducedAndBoughtMustImage: (producedAndBoughtMustImage) => {
            this.setState({ producedAndBoughtMustImage });
          },
          mustFromProducedGrapesImage: this.state.mustFromProducedGrapesImage,
          setMustFromProducedGrapesImage: (mustFromProducedGrapesImage) => {
            this.setState({ mustFromProducedGrapesImage });
          },
          totalWineProportionsByTypeImage:
            this.state.totalWineProportionsByTypeImage,
          setTotalWineProportionsByTypeImage: (
            totalWineProportionsByTypeImage
          ) => {
            this.setState({ totalWineProportionsByTypeImage });
          },
          waterConsumptionBySourceImage:
            this.state.waterConsumptionBySourceImage,
          setWaterConsumptionBySourceImage: (waterConsumptionBySourceImage) => {
            this.setState({ waterConsumptionBySourceImage });
          },
          waterConsumptionByWinemakingProcessImage:
            this.state.waterConsumptionByWinemakingProcessImage,
          setWaterConsumptionByWinemakingProcessImage: (
            waterConsumptionByWinemakingProcessImage
          ) => {
            this.setState({ waterConsumptionByWinemakingProcessImage });
          },
          waterConsumptionByBottlingProcessImage:
            this.state.waterConsumptionByBottlingProcessImage,
          setWaterConsumptionByBottlingProcessImage: (
            waterConsumptionByBottlingProcessImage
          ) => {
            this.setState({ waterConsumptionByBottlingProcessImage });
          },
          waterConsumptionByProcessImage:
            this.state.waterConsumptionByProcessImage,
          setWaterConsumptionByProcessImage: (
            waterConsumptionByProcessImage
          ) => {
            this.setState({ waterConsumptionByProcessImage });
          },
          pollutantRemovalPercentageImage:
            this.state.pollutantRemovalPercentageImage,
          setPollutantRemovalPercentageImage: (
            pollutantRemovalPercentageImage
          ) => {
            this.setState({ pollutantRemovalPercentageImage });
          },
          electricityBySourceImage: this.state.electricityBySourceImage,
          setElectricityBySourceImage: (electricityBySourceImage) => {
            this.setState({ electricityBySourceImage });
          },
          electricityProducedBySourceImage:
            this.state.electricityProducedBySourceImage,
          setElectricityProducedBySourceImage: (
            electricityProducedBySourceImage
          ) => {
            this.setState({ electricityProducedBySourceImage });
          },
          electricityConsumedInCompanyInstalationsImage:
            this.state.electricityConsumedInCompanyInstalationsImage,
          setElectricityConsumedInCompanyInstalationsImage: (
            electricityConsumedInCompanyInstalationsImage
          ) => {
            this.setState({ electricityConsumedInCompanyInstalationsImage });
          },
          isCompleted1: this.state.isCompleted1,
          isCompleted2: this.state.isCompleted2,
          isCompleted3: this.state.isCompleted3,
          isCompleted4: this.state.isCompleted4,
          isCompleted5: this.state.isCompleted5,
          isCompleted6: this.state.isCompleted6,
          isCompleted7: this.state.isCompleted7,
          isCompleted8: this.state.isCompleted8,
          isCompleted9: this.state.isCompleted9,
          isCompleted10: this.state.isCompleted10,
          isCompleted11: this.state.isCompleted11,
          isCompleted12: this.state.isCompleted12,
          setIsCompleted1: (isCompleted1) => {
            this.setState({ isCompleted1 });
          },
          setIsCompleted2: (isCompleted2) => {
            this.setState({ isCompleted2 });
          },
          setIsCompleted3: (isCompleted3) => {
            this.setState({ isCompleted3 });
          },
          setIsCompleted4: (isCompleted4) => {
            this.setState({ isCompleted4 });
          },
          setIsCompleted5: (isCompleted5) => {
            this.setState({ isCompleted5 });
          },
          setIsCompleted6: (isCompleted6) => {
            this.setState({ isCompleted6 });
          },
          setIsCompleted7: (isCompleted7) => {
            this.setState({ isCompleted7 });
          },
          setIsCompleted8: (isCompleted8) => {
            this.setState({ isCompleted8 });
          },
          setIsCompleted9: (isCompleted9) => {
            this.setState({ isCompleted9 });
          },
          setIsCompleted10: (isCompleted10) => {
            this.setState({ isCompleted10 });
          },
          setIsCompleted11: (isCompleted11) => {
            this.setState({ isCompleted11 });
          },
          setIsCompleted12: (isCompleted12) => {
            this.setState({ isCompleted12 });
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
