import React from "react";

import { numberWithDots, removeDots } from "../input/input.utils";

import { ID_GENERATOR } from "../../uniqueKey";

import FilterActionTypes from "../../redux/filter/filter.types";

//hier wird entschieden welcher setter benutz werden soll

export const typSetter = text => {
  switch (text) {
    case "Mieten":
    case "Kaufen":
      return FilterActionTypes.SET_BEZUGSART;
    case "Wohnung":
    case "Haus":
      return FilterActionTypes.SET_HAUSTYP;
    case "1 +":
    case "2 +":
    case "3 +":
    case "4 +":
    case "5 +":
      return FilterActionTypes.SET_ZIMMERANZAHL;
    case "70 +":
    case "100 +":
    case "200 +":
    case "300 +":
    case "400 +":
    case "500 +":
      return FilterActionTypes.SET_FLÄCHE;
    default:
      return null;
  }
};

//dynamische werte fuer die preisauswahl
export const createLiMietenMin = (
  n,
  oppositeInputState,
  oppositeInputName,
  inputName,
  setInput
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //grenz werte fuer mieten
  if (Number(removeDots(oppositeInputState)) < 2000) temp = 2000;
  else if (Number(removeDots(oppositeInputState)) >= 10000) temp = 10000;
  else temp = Number(removeDots(oppositeInputState));

  //schritt weite der zahlen
  while (i < n - 1) {
    if (temp <= 3000) {
      temp = Math.ceil(temp / 200) * 200;
      temp -= 200;
    } else if (temp > 3000 && temp <= 6000) {
      temp = Math.ceil(temp / 500) * 500;
      temp -= 500;
    } else if (temp > 6000) {
      temp = Math.ceil(temp / 1000) * 1000;
      temp -= 1000;
    }
    array.push(
      <li
        onClick={e => {
          setInput(e.currentTarget.textContent, inputName);
          document.getElementById(oppositeInputName).click();
          document.getElementById(oppositeInputName).focus();
        }}
        key={ID_GENERATOR("preis-dropdown-li-")}
      >
        {numberWithDots(temp.toString()) + "€"}
      </li>
    );
    i++;
  }
  array.push(
    <li
      onClick={() => {
        setInput("", inputName);
        document.getElementById(oppositeInputName).click();
        document.getElementById(oppositeInputName).focus();
      }}
      key={ID_GENERATOR("preis-dropdown-li-")}
    >
      0€
    </li>
  );
  return array.reverse();
};

export const createLiMax = (n, oppositeInputState, inputName, setInput) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //grenz werte fuer mieten
  if (oppositeInputState.toString() === "") temp = 2000;
  else if (Number(removeDots(oppositeInputState)) < 400) temp = 200;
  else if (Number(removeDots(oppositeInputState)) >= 10000) i = n;
  else temp = Number(removeDots(oppositeInputState));

  //schritt weite der zahlen
  while (i < n - 1) {
    if (temp <= 3000) {
      temp = Math.ceil(temp / 200) * 200;
      temp += 200;
    } else if (temp > 3000 && temp <= 6000) {
      temp = Math.ceil(temp / 500) * 500;
      temp += 500;
    } else if (temp > 6000) {
      temp = Math.ceil(temp / 1000) * 1000;
      temp += 1000;
    }
    array.push(
      <li
        onClick={e => {
          setInput(e.currentTarget.textContent, inputName);
        }}
        key={ID_GENERATOR("preis-dropdown-li-")}
      >
        {numberWithDots(temp.toString()) + "€"}
      </li>
    );
    i++;
  }
  array.push(
    <li
      onClick={e => {
        setInput(e.currentTarget.textContent, inputName);
      }}
      key={ID_GENERATOR("preis-dropdown-li-")}
    >
      Egal
    </li>
  );
  return array;
};
