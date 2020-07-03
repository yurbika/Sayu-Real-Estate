import REAL_ESTATE_DATA from "./real-estate.data";

import { removeDots } from "../components/input/input.utils";

/*this regex its like a "loop", if we use the match function 
it starts with the first expression and goes through the whole string. And the second one and so on, if everything matches we got a hit*/
const createRegex = (splitedStr) => {
  let str = "";
  for (let i = 0; i < splitedStr.length; i++) {
    if (i === 0) str += "^(?=.*" + splitedStr[i] + ")";
    else if (i === splitedStr.length) str += "^(?=.*" + splitedStr[i] + ").*$";
    else str += "(?=.*" + splitedStr[i] + ")";
  }
  let regex = new RegExp(`${str}`, "gi");
  return regex;
};

export const filterData = (filter, data = REAL_ESTATE_DATA) => {
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
  //removes everything empty
  splitedStr = !!search ? splitedStr.filter((i) => i) : "";
  let regex = splitedStr.length > 0 ? createRegex(splitedStr) : "";
  //checking price inputs
  if (minInput > maxInput) {
    let temp = minInput;
    minInput = maxInput;
    maxInput = temp;
  }
  //first loop is only necessary to calculate the totalArrayLength
  for (let i in data) {
    if (!!!data[i][realEstateType]) continue;
    if (data[i][realEstateType]["obtainingType"] !== obtainingType) continue;
    if (
      !federalStatesArray.includes(
        data[i][realEstateType]["adress"]["federalstate"]
      ) &&
      !!data[i][realEstateType]["adress"]["federalstate"].match(regex) &&
      federalStatesArray.length < 4 &&
      splitedStr.length > 0
    ) {
      federalStatesArray.push(
        data[i][realEstateType]["adress"]["federalstate"]
      );
    }
    if (
      !citiesLocalitiesArray.includes(
        data[i][realEstateType]["adress"]["city"] +
          " - " +
          data[i][realEstateType]["adress"]["federalstate"]
      ) &&
      !!data[i][realEstateType]["adress"]["city"].match(regex) &&
      citiesLocalitiesArray.length < 4 &&
      splitedStr.length > 0
    ) {
      citiesLocalitiesArray.push(
        data[i][realEstateType]["adress"]["city"] +
          " - " +
          data[i][realEstateType]["adress"]["federalstate"]
      );
    }
  }
  //second loop
  totalArrayLength =
    12 - (federalStatesArray.length + citiesLocalitiesArray.length);
  for (let i in data) {
    if (!!!data[i][realEstateType]) continue;
    if (data[i][realEstateType]["obtainingType"] !== obtainingType) continue;
    if (
      !streetsPostcodeLocalitiesArray.includes(
        data[i][realEstateType]["adress"]["street"] +
          ", " +
          data[i][realEstateType]["adress"]["postcode"] +
          " - " +
          data[i][realEstateType]["adress"]["city"] +
          " - " +
          data[i][realEstateType]["adress"]["federalstate"]
      ) &&
      (
        data[i][realEstateType]["adress"]["street"] +
        ", " +
        data[i][realEstateType]["adress"]["postcode"] +
        " - " +
        data[i][realEstateType]["adress"]["city"] +
        " - " +
        data[i][realEstateType]["adress"]["federalstate"]
      ).match(regex)
    ) {
      if (minInput !== 0 && !!minInput) {
        if (data[i][realEstateType]["price"] < minInput) continue;
      }
      if (maxInput !== 0 && !!maxInput) {
        if (data[i][realEstateType]["price"] > maxInput) continue;
      }
      if (!!livingspace) {
        if (data[i][realEstateType]["livingspace"] < livingspace) continue;
      }
      if (!!property) {
        if (data[i][realEstateType]["property"] < property) continue;
      }
      if (!!rooms) {
        if (data[i][realEstateType]["rooms"] < rooms) continue;
      }
      if (!!bathrooms) {
        if (data[i][realEstateType]["bathrooms"] < bathrooms) continue;
      }
      if (
        streetsPostcodeLocalitiesArray.length < totalArrayLength &&
        splitedStr.length > 0
      ) {
        streetsPostcodeLocalitiesArray.push(
          data[i][realEstateType]["adress"]["street"] +
            ", " +
            data[i][realEstateType]["adress"]["postcode"] +
            " - " +
            data[i][realEstateType]["adress"]["city"] +
            " - " +
            data[i][realEstateType]["adress"]["federalstate"]
        );
        allResults.push(data[i]);
      } else if (!!!search) {
        realEstateArray.push(data[i]);
      } else if (splitedStr.length > 0) allResults.push(data[i]);
      hits++;
    }
  }
  /*random results for the inspiration component*/
  while (realEstateArray.length > 12) {
    let randomNum = Math.floor(Math.random() * realEstateArray.length);
    realEstateArray.splice(randomNum, 1);
  }
  //if the first char is a space, everything get reseted
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
    allResults,
  };
};
