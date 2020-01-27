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
