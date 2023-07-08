import React, { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appContext";
import AppNavbar from "../layout/navbar";
import "chart.js/auto";
import { Button, Col, Dropdown, Row, Spinner, Table } from "react-bootstrap";
import faker from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFile, faWarning } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookie from "js-cookie";
import * as jose from "jose";
import { Link } from "react-router-dom";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Register the plugin to all charts:
import GeneralDataReport from "./relatorios/GeneralDataReport";
import WasteReport from "./relatorios/WasteReport";
import { getGeneralDataByYearAndCompany } from "../services/generalData";
import EnergyReport from "./relatorios/EnergyReport";
import WaterReport from "./relatorios/WaterReport";
import { getWaterByYearAndCompany } from "../services/water";
import { getEnergyByYearAndCompany } from "../services/energy";
import ReportDocument from "./ReportDocument";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useRef } from "react";
import html2canvas from "html2canvas";

Chart.register(ChartDataLabels);

const data5 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Relatorios = () => {
  const [generalData, setGeneralData] = useState(null);
  //grapes
  const [producedGrapes, setProducedGrapes] = useState(null);
  const [boughtGrapes, setBoughtGrapes] = useState(null);
  //must
  const [mustProducedFromGrapes, setMustProducedFromGrapes] = useState(null);
  const [mustBought, setMustBought] = useState(null);
  const [producedGrapesMust, setProducedGrapesMust] = useState(null);
  const [purchasedInputsMust, setPurchasedInputsMust] = useState(null);
  //wine
  const [glassBottles35, setGlassBottles35] = useState(null);
  const [glassBottles75, setGlassBottles75] = useState(null);
  const [glassBottles100, setGlassBottles100] = useState(null);
  const [petBottles, setPetBottles] = useState(null);
  const [bagInBox3, setBagInBox3] = useState(null);
  const [bagInBox5, setBagInBox5] = useState(null);

  //water
  const [fromNetwork, setFromNetwork] = useState(null);
  const [fromWell, setFromWell] = useState(null);
  const [fromCistern, setFromCistern] = useState(null);
  const [reusedWater, setReusedWater] = useState(null);
  const [pressing, setPressing] = useState(null);
  const [trasfega, setTrasfega] = useState(null);
  const [estabilization, setEstabilization] = useState(null);
  const [filtration, setFiltration] = useState(null);
  const [cleaningDifferentFloors, setCleaningDifferentFloors] = useState(null);
  const [sterilization, setSterilization] = useState(null);
  const [filling, setFilling] = useState(null);
  const [labeling, setLabeling] = useState(null);
  const [bottlingDifferentFloors, setBottlingDifferentFloors] = useState(null);
  const [pressingByProcess, setPressingByProcess] = useState(null);
  const [trasfegaByProcess, setTrasfegaByProcess] = useState(null);
  const [estabilizationByProcess, setEstabilizationByProcess] = useState(null);
  const [filtrationByProcess, setFiltrationByProcess] = useState(null);
  const [sterilizationByProcess, setSterilizationByProcess] = useState(null);
  const [fillingByProcess, setFillingByProcess] = useState(null);
  const [labelingByProcess, setLabelingByProcess] = useState(null);

  //
  const [
    conductivityHighSeasonGeneratedWaterPercentage,
    setConductivityHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    turbidityHighSeasonGeneratedWaterPercentage,
    setTurbidityHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    CQOHighSeasonGeneratedWaterPercentage,
    setCQOHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    CBOHighSeasonGeneratedWaterPercentage,
    setCBOHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    SSTHighSeasonGeneratedWaterPercentage,
    setSSTHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    NTKHighSeasonGeneratedWaterPercentage,
    setNTKHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    fenoisHighSeasonGeneratedWaterPercentage,
    setFenoisHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    fosforoHighSeasonGeneratedWaterPercentage,
    setFosforoHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    nitratosHighSeasonGeneratedWaterPercentage,
    setNitratosHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    sulfatosHighSeasonGeneratedWaterPercentage,
    setSulfatosHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    ferroHighSeasonGeneratedWaterPercentage,
    setFerroHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    aluminumHighSeasonGeneratedWaterPercentage,
    setAluminumHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    cadmioHighSeasonGeneratedWaterPercentage,
    setCadmioHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    cobreHighSeasonGeneratedWaterPercentage,
    setCobreHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    cromioHighSeasonGeneratedWaterPercentage,
    setCromioHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    manganesHighSeasonGeneratedWaterPercentage,
    setManganesHighSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    conductivityLowSeasonGeneratedWaterPercentage,
    setConductivityLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    turbidityLowSeasonGeneratedWaterPercentage,
    setTurbidityLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    CQOLowSeasonGeneratedWaterPercentage,
    setCQOLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    CBOLowSeasonGeneratedWaterPercentage,
    setCBOLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    SSTLowSeasonGeneratedWaterPercentage,
    setSSTLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    NTKLowSeasonGeneratedWaterPercentage,
    setNTKLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    fenoisLowSeasonGeneratedWaterPercentage,
    setFenoisLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    fosforoLowSeasonGeneratedWaterPercentage,
    setFosforoLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    nitratosLowSeasonGeneratedWaterPercentage,
    setNitratosLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    sulfatosLowSeasonGeneratedWaterPercentage,
    setSulfatosLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    ferroLowSeasonGeneratedWaterPercentage,
    setFerroLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    aluminumLowSeasonGeneratedWaterPercentage,
    setAluminumLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    cadmioLowSeasonGeneratedWaterPercentage,
    setCadmioLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    cobreLowSeasonGeneratedWaterPercentage,
    setCobreLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    cromioLowSeasonGeneratedWaterPercentage,
    setCromioLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  const [
    manganesLowSeasonGeneratedWaterPercentage,
    setManganesLowSeasonGeneratedWaterPercentage,
  ] = useState(null);

  /////////
  const [phHighSeasonTreatedWater, setPhHighSeasonTreatedWater] =
    useState(null);

  const [
    conductivityHighSeasonTreatedWater,
    setConductivityHighSeasonTreatedWater,
  ] = useState(null);

  const [turbidityHighSeasonTreatedWater, setTurbidityHighSeasonTreatedWater] =
    useState(null);

  const [CQOHighSeasonTreatedWater, setCQOHighSeasonTreatedWater] =
    useState(null);

  const [CBOHighSeasonTreatedWater, setCBOHighSeasonTreatedWater] =
    useState(null);

  const [SSTHighSeasonTreatedWater, setSSTHighSeasonTreatedWater] =
    useState(null);

  const [NTKHighSeasonTreatedWater, setNTKHighSeasonTreatedWater] =
    useState(null);

  const [fenoisHighSeasonTreatedWater, setFenoisHighSeasonTreatedWater] =
    useState(null);

  const [fosforoHighSeasonTreatedWater, setFosforoHighSeasonTreatedWater] =
    useState(null);

  const [nitratosHighSeasonTreatedWater, setNitratosHighSeasonTreatedWater] =
    useState(null);

  const [sulfatosHighSeasonTreatedWater, setSulfatosHighSeasonTreatedWater] =
    useState(null);

  const [ferroHighSeasonTreatedWater, setFerroHighSeasonTreatedWater] =
    useState(null);

  const [aluminumHighSeasonTreatedWater, setAluminumHighSeasonTreatedWater] =
    useState(null);

  const [cadmioHighSeasonTreatedWater, setCadmioHighSeasonTreatedWater] =
    useState(null);

  const [cobreHighSeasonTreatedWater, setCobreHighSeasonTreatedWater] =
    useState(null);

  const [cromioHighSeasonTreatedWater, setCromioHighSeasonTreatedWater] =
    useState(null);

  const [manganesHighSeasonTreatedWater, setManganesHighSeasonTreatedWater] =
    useState(null);

  const [phLowSeasonTreatedWater, setPhLowSeasonTreatedWater] = useState(null);

  const [
    conductivityLowSeasonTreatedWater,
    setConductivityLowSeasonTreatedWater,
  ] = useState(null);

  const [turbidityLowSeasonTreatedWater, setTurbidityLowSeasonTreatedWater] =
    useState(null);

  const [CQOLowSeasonTreatedWater, setCQOLowSeasonTreatedWater] =
    useState(null);

  const [CBOLowSeasonTreatedWater, setCBOLowSeasonTreatedWater] =
    useState(null);

  const [SSTLowSeasonTreatedWater, setSSTLowSeasonTreatedWater] =
    useState(null);

  const [NTKLowSeasonTreatedWater, setNTKLowSeasonTreatedWater] =
    useState(null);

  const [fenoisLowSeasonTreatedWater, setFenoisLowSeasonTreatedWater] =
    useState(null);

  const [fosforoLowSeasonTreatedWater, setFosforoLowSeasonTreatedWater] =
    useState(null);

  const [nitratosLowSeasonTreatedWater, setNitratosLowSeasonTreatedWater] =
    useState(null);

  const [sulfatosLowSeasonTreatedWater, setSulfatosLowSeasonTreatedWater] =
    useState(null);

  const [ferroLowSeasonTreatedWater, setFerroLowSeasonTreatedWater] =
    useState(null);

  const [aluminumLowSeasonTreatedWater, setAluminumLowSeasonTreatedWater] =
    useState(null);

  const [cadmioLowSeasonTreatedWater, setCadmioLowSeasonTreatedWater] =
    useState(null);

  const [cobreLowSeasonTreatedWater, setCobreLowSeasonTreatedWater] =
    useState(null);

  const [cromioLowSeasonTreatedWater, setCromioLowSeasonTreatedWater] =
    useState(null);

  const [manganesLowSeasonTreatedWater, setManganesLowSeasonTreatedWater] =
    useState(null);

  //electricity
  const [naturalGasBought, setNaturalGasBought] = useState(null);
  const [dieselBought, setDieselBought] = useState(null);
  const [fuelOilBought, setFuelOilBought] = useState(null);
  const [nuclearBought, setNuclearBought] = useState(null);
  const [coalBought, setCoalBought] = useState(null);
  const [windEnergyBought, setWindEnergyBought] = useState(null);
  const [hidrelectricBought, setHidrelectricBought] = useState(null);
  const [solarBought, setSolarBought] = useState(null);
  const [biomassBought, setBiomassBought] = useState(null);
  const [biogasBought, setBiogasBought] = useState(null);

  const [hidrelectricProduced, setHidrelectricProduced] = useState(null);
  const [solarProduced, setSolarProduced] = useState(null);
  const [biomassProduced, setBiomassProduced] = useState(null);
  const [biogasProduced, setBiogasProduced] = useState(null);

  const [pureDieselUsedInCompany, setPureDieselUsedInCompany] = useState(null);
  const [pureGasolineUsedInCompany, setPureGasolineUsedInCompany] =
    useState(null);
  const [biofuelUsedInCompany, setBiofuelUsedInCompany] = useState(null);
  const [lubricantUsedInCompany, setLubricantUsedInCompany] = useState(null);
  const [butaneUsedInCompany, setButaneUsedInCompany] = useState(null);
  const [propaneUsedInCompany, setPropaneUsedInCompany] = useState(null);
  const [gplAutoUsedInCompany, setGplAutoUsedInCompany] = useState(null);
  const [naturalGasUsedInCompany, setNaturalGasUsedInCompany] = useState(null);
  const [biogasUsedInCompany, setBiogasUsedInCompany] = useState(null);
  const [woodsUsedInCompany, setWoodsUsedInCompany] = useState(null);
  const [pelletsUsedInCompany, setPelletsUsedInCompany] = useState(null);

  //refs
  const producedAndBougthGrapesChartRef = useRef(null);

  //graphs
  const [producedAndBoughtGrapesImage, setProducedAndBoughtGrapesImage] =
    useState(null);

  const getGeneralData = (year, company) => {
    getGeneralDataByYearAndCompany(year, company).then((res) => {
      if (res.data.Result == 0) {
        setProducedGrapes(
          (
            (parseFloat(res.data.Data["total_grapes_produced"]) /
              (parseFloat(res.data.Data["total_grapes_produced"]) +
                parseFloat(res.data.Data["total_grapes_bought"]))) *
            100
          ).toFixed(1)
        );

        setBoughtGrapes(
          (
            (parseFloat(res.data.Data["total_grapes_bought"]) /
              (parseFloat(res.data.Data["total_grapes_produced"]) +
                parseFloat(res.data.Data["total_grapes_bought"]))) *
            100
          ).toFixed(1)
        );

        setMustProducedFromGrapes(
          (
            (parseFloat(res.data.Data["total_must_produced_from_grapes"]) /
              (parseFloat(res.data.Data["total_must_produced_from_grapes"]) +
                parseFloat(res.data.Data["total_must_purchased"]))) *
            100
          ).toFixed(1)
        );

        setMustBought(
          (
            (parseFloat(res.data.Data["total_must_purchased"]) /
              (parseFloat(res.data.Data["total_must_produced_from_grapes"]) +
                parseFloat(res.data.Data["total_must_purchased"]))) *
            100
          ).toFixed(1)
        );

        setProducedGrapesMust(
          (
            ((parseFloat(res.data.Data["total_grapes_produced"]) * 0.73) /
              10 /
              (parseFloat(res.data.Data["total_must_produced_from_grapes"]) +
                parseFloat(res.data.Data["total_must_purchased"]))) *
            100
          ).toFixed(1)
        );

        setPurchasedInputsMust(
          (
            (((parseFloat(res.data.Data["total_grapes_bought"]) * 0.73) / 10 +
              parseFloat(res.data.Data["total_must_purchased"])) /
              (parseFloat(res.data.Data["total_must_produced_from_grapes"]) +
                parseFloat(res.data.Data["total_must_purchased"]))) *
            100
          ).toFixed(1)
        );

        setGlassBottles35(
          Math.round(
            (parseFloat(res.data.Data["glass_bottles_35"]) /
              parseFloat(res.data.Data["total_wine_produced"])) *
              100
          )
        );

        setGlassBottles75(
          Math.round(
            (parseFloat(res.data.Data["glass_bottles_75"]) /
              parseFloat(res.data.Data["total_wine_produced"])) *
              100
          )
        );

        setGlassBottles100(
          Math.round(
            (parseFloat(res.data.Data["glass_bottles_100"]) /
              parseFloat(res.data.Data["total_wine_produced"])) *
              100
          )
        );

        setPetBottles(
          Math.round(
            (parseFloat(res.data.Data["pet_bottles"]) /
              parseFloat(res.data.Data["total_wine_produced"])) *
              100
          )
        );

        setBagInBox3(
          Math.round(
            (parseFloat(res.data.Data["bag_in_box_3"]) /
              parseFloat(res.data.Data["total_wine_produced"])) *
              100
          )
        );

        setBagInBox5(
          Math.round(
            (parseFloat(res.data.Data["bag_in_box_5"]) /
              parseFloat(res.data.Data["total_wine_produced"])) *
              100
          )
        );

        setGeneralData(res.data.Data);
      } else {
        setGeneralData(res.data.Data);
      }
    });
  };

  const getWater = (year, company) => {
    getWaterByYearAndCompany(year, company).then((res) => {
      if (res.data.Result == 0) {
        console.log(res.data.Data);
        let sum =
          res.data.Data["total_water_from_network"] +
          res.data.Data["total_water_from_well"] +
          res.data.Data["total_water_from_cistern"];

        setFromNetwork(
          Math.round((res.data.Data["total_water_from_network"] / sum) * 100)
        );

        setFromWell(
          Math.round((res.data.Data["total_water_from_well"] / sum) * 100)
        );

        setFromCistern(
          Math.round((res.data.Data["total_water_from_cistern"] / sum) * 100)
        );

        setReusedWater(
          Math.round((res.data.Data["total_water_reused"] / sum) * 100)
        );

        setReusedWaterPercentage(
          Math.round(
            (res.data.Data["total_water_reused"] /
              (res.data.Data["total_water_from_cistern"] +
                res.data.Data["total_water_from_network"] +
                res.data.Data["total_water_from_well"])) *
              100
          )
        );

        setPressing(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_pressing"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_pressing"] *
              12) /
              358440) *
              100
          )
        );

        setTrasfega(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_trasfega"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_trasfega"] *
              12) /
              358440) *
              100
          )
        );

        setEstabilization(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_estabilization"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_estabilization"] *
              12) /
              358440) *
              100
          )
        );

        setFiltration(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_filtration"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_filtration"] *
              12) /
              358440) *
              100
          )
        );

        setCleaningDifferentFloors(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_different_floors"
            ] *
              res.data.Data[
                "number_of_cleaning_per_month_on_different_floors"
              ] *
              12) /
              358440) *
              100
          )
        );

        setSterilization(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_sterilization"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_sterilization"] *
              12) /
              421560) *
              100
          )
        );

        setFilling(
          Math.round(
            ((res.data.Data["water_consumed_by_equipment_cleaning_on_filling"] *
              res.data.Data["number_of_cleaning_per_month_on_filling"] *
              12) /
              421560) *
              100
          )
        );

        setLabeling(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_labeling"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_labeling"] *
              12) /
              421560) *
              100
          )
        );

        setBottlingDifferentFloors(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_bottling_different_floors"
            ] *
              res.data.Data[
                "number_of_cleaning_per_month_on_bottling_different_floors"
              ] *
              12) /
              421560) *
              100
          )
        );

        setPressingByProcess(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_pressing"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_pressing"] *
              12) /
              780000) *
              100
          )
        );

        setTrasfegaByProcess(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_trasfega"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_trasfega"] *
              12) /
              780000) *
              100
          )
        );

        setEstabilizationByProcess(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_estabilization"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_estabilization"] *
              12) /
              780000) *
              100
          )
        );

        setFiltrationByProcess(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_filtration"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_filtration"] *
              12) /
              780000) *
              100
          )
        );

        setSterilizationByProcess(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_sterilization"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_sterilization"] *
              12) /
              780000) *
              100
          )
        );

        setFillingByProcess(
          Math.round(
            ((res.data.Data["water_consumed_by_equipment_cleaning_on_filling"] *
              res.data.Data["number_of_cleaning_per_month_on_filling"] *
              12) /
              780000) *
              100
          )
        );

        setLabelingByProcess(
          Math.round(
            ((res.data.Data[
              "water_consumed_by_equipment_cleaning_on_labeling"
            ] *
              res.data.Data["number_of_cleaning_per_month_on_labeling"] *
              12) /
              780000) *
              100
          )
        );

        setConductivityHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["conductivity_high_season_treated_water"] /
              res.data.Data["conductivity_high_season_generated_water"]) *
            100
        );

        setTurbidityHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["turbidity_high_season_treated_water"] /
              res.data.Data["turbidity_high_season_generated_water"]) *
            100
        );

        setCQOHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["CQO_high_season_treated_water"] /
              res.data.Data["CQO_high_season_generated_water"]) *
            100
        );

        setCBOHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["CBO_high_season_treated_water"] /
              res.data.Data["CBO_high_season_generated_water"]) *
            100
        );

        setSSTHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["SST_high_season_treated_water"] /
              res.data.Data["SST_high_season_generated_water"]) *
            100
        );

        setNTKHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["NTK_high_season_treated_water"] /
              res.data.Data["NTK_high_season_generated_water"]) *
            100
        );

        setFenoisHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["fenois_high_season_treated_water"] /
              res.data.Data["fenois_high_season_generated_water"]) *
            100
        );

        setFosforoHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["fosforo_high_season_treated_water"] /
              res.data.Data["fosforo_high_season_generated_water"]) *
            100
        );

        setNitratosHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["nitratos_high_season_treated_water"] /
              res.data.Data["nitratos_high_season_generated_water"]) *
            100
        );

        setSulfatosHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["sulfatos_high_season_treated_water"] /
              res.data.Data["sulfatos_high_season_generated_water"]) *
            100
        );

        setFerroHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["ferro_high_season_treated_water"] /
              res.data.Data["ferro_high_season_generated_water"]) *
            100
        );

        setAluminumHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["aluminum_high_season_treated_water"] /
              res.data.Data["aluminum_high_season_generated_water"]) *
            100
        );

        setCadmioHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["cadmio_high_season_treated_water"] /
              res.data.Data["cadmio_high_season_generated_water"]) *
            100
        );

        setCobreHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["cobre_high_season_treated_water"] /
              res.data.Data["cobre_high_season_generated_water"]) *
            100
        );

        setCromioHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["cromio_high_season_treated_water"] /
              res.data.Data["cromio_high_season_generated_water"]) *
            100
        );

        setManganesHighSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["manganes_high_season_treated_water"] /
              res.data.Data["manganes_high_season_generated_water"]) *
            100
        );

        setConductivityLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["conductivity_low_season_treated_water"] /
              res.data.Data["conductivity_low_season_generated_water"]) *
            100
        );

        setTurbidityLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["turbidity_low_season_treated_water"] /
              res.data.Data["turbidity_low_season_generated_water"]) *
            100
        );

        setCQOLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["CQO_low_season_treated_water"] /
              res.data.Data["CQO_low_season_generated_water"]) *
            100
        );

        setCBOLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["CBO_low_season_treated_water"] /
              res.data.Data["CBO_low_season_generated_water"]) *
            100
        );

        setSSTLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["SST_low_season_treated_water"] /
              res.data.Data["SST_low_season_generated_water"]) *
            100
        );

        setNTKLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["NTK_low_season_treated_water"] /
              res.data.Data["NTK_low_season_generated_water"]) *
            100
        );

        setFenoisLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["ferro_low_season_treated_water"] /
              res.data.Data["ferro_low_season_generated_water"]) *
            100
        );

        setFosforoLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["fosforo_low_season_treated_water"] /
              res.data.Data["fosforo_low_season_generated_water"]) *
            100
        );

        setNitratosLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["nitratos_low_season_treated_water"] /
              res.data.Data["nitratos_low_season_generated_water"]) *
            100
        );

        setSulfatosLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["sulfatos_low_season_treated_water"] /
              res.data.Data["sulfatos_low_season_generated_water"]) *
            100
        );

        setFerroLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["ferro_low_season_treated_water"] /
              res.data.Data["ferro_low_season_generated_water"]) *
            100
        );

        setAluminumLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["aluminum_low_season_treated_water"] /
              res.data.Data["aluminum_low_season_generated_water"]) *
            100
        );

        setCadmioLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["cadmio_low_season_treated_water"] /
              res.data.Data["cadmio_low_season_generated_water"]) *
            100
        );

        setCobreLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["cobre_low_season_treated_water"] /
              res.data.Data["cobre_low_season_generated_water"]) *
            100
        );

        setCromioLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["cromio_low_season_treated_water"] /
              res.data.Data["cromio_low_season_generated_water"]) *
            100
        );

        setManganesLowSeasonGeneratedWaterPercentage(
          (1 -
            res.data.Data["manganes_low_season_treated_water"] /
              res.data.Data["manganes_low_season_generated_water"]) *
            100
        );

        ///////
        setPhHighSeasonTreatedWater(
          res.data.Data["ph_high_season_treated_water"]
        );

        setConductivityHighSeasonTreatedWater(
          res.data.Data["conductivity_high_season_treated_water"]
        );

        setTurbidityHighSeasonTreatedWater(
          res.data.Data["turbidity_high_season_treated_water"]
        );

        setCQOHighSeasonTreatedWater(
          res.data.Data["CQO_high_season_treated_water"]
        );

        setCBOHighSeasonTreatedWater(
          res.data.Data["CBO_high_season_treated_water"]
        );

        setSSTHighSeasonTreatedWater(
          res.data.Data["SST_high_season_treated_water"]
        );

        setNTKHighSeasonTreatedWater(
          res.data.Data["NTK_high_season_treated_water"]
        );

        setFenoisHighSeasonTreatedWater(
          res.data.Data["fenois_high_season_treated_water"]
        );

        setFosforoHighSeasonTreatedWater(
          res.data.Data["fosforo_high_season_treated_water"]
        );

        setNitratosHighSeasonTreatedWater(
          res.data.Data["nitratos_high_season_treated_water"]
        );

        setSulfatosHighSeasonTreatedWater(
          res.data.Data["sulfatos_high_season_treated_water"]
        );

        setFerroHighSeasonTreatedWater(
          res.data.Data["ferro_high_season_treated_water"]
        );

        setAluminumHighSeasonTreatedWater(
          res.data.Data["aluminum_high_season_treated_water"]
        );

        setCadmioHighSeasonTreatedWater(
          res.data.Data["cadmio_high_season_treated_water"]
        );

        setCobreHighSeasonTreatedWater(
          res.data.Data["cobre_high_season_treated_water"]
        );

        setCromioHighSeasonTreatedWater(
          res.data.Data["cromio_high_season_treated_water"]
        );

        setManganesHighSeasonTreatedWater(
          res.data.Data["manganes_high_season_treated_water"]
        );

        setPhLowSeasonTreatedWater(
          res.data.Data["ph_low_season_treated_water"]
        );

        setConductivityLowSeasonTreatedWater(
          res.data.Data["conductivity_low_season_treated_water"]
        );

        setTurbidityLowSeasonTreatedWater(
          res.data.Data["turbidity_low_season_treated_water"]
        );

        setCQOLowSeasonTreatedWater(
          res.data.Data["CQO_low_season_treated_water"]
        );

        setCBOLowSeasonTreatedWater(
          res.data.Data["CBO_low_season_treated_water"]
        );

        setSSTLowSeasonTreatedWater(
          res.data.Data["SST_low_season_treated_water"]
        );

        setNTKLowSeasonTreatedWater(
          res.data.Data["NTK_low_season_treated_water"]
        );

        setFenoisLowSeasonTreatedWater(
          res.data.Data["fenois_low_season_treated_water"]
        );

        setFosforoLowSeasonTreatedWater(
          res.data.Data["fosforo_low_season_treated_water"]
        );

        setNitratosLowSeasonTreatedWater(
          res.data.Data["nitratos_low_season_treated_water"]
        );

        setSulfatosLowSeasonTreatedWater(
          res.data.Data["sulfatos_low_season_treated_water"]
        );

        setFerroLowSeasonTreatedWater(
          res.data.Data["ferro_low_season_treated_water"]
        );

        setAluminumLowSeasonTreatedWater(
          res.data.Data["aluminum_low_season_treated_water"]
        );

        setCadmioLowSeasonTreatedWater(
          res.data.Data["cadmio_low_season_treated_water"]
        );

        setCobreLowSeasonTreatedWater(
          res.data.Data["cobre_low_season_treated_water"]
        );

        setCromioLowSeasonTreatedWater(
          res.data.Data["cromio_low_season_treated_water"]
        );

        setManganesLowSeasonTreatedWater(
          res.data.Data["manganes_low_season_treated_water"]
        );
      }
    });
  };

  const getEnergy = (year, company) => {
    getEnergyByYearAndCompany(year, company).then((res) => {
      if (res.data.Result == 0) {
        let totalConsumedBought = res.data.Data["consumed_electricity_bought"];

        setNaturalGasBought(
          Math.round(
            (res.data.Data["natural_gas_bought"] /
              res.data.Data["consumed_electricity_bought"]) *
              100
          )
        );

        setDieselBought(
          Math.round(
            (res.data.Data["diesel_bought"] / totalConsumedBought) * 100
          )
        );

        setFuelOilBought(
          Math.round(
            (res.data.Data["fuel_oil_bought"] / totalConsumedBought) * 100
          )
        );

        setNuclearBought(
          Math.round(
            (res.data.Data["nuclear_bought"] / totalConsumedBought) * 100
          )
        );

        setCoalBought(
          Math.round((res.data.Data["coal_bought"] / totalConsumedBought) * 100)
        );

        setWindEnergyBought(
          Math.round(
            (res.data.Data["wind_energy_bought"] / totalConsumedBought) * 100
          )
        );

        setHidrelectricBought(
          Math.round(
            (res.data.Data["hidrelectric_bought"] / totalConsumedBought) * 100
          )
        );

        setSolarBought(
          Math.round(
            (res.data.Data["solar_bought"] / totalConsumedBought) * 100
          )
        );

        setBiomassBought(
          Math.round(
            (res.data.Data["biomass_bought"] / totalConsumedBought) * 100
          )
        );

        setBiogasBought(
          Math.round(
            (res.data.Data["biogas_bought"] /
              res.data.Data["consumed_electricity_bought"]) *
              100
          )
        );

        setHidrelectricProduced(
          Math.round(
            (res.data.Data["hidrelectric_produced"] /
              res.data.Data["consumed_electricity_produced"]) *
              100
          )
        );

        setSolarProduced(
          Math.round(
            (res.data.Data["solar_produced"] /
              res.data.Data["consumed_electricity_produced"]) *
              100
          )
        );

        setBiomassProduced(
          Math.round(
            (res.data.Data["biomass_produced"] /
              res.data.Data["consumed_electricity_produced"]) *
              100
          )
        );

        setBiogasProduced(
          Math.round(
            (res.data.Data["biogas_produced"] /
              res.data.Data["consumed_electricity_produced"]) *
              100
          )
        );

        let totalEnergyConsumed =
          res.data.Data["pure_diesel_used_in_company"] * 10.04 +
          res.data.Data["pure_gasoline_used_in_company"] * 10.2 +
          res.data.Data["biofuel_used_in_company"] * 9.2 +
          res.data.Data["lubricant_used_in_company"] * 9.78 +
          res.data.Data["butane_used_in_company"] * 7.24 +
          res.data.Data["propane_used_in_company"] * 6.64 +
          res.data.Data["gpl_auto_used_in_company"] * 6.76 +
          res.data.Data["natural_gas_used_in_company"] * 0.01 +
          res.data.Data["biogas_used_in_company"] * 0.01 +
          res.data.Data["wood_used_in_company"] * 1000 * 3.93 +
          res.data.Data["pellets_used_in_company"] * 1000 * 4.8;

        setPureDieselUsedInCompany(
          Math.round(
            ((res.data.Data["pure_diesel_used_in_company"] * 10.04) /
              totalEnergyConsumed) *
              100
          )
        );

        setPureGasolineUsedInCompany(
          Math.round(
            ((res.data.Data["pure_gasoline_used_in_company"] * 10.1) /
              totalEnergyConsumed) *
              100
          )
        );

        setBiofuelUsedInCompany(
          Math.round(
            ((res.data.Data["biofuel_used_in_company"] * 9.2) /
              totalEnergyConsumed) *
              100
          )
        );

        setLubricantUsedInCompany(
          Math.round(
            ((res.data.Data["lubricant_used_in_company"] * 9.78) /
              totalEnergyConsumed) *
              100
          )
        );

        setButaneUsedInCompany(
          Math.round(
            ((res.data.Data["butane_used_in_company"] * 7.24) /
              totalEnergyConsumed) *
              100
          )
        );

        setPropaneUsedInCompany(
          Math.round(
            ((res.data.Data["propane_used_in_company"] * 6.64) /
              totalEnergyConsumed) *
              100
          )
        );

        setGplAutoUsedInCompany(
          Math.round(
            ((res.data.Data["gpl_auto_used_in_company"] * 6.76) /
              totalEnergyConsumed) *
              100
          )
        );

        setNaturalGasUsedInCompany(
          Math.round(
            ((res.data.Data["natural_gas_used_in_company"] * 0.01) /
              totalEnergyConsumed) *
              100
          )
        );

        setBiogasUsedInCompany(
          Math.round(
            ((res.data.Data["biogas_used_in_company"] * 0.01) /
              totalEnergyConsumed) *
              100
          )
        );

        setWoodsUsedInCompany(
          Math.round(
            ((res.data.Data["wood_used_in_company"] * 1000 * 3.93) /
              totalEnergyConsumed) *
              100
          )
        );

        setPelletsUsedInCompany(
          Math.round(
            ((res.data.Data["pellets_used_in_company"] * 1000 * 4.8) /
              totalEnergyConsumed) *
              100
          )
        );

        /*let sum =
          res.data.Data["total_water_from_network"] +
          res.data.Data["total_water_from_well"] +
          res.data.Data["total_water_from_cistern"];

        setFromNetwork(
          Math.round((res.data.Data["total_water_from_network"] / sum) * 100)
        );

        setFromWell(
          Math.round((res.data.Data["total_water_from_well"] / sum) * 100)
        );

        setFromCistern(
          Math.round((res.data.Data["total_water_from_cistern"] / sum) * 100)
        );

        setReusedWater(
          Math.round((res.data.Data["total_water_reused"] / sum) * 100)
        );*/
      }
    });
  };

  const [years, setYears] = useState([]);
  const context = useContext(AppContext);
  const [report, setReport] = useState(null);
  const [grapesProducedAndBoughtData, setGrapesProducedAndBoughtData] =
    useState(0);
  const [spinner, setSpinner] = useState(true);

  const [topics, setTopics] = useState([
    { id: "generalData", name: "Dados gerais" },
    { id: "materials", name: "Materiais" },
    { id: "energy", name: "Energia" },
    { id: "waste", name: "Resíduos" },
    { id: "water", name: "Água" },
  ]);

  const [selectedYear, setSelectedYear] = useState(null);

  const [selectedTopic, setSelectedTopic] = useState(null);

  const [reusedWaterPercentage, setReusedWaterPercentage] = useState("");

  useEffect(() => {
    const chart = producedAndBougthGrapesChartRef.current;

    getGeneralData(
      new Date().getFullYear(),
      localStorage.getItem("loggedUserCompany")
    );
    getWater(
      new Date().getFullYear(),
      localStorage.getItem("loggedUserCompany")
    );

    getEnergy(
      new Date().getFullYear(),
      localStorage.getItem("loggedUserCompany")
    );
    setSelectedTopic(topics[0]);
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

    getReport(new Date().getFullYear(), "Empresa 1").then((res) => {
      if (res.data.Data != null) {
        setGrapesProducedAndBoughtData({
          labels: ["Produzidas e utilizadas", "Compradas e utilizadas"],
          datasets: [
            {
              data: [
                res.data.Data.grapes_produced,
                res.data.Data.grapes_bought,
              ],
              backgroundColor: ["#ed7d31", "#4472c4"],
              hoverBackgroundColor: ["#ed7d31", "#4472c4"],
            },
          ],
        });

        setReport(res.data.Data);
      }
    });

    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);

  const getReport = async (year, company_name) => {
    return await axios.get(
      "http://localhost:5000/api/reports/getByYearAndCompany",
      {
        params: { year: year, company_name: company_name },
      }
    );
  };

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

  return (
    <Fragment>
      {spinner && <Spinner color="primary" />}

      {!spinner && (
        <Fragment>
          <AppNavbar />

          <Row id="header-container" className="mx-0 py-0 px-md-3 px-lg-4">
            <Col className="d-flex align-items-center">
              <div
                className="d-flex align-items-center"
                style={{ marginRight: "20px" }}
              >
                <FontAwesomeIcon id="edit-icon" icon={faFile} />
                <span id="header-title">Relatórios</span>
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
                              let company = context.loggedUser["company"];
                              getGeneralData(
                                item.year,
                                localStorage.getItem("loggedUserCompany")
                              );
                              getWater(item.year, company);
                              getEnergy(item.year, company);
                              context.setSelectedYear(item);
                              /*fetchData(
                    item.year,
                    context.loggedUser && context.loggedUser["company"]
                  );*/
                            }}
                          >
                            {item.year}
                          </Dropdown.Item>
                        ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Button
                  id="header-btn"
                  disabled={
                    context.isCompleted1 == false ||
                    context.isCompleted2 == false ||
                    context.isCompleted3 == false ||
                    context.isCompleted4 == false ||
                    context.isCompleted5 == false ||
                    context.isCompleted6 == false ||
                    context.isCompleted7 == false ||
                    context.isCompleted8 == false ||
                    context.isCompleted9 == false ||
                    context.isCompleted10 == false ||
                    context.isCompleted11 == false ||
                    context.isCompleted12 == false
                  }
                  onClick={async () => {
                    const canvas = await html2canvas(
                      document.getElementById("residualWatersTable")
                    );

                    const tableImage = canvas.toDataURL();

                    console.log("canvas: ", tableImage);

                    const blob = await pdf(
                      <ReportDocument
                        data={{
                          producedAndBoughtGrapesGraph:
                            context.producedAndBoughtGrapesImage,
                          producedAndBoughtMustGraph:
                            context.producedAndBoughtMustImage,
                          mustFromProducedGrapesGraph:
                            context.mustFromProducedGrapesImage,
                          totalWineProportionsByTypeGraph:
                            context.totalWineProportionsByTypeImage,
                          waterConsumptionBySourceGraph:
                            context.waterConsumptionBySourceImage,
                          reusedWaterPercentage: reusedWaterPercentage,
                          waterConsumptionByWinemakingProcessImage:
                            context.waterConsumptionByWinemakingProcessImage,
                          waterConsumptionByBottlingProcessImage:
                            context.waterConsumptionByBottlingProcessImage,
                          waterConsumptionByProcessImage:
                            context.waterConsumptionByProcessImage,
                          pollutantRemovalPercentageImage:
                            context.pollutantRemovalPercentageImage,
                          electricityBySourceImage:
                            context.electricityBySourceImage,
                          electricityProducedBySourceImage:
                            context.electricityProducedBySourceImage,
                          electricityConsumedInCompanyInstalationsImage:
                            context.electricityConsumedInCompanyInstalationsImage,
                          residualWatersTableImage: tableImage,
                        }}
                      />
                    ).toBlob();

                    saveAs(blob, "pageName");
                  }}
                >
                  Download documento
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="mx-0 py-0 px-md-3 px-lg-4">
            {context.isYearLoaded && (
              <Row className="mx-0">
                <Fragment>
                  <GeneralDataReport
                    producedGrapes={producedGrapes}
                    boughtGrapes={boughtGrapes}
                    mustProducedFromGrapes={mustProducedFromGrapes}
                    mustBought={mustBought}
                    producedGrapesMust={producedGrapesMust}
                    purchasedInputsMust={purchasedInputsMust}
                    glassBottles35={glassBottles35}
                    glassBottles75={glassBottles75}
                    glassBottles100={glassBottles100}
                    petBottles={petBottles}
                    bagInBox3={bagInBox3}
                    bagInBox5={bagInBox5}
                    generalData={generalData}
                    producedAndBougthGrapesChartRef={
                      producedAndBougthGrapesChartRef
                    }
                  />
                </Fragment>
                <Fragment>
                  <EnergyReport
                    naturalGasBought={naturalGasBought}
                    dieselBought={dieselBought}
                    fuelOilBought={fuelOilBought}
                    nuclearBought={nuclearBought}
                    coalBought={coalBought}
                    windEnergyBought={windEnergyBought}
                    hidrelectricBought={hidrelectricBought}
                    solarBought={solarBought}
                    biomassBought={biomassBought}
                    biogasBought={biogasBought}
                    hidrelectricProduced={hidrelectricProduced}
                    solarProduced={solarProduced}
                    biomassProduced={biomassProduced}
                    biogasProduced={biogasProduced}
                    pureDieselUsedInCompany={pureDieselUsedInCompany}
                    pureGasolineUsedInCompany={pureGasolineUsedInCompany}
                    biofuelUsedInCompany={biofuelUsedInCompany}
                    lubricantUsedInCompany={lubricantUsedInCompany}
                    butaneUsedInCompany={butaneUsedInCompany}
                    propaneUsedInCompany={propaneUsedInCompany}
                    gplAutoUsedInCompany={gplAutoUsedInCompany}
                    naturalGasUsedInCompany={naturalGasUsedInCompany}
                    biogasUsedInCompany={biogasUsedInCompany}
                    woodsUsedInCompany={woodsUsedInCompany}
                    pelletsUsedInCompany={pelletsUsedInCompany}
                  />
                </Fragment>
                <Fragment>
                  <WaterReport
                    fromNetwork={fromNetwork}
                    fromWell={fromWell}
                    fromCistern={fromCistern}
                    reusedWater={reusedWater}
                    pressing={pressing}
                    trasfega={trasfega}
                    estabilization={estabilization}
                    filtration={filtration}
                    cleaningDifferentFloors={cleaningDifferentFloors}
                    sterilization={sterilization}
                    filling={filling}
                    labeling={labeling}
                    bottlingDifferentFloors={bottlingDifferentFloors}
                    pressingByProcess={pressingByProcess}
                    trasfegaByProcess={trasfegaByProcess}
                    estabilizationByProcess={estabilizationByProcess}
                    filtrationByProcess={filtrationByProcess}
                    sterilizationByProcess={sterilizationByProcess}
                    fillingByProcess={fillingByProcess}
                    labelingByProcess={labelingByProcess}
                    conductivityHighSeasonGeneratedWaterPercentage={
                      conductivityHighSeasonGeneratedWaterPercentage
                    }
                    turbidityHighSeasonGeneratedWaterPercentage={
                      turbidityHighSeasonGeneratedWaterPercentage
                    }
                    CQOHighSeasonGeneratedWaterPercentage={
                      CQOHighSeasonGeneratedWaterPercentage
                    }
                    CBOHighSeasonGeneratedWaterPercentage={
                      CBOHighSeasonGeneratedWaterPercentage
                    }
                    SSTHighSeasonGeneratedWaterPercentage={
                      SSTHighSeasonGeneratedWaterPercentage
                    }
                    NTKHighSeasonGeneratedWaterPercentage={
                      NTKHighSeasonGeneratedWaterPercentage
                    }
                    fenoisHighSeasonGeneratedWaterPercentage={
                      fenoisHighSeasonGeneratedWaterPercentage
                    }
                    fosforoHighSeasonGeneratedWaterPercentage={
                      fosforoHighSeasonGeneratedWaterPercentage
                    }
                    nitratosHighSeasonGeneratedWaterPercentage={
                      nitratosHighSeasonGeneratedWaterPercentage
                    }
                    sulfatosHighSeasonGeneratedWaterPercentage={
                      sulfatosHighSeasonGeneratedWaterPercentage
                    }
                    ferroHighSeasonGeneratedWaterPercentage={
                      ferroHighSeasonGeneratedWaterPercentage
                    }
                    aluminumHighSeasonGeneratedWaterPercentage={
                      aluminumHighSeasonGeneratedWaterPercentage
                    }
                    cadmioHighSeasonGeneratedWaterPercentage={
                      cadmioHighSeasonGeneratedWaterPercentage
                    }
                    cobreHighSeasonGeneratedWaterPercentage={
                      cobreHighSeasonGeneratedWaterPercentage
                    }
                    cromioHighSeasonGeneratedWaterPercentage={
                      cromioHighSeasonGeneratedWaterPercentage
                    }
                    manganesHighSeasonGeneratedWaterPercentage={
                      manganesHighSeasonGeneratedWaterPercentage
                    }
                    conductivityLowSeasonGeneratedWaterPercentage={
                      conductivityLowSeasonGeneratedWaterPercentage
                    }
                    turbidityLowSeasonGeneratedWaterPercentage={
                      turbidityLowSeasonGeneratedWaterPercentage
                    }
                    CQOLowSeasonGeneratedWaterPercentage={
                      CQOLowSeasonGeneratedWaterPercentage
                    }
                    CBOLowSeasonGeneratedWaterPercentage={
                      CBOLowSeasonGeneratedWaterPercentage
                    }
                    SSTLowSeasonGeneratedWaterPercentage={
                      SSTLowSeasonGeneratedWaterPercentage
                    }
                    NTKLowSeasonGeneratedWaterPercentage={
                      NTKLowSeasonGeneratedWaterPercentage
                    }
                    fenoisLowSeasonGeneratedWaterPercentage={
                      fenoisLowSeasonGeneratedWaterPercentage
                    }
                    fosforoLowSeasonGeneratedWaterPercentage={
                      fosforoLowSeasonGeneratedWaterPercentage
                    }
                    nitratosLowSeasonGeneratedWaterPercentage={
                      nitratosLowSeasonGeneratedWaterPercentage
                    }
                    sulfatosLowSeasonGeneratedWaterPercentage={
                      sulfatosLowSeasonGeneratedWaterPercentage
                    }
                    ferroLowSeasonGeneratedWaterPercentage={
                      ferroLowSeasonGeneratedWaterPercentage
                    }
                    aluminumLowSeasonGeneratedWaterPercentage={
                      aluminumLowSeasonGeneratedWaterPercentage
                    }
                    cadmioLowSeasonGeneratedWaterPercentage={
                      cadmioLowSeasonGeneratedWaterPercentage
                    }
                    cobreLowSeasonGeneratedWaterPercentage={
                      cobreLowSeasonGeneratedWaterPercentage
                    }
                    cromioLowSeasonGeneratedWaterPercentage={
                      cromioLowSeasonGeneratedWaterPercentage
                    }
                    manganesLowSeasonGeneratedWaterPercentage={
                      manganesLowSeasonGeneratedWaterPercentage
                    }
                  />
                </Fragment>
                <Col md={12} className="mb-md-5">
                  <Table id="residualWatersTable" bordered>
                    <thead className="text-center">
                      <tr>
                        <th rowSpan="3">PARÂMETRO</th>
                        <th colSpan="2">
                          CUMPRIMENTO PARA DESCARGA EM CORPO HÍDRICO
                        </th>
                        <th colSpan="4">DESTINADAS A REGA</th>
                      </tr>
                      <tr>
                        <th rowSpan="2">ÉPOCA ALTA</th>
                        <th rowSpan="2">ÉPOCA BAIXA</th>
                        <th>ÉPOCA ALTA</th>
                        <th>ÉPOCA BAIXA</th>
                        <th>ÉPOCA ALTA</th>
                        <th>ÉPOCA BAIXA</th>
                      </tr>
                      <tr>
                        <th colSpan="2">VMR</th>
                        <th colSpan="2">VMA</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>pH</td>
                        <td
                          className={
                            phHighSeasonTreatedWater >= 6 &&
                            phHighSeasonTreatedWater <= 9
                              ? "bg-success text-white font-weight-bold"
                              : "bg-danger text-white font-weight-bold"
                          }
                        >
                          {phHighSeasonTreatedWater >= 6 &&
                          phHighSeasonTreatedWater <= 9
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            phHighSeasonTreatedWater >= 6 &&
                            phHighSeasonTreatedWater <= 9
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {phHighSeasonTreatedWater >= 6 &&
                          phHighSeasonTreatedWater <= 9
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            phHighSeasonTreatedWater >= 6.5 &&
                            phHighSeasonTreatedWater <= 8.4
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {phHighSeasonTreatedWater >= 6.5 &&
                          phHighSeasonTreatedWater <= 8.4
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            phLowSeasonTreatedWater >= 6.5 &&
                            phLowSeasonTreatedWater <= 8.4
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {phLowSeasonTreatedWater >= 6.5 &&
                          phLowSeasonTreatedWater <= 8.4
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            phHighSeasonTreatedWater >= 4.5 &&
                            phHighSeasonTreatedWater <= 9
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {phHighSeasonTreatedWater >= 4.5 &&
                          phHighSeasonTreatedWater <= 9
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            phLowSeasonTreatedWater >= 4.5 &&
                            phLowSeasonTreatedWater <= 9
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {phLowSeasonTreatedWater >= 4.5 &&
                          phLowSeasonTreatedWater <= 9
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                      </tr>
                      <tr>
                        <td>Condutividade</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Turbidez</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Carência Química de Oxigénio (CQO)</td>
                        <td
                          className={
                            CQOHighSeasonTreatedWater < 150
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {CQOHighSeasonTreatedWater < 150
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            CQOLowSeasonTreatedWater < 150
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {CQOLowSeasonTreatedWater < 150
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Carência Bioquímica de Oxigénio (CBO5, 20oC)</td>
                        <td
                          className={
                            CBOHighSeasonTreatedWater < 40
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {CBOHighSeasonTreatedWater < 40
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            CBOLowSeasonTreatedWater < 40
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {CBOLowSeasonTreatedWater < 40
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Sólidos Suspensos Totais (SST)</td>
                        <td
                          className={
                            SSTHighSeasonTreatedWater < 60
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {SSTHighSeasonTreatedWater < 60
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            SSTLowSeasonTreatedWater < 60
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {SSTLowSeasonTreatedWater < 60
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            SSTHighSeasonTreatedWater < 60
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {SSTHighSeasonTreatedWater < 60
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            SSTLowSeasonTreatedWater < 60
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {SSTLowSeasonTreatedWater < 60
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Azoto Total (NTK)</td>
                        <td
                          className={
                            NTKHighSeasonTreatedWater < 15
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {NTKHighSeasonTreatedWater < 15
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            NTKLowSeasonTreatedWater < 15
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {NTKLowSeasonTreatedWater < 15
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Fenóis (C6H5OH)</td>
                        <td
                          className={
                            fenoisHighSeasonTreatedWater < 0.5
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {fenoisHighSeasonTreatedWater < 0.5
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            fenoisLowSeasonTreatedWater < 0.5
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {fenoisLowSeasonTreatedWater < 0.5
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Fósforo total (P)</td>
                        <td
                          className={
                            fosforoHighSeasonTreatedWater < 10
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {fosforoHighSeasonTreatedWater < 10
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            fosforoLowSeasonTreatedWater < 10
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {fosforoLowSeasonTreatedWater < 10
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Nitratos (NO3-)</td>
                        <td
                          className={
                            nitratosHighSeasonTreatedWater < 50
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {nitratosHighSeasonTreatedWater < 50
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            nitratosLowSeasonTreatedWater < 50
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {nitratosLowSeasonTreatedWater < 50
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            nitratosHighSeasonTreatedWater < 50
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {nitratosHighSeasonTreatedWater < 50
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            nitratosLowSeasonTreatedWater < 50
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {nitratosLowSeasonTreatedWater < 50
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Sulfatos (SO4 2-)</td>
                        <td
                          className={
                            sulfatosHighSeasonTreatedWater < 2000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {sulfatosHighSeasonTreatedWater < 2000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            sulfatosLowSeasonTreatedWater < 2000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {sulfatosLowSeasonTreatedWater < 2000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            sulfatosHighSeasonTreatedWater < 575
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {sulfatosHighSeasonTreatedWater < 575
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            sulfatosLowSeasonTreatedWater < 575
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {sulfatosLowSeasonTreatedWater < 575
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Ferro total (Fe)</td>
                        <td
                          className={
                            ferroHighSeasonTreatedWater < 2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {ferroHighSeasonTreatedWater < 2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            ferroLowSeasonTreatedWater < 2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {ferroLowSeasonTreatedWater < 2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Alumínio (Al3+)</td>
                        <td
                          className={
                            aluminumHighSeasonTreatedWater < 10
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {aluminumHighSeasonTreatedWater < 10
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            aluminumLowSeasonTreatedWater < 10
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {aluminumLowSeasonTreatedWater < 10
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            aluminumHighSeasonTreatedWater < 5
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {aluminumHighSeasonTreatedWater < 5
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            aluminumLowSeasonTreatedWater < 5
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {aluminumLowSeasonTreatedWater < 5
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            aluminumHighSeasonTreatedWater < 20
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {aluminumHighSeasonTreatedWater < 20
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            aluminumLowSeasonTreatedWater < 20
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {aluminumLowSeasonTreatedWater < 20
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                      </tr>
                      <tr>
                        <td>Cádmio total (Cd)</td>
                        <td
                          className={
                            cadmioHighSeasonTreatedWater < 0.2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cadmioHighSeasonTreatedWater < 0.2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cadmioLowSeasonTreatedWater < 0.2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cadmioLowSeasonTreatedWater < 0.2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cadmioHighSeasonTreatedWater < 10
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cadmioHighSeasonTreatedWater < 10
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cadmioLowSeasonTreatedWater < 10
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cadmioLowSeasonTreatedWater < 10
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cadmioHighSeasonTreatedWater < 50
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cadmioHighSeasonTreatedWater < 50
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cadmioLowSeasonTreatedWater < 50
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cadmioLowSeasonTreatedWater < 50
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                      </tr>
                      <tr>
                        <td>Cobre total (Cu)</td>
                        <td
                          className={
                            cobreHighSeasonTreatedWater < 1
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cobreHighSeasonTreatedWater < 1
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cobreLowSeasonTreatedWater < 1
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cobreLowSeasonTreatedWater < 1
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cobreHighSeasonTreatedWater < 200
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cobreHighSeasonTreatedWater < 200
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cobreLowSeasonTreatedWater < 200
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cobreLowSeasonTreatedWater < 200
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cobreHighSeasonTreatedWater < 5000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cobreHighSeasonTreatedWater < 5000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cobreLowSeasonTreatedWater < 5000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cobreLowSeasonTreatedWater < 5000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                      </tr>
                      <tr>
                        <td>Crómio total (Cr)</td>
                        <td
                          className={
                            cromioHighSeasonTreatedWater < 2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cromioHighSeasonTreatedWater < 2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cromioLowSeasonTreatedWater < 2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cromioLowSeasonTreatedWater < 2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cromioHighSeasonTreatedWater < 200
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cromioHighSeasonTreatedWater < 200
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cromioLowSeasonTreatedWater < 200
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cromioLowSeasonTreatedWater < 200
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cromioHighSeasonTreatedWater < 5000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cromioHighSeasonTreatedWater < 5000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            cromioLowSeasonTreatedWater < 5000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {cromioLowSeasonTreatedWater < 5000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                      </tr>
                      <tr>
                        <td>Manganês total (Mn)</td>
                        <td
                          className={
                            manganesHighSeasonTreatedWater < 2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {manganesHighSeasonTreatedWater < 2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            manganesLowSeasonTreatedWater < 2
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {manganesLowSeasonTreatedWater < 2
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            manganesHighSeasonTreatedWater < 200
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {manganesHighSeasonTreatedWater < 200
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            manganesLowSeasonTreatedWater < 200
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {manganesLowSeasonTreatedWater < 200
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            manganesHighSeasonTreatedWater < 10000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {manganesHighSeasonTreatedWater < 10000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                        <td
                          className={
                            manganesLowSeasonTreatedWater < 10000
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                          }
                        >
                          {manganesLowSeasonTreatedWater < 10000
                            ? "CUMPRE"
                            : "NÃO CUMPRE"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            )}
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Relatorios;

/*

                    <Fragment>
                      <WasteReport />
                    </Fragment>

                    <Fragment>
                      <EnergyReport
                        naturalGasBought={naturalGasBought}
                        dieselBought={dieselBought}
                        fuelOilBought={fuelOilBought}
                        nuclearBought={nuclearBought}
                        coalBought={coalBought}
                        windEnergyBought={windEnergyBought}
                        hidrelectricBought={hidrelectricBought}
                        solarBought={solarBought}
                        biomassBought={biomassBought}
                        biogasBought={biogasBought}
                        hidrelectricProduced={hidrelectricProduced}
                        solarProduced={solarProduced}
                        biomassProduced={biomassProduced}
                        biogasProduced={biogasProduced}
                        pureDieselUsedInCompany={pureDieselUsedInCompany}
                        pureGasolineUsedInCompany={pureGasolineUsedInCompany}
                        biofuelUsedInCompany={biofuelUsedInCompany}
                        lubricantUsedInCompany={lubricantUsedInCompany}
                        butaneUsedInCompany={butaneUsedInCompany}
                        propaneUsedInCompany={propaneUsedInCompany}
                        gplAutoUsedInCompany={gplAutoUsedInCompany}
                        naturalGasUsedInCompany={naturalGasUsedInCompany}
                        biogasUsedInCompany={biogasUsedInCompany}
                        woodsUsedInCompany={woodsUsedInCompany}
                        pelletsUsedInCompany={pelletsUsedInCompany}
                      />
                    </Fragment>
                  

                    <Fragment>
                      <WaterReport
                        fromNetwork={fromNetwork}
                        fromWell={fromWell}
                        fromCistern={fromCistern}
                        reusedWater={reusedWater}
                      />
                    </Fragment>
                  
*/

/*

<Dropdown className="mb-1">
                  <Dropdown.Toggle id="header-btn">
                    {selectedTopic["name"]}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    {topics &&
                      topics.map((item) => (
                        <Dropdown.Item
                          key={item.name}
                          style={{
                            backgroundColor:
                              item.name == selectedTopic["name"]
                                ? "rgb(80, 116, 77)"
                                : "",
                          }}
                          active={item.name == selectedTopic["name"]}
                          onClick={() => {
                            setSelectedTopic(item);
                          }}
                        >
                          {item.name}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>

                */
