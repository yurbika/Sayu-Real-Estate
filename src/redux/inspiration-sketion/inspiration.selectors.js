import { createSelector } from "reselect";

const selectInspirationsSektion = state => state.inspirationsSketion;

export const selectExpand1 = createSelector(
  [selectInspirationsSektion],
  inspirationsSketion => inspirationsSketion.expand1
);

export const selectExpand2 = createSelector(
  [selectInspirationsSektion],
  inspirationsSketion => inspirationsSketion.expand2
);

export const selectExpand3 = createSelector(
  [selectInspirationsSektion],
  inspirationsSketion => inspirationsSketion.expand3
);

//diese selektoren sind optional
export const selectLuxushäuserFilter = createSelector(
  [selectInspirationsSektion],
  selectInspirationsSektion => selectInspirationsSektion.luxushäuser
);

export const selectWohnungenFilter = createSelector(
  [selectInspirationsSektion],
  selectInspirationsSektion => selectInspirationsSektion.wohnungen
);

export const selectKlassikerFilter = createSelector(
  [selectInspirationsSektion],
  selectInspirationsSektion => selectInspirationsSektion.klassiker
);
