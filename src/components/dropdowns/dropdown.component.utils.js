import React from "react";

import { thousandSeperatorDots, removeDots } from "../input/input.utils";

import { ID_GENERATOR } from "../../uniqueKey";

import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//dynamic values for price dropdown
//renting
export const createLiRentMin = (
  n,
  oppositeInputState,
  oppositeInputName,
  setInputMin
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //min/max values for renting
  if (Number(removeDots(oppositeInputState)) === 0) temp = 2000;
  else if (Number(removeDots(oppositeInputState)) >= 10000) temp = 10000;
  else temp = Number(removeDots(oppositeInputState));

  //incrementing values
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
        key={ID_GENERATOR("price-dropdown-li-")}
      >
        {thousandSeperatorDots(temp.toString()) + "€"}
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
      key={ID_GENERATOR("price-dropdown-li-")}
    >
      0€
    </li>
  );
  return array.reverse();
};

export const createLiRentMax = (
  n,
  oppositeInputState,
  setInputMax,
  toggleDropdown
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //min/max values for renting
  if (Number(removeDots(oppositeInputState)) === 0) temp = 1800;
  else if (Number(removeDots(oppositeInputState)) < 400) temp = 200;
  else if (Number(removeDots(oppositeInputState)) >= 10000) i = n;
  else temp = Number(removeDots(oppositeInputState));

  //incrementing values
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
          toggleDropdown(DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN);
        }}
        key={ID_GENERATOR("price-dropdown-li-")}
      >
        {thousandSeperatorDots(temp.toString()) + "€"}
      </li>
    );
    i++;
  }
  array.push(
    <li
      onClick={() => {
        setInputMax("");
        toggleDropdown(DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN);
      }}
      key={ID_GENERATOR("price-dropdown-li-")}
    >
      Any Price
    </li>
  );
  return array;
};

//buying
export const createLiBuyMin = (
  n,
  oppositeInputState,
  oppositeInputName,
  setInputMin
) => {
  let i = 0;
  let array = [];
  let temp = 0;
  //min/max values for buying
  if (
    Number(removeDots(oppositeInputState)) === 0 ||
    Number(removeDots(oppositeInputState)) > 1000000
  )
    temp = 1000000;
  else temp = Number(removeDots(oppositeInputState));

  //incrementing values
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
        key={ID_GENERATOR("price-dropdown-li-")}
      >
        {thousandSeperatorDots(temp.toString()) + "€"}
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
      key={ID_GENERATOR("price-dropdown-li-")}
    >
      0€
    </li>
  );
  return array.reverse();
};

export const createLiBuyMax = (
  n,
  oppositeInputState,
  setInputMax,
  toggleDropdown
) => {
  let i = 0;
  let array = [];
  let temp = 0;

  //min/max values for buying
  if (Number(removeDots(oppositeInputState)) === 0) temp = 400000;
  else if (Number(removeDots(oppositeInputState)) >= 1500000) i = n;
  else temp = Number(removeDots(oppositeInputState));

  //incrementing values
  while (i < n - 1) {
    temp = Math.ceil(temp / 100000) * 100000;
    temp += 100000;

    if (temp > 1500000) break;
    array.push(
      <li
        onClick={e => {
          setInputMax(e.currentTarget.textContent);
          toggleDropdown(DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN);
        }}
        key={ID_GENERATOR("price-dropdown-li-")}
      >
        {thousandSeperatorDots(temp.toString()) + "€"}
      </li>
    );
    i++;
  }
  array.push(
    <li
      onClick={() => {
        setInputMax("");
        toggleDropdown(DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN);
      }}
      key={ID_GENERATOR("price-dropdown-li-")}
    >
      Any Price
    </li>
  );
  return array;
};
