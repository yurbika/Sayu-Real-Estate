import DropdownActionTypes from "./dropdown.types";

const toggleDropdown = type => {
  switch (type) {
    case DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_RESULTS_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_RESULTS_HIDDEN };
    case DropdownActionTypes.TOGGLE_PAGECHANGERDROPDOWN_HIDDEN:
      return {
        type: DropdownActionTypes.TOGGLE_PAGECHANGERDROPDOWN_HIDDEN
      };
    case DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE:
      return {
        type: DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE
      };
    default:
      return null;
  }
};

export default toggleDropdown;
