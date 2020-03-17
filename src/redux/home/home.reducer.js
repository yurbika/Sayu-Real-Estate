import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  luxuryArray: [],
  apartmentArray: [],
  classicArray: []
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.SET_LUXURY_ARRAY:
      return {
        ...state,
        luxuryArray: action.payload
      };
    case HomeActionTypes.SET_CLASSIC_ARRAY:
      return {
        ...state,
        classicArray: action.payload
      };
    case HomeActionTypes.SET_APARTMENT_ARRAY:
      return {
        ...state,
        apartmentArray: action.payload
      };
    default:
      return state;
  }
};

export default homeReducer;
