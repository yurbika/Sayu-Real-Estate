import RealEstateActionTypes from "./real-estate.types";

const INITIAL_STATE = {
  results: []
};

const realEstateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RealEstateActionTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};

export default realEstateReducer;
