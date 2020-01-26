import React from "react";
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

const FlaecheDropdown = () => (
  <div className="dropdown-container flaeche-dropdown" ref={dropdownRef}>
    <ul>
      <li>75 +</li>
      <li>100 +</li>
      <li>200 +</li>
      <li>300 +</li>
      <li>400 +</li>
      <li>500 +</li>
    </ul>
  </div>
);

export default FlaecheDropdown;
