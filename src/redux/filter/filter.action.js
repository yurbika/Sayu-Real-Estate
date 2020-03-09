import FilterActionTypes from "./filter.types";

export const setInputMin = preis => ({
  type: FilterActionTypes.SET_MINIMUM_INPUT,
  payload: preis
});

export const setInputMax = preis => ({
  type: FilterActionTypes.SET_MAXIMAL_INPUT,
  payload: preis
});

export const resetInputMax = () => ({
  type: FilterActionTypes.SET_MAXIMAL_INPUT,
  payload: ""
});

export const resetInputMin = () => ({
  type: FilterActionTypes.SET_MINIMUM_INPUT,
  payload: ""
});

export const setPreis = payload => ({
  type: FilterActionTypes.SET_PREIS,
  payload: payload
});

export const setSearchInput = value => ({
  type: FilterActionTypes.SET_SEARCH_INPUT,
  payload: value
});

export const clearSearchInput = () => ({
  type: FilterActionTypes.SET_SEARCH_INPUT,
  payload: ""
});

//für den Auswahldropdown
export const setArt = (payload, type) => ({
  type: type,
  payload: payload
});

export const toggleSuchButtonClick = () => ({
  type: FilterActionTypes.TOGGLE_SUCHBUTTON
});
