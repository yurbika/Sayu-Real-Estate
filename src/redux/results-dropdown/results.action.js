import ResultsActionTypes from "./results.types";

export const setBundesländer = bundesländerArray => ({
  type: ResultsActionTypes.SET_BUNDESLÄNDER,
  payload: bundesländerArray
});

export const setStädteOrte = städteOrteArray => ({
  type: ResultsActionTypes.SET_STÄDTE_ORTE,
  payload: städteOrteArray
});

export const setStraßenPlzOrte = straßenPlzOrteArray => ({
  type: ResultsActionTypes.SET_STRAßEN_PLZ_ORTE,
  payload: straßenPlzOrteArray
});

export const setSuchtreffer = num => ({
  type: ResultsActionTypes.SET_SUCHTREFFER,
  payload: num
});
