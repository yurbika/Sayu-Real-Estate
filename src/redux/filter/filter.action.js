import FilterActionTypes from "./filter.types";

export const setInput = input => ({
  type: FilterActionTypes.SET_INPUT,
  payload: input.target.value
});

export const lol = 0;
