import IMMO_DATA from "./real-estate.data";

import { removeDots } from "../components/input/input.utils";

const createRegex = splitedStr => {
  let str = "";
  for (let i = 0; i < splitedStr.length; i++) {
    if (i === 0) str += "^(?=.*" + splitedStr[i] + ")";
    else if (i === splitedStr.length) str += "^(?=.*" + splitedStr[i] + ").*$";
    else str += "(?=.*" + splitedStr[i] + ")";
  }
  let regex = new RegExp(`${str}`, "gi");
  return regex;
};

export const filterData = (filter, data = IMMO_DATA) => {
  let federalStatesArray = [];
  let citiesLocalitiesArray = [];
  let streetsPostcodeLocalitiesArray = [];
  let allResults = [];
  let realEstateArray = [];
  let search = filter["search"];
  let realEstateType = filter["realEstateType"].toLowerCase();
  let minInput = !!filter["minInput"]
    ? Number(removeDots(filter["minInput"].toString()))
    : null;
  let maxInput = !!filter["maxInput"]
    ? Number(removeDots(filter["maxInput"].toString()))
    : null;
  let obtainingType = filter["obtainingType"].toLowerCase();
  let livingspace = !!filter["livingspace"]
    ? Number(removeDots(filter["livingspace"].toString()))
    : null;
  let property = !!filter["property"]
    ? Number(removeDots(filter["property"].toString()))
    : null;
  let rooms = !!filter["rooms"]
    ? Number(removeDots(filter["rooms"].toString()))
    : null;
  let bathrooms = !!filter["bathrooms"]
    ? Number(removeDots(filter["bathrooms"].toString()))
    : null;
  let hits = 0;
  let totalArrayLength = 0;
  let splitedStr = !!search ? search.split(/[ ,-]+/) : "";
  //entfernt alles leere
  splitedStr = !!search ? splitedStr.filter(i => i) : "";
  let regex = splitedStr.length > 0 ? createRegex(splitedStr) : "";
  //hier wird für bundesländer/ortschaften gefiltert davon ist die gesamt anzahl des arrays abhängig
  //deswegen gibt es dafür zwei for schleifen
  for (let i in data) {
    if (!!!data[i][realEstateType]) continue;
    if (data[i][realEstateType]["bezugsart"] !== obtainingType) continue;
    if (
      !federalStatesArray.includes(
        data[i][realEstateType]["adresse"]["bundesland"]
      ) &&
      !!data[i][realEstateType]["adresse"]["bundesland"].match(regex) &&
      federalStatesArray.length < 4 &&
      splitedStr.length > 0
    ) {
      federalStatesArray.push(data[i][realEstateType]["adresse"]["bundesland"]);
    }
    if (
      !citiesLocalitiesArray.includes(
        data[i][realEstateType]["adresse"]["stadt"] +
          " - " +
          data[i][realEstateType]["adresse"]["bundesland"]
      ) &&
      !!data[i][realEstateType]["adresse"]["stadt"].match(regex) &&
      citiesLocalitiesArray.length < 4 &&
      splitedStr.length > 0
    ) {
      citiesLocalitiesArray.push(
        data[i][realEstateType]["adresse"]["stadt"] +
          " - " +
          data[i][realEstateType]["adresse"]["bundesland"]
      );
    }
  }
  totalArrayLength =
    12 - (federalStatesArray.length + citiesLocalitiesArray.length);
  for (let i in data) {
    if (!!!data[i][realEstateType]) continue;
    if (data[i][realEstateType]["bezugsart"] !== obtainingType) continue;
    if (
      !streetsPostcodeLocalitiesArray.includes(
        data[i][realEstateType]["adresse"]["straße"] +
          ", " +
          data[i][realEstateType]["adresse"]["postleitzahl"] +
          " - " +
          data[i][realEstateType]["adresse"]["stadt"] +
          " - " +
          data[i][realEstateType]["adresse"]["bundesland"]
      ) &&
      (
        data[i][realEstateType]["adresse"]["straße"] +
        ", " +
        data[i][realEstateType]["adresse"]["postleitzahl"] +
        " - " +
        data[i][realEstateType]["adresse"]["stadt"] +
        " - " +
        data[i][realEstateType]["adresse"]["bundesland"]
      ).match(regex)
    ) {
      if (minInput !== 0 && !!minInput) {
        if (data[i][realEstateType]["preis"] < minInput) continue;
      }
      if (maxInput !== 0 && !!maxInput) {
        if (data[i][realEstateType]["preis"] > maxInput) continue;
      }
      if (!!livingspace) {
        if (data[i][realEstateType]["wohnfläche"] < livingspace) continue;
      }
      if (!!property) {
        if (data[i][realEstateType]["grundstück"] < property) continue;
      }
      if (!!rooms) {
        if (data[i][realEstateType]["zimmer"] < rooms) continue;
      }
      if (!!bathrooms) {
        if (data[i][realEstateType]["badezimmer"] < bathrooms) continue;
      }
      if (
        streetsPostcodeLocalitiesArray.length < totalArrayLength &&
        splitedStr.length > 0
      ) {
        streetsPostcodeLocalitiesArray.push(
          data[i][realEstateType]["adresse"]["straße"] +
            ", " +
            data[i][realEstateType]["adresse"]["postleitzahl"] +
            " - " +
            data[i][realEstateType]["adresse"]["stadt"] +
            " - " +
            data[i][realEstateType]["adresse"]["bundesland"]
        );
        allResults.push(data[i]);
      } else if (!!!search) {
        realEstateArray.push(data[i]);
      } else if (splitedStr.length > 0) allResults.push(data[i]);
      hits++;
    }
  }
  /*zufällige ergebnisse für realEstateArray welches für die
  Inspirationssektion ist*/
  while (realEstateArray.length > 12) {
    let randomNum = Math.floor(Math.random() * realEstateArray.length);
    realEstateArray.splice(randomNum, 1);
  }
  //wenn das erste zeichen, ein leerzeichen ist wird hits zurückgesetzt
  if (
    streetsPostcodeLocalitiesArray.length === 0 &&
    federalStatesArray.length === 0 &&
    citiesLocalitiesArray.length === 0
  ) {
    hits = 0;
  }
  return {
    federalStatesArray,
    citiesLocalitiesArray,
    streetsPostcodeLocalitiesArray,
    hits,
    realEstateArray,
    allResults
  };
};
