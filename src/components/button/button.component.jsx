import React from "react";
import "./button.styles.scss";

const Button = ({ children, ...props }) => (
  <button {...props}>
    <span>{children}</span>
  </button>
);

export default Button;
