import InspirationsContainerActionType from "./inspiration.types";

//hier nicht vergessen den weiteren Inspirationscontainer einzutragen
export const toggleExpand = num => {
  switch (num) {
    case 1:
      return { type: InspirationsContainerActionType.TOGGLE_EXPAND1 };
    case 2:
      return { type: InspirationsContainerActionType.TOGGLE_EXPAND2 };
    case 3:
      return { type: InspirationsContainerActionType.TOGGLE_EXPAND3 };
    default:
      return null;
  }
};
