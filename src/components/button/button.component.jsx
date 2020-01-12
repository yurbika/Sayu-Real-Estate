import React from "react";

import { CustomButtonContainer, ArrowContainer, Arrow } from "./button.styles";

const Button = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    <span>{children}</span>
    <ArrowContainer {...props}>
      <Arrow {...props} />
    </ArrowContainer>
  </CustomButtonContainer>
);

export default Button;
