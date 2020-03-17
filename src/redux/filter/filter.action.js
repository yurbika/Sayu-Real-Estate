import FilterActionTypes from "./filter.types";

export const setInputMin = price => ({
  type: FilterActionTypes.SET_MINIMUM_INPUT,
  payload: price
});

export const setInputMax = price => ({
  type: FilterActionTypes.SET_MAXIMAL_INPUT,
  payload: price
});

export const resetInputMax = () => ({
  type: FilterActionTypes.SET_MAXIMAL_INPUT,
  payload: ""
});

export const resetInputMin = () => ({
  type: FilterActionTypes.SET_MINIMUM_INPUT,
  payload: ""
});

export const setPrice = price => ({
  type: FilterActionTypes.SET_PRICE,
  payload: price
});

export const setSearchInput = value => ({
  type: FilterActionTypes.SET_SEARCH_INPUT,
  payload: value
});

export const clearSearchInput = () => ({
  type: FilterActionTypes.SET_SEARCH_INPUT,
  payload: ""
});

export const resetPage = () => ({ type: FilterActionTypes.RESET_PAGE });

export const setDropdown = (payload, type) => ({
  type: type,
  payload: payload
});

export const toggleSearchButtonClick = () => ({
  type: FilterActionTypes.TOGGLE_SEARCHBUTTON
});
