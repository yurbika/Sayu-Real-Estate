import { createSelector } from "reselect";

const selectImmobilien = state => state.immobilien;

export const selectErgebnisse = createSelector(
  [selectImmobilien],
  immobilien => immobilien.ergebnisse
);
