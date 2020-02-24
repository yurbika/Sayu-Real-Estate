import React from "react";

import { CustomButtonContainer, ArrowContainer, Arrow } from "./button.styles";

const Button = ({ children, preis, ...props }) => (
  <CustomButtonContainer {...props}>
    <span>{children}</span>
    {props.scrollButton ? (
      <ArrowContainer {...props}>
        <Arrow {...props} />
      </ArrowContainer>
    ) : null}
  </CustomButtonContainer>
);

export default Button;
