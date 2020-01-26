import FilterActionTypes from "../../redux/filter/filter.types";

//hier wird entschieden welcher setter benutz werden soll

export const typSetter = text => {
  switch (text) {
    case "Mieten":
      return FilterActionTypes.SET_BEZUGSART;
    case "Kaufen":
      return FilterActionTypes.SET_BEZUGSART;
    case "Wohnung":
      return FilterActionTypes.SET_HAUSTYP;
    case "Haus":
      return FilterActionTypes.SET_HAUSTYP;
    default:
      return null;
  }
};
