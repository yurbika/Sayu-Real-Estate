import React from "react";
import "./button.styles.scss";

const Button = ({ children, arrow, ...props }) => (
  <button {...props}>
    <span>{children}</span>
    <div className="arrow-container">
      <span className={"arrow " + arrow} />
    </div>
  </button>
);

export default Button;
