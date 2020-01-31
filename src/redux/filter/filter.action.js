import FilterActionTypes from "./filter.types";

export const setInputMin = preis => ({
  type: FilterActionTypes.SET_MINIMUM_INPUT,
  payload: preis
});

export const setInputMax = preis => ({
  type: FilterActionTypes.SET_MAXIMAL_INPUT,
  payload: preis
});

export const setPreis = payload => ({
  type: FilterActionTypes.SET_PREIS,
  payload: payload
});

//fuer bezugsart und immobilienart weil sie ein nur ein component haben
export const setArt = (text, type) => ({
  type: type,
  payload: text
});
