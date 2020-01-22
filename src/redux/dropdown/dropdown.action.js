import DropdownActionTypes from "./dropdown.types";

const toggleDropdown = buttonProp => {
  switch (buttonProp) {
    case "TOGGLE_PREISDROPDOWN_HIDDEN":
      return { type: DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN };
    case "TOGGLE_ZIMMERDROPDOWN_HIDDEN":
      return { type: DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN };
    case "TOGGLE_FlÄCHEDROPDOWN_HIDDEN":
      return { type: DropdownActionTypes.TOGGLE_FlÄCHEDROPDOWN_HIDDEN };
    case "TOGGLE_BEZUGSARTDROPDOWN_HIDDEN":
      return { type: DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN };
    case "TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN":
      return { type: DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN };
    case "TOGGLE_ALL_DROPDOWNS_FALSE":
      return {
        type: DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE
      };
    default:
      return null;
  }
};

export default toggleDropdown;
