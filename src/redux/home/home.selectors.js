import { createSelector } from "reselect";

const selectHome = state => state.home;

export const selectLuxuryArray = createSelector(
  [selectHome],
  home => home.luxuryArray
);

export const selectApartmentArray = createSelector(
  [selectHome],
  home => home.apartmentArray
);

export const selectClassicArray = createSelector(
  [selectHome],
  home => home.classicArray
);
