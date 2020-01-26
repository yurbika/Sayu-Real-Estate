import React from "react";
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";
import { connect } from "react-redux";

const ZimmerDropdown = () => (
  <div className="dropdown-container zimmer-dropdown" ref={dropdownRef}>
    <ul>
      <li>1 +</li>
      <li>2 +</li>
      <li>3 +</li>
      <li>4 +</li>
      <li>5 +</li>
    </ul>
  </div>
);

export default ZimmerDropdown;
