import { createSelector } from "reselect";

const selectInspiration = state => state.inspiration;

export const selectExpand1 = createSelector(
  [selectInspiration],
  inspiration => inspiration.expand1
);

export const selectExpand2 = createSelector(
  [selectInspiration],
  inspiration => inspiration.expand2
);

export const selectExpand3 = createSelector(
  [selectInspiration],
  inspiration => inspiration.expand3
);
