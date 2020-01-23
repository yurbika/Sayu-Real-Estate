import DropdownActionTypes from "./dropdown.types";

const INITIAL_STATE = {
  preisDropdown: false,
  bezugsartDropdown: false,
  immobilientypDropdown: false,
  zimmerDropdown: false,
  flächeDropdown: false
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN:
      return {
        ...state,
        bezugsartDropdown: !state.bezugsartDropdown,
        preisDropdown: false,
        immobilientypDropdown: false,
        zimmerDropdown: false,
        flächeDropdown: false
      };
    case DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN:
      return {
        ...state,
        flächeDropdown: !state.flächeDropdown,
        preisDropdown: false,
        bezugsartDropdown: false,
        immobilientypDropdown: false,
        zimmerDropdown: false
      };
    case DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN:
      return {
        ...state,
        immobilientypDropdown: !state.immobilientypDropdown,
        preisDropdown: false,
        bezugsartDropdown: false,
        zimmerDropdown: false,
        flächeDropdown: false
      };
    case DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN:
      return {
        ...state,
        preisDropdown: !state.preisDropdown,
        bezugsartDropdown: false,
        immobilientypDropdown: false,
        zimmerDropdown: false,
        flächeDropdown: false
      };
    case DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN:
      return {
        ...state,
        zimmerDropdown: !state.zimmerDropdown,
        preisDropdown: false,
        bezugsartDropdown: false,
        immobilientypDropdown: false,
        flächeDropdown: false
      };
    case DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE:
      return {
        ...state,
        preisDropdown: false,
        bezugsartDropdown: false,
        immobilientypDropdown: false,
        zimmerDropdown: false,
        flächeDropdown: false
      };
    default:
      return state;
  }
};

export default dropdownReducer;
