import IMMO_DATA from "./immo.data";

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

export const filterData = (filter, buttonClick = false, data = IMMO_DATA) => {
  let bundeslaenderArray = [];
  let staedteOrteArray = [];
  let straßenPlzOrtArray = [];
  let alleErgebnisse = [];
  let immoArray = [];
  let search = filter["search"];
  let haustyp = filter["haustyp"].toLowerCase();
  let minInput = !!filter["minInput"]
    ? Number(removeDots(filter["minInput"].toString()))
    : null;
  let maxInput = !!filter["maxInput"]
    ? Number(removeDots(filter["maxInput"].toString()))
    : null;
  let bezugsart = filter["bezugsart"].toLowerCase();
  let wohnfläche = !!filter["wohnfläche"]
    ? Number(removeDots(filter["wohnfläche"].toString()))
    : null;
  let grundstück = !!filter["grundstück"]
    ? Number(removeDots(filter["grundstück"].toString()))
    : null;
  let zimmer = !!filter["zimmerAnzahl"]
    ? Number(removeDots(filter["zimmerAnzahl"].toString()))
    : null;
  let badezimmer = !!filter["badezimmer"]
    ? Number(removeDots(filter["badezimmer"].toString()))
    : null;
  let suchtreffer = 0;
  let totalArrayLength = 0;
  let splitedStr = !!search ? search.split(/[ ,-]+/) : "";
  //entfernt alles leere
  splitedStr = !!search ? splitedStr.filter(i => i) : "";
  let regex = splitedStr.length > 0 ? createRegex(splitedStr) : "";
  //hier wird für bundesländer/ortschaften gefiltert davon ist die gesamt anzahl des arrays abhängig
  //deswegen gibt es dafür zwei for schleifen
  for (let i in data) {
    if (!!!data[i][haustyp]) continue;
    if (data[i][haustyp]["bezugsart"] !== bezugsart) continue;
    if (
      !bundeslaenderArray.includes(data[i][haustyp]["adresse"]["bundesland"]) &&
      !!data[i][haustyp]["adresse"]["bundesland"].match(regex) &&
      bundeslaenderArray.length < 4 &&
      splitedStr.length > 0
    ) {
      bundeslaenderArray.push(data[i][haustyp]["adresse"]["bundesland"]);
    }
    if (
      !staedteOrteArray.includes(
        data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      !!data[i][haustyp]["adresse"]["stadt"].match(regex) &&
      staedteOrteArray.length < 4 &&
      splitedStr.length > 0
    ) {
      staedteOrteArray.push(
        data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      );
    }
  }
  totalArrayLength = 12 - (bundeslaenderArray.length + staedteOrteArray.length);
  for (let i in data) {
    if (!!!data[i][haustyp]) continue;
    if (data[i][haustyp]["bezugsart"] !== bezugsart) continue;
    if (
      !straßenPlzOrtArray.includes(
        data[i][haustyp]["adresse"]["straße"] +
          ", " +
          data[i][haustyp]["adresse"]["postleitzahl"] +
          " - " +
          data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      (
        data[i][haustyp]["adresse"]["straße"] +
        ", " +
        data[i][haustyp]["adresse"]["postleitzahl"] +
        " - " +
        data[i][haustyp]["adresse"]["stadt"] +
        " - " +
        data[i][haustyp]["adresse"]["bundesland"]
      ).match(regex)
    ) {
      if (minInput !== 0 && !!minInput) {
        if (data[i][haustyp]["preis"] < minInput) continue;
      }
      if (maxInput !== 0 && !!maxInput) {
        if (data[i][haustyp]["preis"] > maxInput) continue;
      }
      if (!!wohnfläche) {
        if (data[i][haustyp]["wohnfläche"] < wohnfläche) continue;
      }
      if (!!grundstück) {
        if (data[i][haustyp]["grundstück"] < grundstück) continue;
      }
      if (!!zimmer) {
        if (data[i][haustyp]["zimmer"] < zimmer) continue;
      }
      if (!!badezimmer) {
        if (data[i][haustyp]["zimmer"] < badezimmer) continue;
      }
      if (
        straßenPlzOrtArray.length < totalArrayLength &&
        splitedStr.length > 0
      ) {
        straßenPlzOrtArray.push(
          data[i][haustyp]["adresse"]["straße"] +
            ", " +
            data[i][haustyp]["adresse"]["postleitzahl"] +
            " - " +
            data[i][haustyp]["adresse"]["stadt"] +
            " - " +
            data[i][haustyp]["adresse"]["bundesland"]
        );
        if (buttonClick) alleErgebnisse.push(data[i]);
      } else if (!!!search) {
        immoArray.push(data[i]);
      } else if (splitedStr.length > 0 && buttonClick)
        alleErgebnisse.push(data[i]);
      suchtreffer++;
    }
  }
  /*zufällige ergebnisse für immoArray welches für die
  Inspirationssektion ist*/
  while (immoArray.length > 12) {
    let randomNum = Math.floor(Math.random() * immoArray.length);
    immoArray.splice(randomNum, 1);
  }
  //wenn das erste zeichen, ein leerzeichen ist wird suchtreffer zurückgesetzt
  if (
    straßenPlzOrtArray.length === 0 &&
    bundeslaenderArray.length === 0 &&
    staedteOrteArray.length === 0
  ) {
    suchtreffer = 0;
  }
  return {
    bundeslaenderArray,
    staedteOrteArray,
    straßenPlzOrtArray,
    suchtreffer,
    immoArray,
    alleErgebnisse
  };
};
