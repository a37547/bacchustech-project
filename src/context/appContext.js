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
    glassBottles: "",
    petBottles: "",
    labels: "",
    corks: "",
    wineMuzzles: "",
    capsules: "",
    aluminumSheets: "",
    polyethyleneSheets: "",
    crownCaps: "",
    bidule: "",
    pvc: "",
    ldpeFilmWraps: "",
    ldpePalletWraps: "",
    boxes: "",
    nitricAcid: "",
    phosphoricAcid: "",
    sodaLiquid: "",
    solidSodiumHydroxide: "",
    sodiumHypochlorite: "",
    sodiumSulfate: "",
    firstMaterialsInsertion: false,
    topics: [],
    selectedTopic: {},
    firstEnergyInsertion: false,
    consumedElectricityBought: "",
    naturalGasBought: "",
    pumping: "",
    fossilCogenerationBought: "",
    windEnergyBought: "",
    waterEnergyBought: "",
    photovoltaicEnergyBought: "",
    bioenergyBought: "",
    consumedElectricityProduced: "",
    photovoltaicEnergyProduced: "",
    bioenergyProduced: "",
    surplusEntered: "",
    photovoltaicEnergyEntered: "",
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
    //
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
          glassBottles: this.state.glassBottles,
          petBottles: this.state.petBottles,
          labels: this.state.labels,
          corks: this.state.corks,
          wineMuzzles: this.state.wineMuzzles,
          capsules: this.state.capsules,
          aluminumSheets: this.state.aluminumSheets,
          polyethyleneSheets: this.state.polyethyleneSheets,
          crownCaps: this.state.crownCaps,
          bidule: this.state.bidule,
          pvc: this.state.pvc,
          ldpeFilmWraps: this.state.ldpeFilmWraps,
          ldpePalletWraps: this.state.ldpePalletWraps,
          boxes: this.state.boxes,
          nitricAcid: this.state.nitricAcid,
          phosphoricAcid: this.state.phosphoricAcid,
          sodaLiquid: this.state.sodaLiquid,
          solidSodiumHydroxide: this.state.solidSodiumHydroxide,
          sodiumHypochlorite: this.state.microorganisms,
          sodiumSulfate: this.state.sodiumSulfate,
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
          setBidule: (bidule) => {
            this.setState({ bidule });
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
          consumedElectricityBought: this.state.consumedElectricityBought,
          setConsumedElectricityBought: (consumedElectricityBought) => {
            this.setState({ consumedElectricityBought });
          },
          naturalGasBought: this.state.naturalGasBought,
          setNaturalGasBought: (naturalGasBought) => {
            this.setState({ naturalGasBought });
          },
          pumping: this.state.pumping,
          setPumping: (pumping) => {
            this.setState({ pumping });
          },
          fossilCogenerationBought: this.state.fossilCogenerationBought,
          setFossilCogenerationBought: (fossilCogenerationBought) => {
            this.setState({ fossilCogenerationBought });
          },
          windEnergyBought: this.state.windEnergyBought,
          setWindEnergyBought: (windEnergyBought) => {
            this.setState({ windEnergyBought });
          },
          waterEnergyBought: this.state.waterEnergyBought,
          setWaterEnergyBought: (waterEnergyBought) => {
            this.setState({ waterEnergyBought });
          },
          photovoltaicEnergyBought: this.state.photovoltaicEnergyBought,
          setPhotovoltaicEnergyBought: (photovoltaicEnergyBought) => {
            this.setState({ photovoltaicEnergyBought });
          },
          bioenergyBought: this.state.bioenergyBought,
          setBioenergyBought: (bioenergyBought) => {
            this.setState({ bioenergyBought });
          },
          consumedElectricityProduced: this.state.consumedElectricityProduced,
          setConsumedElectricityProduced: (consumedElectricityProduced) => {
            this.setState({ consumedElectricityProduced });
          },
          photovoltaicEnergyProduced: this.state.photovoltaicEnergyProduced,
          setPhotovoltaicEnergyProduced: (photovoltaicEnergyProduced) => {
            this.setState({ photovoltaicEnergyProduced });
          },
          bioenergyProduced: this.state.bioenergyProduced,
          setBioenergyProduced: (bioenergyProduced) => {
            this.setState({ bioenergyProduced });
          },
          surplusEntered: this.state.surplusEntered,
          setSurplusEntered: (surplusEntered) => {
            this.setState({ surplusEntered });
          },
          photovoltaicEnergyEntered: this.state.photovoltaicEnergyEntered,
          setPhotovoltaicEnergyEntered: (photovoltaicEnergyEntered) => {
            this.setState({ photovoltaicEnergyEntered });
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
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
