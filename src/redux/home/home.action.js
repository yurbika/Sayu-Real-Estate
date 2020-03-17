import HomeActionTypes from "./home.types";

export const setLuxuryArray = array => ({
  type: HomeActionTypes.SET_LUXURY_ARRAY,
  payload: array
});

export const setApartmentArray = array => ({
  type: HomeActionTypes.SET_APARTMENT_ARRAY,
  payload: array
});

export const setClassicArray = array => ({
  type: HomeActionTypes.SET_CLASSIC_ARRAY,
  payload: array
});
