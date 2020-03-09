import ImmobilienActionTypes from "./immobilien.types";

const INITIAL_STATE = {
  ergebnisse: []
};

const immobilienReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ImmobilienActionTypes.SET_ERGEBNISSE:
      return {
        ...state,
        ergebnisse: action.payload
      };
    default:
      return state;
  }
};

export default immobilienReducer;
