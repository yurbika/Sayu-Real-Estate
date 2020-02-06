import DropdownActionTypes from "./dropdown.types";

const INITIAL_STATE = {
  preisDropdown: false,
  bezugsartDropdown: false,
  immobilientypDropdown: false,
  zimmerDropdown: false,
  flächeDropdown: false,
  resultsDropdown: false
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN:
      return {
        ...(state = INITIAL_STATE),
        bezugsartDropdown: !state.bezugsartDropdown
      };
    case DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN:
      return {
        ...(state = INITIAL_STATE),
        flächeDropdown: !state.flächeDropdown
      };
    case DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN:
      return {
        ...(state = INITIAL_STATE),
        immobilientypDropdown: !state.immobilientypDropdown
      };
    case DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN:
      return {
        ...(state = INITIAL_STATE),
        preisDropdown: !state.preisDropdown
      };
    case DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN:
      return {
        ...(state = INITIAL_STATE),
        zimmerDropdown: !state.zimmerDropdown
      };
    case DropdownActionTypes.TOGGLE_RESULTS_HIDDEN:
      return {
        ...(state = INITIAL_STATE),
        resultsDropdown: !state.resultsDropdown
      };
    case DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE:
      return {
        ...(state = INITIAL_STATE)
      };
    default:
      return state;
  }
};

export default dropdownReducer;
