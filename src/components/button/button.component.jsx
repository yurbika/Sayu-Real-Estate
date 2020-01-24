import React from "react";

import { CustomButtonContainer, ArrowContainer, Arrow } from "./button.styles";

const Button = ({ children, preis, ...props }) => (
  <CustomButtonContainer {...props}>
    <span>{children}</span>
    {props.scroll ? (
      <ArrowContainer {...props}>
        <Arrow {...props} />
      </ArrowContainer>
    ) : null}
  </CustomButtonContainer>
);

export default Button;
