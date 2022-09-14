import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  OverlayTrigger,
  Row,
  Tab,
  Tabs,
  Tooltip,
} from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import InformationsModal from "./InformationsModal";
import GeneralData from "./AccordionItems/GeneralData";
import Materials from "./AccordionItems/Materials";
import Energy from "./AccordionItems/Energy";
import Electricity from "./AccordionItems/Electricity";
import Waste from "./AccordionItems/Waste";
import "../../assets/styles/introducaodedados.css";
import banner from "../../assets/images/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEdit,
  faPlus,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AppNavbar from "../../layout/navbar";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import * as jose from "jose";
import {
  getGeneralDataByYearAndCompany,
  getMaterialsByYearAndCompany,
} from "../../services/generalData";
import Joi from "joi";
import { toast, ToastContainer } from "react-toastify";
import "./style.css";

const IntroducaoDeDados = () => {
  const context = useContext(AppContext);

  const [isModal1Open, setIsModal1Open] = useState(true);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [activeForm, setActiveForm] = useState("generalData");
  const [activeMenu, setActiveMenu] = useState("dataIntroduction");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState({});

  useEffect(() => {
    getYears().then((res) => {
      if (res.data.Data["length"] == 0) {
        let currentYear = new Date().getFullYear();
        let lastYear = new Date().getFullYear() - 1;

        insertYear(
          currentYear.toString(),
          context.loggedUser && context.loggedUser["company"]
        ).then((res) => console.log("Current year inserted with success", res));

        insertYear(
          lastYear.toString(),
          context.loggedUser && context.loggedUser["company"]
        ).then(async (res) => {
          console.log("Last year inserted with success", res);
          getYears().then((res) => {
            setYears(res.data.Data);
            context.setSelectedYear(
              res.data.Data.find(
                (item) => item.year == new Date().getFullYear()
              )
            );

            context.setIsYearLoaded(true);
          });
        });
      } else {
        setYears(res.data.Data);
        context.setSelectedYear(
          res.data.Data.find((item) => item.year == new Date().getFullYear())
        );
        context.setIsYearLoaded(true);
      }
    });
  }, []);

  const getYears = async () => {
    return await axios.get(
      "http://localhost:5000/api/users/getYearsByCompany",
      {
        params: {
          company_name: jose.decodeJwt(Cookie.get("token")).user["company"],
        },
      }
    );
  };

  const insertYear = async (year, company) => {
    return await axios.post(
      "http://localhost:5000/api/users/addYearToCompany",
      { year: year, company_name: company }
    );
  };

  const fetchData = (year, company) => {
    if (context.selectedTopic["id"] == "generalData") {
      getGeneralDataByYearAndCompany(year, company).then((res) => {
        if (res.data.Data != null) {
          context.setFirstGeneralDataInsertion(false);
          context.setTotalGrapesUsed(res.data.Data["total_grapes_used"]);
          context.setTotalMustPurchased(res.data.Data["total_must_purchased"]);
          context.setTotalMustFermented(res.data.Data["total_must_fermented"]);
          context.setBrix(res.data.Data["brix"]);
          context.setTotalWineProduced(res.data.Data["total_wine_produced"]);
          context.setWineProducedByGrapesPercentage(
            res.data.Data["wine_produced_by_grapes_percentage"]
          );
          context.setWineProducedByMustPercentage(
            res.data.Data["wine_produced_by_must_percentage"]
          );

          console.log("General data exists");
        } else {
          context.setFirstGeneralDataInsertion(true);
          context.setTotalGrapesUsed("");
          context.setTotalMustPurchased("");
          context.setTotalMustFermented("");
          context.setBrix("");
          context.setTotalWineProduced("");
          context.setWineProducedByGrapesPercentage("");
          context.setWineProducedByMustPercentage("");
          console.log("General data does not exist");
        }
      });
    } else if (context.selectedTopic["id"] == "materials") {
      getMaterialsByYearAndCompany(year, company).then((res) => {
        if (res.data.Data != null) {
          context.setFirstMaterialsInsertion(false);
          context.setCitricAcid(res.data.Data["citric_acid"]);
          context.setTartricAcid(res.data.Data["tartric_acid"]);
          context.setSorbicAcid(res.data.Data["sorbic_acid"]);
          context.setOtherAcids(res.data.Data["other_acids"]);
          context.setBentonitaCaulim(res.data.Data["bentonita_caulim"]);
          context.setPotassiumBissulfit(res.data.Data["potassium_bissulfit"]);
          context.setCalciumCarbonate(res.data.Data["calcium_carbonate"]);
          context.setWoodChips(res.data.Data["wood_chips"]);
          context.setArabicGoma(res.data.Data["arabic_goma"]);
          context.setMilkProteins(res.data.Data["milk_proteins"]);
          context.setSalmoura(res.data.Data["salmoura"]);
          context.setLiquidSo2(res.data.Data["liquid_so2"]);
          context.setSugar(res.data.Data["sugar"]);
          context.setTaninos(res.data.Data["taninos"]);
          context.setAmoniumSulfate(res.data.Data["amonium_sulfate"]);
          context.setDiatomito(res.data.Data["diatomito"]);
          context.setEtanol(res.data.Data["etanol"]);
          context.setOvalbumina(res.data.Data["ovalbumina"]);
          context.setMicroorganisms(res.data.Data["microorganisms"]);
          context.setGlassBottles(res.data.Data["glass_bottles"]);
          context.setPetBottles(res.data.Data["pet_bottles"]);
          context.setLabels(res.data.Data["labels"]);
          context.setCorks(res.data.Data["corks"]);
          context.setWineMuzzles(res.data.Data["wine_muzzles"]);
          context.setCapsules(res.data.Data["capsules"]);
          context.setAluminumSheets(res.data.Data["aluminum_sheets"]);
          context.setPolyethyleneSheets(res.data.Data["plyethylene_sheets"]);
          context.setCrownCaps(res.data.Data["crown_caps"]);
          context.setBidule(res.data.Data["bidule"]);
          context.setPvc(res.data.Data["pvc"]);
          context.setLdpeFilmWraps(res.data.Data["ldpe_film_wraps"]);
          context.setLdpePalletWraps(res.data.Data["ldpe_pallet_wraps"]);
          context.setBoxes(res.data.Data["boxes"]);
          context.setNitricAcid(res.data.Data["nitric_acid"]);
          context.setPhosphoricAcid(res.data.Data["phosphoric_acid"]);
          context.setSodaLiquid(res.data.Data["soda_liquid"]);
          context.setSolidSodiumHydroxide(
            res.data.Data["solid_sodium_hydroxide"]
          );
          context.setSodiumHypochlorite(res.data.Data["sodium_hypochlorite"]);
          context.setSodiumSulfate(res.data.Data["sodium_sulfate"]);

          console.log("Materials exists");
        } else {
          context.setFirstMaterialsInsertion(true);
          context.setCitricAcid("");
          context.setTartricAcid("");
          context.setSorbicAcid("");
          context.setOtherAcids("");
          context.setBentonitaCaulim("");
          context.setPotassiumBissulfit("");
          context.setCalciumCarbonate("");
          context.setWoodChips("");
          context.setArabicGoma("");
          context.setMilkProteins("");
          context.setSalmoura("");
          context.setLiquidSo2("");
          context.setSugar("");
          context.setTaninos("");
          context.setAmoniumSulfate("");
          context.setDiatomito("");
          context.setEtanol("");
          context.setOvalbumina("");
          context.setMicroorganisms("");
          context.setGlassBottles("");
          context.setPetBottles("");
          context.setLabels("");
          context.setCorks("");
          context.setWineMuzzles("");
          context.setCapsules("");
          context.setAluminumSheets("");
          context.setPolyethyleneSheets("");
          context.setCrownCaps("");
          context.setBidule("");
          context.setPvc("");
          context.setLdpeFilmWraps("");
          context.setLdpePalletWraps("");
          context.setBoxes("");
          context.setNitricAcid("");
          context.setPhosphoricAcid("");
          context.setSodaLiquid("");
          context.setSolidSodiumHydroxide("");
          context.setSodiumHypochlorite("");
          context.setSodiumSulfate("");
          console.log("Materials does not exist");
        }
      });
    }
  };

  const saveChanges = () => {
    console.log("SAVE CHANGES");
    if (context.selectedTopic["id"] == "generalData") {
      handleGeneralDataSaveChanges();
    } else if (context.selectedTopic["id"] == "materials") {
      handleMaterialsSaveChanges();
    } else if (context.selectedTopic["id"] == "energy") {
      handleEnergySaveChanges();
    }
    console.log(context.selectedTopic);
  };

  const handleGeneralDataSaveChanges = async () => {
    const schema = Joi.object({
      totalGrapesUsed: Joi.number().precision(1).optional().allow(null, ""),
      totalMustPurchased: Joi.number().precision(1).optional().allow(null, ""),
      totalMustFermented: Joi.number().precision(1).optional().allow(null, ""),
      brix: Joi.number().precision(1).optional().allow(null, ""),
      totalWineProduced: Joi.number().precision(1).optional().allow(null, ""),
      wineProducedByGrapesPercentage: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      wineProducedByMustPercentage: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
    });

    console.log("CONTEXT: ", context.firstGeneralDataInsertion);
    const validation = schema.validate({
      totalGrapesUsed: context.totalGrapesUsed,
      totalMustPurchased: context.totalMustPurchased,
      totalMustFermented: context.totalMustFermented,
      brix: context.brix,
      totalWineProduced: context.totalWineProduced,
      wineProducedByGrapesPercentage: context.wineProducedByGrapesPercentage,
      wineProducedByMustPercentage: context.wineProducedByMustPercentage,
    });

    const generalData = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      total_grapes_used: validation.value["totalGrapesUsed"].toString(),
      total_must_purchased:
        validation.value["totalMustPurchased"] !== ""
          ? validation.value["totalMustPurchased"]
          : "0",
      total_must_fermented:
        validation.value["totalMustFermented"] !== ""
          ? validation.value["totalMustFermented"]
          : "0",
      brix: validation.value["brix"],
      total_wine_produced: validation.value["totalWineProduced"],
      wine_produced_by_grapes_percentage:
        validation.value["wineProducedByGrapesPercentage"],
      wine_produced_by_must_percentage:
        validation.value["wineProducedByMustPercentage"],
      company_name: context.loggedUser && context.loggedUser["company"],
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstGeneralDataInsertion) {
      console.log("The year already has data. Let's update!");
      updateGeneralData(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        JSON.stringify({
          total_grapes_used: validation.value["totalGrapesUsed"].toString(),
          total_must_purchased:
            validation.value["totalMustPurchased"] != null &&
            validation.value["totalMustPurchased"] !== ""
              ? validation.value["totalMustPurchased"].toString()
              : "0",
          total_must_fermented:
            validation.value["totalMustFermented"] != null &&
            validation.value["totalMustFermented"] !== ""
              ? validation.value["totalMustFermented"].toString()
              : "0",
          brix:
            validation.value["brix"] != null &&
            validation.value["brix"].toString(),
          total_wine_produced: validation.value["totalWineProduced"],
          wine_produced_by_grapes_percentage:
            validation.value["wineProducedByGrapesPercentage"],
          wine_produced_by_must_percentage:
            validation.value["wineProducedByMustPercentage"],
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        console.log("General data updated!", res);
        toast.success("Alterações guardadas!");
      });
    } else {
      console.log(
        "The year does not have data. Let's insert for the first time!"
      );

      createGeneralData(generalData, customConfig).then((res) => {
        context.setFirstGeneralDataInsertion(false);
        console.log("General Data created!", res);
        toast.success("Alterações guardadas!");
      });
    }
  };

  const updateEnergy = async (year, company, body, config) => {
    return await axios.put(
      `http://localhost:5000/api/users/updateEnergy/${year}/${company}`,
      body,
      config
    );
  };

  const updateGeneralData = async (year, company, body, config) => {
    return await axios.put(
      `http://localhost:5000/api/users/updateGeneralData/${year}/${company}`,
      body,
      config
    );
  };
  const createGeneralData = async (body, config) => {
    return await axios.post(
      "http://localhost:5000/api/users/createGeneralData",
      body,
      config
    );
  };

  const createEnergy = async (body, config) => {
    return await axios.post(
      "http://localhost:5000/api/users/createEnergy",
      body,
      config
    );
  };

  const handleMaterialsSaveChanges = async () => {
    console.log("CONTEXT: ", context.firstMaterialsInsertion);
    const schema = Joi.object({
      citricAcid: Joi.number().precision(1).optional().allow(null, ""),
      tartricAcid: Joi.number().precision(1).optional().allow(null, ""),
      sorbicAcid: Joi.number().precision(1).optional().allow(null, ""),
      otherAcids: Joi.number().precision(1).optional().allow(null, ""),
      bentonitaCaulim: Joi.number().precision(1).optional().allow(null, ""),
      potassiumBissulfit: Joi.number().precision(1).optional().allow(null, ""),
      calciumCarbonate: Joi.number().precision(1).optional().allow(null, ""),
      woodChips: Joi.number().precision(1).optional().allow(null, ""),
      arabicGoma: Joi.number().precision(1).optional().allow(null, ""),
      milkProteins: Joi.number().precision(1).optional().allow(null, ""),
      salmoura: Joi.number().precision(1).optional().allow(null, ""),
      liquidSo2: Joi.number().precision(1).optional().allow(null, ""),
      sugar: Joi.number().precision(1).optional().allow(null, ""),
      taninos: Joi.number().precision(1).optional().allow(null, ""),
      amoniumSulfate: Joi.number().precision(1).optional().allow(null, ""),
      diatomito: Joi.number().precision(1).optional().allow(null, ""),
      etanol: Joi.number().precision(1).optional().allow(null, ""),
      ovalbumina: Joi.number().precision(1).optional().allow(null, ""),
      glassBottles: Joi.number().precision(1).optional().allow(null, ""),
      petBottles: Joi.number().precision(1).optional().allow(null, ""),
      labels: Joi.number().precision(1).optional().allow(null, ""),
      corks: Joi.number().precision(1).optional().allow(null, ""),
      wineMuzzles: Joi.number().precision(1).optional().allow(null, ""),
      capsules: Joi.number().precision(1).optional().allow(null, ""),
      aluminumSheets: Joi.number().precision(1).optional().allow(null, ""),
      polyethyleneSheets: Joi.number().precision(1).optional().allow(null, ""),
      crownCaps: Joi.number().precision(1).optional().allow(null, ""),
      bidule: Joi.number().precision(1).optional().allow(null, ""),
      pvc: Joi.number().precision(1).optional().allow(null, ""),
      ldpeFilmWraps: Joi.number().precision(1).optional().allow(null, ""),
      ldpePalletWraps: Joi.number().precision(1).optional().allow(null, ""),
      boxes: Joi.number().precision(1).optional().allow(null, ""),
      nitricAcid: Joi.number().precision(1).optional().allow(null, ""),
      phosphoricAcid: Joi.number().precision(1).optional().allow(null, ""),
      sodaLiquid: Joi.number().precision(1).optional().allow(null, ""),
      solidSodiumHydroxide: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      sodiumHypochlorite: Joi.number().precision(1).optional().allow(null, ""),
      sodiumSulfate: Joi.number().precision(1).optional().allow(null, ""),
    });

    const validation = schema.validate({
      citricAcid: context.citricAcid,
      tartricAcid: context.tartricAcid,
      sorbicAcid: context.sorbicAcid,
      otherAcids: context.otherAcids,
      bentonitaCaulim: context.bentonitaCaulim,
      potassiumBissulfit: context.potassiumBissulfit,
      calciumCarbonate: context.calciumCarbonate,
      woodChips: context.woodChips,
      arabicGoma: context.arabicGoma,
      milkProteins: context.milkProteins,
      salmoura: context.salmoura,
      liquidSo2: context.liquidSo2,
      sugar: context.sugar,
      taninos: context.taninos,
      amoniumSulfate: context.amoniumSulfate,
      diatomito: context.diatomito,
      etanol: context.etanol,
      ovalbumina: context.ovalbumina,
      microorganisms: context.microorganisms,
      glassBottles: context.glassBottles,
      petBottles: context.petBottles,
      labels: context.labels,
      corks: context.corks,
      wineMuzzles: context.wineMuzzles,
      capsules: context.capsules,
      aluminumSheets: context.aluminumSheets,
      polyethyleneSheets: context.polyethyleneSheets,
      crownCaps: context.crownCaps,
      bidule: context.bidule,
      pvc: context.pvc,
      ldpeFilmWraps: context.ldpeFilmWraps,
      ldpePalletWraps: context.ldpePalletWraps,
      boxes: context.boxes,
      nitricAcid: context.nitricAcid,
      phosphoricAcid: context.phosphoricAcid,
      sodaLiquid: context.sodaLiquid,
      solidSodiumHydroxide: context.solidSodiumHydroxide,
      sodiumHypochlorite: context.sodiumHypochlorite,
      sodiumSulfate: context.sodiumSulfate,
    });

    const materials = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      citric_acid: validation.value["citricAcid"].toString(),
      tartric_acid: validation.value["tartricAcid"].toString(),
      sorbic_acid: validation.value["sorbicAcid"].toString(),
      other_acids: validation.value["otherAcids"].toString(),
      bentonita_caulim: validation.value["bentonitaCaulim"].toString(),
      potassium_bissulfit: validation.value["potassiumBissulfit"].toString(),
      calcium_carbonate: validation.value["calciumCarbonate"].toString(),
      wood_chips: validation.value["woodChips"].toString(),
      arabic_goma: validation.value["arabicGoma"].toString(),
      milk_proteins: validation.value["milkProteins"].toString(),
      salmoura: validation.value["salmoura"].toString(),
      liquid_so2: validation.value["liquidSo2"].toString(),
      sugar: validation.value["sugar"].toString(),
      taninos: validation.value["taninos"].toString(),
      amonium_sulfate: validation.value["amoniumSulfate"].toString(),
      diatomito: validation.value["diatomito"].toString(),
      etanol: validation.value["etanol"].toString(),
      ovalbumina: validation.value["ovalbumina"].toString(),
      microorganisms: validation.value["microorganisms"].toString(),
      glass_bottles: validation.value["glassBottles"].toString(),
      pet_bottles: validation.value["petBottles"].toString(),
      labels: validation.value["labels"].toString(),
      corks: validation.value["corks"].toString(),
      wine_muzzles: validation.value["wineMuzzles"].toString(),
      capsules: validation.value["capsules"].toString(),
      aluminum_sheets: validation.value["aluminumSheets"].toString(),
      polyethylene_sheets: validation.value["polyethyleneSheets"].toString(),
      crown_caps: validation.value["crownCaps"].toString(),
      bidule: validation.value["bidule"].toString(),
      pvc: validation.value["pvc"].toString(),
      ldpe_film_wraps: validation.value["ldpeFilmWraps"].toString(),
      ldpe_pallet_wraps: validation.value["ldpePalletWraps"].toString(),
      boxes: validation.value["boxes"].toString(),
      nitric_acid: validation.value["nitricAcid"].toString(),
      phosphoric_acid: validation.value["phosphoricAcid"].toString(),
      soda_liquid: validation.value["sodaLiquid"].toString(),
      solid_sodium_hydroxide:
        validation.value["solidSodiumHydroxide"].toString(),
      sodium_hypochlorite: validation.value["sodiumHypochlorite"].toString(),
      sodium_sulfate: validation.value["sodiumSulfate"].toString(),
      company_name:
        context.loggedUser && context.loggedUser["company"].toString(),
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstMaterialsInsertion) {
      console.log("The year already has data. Let's update!");
      updateMaterials(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        JSON.stringify({
          citric_acid: validation.value["citricAcid"].toString(),
          tartric_acid: validation.value["tartricAcid"].toString(),
          sorbic_acid: validation.value["sorbicAcid"].toString(),
          other_acids: validation.value["otherAcids"].toString(),
          bentonita_caulim: validation.value["bentonitaCaulim"].toString(),
          potassium_bissulfit:
            validation.value["potassiumBissulfit"].toString(),
          calcium_carbonate: validation.value["calciumCarbonate"].toString(),
          wood_chips: validation.value["woodChips"].toString(),
          arabic_goma: validation.value["arabicGoma"].toString(),
          milk_proteins: validation.value["milkProteins"].toString(),
          salmoura: validation.value["salmoura"].toString(),
          liquid_so2: validation.value["liquidSo2"].toString(),
          sugar: validation.value["sugar"].toString(),
          taninos: validation.value["taninos"].toString(),
          amonium_sulfate: validation.value["amoniumSulfate"].toString(),
          diatomito: validation.value["diatomito"].toString(),
          etanol: validation.value["etanol"].toString(),
          ovalbumina: validation.value["ovalbumina"].toString(),
          microorganisms: validation.value["microorganisms"].toString(),
          glass_bottles: validation.value["glassBottles"].toString(),
          pet_bottles: validation.value["petBottles"].toString(),
          labels: validation.value["labels"].toString(),
          corks: validation.value["corks"].toString(),
          wine_muzzles: validation.value["wineMuzzles"].toString(),
          capsules: validation.value["capsules"].toString(),
          aluminum_sheets: validation.value["aluminumSheets"].toString(),
          polyethylene_sheets:
            validation.value["polyethyleneSheets"].toString(),
          crown_caps: validation.value["crownCaps"].toString(),
          bidule: validation.value["bidule"].toString(),
          pvc: validation.value["pvc"].toString(),
          ldpe_film_wraps: validation.value["ldpeFilmWraps"].toString(),
          ldpe_pallet_wraps: validation.value["ldpePalletWraps"].toString(),
          boxes: validation.value["boxes"].toString(),
          nitric_acid: validation.value["nitricAcid"].toString(),
          phosphoric_acid: validation.value["phosphoricAcid"].toString(),
          soda_liquid: validation.value["sodaLiquid"].toString(),
          solid_sodium_hydroxide:
            validation.value["solidSodiumHydroxide"].toString(),
          sodium_hypochlorite:
            validation.value["sodiumHypochlorite"].toString(),
          sodium_sulfate: validation.value["sodiumSulfate"].toString(),
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        console.log("General data updated!", res);
        toast.success("Alterações guardadas!");
      });
    } else {
      console.log(
        "The year does not have data. Let's insert for the first time!"
      );

      createMaterials(materials, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        context.setFirstMaterialsInsertion(false);
        console.log("Materials created!", res);
        toast.success("Alterações guardadas!");
      });
    }
  };

  const createMaterials = async (body, config) => {
    return await axios.post(
      "http://localhost:5000/api/users/createMaterials",
      body,
      config
    );
  };

  const updateMaterials = async (year, company, body, config) => {
    return await axios.put(
      `http://localhost:5000/api/users/updateMaterials/${year}/${company}`,
      body,
      config
    );
  };

  const handleEnergySaveChanges = async () => {
    const schema = Joi.object({
      consumedElectricityBought: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      naturalGasBought: Joi.number().precision(1).optional().allow(null, ""),
      fossilCogenerationBought: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      windEnergyBought: Joi.number().precision(1).optional().allow(null, ""),
      waterEnergyBought: Joi.number().precision(1).optional().allow(null, ""),
      photovoltaicEnergyBought: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      bioenergyBought: Joi.number().precision(2).optional().allow(null, ""),
      consumedElectricityProduced: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      photovoltaicEnergyProduced: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      bioenergyProduced: Joi.number().precision(2).optional().allow(null, ""),
      surplusEntered: Joi.number().precision(2).optional().allow(null, ""),
      photovoltaicEnergyEntered: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      simpleDiesel: Joi.number().precision(2).optional().allow(null, ""),
      additiveDiesel: Joi.number().precision(2).optional().allow(null, ""),
      plainGasoline: Joi.number().precision(2).optional().allow(null, ""),
      additiveGasoline: Joi.number().precision(2).optional().allow(null, ""),
      biofuel: Joi.number().precision(2).optional().allow(null, ""),
      heatingOil: Joi.number().precision(2).optional().allow(null, ""),
      butane: Joi.number().precision(2).optional().allow(null, ""),
      propane: Joi.number().precision(2).optional().allow(null, ""),
      gpl: Joi.number().precision(2).optional().allow(null, ""),
      naturalGas: Joi.number().precision(2).optional().allow(null, ""),
      cng: Joi.number().precision(2).optional().allow(null, ""),
      biogas: Joi.number().precision(2).optional().allow(null, ""),
      wood: Joi.number().precision(2).optional().allow(null, ""),
      pellets: Joi.number().precision(2).optional().allow(null, ""),
    });

    const validation = schema.validate({
      consumedElectricityBought: context.consumedElectricityBought,
      naturalGasBought: context.naturalGasBought,
      pumping: context.pumping,
      fossilCogenerationBought: context.fossilCogenerationBought,
      windEnergyBought: context.windEnergyBought,
      waterEnergyBought: context.waterEnergyBought,
      photovoltaicEnergyBought: context.photovoltaicEnergyBought,
      bioenergyBought: context.bioenergyBought,
      consumedElectricityProduced: context.consumedElectricityProduced,
      photovoltaicEnergyProduced: context.photovoltaicEnergyProduced,
      bioenergyProduced: context.bioenergyProduced,
      surplusEntered: context.surplusEntered,
      photovoltaicEnergyEntered: context.photovoltaicEnergyEntered,
      simpleDiesel: context.simpleDiesel,
      additiveDiesel: context.additiveDiesel,
      plainGasoline: context.plainGasoline,
      additiveGasoline: context.additiveGasoline,
      biofuel: context.biofuel,
      heatingOil: context.heatingOil,
      butane: context.butane,
      propane: context.propane,
      gpl: context.gpl,
      naturalGas: context.naturalGas,
      cng: context.cng,
      biogas: context.biogas,
      wood: context.wood,
      pellets: context.pellets,
    });

    const generalData = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"].toString(),
      consumed_electricity_bought:
        validation.value["consumedElectricityBought"].toString(),
      photovoltaic_energy_bought:
        validation.value["consumedElectricityBought"].toString(),
      natural_gas_bought: validation.value["naturalGasBought"].toString(),
      pumping: validation.value["pumping"].toString(),
      fossil_cogeneration_bought:
        validation.value["fossilCogenerationBought"].toString(),
      wind_energy_bought: validation.value["windEnergyBought"].toString(),
      water_energy_bought: validation.value["waterEnergyBought"].toString(),
      photovoltaic_energy_bought:
        validation.value["photovoltaicEnergyBought"].toString(),
      bioenergy_bought: validation.value["bioenergyBought"].toString(),
      consumed_electricity_produced:
        validation.value["consumedElectricityProduced"].toString(),
      photovoltaic_energy_produced:
        validation.value["photovoltaicEnergyProduced"].toString(),
      bioenergy_produced: validation.value["bioenergyProduced"].toString(),
      surplus_entered: validation.value["surplusEntered"].toString(),
      photovoltaic_energy_entered:
        validation.value["photovoltaicEnergyEntered"].toString(),
      simple_diesel: validation.value["simpleDiesel"].toString(),
      additive_diesel: validation.value["additiveDiesel"].toString(),
      plain_gasoline: validation.value["plainGasoline"].toString(),
      additive_gasoline: validation.value["additiveGasoline"].toString(),
      biofuel: validation.value["biofuel"].toString(),
      heating_oil: validation.value["heatingOil"].toString(),
      butane: validation.value["butane"].toString(),
      propane: validation.value["propane"].toString(),
      gpl: validation.value["gpl"].toString(),
      natural_gas: validation.value["naturalGas"].toString(),
      cng: validation.value["cng"].toString(),
      biogas: validation.value["cng"].toString(),
      wood: validation.value["cng"].toString(),
      pellets: validation.value["cng"].toString(),
      company_name: context.loggedUser && context.loggedUser["company"],
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstEnergyInsertion) {
      console.log("The year already has data. Let's update!");
      updateEnergy(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        JSON.stringify({
          consumed_electricity_bought:
            validation.value["consumedElectricityBought"].toString(),
          natural_gas_bought: validation.value["naturalGasBought"].toString(),
          pumping: validation.value["pumping"].toString(),
          fossil_cogeneration_bought:
            validation.value["fossilCogenerationBought"].toString(),
          wind_energy_bought: validation.value["windEnergyBought"].toString(),
          water_energy_bought: validation.value["waterEnergyBought"].toString(),
          photovoltaic_energy_bought:
            validation.value["photovoltaicEnergyBought"].toString(),
          bioenergy_bought: validation.value["bioenergyBought"].toString(),
          consumed_electricity_produced:
            validation.value["consumedElectricityProduced"].toString(),
          photovoltaic_energy_produced:
            validation.value["photovoltaicEnergyProduced"].toString(),
          bioenergy_produced: validation.value["bioenergyProduced"].toString(),
          surplus_entered: validation.value["surplusEntered"].toString(),
          photovoltaic_energy_entered:
            validation.value["photovoltaicEnergyEntered"].toString(),
          simple_diesel: validation.value["simpleDiesel"].toString(),
          additive_diesel: validation.value["additiveDiesel"].toString(),
          plain_gasoline: validation.value["plainGasoline"].toString(),
          additive_gasoline: validation.value["additiveGasoline"].toString(),
          biofuel: validation.value["biofuel"].toString(),
          heating_oil: validation.value["heatingOil"].toString(),
          butane: validation.value["butane"].toString(),
          propane: validation.value["propane"].toString(),
          gpl: validation.value["gpl"].toString(),
          natural_gas: validation.value["naturalGas"].toString(),
          cng: validation.value["cng"].toString(),
          biogas: validation.value["biogas"].toString(),
          wood: validation.value["wood"].toString(),
          pellets: validation.value["pellets"].toString(),
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        console.log("Energy updated!", res);
        toast.success("Alterações guardadas!");
      });
    } else {
      console.log(
        "The year does not have data. Let's insert for the first time!"
      );

      createEnergy(generalData, customConfig).then((res) => {
        context.setFirstEnergyInsertion(false);
        console.log("Energy created!", res);
        toast.success("Alterações guardadas!");
      });
    }
  };

  return (
    <Fragment>
      <AppNavbar />
      <Row id="header-container" className="mx-0 py-0 px-md-3 px-lg-4">
        <Col className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon id="edit-icon" icon={faEdit} />
            <span id="header-title">Introdução de dados</span>
          </div>
          <div className="d-flex flex-column flex-lg-row">
            <Dropdown className="mb-1">
              <Dropdown.Toggle id="header-btn">
                {context.selectedYear && context.selectedYear["year"]}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                {years &&
                  years.map((item) => (
                    <Dropdown.Item
                      key={item.year}
                      style={{
                        backgroundColor:
                          item.year == context.selectedYear["year"]
                            ? "rgb(80, 116, 77)"
                            : "",
                      }}
                      active={item.year == context.selectedYear["year"]}
                      onClick={() => {
                        context.setSelectedYear(item);
                        fetchData(
                          item.year,
                          context.loggedUser && context.loggedUser["company"]
                        );
                      }}
                    >
                      {item.year}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-1">
              <Dropdown.Toggle id="header-btn">
                {context.selectedTopic["name"]}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                {context.topics &&
                  context.topics.map((item) => (
                    <Dropdown.Item
                      key={item.name}
                      style={{
                        backgroundColor:
                          item.name == context.selectedTopic["name"]
                            ? "rgb(80, 116, 77)"
                            : "",
                      }}
                      active={item.name == context.selectedTopic["name"]}
                      onClick={() => {
                        context.setSelectedTopic(item);
                      }}
                    >
                      {item.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex align-items-center">
              <Link to="/reports" style={{ marginRight: "10px" }}>
                <Button
                  id="header-btn"
                  disabled={!context.isReportGenerationActive}
                >
                  Gerar relatório
                </Button>
              </Link>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip" className="d-flex flex-column">
                    <div className="mb-2">
                      <span>Os seguintes campos são obrigatórios</span>
                    </div>

                    <span>Uvas: total utilizado no ano</span>
                  </Tooltip>
                }
              >
                <div>
                  <FontAwesomeIcon
                    id="warning-icon"
                    icon={faWarning}
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </OverlayTrigger>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <Button id="header-btn" onClick={saveChanges}>
              Guardar alterações
            </Button>
          </div>
        </Col>
      </Row>

      <Row
        className="mx-0 py-0 px-md-3 px-lg-4"
        style={{
          backgroundColor: "white",
          height: "calc(100vh - 190px)",
        }}
      >
        {context.isYearLoaded && (
          <Row className="m-0 p-0">
            <Col>
              {context.selectedTopic["id"] == "generalData" && (
                <Fragment>
                  <GeneralData />
                </Fragment>
              )}
              {context.selectedTopic["id"] == "materials" && (
                <Fragment>
                  <Materials />
                </Fragment>
              )}
              {context.selectedTopic["id"] == "energy" && (
                <Fragment>
                  <Energy />
                </Fragment>
              )}

              {context.selectedTopic["id"] == "waste" && (
                <Fragment>
                  <Waste />
                </Fragment>
              )}
            </Col>
          </Row>
        )}
      </Row>
      <ToastContainer />
    </Fragment>
  );
};

export default IntroducaoDeDados;

/*

<Row>
              <Col xs={4} sm={3} md={2} lg={1}>
                <Dropdown style={{ width: "100%", maxWidth: "200%" }}>
                  <Dropdown.Toggle
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      color: "white",
                      backgroundColor: "rgb(80, 116, 77)",
                      border: "2px solid rgb(80, 116, 77)",
                    }}
                    variant="primary"
                    id="dropdown-basic"
                  >
                    {selectedYear.number}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    {years.map((year) => (
                      <Dropdown.Item
                        active={year.number == selectedYear.number}
                        onClick={() => {
                          this.setState({ selectedYear: year });
                        }}
                      >
                        {year.number}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={3}>
                <ListGroup>
                  <ListGroupItem
                    id="generalData"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "generalData"}
                    style={{ cursor: "pointer" }}
                  >
                    Dados gerais
                  </ListGroupItem>
                  <ListGroupItem
                    id="materials"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "materials"}
                    style={{ cursor: "pointer" }}
                  >
                    Materiais
                  </ListGroupItem>
                  <ListGroupItem
                    id="energy"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "energy"}
                    style={{ cursor: "pointer" }}
                  >
                    Energia
                  </ListGroupItem>
                  <ListGroupItem
                    id="electricity"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "electricity"}
                    style={{ cursor: "pointer" }}
                  >
                    Consumo de eletricidade
                  </ListGroupItem>
                  <ListGroupItem
                    id="waste"
                    onClick={(e) =>
                      this.setState({ activeForm: e.currentTarget.id })
                    }
                    active={this.state.activeForm === "waste"}
                    style={{ cursor: "pointer" }}
                  >
                    Resíduos
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={8} lg={9}>
                {this.state.activeForm === "generalData" && <GeneralData />}
                {this.state.activeForm === "materials" && <Materials />}
                {this.state.activeForm === "energy" && <Energy />}
                {this.state.activeForm === "electricity" && <Electricity />}
                {this.state.activeForm === "waste" && <Waste />}
              </Col>
            </Row>

            */
