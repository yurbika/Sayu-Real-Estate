import ResultsActionTypes from "./results.types";

const INITIAL_STATE = {
  federalstates: [],
  citiesLocalities: [],
  streetsPostcodeLocalities: [],
  hits: null
};

const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ResultsActionTypes.SET_FEDERALSTATES:
      return {
        ...state,
        federalstates: action.payload
      };
    case ResultsActionTypes.SET_STREETS_POSTCODE_LOCALITIES:
      return {
        ...state,
        streetsPostcodeLocalities: action.payload
      };
    case ResultsActionTypes.SET_CITIES_LOCALITIES:
      return {
        ...state,
        citiesLocalities: action.payload
      };
    case ResultsActionTypes.SET_HITS:
      return {
        ...state,
        hits: action.payload
      };
    default:
      return state;
  }
};

export default resultReducer;
