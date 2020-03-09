import ImmobilienActionTypes from "./immobilien.types";

export const setErgebnisse = ergebnisseArray => ({
  type: ImmobilienActionTypes.SET_ERGEBNISSE,
  payload: ergebnisseArray
});
