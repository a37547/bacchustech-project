import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import GeneralData from "./AccordionItems/GeneralData";
import Materials from "./AccordionItems/Materials";
import Energy from "./AccordionItems/Energy";
import Waste from "./AccordionItems/Waste";
import "../../assets/styles/introducaodedados.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faWarning } from "@fortawesome/free-solid-svg-icons";
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
import Water from "./AccordionItems/Water";
import {
  createWater,
  getWaterByYearAndCompany,
  updateWater,
} from "../../services/water";
import {
  createEnergy,
  getEnergyByYearAndCompany,
  updateEnergy,
} from "../../services/energy";

const IntroducaoDeDados = () => {
  const context = useContext(AppContext);

  const [years, setYears] = useState([]);

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
        if (
          res.data.Data.find((item) => item.year == new Date().getFullYear()) ==
          undefined
        ) {
          let currentYear = new Date().getFullYear();

          insertYear(
            currentYear.toString(),
            context.loggedUser && context.loggedUser["company"]
          ).then((res) =>
            console.log("Current year inserted with success", res)
          );
        }
        setYears(res.data.Data);
        context.setSelectedYear(
          res.data.Data.find((item) => item.year == new Date().getFullYear())
        );
        context.setIsYearLoaded(true);
      }
    });

    fetchData(
      new Date().getFullYear(),
      context.loggedUser && context.loggedUser["company"]
    );
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
          context.setTotalGrapesProduced(
            res.data.Data["total_grapes_produced"]
          );
          context.setTotalGrapesBought(res.data.Data["total_grapes_bought"]);
          context.setTotalMustPurchased(res.data.Data["total_must_purchased"]);
          context.setTotalMustFermented(res.data.Data["total_must_fermented"]);
          context.setBrix(res.data.Data["brix"]);
          context.setTotalMustProducedFromGrapes(
            res.data.Data["total_must_produced_from_grapes"]
          );
          context.setTotalWineProduced(res.data.Data["total_wine_produced"]);
          context.setGlassBottles35(res.data.Data["glass_bottles_35"]);
          context.setGlassBottles75(res.data.Data["glass_bottles_75"]);
          context.setGlassBottles100(res.data.Data["glass_bottles_100"]);
          context.setPetBottles(res.data.Data["pet_bottles"]);
          context.setBagInBox3(res.data.Data["bag_in_box_3"]);
          context.setBagInBox5(res.data.Data["bag_in_box_5"]);
        } else {
          context.setFirstGeneralDataInsertion(true);
          context.setTotalGrapesProduced("");
          context.setTotalGrapesBought("");
          context.setTotalMustPurchased("");
          context.setTotalMustFermented("");
          context.setBrix("");
          context.setTotalMustProducedFromGrapes("");
          context.setTotalWineProduced("");
          context.setGlassBottles35("");
          context.setGlassBottles75("");
          context.setGlassBottles100("");
          context.setPetBottles("");
          context.setBagInBox3("");
          context.setBagInBox5("");
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
          context.setGlassBottlesPercentage(
            res.data.Data["glass_bottles_percentage"]
          );
          context.setPetBottles(res.data.Data["pet_bottles"]);
          context.setPetBottlesPercentage(
            res.data.Data["pet_bottles_percentage"]
          );
          context.setLabels(res.data.Data["labels"]);
          context.setLabelsPercentage(res.data.Data["labels_percentage"]);
          context.setCorks(res.data.Data["corks"]);
          context.setCorksPercentage(res.data.Data["corks_percentage"]);
          context.setWineMuzzles(res.data.Data["wine_muzzles"]);
          context.setWineMuzzlesPercentage(
            res.data.Data["wine_muzzles_percentage"]
          );
          context.setCapsules(res.data.Data["capsules"]);
          context.setCapsulesPercentage(res.data.Data["capsules_percentage"]);
          context.setAluminumSheets(res.data.Data["aluminum_sheets"]);
          context.setAluminumSheetsPercentage(
            res.data.Data["aluminum_sheets_percentage"]
          );
          context.setPolyethyleneSheets(res.data.Data["polyethylene_sheets"]);
          context.setPolyethyleneSheetsPercentage(
            res.data.Data["polyethylene_sheets_percentage"]
          );
          context.setCrownCaps(res.data.Data["crown_caps"]);
          context.setCrownCapsPercentage(
            res.data.Data["crown_caps_percentage"]
          );
          context.setAluminumCrownCaps(res.data.Data["aluminum_crown_caps"]);
          context.setAluminumCrownCapsPercentage(
            res.data.Data["aluminum_crown_caps_percentage"]
          );
          context.setBidule(res.data.Data["bidule"]);
          context.setBidulePercentage(res.data.Data["bidule_percentage"]);
          context.setAluminumScrewCaps(res.data.Data["aluminum_screw_caps"]);
          context.setAluminumScrewCapsPercentage(
            res.data.Data["aluminum_screw_caps_percentage"]
          );
          context.setPvc(res.data.Data["pvc"]);
          context.setPvcPercentage(res.data.Data["pvc_percentage"]);
          context.setLdpeFilmWraps(res.data.Data["ldpe_film_wraps"]);
          context.setLdpeFilmWrapsPercentage(
            res.data.Data["ldpe_film_wraps_percentage"]
          );
          context.setLdpePalletWraps(res.data.Data["ldpe_pallet_wraps"]);
          context.setLdpePalletWrapsPercentage(
            res.data.Data["ldpe_pallet_wraps_percentage"]
          );
          context.setBoxes(res.data.Data["boxes"]);
          context.setBoxesPercentage(res.data.Data["boxes_percentage"]);
          context.setNitricAcid(res.data.Data["nitric_acid"]);
          context.setPhosphoricAcid(res.data.Data["phosphoric_acid"]);
          context.setSodaLiquid(res.data.Data["soda_liquid"]);
          context.setSolidSodiumHydroxide(
            res.data.Data["solid_sodium_hydroxide"]
          );
          context.setSodiumHypochlorite(res.data.Data["sodium_hypochlorite"]);
          context.setSodiumSulfate(res.data.Data["sodium_sulfate"]);
          context.setAntifoamProducts(res.data.Data["antifoam_products"]);
          context.setGrease(res.data.Data["grease"]);
          context.setLubricantOilEquipmentMaintenance(
            res.data.Data["lubricant_oil_equipment_maintenance"]
          );
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
          context.setGlassBottlesPercentage("");
          context.setPetBottles("");
          context.setPetBottlesPercentage("");
          context.setLabels("");
          context.setLabelsPercentage("");
          context.setCorks("");
          context.setCorksPercentage("");
          context.setWineMuzzles("");
          context.setWineMuzzlesPercentage("");
          context.setCapsules("");
          context.setCapsulesPercentage("");
          context.setAluminumSheets("");
          context.setAluminumSheetsPercentage("");
          context.setPolyethyleneSheets("");
          context.setPolyethyleneSheetsPercentage("");
          context.setCrownCaps("");
          context.setCrownCapsPercentage("");
          context.setAluminumCrownCaps("");
          context.setAluminumCrownCapsPercentage("");
          context.setBidule("");
          context.setBidulePercentage("");
          context.setAluminumScrewCaps("");
          context.setAluminumScrewCapsPercentage("");
          context.setPvc("");
          context.setPvcPercentage("");
          context.setLdpeFilmWraps("");
          context.setLdpeFilmWrapsPercentage("");
          context.setLdpePalletWraps("");
          context.setLdpePalletWrapsPercentage("");
          context.setBoxes("");
          context.setBoxesPercentage("");
          context.setNitricAcid("");
          context.setPhosphoricAcid("");
          context.setSodaLiquid("");
          context.setSolidSodiumHydroxide("");
          context.setSodiumHypochlorite("");
          context.setSodiumSulfate("");
          context.setAntifoamProducts("");
          context.setGrease("");
          context.setLubricantOilEquipmentMaintenance("");
        }
      });
    } else if (context.selectedTopic["id"] == "water") {
      getWaterByYearAndCompany(year, company).then((res) => {
        if (res.data.Result == 0) {
          context.setTotalWaterFromNetwork(
            res.data.Data["total_water_from_network"]
          );
          context.setTotalWaterFromWell(res.data.Data["total_water_from_well"]);
          context.setTotalWaterFromCistern(
            res.data.Data["total_water_from_cistern"]
          );
          context.setTotalWaterReused(res.data.Data["total_water_reused"]);
          context.setFirstWaterInsertion(false);
        } else {
          context.setTotalWaterFromNetwork("");
          context.setTotalWaterFromWell("");
          context.setTotalWaterFromCistern("");
          context.setTotalWaterReused("");
          context.setFirstWaterInsertion(true);
        }
      });
    } else if (context.selectedTopic["id"] == "energy") {
      getEnergyByYearAndCompany(year, company).then((res) => {
        if (res.data.Result == 0) {
          if (res.data.Data != null) {
            context.setConsumedElectricityBought(
              res.data.Data["consumed_electricity_bought"]
            );
            context.setNaturalGasBought(res.data.Data["natural_gas_bought"]);
            context.setDieselBought(res.data.Data["diesel_bought"]);
            context.setFuelOilBought(res.data.Data["fuel_oil_bought"]);
            context.setNuclearBought(res.data.Data["nuclear_bought"]);
            context.setCoalBought(res.data.Data["coal_bought"]);
            context.setWindEnergyBought(res.data.Data["wind_energy_bought"]);
            context.setHidrelectricBought(res.data.Data["hidrelectric_bought"]);
            context.setSolarBought(res.data.Data["solar_bought"]);
            context.setBiomassBought(res.data.Data["biomass_bought"]);
            context.setBiogasBought(res.data.Data["biogas_bought"]);
            context.setSolidWasteIncinerationBought(
              res.data.Data["solid_waste_incineration_bought"]
            );
            context.setConsumedElectricityProduced(
              res.data.Data["consumed_electricity_produced"]
            );
            context.setHidrelectricProduced(
              res.data.Data["hidrelectric_produced"]
            );
            context.setSolarProduced(res.data.Data["solar_produced"]);
            context.setBiomassProduced(res.data.Data["biomass_produced"]);
            context.setBiogasProduced(res.data.Data["biogas_produced"]);
            context.setSurplusEntered(res.data.Data["surplus_entered"]);

            context.setFirstEnergyInsertion(false);
          } else {
            context.setConsumedElectricityBought("");
            context.setNaturalGasBought("");
            context.setDieselBought("");
            context.setFuelOilBought("");
            context.setNuclearBought("");
            context.setCoalBought("");
            context.setWindEnergyBought("");
            context.setHidrelectricBought("");
            context.setSolarBought("");
            context.setBiomassBought("");
            context.setBiogasBought("");
            context.setSolidWasteIncinerationBought("");
            context.setConsumedElectricityProduced("");
            context.setHidrelectricProduced("");
            context.setSolarProduced("");
            context.setBiomassProduced("");
            context.setBiogasProduced("");
            context.setSurplusEntered("");

            context.setFirstEnergyInsertion(true);
          }
        } else {
          context.setConsumedElectricityBought("");
          context.setNaturalGasBought("");
          context.setDieselBought("");
          context.setFuelOilBought("");
          context.setNuclearBought("");
          context.setCoalBought("");
          context.setWindEnergyBought("");
          context.setHidrelectricBought("");
          context.setSolarBought("");
          context.setBiomassBought("");
          context.setBiogasBought("");
          context.setSolidWasteIncinerationBought("");
          context.setConsumedElectricityProduced("");
          context.setHidrelectricProduced("");
          context.setSolarProduced("");
          context.setBiomassProduced("");
          context.setBiogasProduced("");
          context.setSurplusEntered("");

          context.setFirstEnergyInsertion(true);
        }
      });
    }
  };

  const saveChanges = () => {
    if (context.selectedTopic["id"] == "generalData") {
      handleGeneralDataSaveChanges();
    } else if (context.selectedTopic["id"] == "materials") {
      handleMaterialsSaveChanges();
    } else if (context.selectedTopic["id"] == "energy") {
      handleEnergySaveChanges();
    } else if (context.selectedTopic["id"] == "water") {
      let obj = {
        water_consumed_by_equipment_cleaning_on_pressing:
          context.waterConsumedByEquipmentCleaningOnPressing,
        number_of_cleaning_per_month_on_pressing:
          context.numberOfCleaningPerMonthOnPressing,
        water_consumed_by_equipment_cleaning_on_trasfega:
          context.waterConsumedByEquipmentCleaningOnTrasfega,
        number_of_cleaning_per_month_on_trasfega:
          context.numberOfCleaningPerMonthOnTrasfega,
        water_consumed_by_equipment_cleaning_on_estabilization:
          context.waterConsumedByEquipmentCleaningOnEstabilization,
        number_of_cleaning_per_month_on_estabilization:
          context.numberOfCleaningPerMonthOnEstabilization,
        water_consumed_by_equipment_cleaning_on_filtration:
          context.waterConsumedByEquipmentCleaningOnFiltration,
        number_of_cleaning_per_month_on_filtration:
          context.numberOfCleaningPerMonthOnFiltration,
        water_consumed_by_equipment_cleaning_on_different_floors:
          context.waterConsumedByEquipmentCleaningOnDifferentFloors,
        number_of_cleaning_per_month_on_different_floors:
          context.numberOfCleaningPerMonthOnDifferentFloors,
        water_consumed_by_equipment_cleaning_on_sterilization:
          context.waterConsumedByEquipmentCleaningOnSterilization,
        number_of_cleaning_per_month_on_sterilization:
          context.numberOfCleaningPerMonthOnSterilization,
        water_consumed_by_equipment_cleaning_on_filling:
          context.waterConsumedByEquipmentCleaningOnFilling,
        number_of_cleaning_per_month_on_filling:
          context.numberOfCleaningPerMonthOnFilling,
        water_consumed_by_equipment_cleaning_on_labeling:
          context.waterConsumedByEquipmentCleaningOnLabeling,
        number_of_cleaning_per_month_on_labeling:
          context.numberOfCleaningPerMonthOnLabeling,
        water_consumed_by_equipment_cleaning_on_bottling_different_floors:
          context.waterConsumedByEquipmentCleaningOnBottlingDifferentFloors,
        number_of_cleaning_per_month_on_bottling_different_floors:
          context.numberOfCleaningPerMonthOnBottlingDifferentFloors,
        //
        ph_high_season_generated_water: context.phHighSeasonGeneratedWater,
        ph_low_season_generated_water: context.phLowSeasonGeneratedWater,
        conductivity_high_season_generated_water:
          context.conductivityHighSeasonGeneratedWater,
        conductivity_low_season_generated_water:
          context.conductivityLowSeasonGeneratedWater,
        turbidity_high_season_generated_water:
          context.turbidityHighSeasonGeneratedWater,
        turbidity_low_season_generated_water:
          context.turbidityLowSeasonGeneratedWater,
        CQO_high_season_generated_water: context.CQOHighSeasonGeneratedWater,
        CQO_low_season_generated_water: context.CQOLowSeasonGeneratedWater,
        CBO_high_season_generated_water: context.CBOHighSeasonGeneratedWater,
        CBO_low_season_generated_water: context.CBOLowSeasonGeneratedWater,
        SST_high_season_generated_water: context.SSTHighSeasonGeneratedWater,
        SST_low_season_generated_water: context.SSTLowSeasonGeneratedWater,
        NTK_high_season_generated_water: context.NTKHighSeasonGeneratedWater,
        NTK_low_season_generated_water: context.NTKLowSeasonGeneratedWater,
        fenois_high_season_generated_water:
          context.fenoisHighSeasonGeneratedWater,
        fenois_low_season_generated_water:
          context.fenoisLowSeasonGeneratedWater,
        fosforo_high_season_generated_water:
          context.fosforoHighSeasonGeneratedWater,
        fosforo_low_season_generated_water:
          context.fosforoLowSeasonGeneratedWater,
        nitratos_high_season_generated_water:
          context.nitratosHighSeasonGeneratedWater,
        nitratos_low_season_generated_water:
          context.nitratosLowSeasonGeneratedWater,
        sulfatos_high_season_generated_water:
          context.sulfatosHighSeasonGeneratedWater,
        sulfatos_low_season_generated_water:
          context.sulfatosLowSeasonGeneratedWater,
        ferro_high_season_generated_water:
          context.ferroHighSeasonGeneratedWater,
        ferro_low_season_generated_water: context.ferroLowSeasonGeneratedWater,
        aluminum_high_season_generated_water:
          context.aluminumHighSeasonGeneratedWater,
        aluminum_low_season_generated_water:
          context.aluminumLowSeasonGeneratedWater,
        cadmio_high_season_generated_water:
          context.cadmioHighSeasonGeneratedWater,
        cadmio_low_season_generated_water:
          context.cadmioLowSeasonGeneratedWater,
        cobre_high_season_generated_water:
          context.cobreHighSeasonGeneratedWater,
        cobre_low_season_generated_water: context.cobreLowSeasonGeneratedWater,
        cromio_high_season_generated_water:
          context.cromioHighSeasonGeneratedWater,
        cromio_low_season_generated_water:
          context.cromioLowSeasonGeneratedWater,
        manganes_high_season_generated_water:
          context.manganesHighSeasonGeneratedWater,
        manganes_low_season_generated_water:
          context.manganesLowSeasonGeneratedWater,
      };

      handleWaterSaveChanges();
    }
  };

  const handleWaterSaveChanges = async () => {
    const schema = Joi.object({
      totalWaterFromNetwork: Joi.number().optional().allow(null, ""),
      totalWaterFromWell: Joi.number().optional().allow(null, ""),
      totalWaterFromCistern: Joi.number().optional().allow(null, ""),
      totalWaterReused: Joi.number().optional().allow(null, ""),
      waterConsumedByEquipmentCleaningOnPressing: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnPressing: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnTrasfega: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnTrasfega: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnEstabilization: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnEstabilization: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnFiltration: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnFiltration: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnDifferentFloors: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnDifferentFloors: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnSterilization: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnSterilization: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnFilling: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnFilling: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnLabeling: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnLabeling: Joi.number()
        .optional()
        .allow(null, ""),
      waterConsumedByEquipmentCleaningOnBottlingDifferentFloors: Joi.number()
        .optional()
        .allow(null, ""),
      numberOfCleaningPerMonthOnBottlingDifferentFloors: Joi.number()
        .optional()
        .allow(null, ""),
      phHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      phLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      conductivityHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      conductivityLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      turbidityHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      turbidityLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CQOHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CQOLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CBOHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CBOLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      SSTHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      SSTLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      NTKHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      NTKLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fenoisHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fenoisLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fosforoHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fosforoLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      nitratosHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      nitratosLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      sulfatosHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      sulfatosLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      ferroHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      ferroLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      aluminumHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      aluminumLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cadmioHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cadmioLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cobreHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cobreLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cromioHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cromioLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      manganesHighSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      manganesLowSeasonGeneratedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      phHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      phLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      conductivityHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      conductivityLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      turbidityHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      turbidityLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CQOHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CQOLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CBOHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      CBOLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      SSTHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      SSTLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      NTKHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      NTKLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fenoisHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fenoisLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fosforoHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      fosforoLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      nitratosHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      nitratosLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      sulfatosHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      sulfatosLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      ferroHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      ferroLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      aluminumHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      aluminumLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cadmioHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cadmioLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cobreHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cobreLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cromioHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      cromioLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      manganesHighSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      manganesLowSeasonTreatedWater: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
    });

    const validation = schema.validate({
      totalWaterFromNetwork: context.totalWaterFromNetwork,
      totalWaterFromWell: context.totalWaterFromWell,
      totalWaterFromCistern: context.totalWaterFromCistern,
      totalWaterReused: context.totalWaterReused,
      waterConsumedByEquipmentCleaningOnPressing:
        context.waterConsumedByEquipmentCleaningOnPressing,
      numberOfCleaningPerMonthOnPressing:
        context.numberOfCleaningPerMonthOnPressing,
      waterConsumedByEquipmentCleaningOnTrasfega:
        context.waterConsumedByEquipmentCleaningOnTrasfega,
      numberOfCleaningPerMonthOnTrasfega:
        context.numberOfCleaningPerMonthOnTrasfega,
      waterConsumedByEquipmentCleaningOnEstabilization:
        context.waterConsumedByEquipmentCleaningOnEstabilization,
      numberOfCleaningPerMonthOnEstabilization:
        context.numberOfCleaningPerMonthOnEstabilization,
      waterConsumedByEquipmentCleaningOnFiltration:
        context.waterConsumedByEquipmentCleaningOnFiltration,
      numberOfCleaningPerMonthOnFiltration:
        context.numberOfCleaningPerMonthOnFiltration,
      waterConsumedByEquipmentCleaningOnDifferentFloors:
        context.waterConsumedByEquipmentCleaningOnDifferentFloors,
      numberOfCleaningPerMonthOnDifferentFloors:
        context.numberOfCleaningPerMonthOnDifferentFloors,
      waterConsumedByEquipmentCleaningOnSterilization:
        context.waterConsumedByEquipmentCleaningOnSterilization,
      numberOfCleaningPerMonthOnSterilization:
        context.numberOfCleaningPerMonthOnSterilization,
      waterConsumedByEquipmentCleaningOnFilling:
        context.waterConsumedByEquipmentCleaningOnFilling,
      numberOfCleaningPerMonthOnFilling:
        context.numberOfCleaningPerMonthOnFilling,
      waterConsumedByEquipmentCleaningOnLabeling:
        context.waterConsumedByEquipmentCleaningOnLabeling,
      numberOfCleaningPerMonthOnLabeling:
        context.numberOfCleaningPerMonthOnLabeling,
      waterConsumedByEquipmentCleaningOnBottlingDifferentFloors:
        context.waterConsumedByEquipmentCleaningOnBottlingDifferentFloors,
      numberOfCleaningPerMonthOnBottlingDifferentFloors:
        context.numberOfCleaningPerMonthOnBottlingDifferentFloors,
      phHighSeasonGeneratedWater: context.phHighSeasonGeneratedWater,
      phLowSeasonGeneratedWater: context.phLowSeasonGeneratedWater,
      conductivityHighSeasonGeneratedWater:
        context.conductivityHighSeasonGeneratedWater,
      conductivityLowSeasonGeneratedWater:
        context.conductivityLowSeasonGeneratedWater,
      turbidityHighSeasonGeneratedWater:
        context.turbidityHighSeasonGeneratedWater,
      turbidityLowSeasonGeneratedWater:
        context.turbidityLowSeasonGeneratedWater,
      CQOHighSeasonGeneratedWater: context.CQOHighSeasonGeneratedWater,
      CQOLowSeasonGeneratedWater: context.CQOLowSeasonGeneratedWater,
      CBOHighSeasonGeneratedWater: context.CBOHighSeasonGeneratedWater,
      CBOLowSeasonGeneratedWater: context.CBOLowSeasonGeneratedWater,
      SSTHighSeasonGeneratedWater: context.SSTHighSeasonGeneratedWater,
      SSTLowSeasonGeneratedWater: context.SSTLowSeasonGeneratedWater,
      NTKHighSeasonGeneratedWater: context.NTKHighSeasonGeneratedWater,
      NTKLowSeasonGeneratedWater: context.NTKLowSeasonGeneratedWater,
      fenoisHighSeasonGeneratedWater: context.fenoisHighSeasonGeneratedWater,
      fenoisLowSeasonGeneratedWater: context.fenoisLowSeasonGeneratedWater,
      fosforoHighSeasonGeneratedWater: context.fosforoHighSeasonGeneratedWater,
      fosforoLowSeasonGeneratedWater: context.fosforoLowSeasonGeneratedWater,
      nitratosHighSeasonGeneratedWater:
        context.nitratosHighSeasonGeneratedWater,
      nitratosLowSeasonGeneratedWater: context.nitratosLowSeasonGeneratedWater,
      sulfatosHighSeasonGeneratedWater:
        context.sulfatosHighSeasonGeneratedWater,
      sulfatosLowSeasonGeneratedWater: context.sulfatosLowSeasonGeneratedWater,
      ferroHighSeasonGeneratedWater: context.ferroHighSeasonGeneratedWater,
      ferroLowSeasonGeneratedWater: context.ferroLowSeasonGeneratedWater,
      aluminumHighSeasonGeneratedWater:
        context.aluminumHighSeasonGeneratedWater,
      aluminumLowSeasonGeneratedWater: context.aluminumLowSeasonGeneratedWater,
      cadmioHighSeasonGeneratedWater: context.cadmioHighSeasonGeneratedWater,
      cadmioLowSeasonGeneratedWater: context.cadmioLowSeasonGeneratedWater,
      cobreHighSeasonGeneratedWater: context.cobreHighSeasonGeneratedWater,
      cobreLowSeasonGeneratedWater: context.cobreLowSeasonGeneratedWater,
      cromioHighSeasonGeneratedWater: context.cromioHighSeasonGeneratedWater,
      cromioLowSeasonGeneratedWater: context.cromioLowSeasonGeneratedWater,
      manganesHighSeasonGeneratedWater:
        context.manganesHighSeasonGeneratedWater,
      manganesLowSeasonGeneratedWater: context.manganesLowSeasonGeneratedWater,
      phHighSeasonTreatedWater: context.phHighSeasonTreatedWater,
      phLowSeasonTreatedWater: context.phLowSeasonTreatedWater,
      conductivityHighSeasonTreatedWater:
        context.conductivityHighSeasonTreatedWater,
      conductivityLowSeasonTreatedWater:
        context.conductivityLowSeasonTreatedWater,
      turbidityHighSeasonTreatedWater: context.turbidityHighSeasonTreatedWater,
      turbidityLowSeasonTreatedWater: context.turbidityLowSeasonTreatedWater,
      CQOHighSeasonTreatedWater: context.CQOHighSeasonTreatedWater,
      CQOLowSeasonTreatedWater: context.CQOLowSeasonTreatedWater,
      CBOHighSeasonTreatedWater: context.CBOHighSeasonTreatedWater,
      CBOLowSeasonTreatedWater: context.CBOLowSeasonTreatedWater,
      SSTHighSeasonTreatedWater: context.SSTHighSeasonTreatedWater,
      SSTLowSeasonTreatedWater: context.SSTLowSeasonTreatedWater,
      NTKHighSeasonTreatedWater: context.NTKHighSeasonTreatedWater,
      NTKLowSeasonTreatedWater: context.NTKLowSeasonTreatedWater,
      fenoisHighSeasonTreatedWater: context.fenoisHighSeasonTreatedWater,
      fenoisLowSeasonTreatedWater: context.fenoisLowSeasonTreatedWater,
      fosforoHighSeasonTreatedWater: context.fosforoHighSeasonTreatedWater,
      fosforoLowSeasonTreatedWater: context.fosforoLowSeasonTreatedWater,
      nitratosHighSeasonTreatedWater: context.nitratosHighSeasonTreatedWater,
      nitratosLowSeasonTreatedWater: context.nitratosLowSeasonTreatedWater,
      sulfatosHighSeasonTreatedWater: context.sulfatosHighSeasonTreatedWater,
      sulfatosLowSeasonTreatedWater: context.sulfatosLowSeasonTreatedWater,
      ferroHighSeasonTreatedWater: context.ferroHighSeasonTreatedWater,
      ferroLowSeasonTreatedWater: context.ferroLowSeasonTreatedWater,
      aluminumHighSeasonTreatedWater: context.aluminumHighSeasonTreatedWater,
      aluminumLowSeasonTreatedWater: context.aluminumLowSeasonTreatedWater,
      cadmioHighSeasonTreatedWater: context.cadmioHighSeasonTreatedWater,
      cadmioLowSeasonTreatedWater: context.cadmioLowSeasonTreatedWater,
      cobreHighSeasonTreatedWater: context.cobreHighSeasonTreatedWater,
      cobreLowSeasonTreatedWater: context.cobreLowSeasonTreatedWater,
      cromioHighSeasonTreatedWater: context.cromioHighSeasonTreatedWater,
      cromioLowSeasonTreatedWater: context.cromioLowSeasonTreatedWater,
      manganesHighSeasonTreatedWater: context.manganesHighSeasonTreatedWater,
      manganesLowSeasonTreatedWater: context.manganesLowSeasonTreatedWater,
    });

    const waterData = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      total_water_from_network: validation.value["totalWaterFromNetwork"],
      total_water_from_well: validation.value["totalWaterFromWell"],
      total_water_from_cistern: validation.value["totalWaterFromCistern"],
      total_water_reused: validation.value["totalWaterReused"],
      company_name: context.loggedUser && context.loggedUser["company"],
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstWaterInsertion) {
      updateWater(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        validation.value["totalWaterFromNetwork"],
        validation.value["totalWaterFromWell"],
        validation.value["totalWaterFromCistern"],
        validation.value["totalWaterReused"],
        validation.value["waterConsumedByEquipmentCleaningOnPressing"],
        validation.value["numberOfCleaningPerMonthOnPressing"],
        validation.value["waterConsumedByEquipmentCleaningOnTrasfega"],
        validation.value["numberOfCleaningPerMonthOnTrasfega"],
        validation.value["waterConsumedByEquipmentCleaningOnEstabilization"],
        validation.value["numberOfCleaningPerMonthOnEstabilization"],
        validation.value["waterConsumedByEquipmentCleaningOnFiltration"],
        validation.value["numberOfCleaningPerMonthOnFiltration"],
        validation.value["waterConsumedByEquipmentCleaningOnDifferentFloors"],
        validation.value["numberOfCleaningPerMonthOnDifferentFloors"],
        validation.value["waterConsumedByEquipmentCleaningOnSterilization"],
        validation.value["numberOfCleaningPerMonthOnSterilization"],
        validation.value["waterConsumedByEquipmentCleaningOnFilling"],
        validation.value["numberOfCleaningPerMonthOnFilling"],
        validation.value["waterConsumedByEquipmentCleaningOnLabeling"],
        validation.value["numberOfCleaningPerMonthOnLabeling"],
        validation.value[
          "waterConsumedByEquipmentCleaningOnBottlingDifferentFloors"
        ],
        validation.value["numberOfCleaningPerMonthOnBottlingDifferentFloors"],
        validation.value["phHighSeasonGeneratedWater"],
        validation.value["phLowSeasonGeneratedWater"],
        validation.value["conductivityHighSeasonGeneratedWater"],
        validation.value["conductivityLowSeasonGeneratedWater"],
        validation.value["turbidityHighSeasonGeneratedWater"],
        validation.value["turbidityLowSeasonGeneratedWater"],
        validation.value["CQOHighSeasonGeneratedWater"],
        validation.value["CQOLowSeasonGeneratedWater"],
        validation.value["CBOHighSeasonGeneratedWater"],
        validation.value["CBOLowSeasonGeneratedWater"],
        validation.value["SSTHighSeasonGeneratedWater"],
        validation.value["SSTLowSeasonGeneratedWater"],
        validation.value["NTKHighSeasonGeneratedWater"],
        validation.value["NTKLowSeasonGeneratedWater"],
        validation.value["fenoisHighSeasonGeneratedWater"],
        validation.value["fenoisLowSeasonGeneratedWater"],
        validation.value["fosforoHighSeasonGeneratedWater"],
        validation.value["fosforoLowSeasonGeneratedWater"],
        validation.value["nitratosHighSeasonGeneratedWater"],
        validation.value["nitratosLowSeasonGeneratedWater"],
        validation.value["sulfatosHighSeasonGeneratedWater"],
        validation.value["sulfatosLowSeasonGeneratedWater"],
        validation.value["ferroHighSeasonGeneratedWater"],
        validation.value["ferroLowSeasonGeneratedWater"],
        validation.value["aluminumHighSeasonGeneratedWater"],
        validation.value["aluminumLowSeasonGeneratedWater"],
        validation.value["cadmioHighSeasonGeneratedWater"],
        validation.value["cadmioLowSeasonGeneratedWater"],
        validation.value["cobreHighSeasonGeneratedWater"],
        validation.value["cobreLowSeasonGeneratedWater"],
        validation.value["cromioHighSeasonGeneratedWater"],
        validation.value["cromioLowSeasonGeneratedWater"],
        validation.value["manganesHighSeasonGeneratedWater"],
        validation.value["manganesLowSeasonGeneratedWater"],
        validation.value["phHighSeasonTreatedWater"],
        validation.value["phLowSeasonTreatedWater"],
        validation.value["conductivityHighSeasonTreatedWater"],
        validation.value["conductivityLowSeasonTreatedWater"],
        validation.value["turbidityHighSeasonTreatedWater"],
        validation.value["turbidityLowSeasonTreatedWater"],
        validation.value["CQOHighSeasonTreatedWater"],
        validation.value["CQOLowSeasonTreatedWater"],
        validation.value["CBOHighSeasonTreatedWater"],
        validation.value["CBOLowSeasonTreatedWater"],
        validation.value["SSTHighSeasonTreatedWater"],
        validation.value["SSTLowSeasonTreatedWater"],
        validation.value["NTKHighSeasonTreatedWater"],
        validation.value["NTKLowSeasonTreatedWater"],
        validation.value["fenoisHighSeasonTreatedWater"],
        validation.value["fenoisLowSeasonTreatedWater"],
        validation.value["fosforoHighSeasonTreatedWater"],
        validation.value["fosforoLowSeasonTreatedWater"],
        validation.value["nitratosHighSeasonTreatedWater"],
        validation.value["nitratosLowSeasonTreatedWater"],
        validation.value["sulfatosHighSeasonTreatedWater"],
        validation.value["sulfatosLowSeasonTreatedWater"],
        validation.value["ferroHighSeasonTreatedWater"],
        validation.value["ferroLowSeasonTreatedWater"],
        validation.value["aluminumHighSeasonTreatedWater"],
        validation.value["aluminumLowSeasonTreatedWater"],
        validation.value["cadmioHighSeasonTreatedWater"],
        validation.value["cadmioLowSeasonTreatedWater"],
        validation.value["cobreHighSeasonTreatedWater"],
        validation.value["cobreLowSeasonTreatedWater"],
        validation.value["cromioHighSeasonTreatedWater"],
        validation.value["cromioLowSeasonTreatedWater"],
        validation.value["manganesHighSeasonTreatedWater"],
        validation.value["manganesLowSeasonTreatedWater"]
      ).then((res) => {
        toast.success("Alterações guardadas!");
      });
    } else {
      createWater(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        validation.value["totalWaterFromNetwork"],
        validation.value["totalWaterFromWell"],
        validation.value["totalWaterFromCistern"],
        validation.value["totalWaterReused"],
        validation.value["waterConsumedByEquipmentCleaningOnPressing"],
        validation.value["numberOfCleaningPerMonthOnPressing"],
        validation.value["waterConsumedByEquipmentCleaningOnTrasfega"],
        validation.value["numberOfCleaningPerMonthOnTrasfega"],
        validation.value["waterConsumedByEquipmentCleaningOnEstabilization"],
        validation.value["numberOfCleaningPerMonthOnEstabilization"],
        validation.value["waterConsumedByEquipmentCleaningOnFiltration"],
        validation.value["numberOfCleaningPerMonthOnFiltration"],
        validation.value["waterConsumedByEquipmentCleaningOnDifferentFloors"],
        validation.value["numberOfCleaningPerMonthOnDifferentFloors"],
        validation.value["waterConsumedByEquipmentCleaningOnSterilization"],
        validation.value["numberOfCleaningPerMonthOnSterilization"],
        validation.value["waterConsumedByEquipmentCleaningOnFilling"],
        validation.value["numberOfCleaningPerMonthOnFilling"],
        validation.value["waterConsumedByEquipmentCleaningOnLabeling"],
        validation.value["numberOfCleaningPerMonthOnLabeling"],
        validation.value[
          "waterConsumedByEquipmentCleaningOnBottlingDifferentFloors"
        ],
        validation.value["numberOfCleaningPerMonthOnBottlingDifferentFloors"],
        validation.value["phHighSeasonGeneratedWater"],
        validation.value["phLowSeasonGeneratedWater"],
        validation.value["conductivityHighSeasonGeneratedWater"],
        validation.value["conductivityLowSeasonGeneratedWater"],
        validation.value["turbidityHighSeasonGeneratedWater"],
        validation.value["turbidityLowSeasonGeneratedWater"],
        validation.value["CQOHighSeasonGeneratedWater"],
        validation.value["CQOLowSeasonGeneratedWater"],
        validation.value["CBOHighSeasonGeneratedWater"],
        validation.value["CBOLowSeasonGeneratedWater"],
        validation.value["SSTHighSeasonGeneratedWater"],
        validation.value["SSTLowSeasonGeneratedWater"],
        validation.value["NTKHighSeasonGeneratedWater"],
        validation.value["NTKLowSeasonGeneratedWater"],
        validation.value["fenoisHighSeasonGeneratedWater"],
        validation.value["fenoisLowSeasonGeneratedWater"],
        validation.value["fosforoHighSeasonGeneratedWater"],
        validation.value["fosforoLowSeasonGeneratedWater"],
        validation.value["nitratosHighSeasonGeneratedWater"],
        validation.value["nitratosLowSeasonGeneratedWater"],
        validation.value["sulfatosHighSeasonGeneratedWater"],
        validation.value["sulfatosLowSeasonGeneratedWater"],
        validation.value["ferroHighSeasonGeneratedWater"],
        validation.value["ferroLowSeasonGeneratedWater"],
        validation.value["aluminumHighSeasonGeneratedWater"],
        validation.value["aluminumLowSeasonGeneratedWater"],
        validation.value["cadmioHighSeasonGeneratedWater"],
        validation.value["cadmioLowSeasonGeneratedWater"],
        validation.value["cobreHighSeasonGeneratedWater"],
        validation.value["cobreLowSeasonGeneratedWater"],
        validation.value["cromioHighSeasonGeneratedWater"],
        validation.value["cromioLowSeasonGeneratedWater"],
        validation.value["manganesHighSeasonGeneratedWater"],
        validation.value["manganesLowSeasonGeneratedWater"],
        validation.value["phHighSeasonTreatedWater"],
        validation.value["phLowSeasonTreatedWater"],
        validation.value["conductivityHighSeasonTreatedWater"],
        validation.value["conductivityLowSeasonTreatedWater"],
        validation.value["turbidityHighSeasonTreatedWater"],
        validation.value["turbidityLowSeasonTreatedWater"],
        validation.value["CQOHighSeasonTreatedWater"],
        validation.value["CQOLowSeasonTreatedWater"],
        validation.value["CBOHighSeasonTreatedWater"],
        validation.value["CBOLowSeasonTreatedWater"],
        validation.value["SSTHighSeasonTreatedWater"],
        validation.value["SSTLowSeasonTreatedWater"],
        validation.value["NTKHighSeasonTreatedWater"],
        validation.value["NTKLowSeasonTreatedWater"],
        validation.value["fenoisHighSeasonTreatedWater"],
        validation.value["fenoisLowSeasonTreatedWater"],
        validation.value["fosforoHighSeasonTreatedWater"],
        validation.value["fosforoLowSeasonTreatedWater"],
        validation.value["nitratosHighSeasonTreatedWater"],
        validation.value["nitratosLowSeasonTreatedWater"],
        validation.value["sulfatosHighSeasonTreatedWater"],
        validation.value["sulfatosLowSeasonTreatedWater"],
        validation.value["ferroHighSeasonTreatedWater"],
        validation.value["ferroLowSeasonTreatedWater"],
        validation.value["aluminumHighSeasonTreatedWater"],
        validation.value["aluminumLowSeasonTreatedWater"],
        validation.value["cadmioHighSeasonTreatedWater"],
        validation.value["cadmioLowSeasonTreatedWater"],
        validation.value["cobreHighSeasonTreatedWater"],
        validation.value["cobreLowSeasonTreatedWater"],
        validation.value["cromioHighSeasonTreatedWater"],
        validation.value["cromioLowSeasonTreatedWater"],
        validation.value["manganesHighSeasonTreatedWater"],
        validation.value["manganesLowSeasonTreatedWater"]
      ).then((res) => {
        context.setFirstEnergyInsertion(false);
        toast.success("Alterações guardadas!");
      });
    }
  };

  const handleGeneralDataSaveChanges = async () => {
    const schema = Joi.object({
      totalGrapesProduced: Joi.number().precision(1).optional().allow(null, ""),
      totalGrapesBought: Joi.number().precision(1).optional().allow(null, ""),
      totalMustPurchased: Joi.number().precision(1).optional().allow(null, ""),
      totalMustFermented: Joi.number().precision(1).optional().allow(null, ""),
      brix: Joi.number().precision(2).optional().allow(null, ""),
      totalMustProducedFromGrapes: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      totalWineProduced: Joi.number().precision(2).optional().allow(null, ""),
      glassBottles35: Joi.number().precision(2).optional().allow(null, ""),
      glassBottles75: Joi.number().precision(2).optional().allow(null, ""),
      glassBottles100: Joi.number().precision(2).optional().allow(null, ""),
      petBottles: Joi.number().precision(2).optional().allow(null, ""),
      bagInBox3: Joi.number().precision(2).optional().allow(null, ""),
      bagInBox5: Joi.number().precision(2).optional().allow(null, ""),
    });

    const validation = schema.validate({
      totalGrapesProduced: context.totalGrapesProduced,
      totalGrapesBought: context.totalGrapesBought,
      totalMustPurchased: context.totalMustPurchased,
      totalMustFermented: context.totalMustFermented,
      brix: context.brix,
      totalMustProducedFromGrapes: context.totalMustProducedFromGrapes,
      totalWineProduced: context.totalWineProduced,
      glassBottles35: context.glassBottles35,
      glassBottles75: context.glassBottles75,
      glassBottles100: context.glassBottles100,
      petBottles: context.petBottles,
      bagInBox3: context.bagInBox3,
      bagInBox5: context.bagInBox5,
    });

    const generalData = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      company_name: context.loggedUser && context.loggedUser["company"],
      total_grapes_produced: validation.value["totalGrapesProduced"].toString(),
      total_grapes_bought:
        validation.value["totalGrapesBought"] !== ""
          ? validation.value["totalGrapesBought"].toString()
          : "0",
      total_must_purchased:
        validation.value["totalMustPurchased"] !== ""
          ? validation.value["totalMustPurchased"]
          : "0",
      total_must_fermented: validation.value["totalMustFermented"],
      brix: validation.value["brix"],
      total_must_produced_from_grapes:
        validation.value["totalMustProducedFromGrapes"],
      total_wine_produced: validation.value["totalWineProduced"],
      glass_bottles_35: validation.value["glassBottles35"],
      glass_bottles_75: validation.value["glassBottles75"],
      glass_bottles_100: validation.value["glassBottles100"],
      pet_bottles: validation.value["petBottles"],
      bag_in_box_3: validation.value["bagInBox3"],
      bag_in_box_5: validation.value["bagInBox5"],
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstGeneralDataInsertion) {
      updateGeneralData(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        JSON.stringify({
          total_grapes_produced:
            validation.value["totalGrapesProduced"].toString(),
          total_grapes_bought:
            validation.value["totalGrapesBought"] != null &&
            validation.value["totalGrapesBought"] !== ""
              ? validation.value["totalGrapesBought"].toString()
              : "0",
          total_must_purchased:
            validation.value["totalMustPurchased"] != null &&
            validation.value["totalMustPurchased"] !== ""
              ? validation.value["totalMustPurchased"].toString()
              : "0",
          total_must_fermented:
            validation.value["totalMustFermented"] != null &&
            validation.value["totalMustFermented"].toString(),
          brix: validation.value["brix"],
          total_must_produced_from_grapes:
            validation.value["totalMustProducedFromGrapes"],
          total_wine_produced: validation.value["totalWineProduced"],
          glass_bottles_35: validation.value["glassBottles35"],
          glass_bottles_75: validation.value["glassBottles75"],
          glass_bottles_100: validation.value["glassBottles100"],
          pet_bottles: validation.value["petBottles"],
          bag_in_box_3: validation.value["bagInBox3"],
          bag_in_box_5: validation.value["bagInBox5"],
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        toast.success("Alterações guardadas!");
      });
    } else {
      createGeneralData(generalData, customConfig).then((res) => {
        context.setFirstGeneralDataInsertion(false);
        toast.success("Alterações guardadas!");
      });
    }
  };

  const updateGeneralData = async (year, company, body, config) => {
    return await axios.put(
      `http://localhost:5000/api/generalData/update/${year}/${company}`,
      body,
      config
    );
  };

  const createGeneralData = async (body, config) => {
    return await axios.post(
      "http://localhost:5000/api/generalData/create",
      body,
      config
    );
  };

  const handleMaterialsSaveChanges = async () => {
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
      aluminumCrownCaps: Joi.number().precision(1).optional().allow(null, ""),
      bidule: Joi.number().precision(1).optional().allow(null, ""),
      aluminumScrewCaps: Joi.number().precision(1).optional().allow(null, ""),
      pvc: Joi.number().precision(1).optional().allow(null, ""),
      ldpeFilmWraps: Joi.number().precision(1).optional().allow(null, ""),
      ldpePalletWraps: Joi.number().precision(1).optional().allow(null, ""),
      boxes: Joi.number().precision(1).optional().allow(null, ""),
      glassBottlesPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      petBottlesPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      labelsPercentage: Joi.number().precision(1).optional().allow(null, ""),
      corksPercentage: Joi.number().precision(1).optional().allow(null, ""),
      wineMuzzlesPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      capsulesPercentage: Joi.number().precision(1).optional().allow(null, ""),
      aluminumSheetsPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      polyethyleneSheetsPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      crownCapsPercentage: Joi.number().precision(1).optional().allow(null, ""),
      aluminumCrownCapsPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      bidulePercentage: Joi.number().precision(1).optional().allow(null, ""),
      aluminumScrewCapsPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      pvcPercentage: Joi.number().precision(1).optional().allow(null, ""),
      ldpeFilmWrapsPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      ldpePalletWrapsPercentage: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      boxesPercentage: Joi.number().precision(1).optional().allow(null, ""),
      nitricAcid: Joi.number().precision(1).optional().allow(null, ""),
      phosphoricAcid: Joi.number().precision(1).optional().allow(null, ""),
      sodaLiquid: Joi.number().precision(1).optional().allow(null, ""),
      solidSodiumHydroxide: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
      sodiumHypochlorite: Joi.number().precision(1).optional().allow(null, ""),
      sodiumSulfate: Joi.number().precision(1).optional().allow(null, ""),
      antifoamProducts: Joi.number().precision(1).optional().allow(null, ""),
      grease: Joi.number().precision(1).optional().allow(null, ""),
      lubricantOilEquipmentMaintenance: Joi.number()
        .precision(1)
        .optional()
        .allow(null, ""),
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
      aluminumCrownCaps: context.aluminumCrownCaps,
      bidule: context.bidule,
      aluminumScrewCaps: context.aluminumScrewCaps,
      pvc: context.pvc,
      ldpeFilmWraps: context.ldpeFilmWraps,
      ldpePalletWraps: context.ldpePalletWraps,
      boxes: context.boxes,
      glassBottlesPercentage: context.glassBottlesPercentage,
      petBottlesPercentage: context.petBottlesPercentage,
      labelsPercentage: context.labelsPercentage,
      corksPercentage: context.corksPercentage,
      wineMuzzlesPercentage: context.wineMuzzlesPercentage,
      capsulesPercentage: context.capsulesPercentage,
      aluminumSheetsPercentage: context.aluminumSheetsPercentage,
      polyethyleneSheetsPercentage: context.polyethyleneSheetsPercentage,
      crownCapsPercentage: context.crownCapsPercentage,
      aluminumCrownCapsPercentage: context.aluminumCrownCapsPercentage,
      bidulePercentage: context.bidulePercentage,
      aluminumScrewCapsPercentage: context.aluminumScrewCapsPercentage,
      pvcPercentage: context.pvcPercentage,
      ldpeFilmWrapsPercentage: context.ldpeFilmWrapsPercentage,
      ldpePalletWrapsPercentage: context.ldpePalletWrapsPercentage,
      boxesPercentage: context.boxesPercentage,
      nitricAcid: context.nitricAcid,
      phosphoricAcid: context.phosphoricAcid,
      sodaLiquid: context.sodaLiquid,
      solidSodiumHydroxide: context.solidSodiumHydroxide,
      sodiumHypochlorite: context.sodiumHypochlorite,
      sodiumSulfate: context.sodiumSulfate,
      antifoamProducts: context.antifoamProducts,
      grease: context.grease,
      lubricantOilEquipmentMaintenance:
        context.lubricantOilEquipmentMaintenance,
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
      aluminum_crown_caps: validation.value["aluminumCrownCaps"].toString(),
      bidule: validation.value["bidule"].toString(),
      aluminum_screw_caps: validation.value["aluminumScrewCaps"].toString(),
      pvc: validation.value["pvc"].toString(),
      ldpe_film_wraps: validation.value["ldpeFilmWraps"].toString(),
      ldpe_pallet_wraps: validation.value["ldpePalletWraps"].toString(),
      boxes: validation.value["boxes"].toString(),
      glass_bottles_percentage:
        validation.value["glassBottlesPercentage"].toString(),
      pet_bottles_percentage:
        validation.value["petBottlesPercentage"].toString(),
      labels_percentage: validation.value["labelsPercentage"].toString(),
      corks_percentage: validation.value["corksPercentage"].toString(),
      wine_muzzles_percentage:
        validation.value["wineMuzzlesPercentage"].toString(),
      capsules_percentage: validation.value["capsulesPercentage"].toString(),
      aluminum_sheets_percentage:
        validation.value["aluminumSheetsPercentage"].toString(),
      polyethylene_sheets_percentage:
        validation.value["polyethyleneSheetsPercentage"].toString(),
      crown_caps_percentage: validation.value["crownCapsPercentage"].toString(),
      aluminum_crown_caps_percentage:
        validation.value["aluminumCrownCapsPercentage"].toString(),
      bidule_percentage: validation.value["bidulePercentage"].toString(),
      aluminum_screw_caps_percentage:
        validation.value["aluminumScrewCapsPercentage"].toString(),
      pvc_percentage: validation.value["pvcPercentage"].toString(),
      ldpe_film_wraps_percentage:
        validation.value["ldpeFilmWrapsPercentage"].toString(),
      ldpe_pallet_wraps_percentage:
        validation.value["ldpePalletWrapsPercentage"].toString(),
      boxes_percentage: validation.value["boxesPercentage"].toString(),
      nitric_acid: validation.value["nitricAcid"].toString(),
      phosphoric_acid: validation.value["phosphoricAcid"].toString(),
      soda_liquid: validation.value["sodaLiquid"].toString(),
      solid_sodium_hydroxide:
        validation.value["solidSodiumHydroxide"].toString(),
      sodium_hypochlorite: validation.value["sodiumHypochlorite"].toString(),
      sodium_sulfate: validation.value["sodiumSulfate"].toString(),
      antifoam_products: validation.value["antifoamProducts"].toString(),
      grease: validation.value["grease"].toString(),
      lubricant_oil_equipment_maintenance:
        validation.value["lubricantOilEquipmentMaintenance"].toString(),
      company_name:
        context.loggedUser && context.loggedUser["company"].toString(),
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (!context.firstMaterialsInsertion) {
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
          aluminum_crown_caps: validation.value["aluminumCrownCaps"].toString(),
          bidule: validation.value["bidule"].toString(),
          aluminum_screw_caps: validation.value["aluminumScrewCaps"].toString(),
          pvc: validation.value["pvc"].toString(),
          ldpe_film_wraps: validation.value["ldpeFilmWraps"].toString(),
          ldpe_pallet_wraps: validation.value["ldpePalletWraps"].toString(),
          boxes: validation.value["boxes"].toString(),
          glass_bottles_percentage:
            validation.value["glassBottlesPercentage"].toString(),
          pet_bottles_percentage:
            validation.value["petBottlesPercentage"].toString(),
          labels_percentage: validation.value["labelsPercentage"].toString(),
          corks_percentage: validation.value["corksPercentage"].toString(),
          wine_muzzles_percentage:
            validation.value["wineMuzzlesPercentage"].toString(),
          capsules_percentage:
            validation.value["capsulesPercentage"].toString(),
          aluminum_sheets_percentage:
            validation.value["aluminumSheetsPercentage"].toString(),
          polyethylene_sheets_percentage:
            validation.value["polyethyleneSheetsPercentage"].toString(),
          crown_caps_percentage:
            validation.value["crownCapsPercentage"].toString(),
          aluminum_crown_caps_percentage:
            validation.value["aluminumCrownCapsPercentage"].toString(),
          bidule_percentage: validation.value["bidulePercentage"].toString(),
          aluminum_screw_caps_percentage:
            validation.value["aluminumScrewCapsPercentage"].toString(),
          pvc_percentage: validation.value["pvcPercentage"].toString(),
          ldpe_film_wraps_percentage:
            validation.value["ldpeFilmWrapsPercentage"].toString(),
          ldpe_pallet_wraps_percentage:
            validation.value["ldpePalletWrapsPercentage"].toString(),
          boxes_percentage: validation.value["boxesPercentage"].toString(),
          nitric_acid: validation.value["nitricAcid"].toString(),
          phosphoric_acid: validation.value["phosphoricAcid"].toString(),
          soda_liquid: validation.value["sodaLiquid"].toString(),
          solid_sodium_hydroxide:
            validation.value["solidSodiumHydroxide"].toString(),
          sodium_hypochlorite:
            validation.value["sodiumHypochlorite"].toString(),
          sodium_sulfate: validation.value["sodiumSulfate"].toString(),
          antifoam_products: validation.value["antifoamProducts"].toString(),
          grease: validation.value["grease"].toString(),
          lubricant_oil_equipment_maintenance:
            validation.value["lubricantOilEquipmentMaintenance"].toString(),
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        toast.success("Alterações guardadas!");
      });
    } else {
      createMaterials(materials, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        context.setFirstMaterialsInsertion(false);
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
      dieselBought: Joi.number().precision(1).optional().allow(null, ""),
      fuelOilBought: Joi.number().precision(1).optional().allow(null, ""),
      nuclearBought: Joi.number().precision(1).optional().allow(null, ""),
      coalBought: Joi.number().precision(2).optional().allow(null, ""),
      windEnergyBought: Joi.number().precision(2).optional().allow(null, ""),
      hidrelectricBought: Joi.number().precision(2).optional().allow(null, ""),
      solarBought: Joi.number().precision(2).optional().allow(null, ""),
      biomassBought: Joi.number().precision(2).optional().allow(null, ""),
      biogasBought: Joi.number().precision(2).optional().allow(null, ""),
      solidWasteIncinerationBought: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      consumedElectricityProduced: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      hidrelectricProduced: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      solarProduced: Joi.number().precision(2).optional().allow(null, ""),
      biomassProduced: Joi.number().precision(2).optional().allow(null, ""),
      biogasProduced: Joi.number().precision(2).optional().allow(null, ""),
      surplusEntered: Joi.number().precision(2).optional().allow(null, ""),
      pureDieselUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      pureGasolineUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      biofuelUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      lubricantUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      butaneUsedInCompany: Joi.number().precision(2).optional().allow(null, ""),
      propaneUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      gplAutoUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      naturalGasUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
      biogasUsedInCompany: Joi.number().precision(2).optional().allow(null, ""),
      woodUsedInCompany: Joi.number().precision(2).optional().allow(null, ""),
      pelletsUsedInCompany: Joi.number()
        .precision(2)
        .optional()
        .allow(null, ""),
    });

    const validation = schema.validate({
      consumedElectricityBought: context.consumedElectricityBought,
      naturalGasBought: context.naturalGasBought,
      dieselBought: context.dieselBought,
      fuelOilBought: context.fuelOilBought,
      nuclearBought: context.nuclearBought,
      coalBought: context.coalBought,
      windEnergyBought: context.windEnergyBought,
      hidrelectricBought: context.hidrelectricBought,
      solarBought: context.solarBought,
      biomassBought: context.biomassBought,
      biogasBought: context.biogasBought,
      solidWasteIncinerationBought: context.surplusEntered,
      consumedElectricityProduced: context.consumedElectricityProduced,
      hidrelectricProduced: context.hidrelectricProduced,
      solarProduced: context.solarProduced,
      biomassProduced: context.biomassProduced,
      biogasProduced: context.biogasProduced,
      surplusEntered: context.surplusEntered,
      pureDieselUsedInCompany: context.pureDieselUsedInCompany,
      pureGasolineUsedInCompany: context.pureGasolineUsedInCompany,
      biofuelUsedInCompany: context.biofuelUsedInCompany,
      lubricantUsedInCompany: context.lubricantUsedInCompany,
      butaneUsedInCompany: context.butaneUsedInCompany,
      propaneUsedInCompany: context.propaneUsedInCompany,
      gplAutoUsedInCompany: context.gplAutoUsedInCompany,
      naturalGasUsedInCompany: context.naturalGasUsedInCompany,
      biogasUsedInCompany: context.biogasUsedInCompany,
      woodUsedInCompany: context.woodUsedInCompany,
      pelletsUsedInCompany: context.pelletsUsedInCompany,
    });

    const energy = JSON.stringify({
      year: context.selectedYear && context.selectedYear["year"],
      consumed_electricity_bought:
        validation.value["consumedElectricityBought"],
      natural_gas_bought: validation.value["naturalGasBought"],
      diesel_bought: validation.value["dieselBought"],
      fuel_oil_bought: validation.value["fuelOilBought"],
      nuclear_bought: validation.value["nuclearBought"],
      coal_bought: validation.value["coalBought"],
      wind_energy_bought: validation.value["windEnergyBought"],
      hidrelectric_bought: validation.value["hidrelectricBought"],
      solar_bought: validation.value["solarBought"],
      biomass_bought: validation.value["biomassBought"],
      biogas_bought: validation.value["biogasBought"],
      solid_waste_incineration_bought:
        validation.value["solidWasteIncinerationBought"],
      consumed_electricity_produced:
        validation.value["consumedElectricityProduced"],
      hidrelectric_produced: validation.value["hidrelectricProduced"],
      solar_produced: validation.value["solarProduced"],
      biomass_produced: validation.value["biomassProduced"],
      biogas_produced: validation.value["biogasProduced"],
      surplus_entered: validation.value["surplusEntered"],
      pure_diesel_used_in_company: validation.value["pureDieselUsedInCompany"],
      pure_gasoline_used_in_company:
        validation.value["pureGasolineUsedInCompany"],
      biofuel_used_in_company: validation.value["biofuelUsedInCompany"],
      lubricant_used_in_company: validation.value["lubricantUsedInCompany"],
      butane_used_in_company: validation.value["butaneUsedInCompany"],
      propane_used_in_company: validation.value["propaneUsedInCompany"],
      gpl_auto_used_in_company: validation.value["gplAutoUsedInCompany"],
      natural_gas_used_in_company: validation.value["naturalGasUsedInCompany"],
      biogas_used_in_company: validation.value["biogasUsedInCompany"],
      wood_used_in_company: validation.value["woodUsedInCompany"],
      pellets_used_in_company: validation.value["pelletsUsedInCompany"],
      company_name: context.loggedUser && context.loggedUser["company"],
    });

    if (!context.firstEnergyInsertion) {
      updateEnergy(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        validation.value["consumedElectricityBought"],
        validation.value["naturalGasBought"],
        validation.value["dieselBought"],
        validation.value["fuelOilBought"],
        validation.value["nuclearBought"],
        validation.value["coalBought"],
        validation.value["windEnergyBought"],
        validation.value["hidrelectricBought"],
        validation.value["solarBought"],
        validation.value["biomassBought"],
        validation.value["biogasBought"],
        validation.value["solidWasteIncinerationBought"],
        validation.value["consumedElectricityProduced"],
        validation.value["hidrelectricProduced"],
        validation.value["solarProduced"],
        validation.value["biomassProduced"],
        validation.value["biogasProduced"],
        validation.value["surplusEntered"],
        validation.value["pureDieselUsedInCompany"],
        validation.value["pureGasolineUsedInCompany"],
        validation.value["biofuelUsedInCompany"],
        validation.value["lubricantUsedInCompany"],
        validation.value["butaneUsedInCompany"],
        validation.value["propaneUsedInCompany"],
        validation.value["gplAutoUsedInCompany"],
        validation.value["naturalGasUsedInCompany"],
        validation.value["biogasUsedInCompany"],
        validation.value["woodUsedInCompany"],
        validation.value["pelletsUsedInCompany"]
      ).then((res) => {
        toast.success("Alterações guardadas!");
      });
    } else {
      createEnergy(
        context.selectedYear && context.selectedYear["year"],
        context.loggedUser && context.loggedUser["company"],
        validation.value["consumedElectricityBought"],
        validation.value["naturalGasBought"],
        validation.value["dieselBought"],
        validation.value["fuelOilBought"],
        validation.value["nuclearBought"],
        validation.value["coalBought"],
        validation.value["windEnergyBought"],
        validation.value["hidrelectricBought"],
        validation.value["solarBought"],
        validation.value["biomassBought"],
        validation.value["biogasBought"],
        validation.value["solidWasteIncinerationBought"],
        validation.value["consumedElectricityProduced"],
        validation.value["hidrelectricProduced"],
        validation.value["solarProduced"],
        validation.value["biomassProduced"],
        validation.value["biogasProduced"],
        validation.value["surplusEntered"],
        validation.value["pureDieselUsedInCompany"],
        validation.value["pureGasolineUsedInCompany"],
        validation.value["biofuelUsedInCompany"],
        validation.value["lubricantUsedInCompany"],
        validation.value["butaneUsedInCompany"],
        validation.value["propaneUsedInCompany"],
        validation.value["gplAutoUsedInCompany"],
        validation.value["naturalGasUsedInCompany"],
        validation.value["biogasUsedInCompany"],
        validation.value["woodUsedInCompany"],
        validation.value["pelletsUsedInCompany"]
      ).then((res) => {
        context.setFirstEnergyInsertion(false);
        toast.success("Alterações guardadas!");
      });
    }
  };

  return (
    <Fragment>
      <AppNavbar />
      <Row id="header-container" className="mx-0 py-0 px-md-3 px-lg-4">
        <Col className="d-flex align-items-center">
          <div
            className="d-flex align-items-center"
            style={{ marginRight: "20px" }}
          >
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
                  years
                    .sort((a, b) => b.year - a.year)
                    .map((item) => (
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
            <div
              className="d-flex align-items-center"
              style={{ marginRight: "20px" }}
            >
              <Link to="/reports" style={{ marginRight: "3px" }}>
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
              {context.selectedTopic["id"] == "water" && (
                <Fragment>
                  <Water />
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
