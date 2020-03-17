import RealEstateActionTypes from "./real-estate.types";

export const setResults = resultsArray => ({
  type: RealEstateActionTypes.SET_RESULTS,
  payload: resultsArray
});
