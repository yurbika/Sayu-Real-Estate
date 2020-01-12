import styled, { css } from "styled-components";
import theme from "../../variablen-styles/theme";

const getInputStyles = props => {
  if (props.inputStartseite)
    return css`
      border-radius: 15px 0 0 15px;
    `;
};

const InputStyled = styled.input`
  height: 2.5rem;
  min-width: 4rem;
  width: 18rem;
  max-width: 30vw;
  outline: none;
  border: none;
  padding-top: 1px;
  background-color: rgba(0, 0, 0, 0);
  color: #000000;
  background: ${theme.colors.lightWhite};
  padding-left: 1rem;
  &::placeholder {
    color: #00000098;
    font-size: 1rem;
    margin-top: 5rem;
  }
  &:focus {
    transition: all 0.3s ease;
    background-color: #fff;
  }

  ${getInputStyles}
`;

export default InputStyled;
