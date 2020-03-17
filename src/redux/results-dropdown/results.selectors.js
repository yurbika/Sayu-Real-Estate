import { createSelector } from "reselect";

const selectResults = state => state.results;

export const selectFederalstates = createSelector(
  [selectResults],
  results => results.federalstates
);

export const selectCitiesLocalities = createSelector(
  [selectResults],
  results => results.citiesLocalities
);

export const selectStreetsPostcodeLocalities = createSelector(
  [selectResults],
  results => results.streetsPostcodeLocalities
);

export const selectHits = createSelector(
  [selectResults],
  results => results.hits
);
