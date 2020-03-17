import DropdownActionTypes from "./dropdown.types";

const toggleDropdown = type => {
  switch (type) {
    case DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_ROOMS_DROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_ROOMS_DROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_SPACE_DROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_SPACE_DROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_OBTAININGTYPE_DROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_OBTAININGTYPE_DROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_REALESTATETYPE_DROPDOWN_HIDDEN:
      return {
        type: DropdownActionTypes.TOGGLE_REALESTATETYPE_DROPDOWN_HIDDEN
      };
    case DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN:
      return { type: DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN };
    case DropdownActionTypes.TOGGLE_PAGECHANGER_DROPDOWN_HIDDEN:
      return {
        type: DropdownActionTypes.TOGGLE_PAGECHANGER_DROPDOWN_HIDDEN
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
