import { createSelector } from "reselect";

const selectFilter = state => state.filter;

export const selectSearchInput = createSelector(
  [selectFilter],
  filter => filter.searchInput
);

export const selectMinInput = createSelector(
  [selectFilter],
  filter => filter.minInput
);

export const selectMaxInput = createSelector(
  [selectFilter],
  filter => filter.maxInput
);

export const selectObtainingType = createSelector(
  [selectFilter],
  filter => filter.obtainingType
);

export const selectRealEstateType = createSelector(
  [selectFilter],
  filter => filter.realEstateType
);

export const selectRooms = createSelector(
  [selectFilter],
  filter => filter.rooms
);

export const selectPrice = createSelector(
  [selectFilter],
  filter => filter.price
);

export const selectSpace = createSelector(
  [selectFilter],
  filter => filter.space
);

export const selectPage = createSelector([selectFilter], filter => filter.page);

export const selectSearchButtonClick = createSelector(
  [selectFilter],
  filter => filter.searchButtonClick
);
