//funktionen für die dropdowns

import React from "react";

import { numberWithDots, removeDots } from "../input/input.utils";

import { ID_GENERATOR } from "../../uniqueKey";

import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//dynamische werte fuer die preisauswahl
//bezugsart mieten
export const createLiMietenMin = (
  n,
  oppositeInputState,
  oppositeInputName,
  setInputMin
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //grenz werte fuer mieten
  if (Number(removeDots(oppositeInputState)) === 0) temp = 2000;
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
    if (temp <= 0) break;
    array.push(
      <li
        onClick={e => {
          setInputMin(e.currentTarget.textContent);
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
        setInputMin("");
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

export const createLiMietenMax = (
  n,
  oppositeInputState,
  setInputMax,
  toggleDropdown
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //grenz werte fuer mieten
  if (Number(removeDots(oppositeInputState)) === 0) temp = 1800;
  else if (Number(removeDots(oppositeInputState)) < 400) temp = 200;
  else if (Number(removeDots(oppositeInputState)) >= 10000) i = n;
  else temp = Number(removeDots(oppositeInputState));

  //schritt weite der zahlen
  while (i < n - 1) {
    if (temp <= 3000) {
      temp = Math.ceil(temp / 200) * 200;
      temp += 200;
    } else if (temp > 3000 && temp < 6000) {
      temp = Math.ceil(temp / 500) * 500;
      temp += 500;
    } else if (temp >= 6000) {
      temp = Math.ceil(temp / 1000) * 1000;
      temp += 1000;
    }
    if (temp > 10000) break;
    array.push(
      <li
        onClick={e => {
          setInputMax(e.currentTarget.textContent);
          toggleDropdown(DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN);
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
        setInputMax("");
        toggleDropdown(DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN);
      }}
      key={ID_GENERATOR("preis-dropdown-li-")}
    >
      Egal
    </li>
  );
  return array;
};

//bezugsart kaufen
export const createLiKaufenMin = (
  n,
  oppositeInputState,
  oppositeInputName,
  setInputMin
) => {
  let i = 0;
  let array = [];
  let temp = 0;
  //grenz werte fuer kaufen
  if (
    Number(removeDots(oppositeInputState)) === 0 ||
    Number(removeDots(oppositeInputState)) > 1000000
  )
    temp = 1000000;
  else temp = Number(removeDots(oppositeInputState));

  //schritt weite der zahlen
  while (i < n - 1) {
    temp = Math.ceil(temp / 100000) * 100000;
    temp -= 100000;
    if (temp <= 0) break;
    array.push(
      <li
        onClick={e => {
          setInputMin(e.currentTarget.textContent);
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
        setInputMin("");
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

export const createLiKaufenMax = (
  n,
  oppositeInputState,
  setInputMax,
  toggleDropdown
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //grenz werte fuer mieten
  if (Number(removeDots(oppositeInputState)) === 0) temp = 400000;
  else if (Number(removeDots(oppositeInputState)) >= 1500000) i = n;
  else temp = Number(removeDots(oppositeInputState));

  //schritt weite der zahlen
  while (i < n - 1) {
    temp = Math.ceil(temp / 100000) * 100000;
    temp += 100000;

    if (temp > 1500000) break;
    array.push(
      <li
        onClick={e => {
          setInputMax(e.currentTarget.textContent);
          toggleDropdown(DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN);
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
        setInputMax("");
        toggleDropdown(DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN);
      }}
      key={ID_GENERATOR("preis-dropdown-li-")}
    >
      Egal
    </li>
  );
  return array;
};
