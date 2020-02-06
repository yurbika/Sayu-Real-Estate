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
  results => results.straßenPlzOrte
);

export const selectSuchtreffer = createSelector(
  [selectResults],
  results => results.suchtreffer
);
