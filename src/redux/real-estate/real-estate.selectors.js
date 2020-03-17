import { createSelector } from "reselect";

const selectRealEstate = state => state.realEstate;

export const selectResults = createSelector(
  [selectRealEstate],
  realEstate => realEstate.results
);
