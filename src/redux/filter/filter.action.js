import FilterActionTypes from "./filter.types";

export const setInput = input => ({
  type: FilterActionTypes.SET_INPUT,
  payload: input.target.value
});

export const setArt = (text, type) => ({
  type: type,
  payload: text
});
