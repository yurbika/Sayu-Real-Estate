import ResultsActionTypes from "./results.types";

const INITIAL_STATE = {
  bundesländer: [],
  städteOrte: [],
  straßenPlzOrte: [],
  suchTreffer: 0
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
        suchTreffer: action.payload
      };
    default:
      return state;
  }
};

export default resultReducer;
