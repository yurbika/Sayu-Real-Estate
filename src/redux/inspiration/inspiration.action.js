import InspirationActionType from "./inspiration.types";

export const toggleExpand = num => {
  switch (num) {
    case 1:
      return { type: InspirationActionType.TOGGLE_EXPAND1 };
    case 2:
      return { type: InspirationActionType.TOGGLE_EXPAND2 };
    case 3:
      return { type: InspirationActionType.TOGGLE_EXPAND3 };
    default:
      return null;
  }
};
