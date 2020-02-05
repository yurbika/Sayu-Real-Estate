import { createSelector } from "reselect";

const selectResults = state => state.results;

export const selectBundesländer = createSelector(
  [selectResults],
  results => results.bundesländer
);

export const selectStädteOrte = createSelector(
  [selectResults],
  results => results.städteOrte
);

export const selectStraßenPlzOrt = createSelector(
  [selectResults],
  results => results.straßenPlzOrt
);

export const selectSuchTreffer = createSelector(
  [selectResults],
  results => results.suchTreffer
);
