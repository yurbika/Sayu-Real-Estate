import ResultsActionTypes from "./results.types";

const INITIAL_STATE = {
  bundesländer: [],
  städteOrte: [],
  straßenPlzOrte: [],
  suchtreffer: null
};

const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ResultsActionTypes.SET_BUNDESLÄNDER:
      return {
        ...state,
        bundesländer: action.payload
      };
    case ResultsActionTypes.SET_STRAßEN_PLZ_ORTE:
      return {
        ...state,
        straßenPlzOrte: action.payload
      };
    case ResultsActionTypes.SET_STÄDTE_ORTE:
      return {
        ...state,
        städteOrte: action.payload
      };
    case ResultsActionTypes.SET_SUCHTREFFER:
      return {
        ...state,
        suchtreffer: action.payload
      };
    default:
      return state;
  }
};

export default resultReducer;