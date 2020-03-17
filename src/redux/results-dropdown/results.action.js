import ResultsActionTypes from "./results.types";

export const setFederalstates = federalstatesArray => ({
  type: ResultsActionTypes.SET_FEDERALSTATES,
  payload: federalstatesArray
});

export const setCitiesLocalities = citiesLocalitiesArray => ({
  type: ResultsActionTypes.SET_CITIES_LOCALITIES,
  payload: citiesLocalitiesArray
});

export const setStreetsPostcodeLocalities = streetsPostcodeLocalitiesArray => ({
  type: ResultsActionTypes.SET_STREETS_POSTCODE_LOCALITIES,
  payload: streetsPostcodeLocalitiesArray
});

export const setHits = num => ({
  type: ResultsActionTypes.SET_HITS,
  payload: num
});
