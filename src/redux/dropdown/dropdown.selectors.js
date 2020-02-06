import { createSelector } from "reselect";

const selectDropdown = state => state.dropdown;

export const selectPreisDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.preisDropdown
);
export const selectBezugsartDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.bezugsartDropdown
);
export const selectImmobilientypDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.immobilientypDropdown
);
export const selectZimmerDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.zimmerDropdown
);
export const selectFlächeDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.flächeDropdown
);

export const selectResultsDropdown = createSelector(
  [selectDropdown],
  dropdown => dropdown.resultsDropdown
);
