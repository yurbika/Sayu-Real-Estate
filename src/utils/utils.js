import React from "react";

//refs are important for checking if someone clicked outside the dropdown/popup

export const dropdownRef = React.createRef();
export const popupRef = React.createRef();

export const handleClickOutsideDropdown = event => {
  if (
    dropdownRef.current &&
    !dropdownRef.current.contains(event.target) &&
    event.target.id !== "filter-button"
  ) {
    return true;
  } else return false;
};

export const handleClickOutsidePopup = event => {
  if (popupRef.current && !popupRef.current.contains(event.target)) {
    return true;
  } else return false;
};
