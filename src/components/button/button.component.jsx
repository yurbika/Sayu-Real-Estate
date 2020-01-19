import React from "react";

import { CustomButtonContainer, ArrowContainer, Arrow } from "./button.styles";

//scroll funktion

const toSection = refTo => {
  let getId = document.getElementById(refTo);
  //Die minus 75 ist der Stylingabstand
  window.scrollTo(0, getId.offsetTop - 75);
};

const Button = ({ children, scroll, refTo, ...props }) => (
  <CustomButtonContainer
    onClick={
      scroll
        ? () => {
            toSection(refTo);
          }
        : null
    }
    {...props}
  >
    <span>{children}</span>
    <ArrowContainer {...props}>
      <Arrow {...props} />
    </ArrowContainer>
  </CustomButtonContainer>
);

export default Button;
