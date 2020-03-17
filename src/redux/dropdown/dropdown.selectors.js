import { createSelector } from "reselect";

const selectDropdown = state => state.dropdown;

export const selectPriceDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.priceDropdown
);
export const selectObtainingTypeDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.obtainingTypeDropdown
);
export const selectRealEstateTypeDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.realEstateTypeDropdown
);
export const selectRoomsDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.roomsDropdown
);
export const selectSpaceDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.spaceDropdown
);

export const selectResultsDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.resultsDropdown
);

export const selectPageChangerDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.pageChangerDropdown
);
