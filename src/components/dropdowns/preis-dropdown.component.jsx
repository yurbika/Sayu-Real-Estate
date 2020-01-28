import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ID_GENERATOR } from "../../uniqueKey";

//component imports
import Input from "../input/input.component";
import {
  numberWithDots,
  onlyNumberkey,
  removeDots
} from "../input/input.utils";

//redux imports
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

import { setInput } from "../../redux/filter/filter.action";

import {
  selectMaxInput,
  selectMinInput,
  selectBezugsart
} from "../../redux/filter/filter.selectors";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert
//wenn der dropdown geschlossen wird muss der state gesettz werden

const PreisDropdown = ({ maxInput, minInput, setInput, bezugsart }) => {
  const createLi = (n, oppositeInputState, oppositeInputName, inputName) => {
    let i = 0;
    let array = [];
    let temp = 0;
    let reverse = 1;
    //grenz werte fuer mieten
    if (inputName.toLowerCase() === "numbermax") reverse = -1;
    if (Number(removeDots(oppositeInputState)) < 2000 && reverse) temp = 2000;
    else if (Number(removeDots(oppositeInputState)) < 2000 && reverse === -1)
      temp = 1800;
    else if (Number(removeDots(oppositeInputState)) >= 10000) temp = 10000;
    else temp = Number(removeDots(oppositeInputState));

    while (i < n - 1) {
      if (temp <= 3000) {
        temp = Math.ceil(temp / 200) * 200;
        temp -= 200 * reverse;
      } else if (temp > 3000 && temp <= 6000) {
        temp = Math.ceil(temp / 500) * 500;
        temp -= 500 * reverse;
      } else if (temp > 6000) {
        temp = Math.ceil(temp / 1000) * 1000;
        temp -= 1000 * reverse;
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
        onClick={e => {
          setInput(e.currentTarget.textContent, inputName);
          document.getElementById(oppositeInputName).click();
          document.getElementById(oppositeInputName).focus();
        }}
        key={ID_GENERATOR("preis-dropdown-li-")}
      >
        {reverse === 1 ? "0€" : "Egal"}
      </li>
    );
    return reverse === 1 ? array.reverse() : array;
  };

  return (
    <div className="dropdown-container preis-dropdown" ref={dropdownRef}>
      <div className="input-container">
        <Input
          id="min-input"
          placeholder="Min"
          dropdownInput
          autoFocus
          autoComplete="off"
          onFocus={() => {
            document.getElementById("preis-min").style.display = "block";
            document.getElementById("preis-max").style.display = "none";
          }}
          value={minInput}
          onChange={e => setInput(numberWithDots(e.target.value), "numberMin")}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="preis-min">
          {createLi(10, maxInput, "max-input", "numberMin")}
        </ul>
      </div>
      <div>
        <span></span>
      </div>
      <div className="input-container">
        <Input
          id="max-input"
          placeholder="Max"
          dropdownInput
          autoComplete="off"
          onFocus={() => {
            document.getElementById("preis-min").style.display = "none";
            document.getElementById("preis-max").style.display = "block";
          }}
          value={maxInput}
          onChange={e => setInput(numberWithDots(e.target.value), "numberMax")}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="preis-max">
          {createLi(10, minInput, "min-input", "numberMax")}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  maxInput: selectMaxInput,
  minInput: selectMinInput,
  bezugsart: selectBezugsart
});

const mapDispatchToProps = dispatch => ({
  setInput: (event, prop) => dispatch(setInput(event, prop))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreisDropdown);
