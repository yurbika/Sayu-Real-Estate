import FilterActionTypes from "./filter.types";

export const setInput = (event, prop) => {
  switch (prop) {
    case "search":
      return {
        type: FilterActionTypes.SET_SEARCH_INPUT,
        payload: event.target.value
      };
    case "numberMin":
      return {
        type: FilterActionTypes.SET_MINIMUM_INPUT,
        payload: event
      };
    case "numberMax":
      return {
        type: FilterActionTypes.SET_MAXIMAL_INPUT,
        payload: event
      };
    default:
      return null;
  }
};

export const setPreis = (minInput, maxInput) => ({
  type: FilterActionTypes.SET_PREIS,
  payload: `${minInput} - ${maxInput}`
});

//fuer bezugsart und immobilienart

export const setArt = (text, type) => ({
  type: type,
  payload: text
});
