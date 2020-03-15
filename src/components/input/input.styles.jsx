import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getInputStyles = props => {
  if (props.inputHomeResponsiv)
    return css`
      border-radius: 15px;
      padding-right: 2rem;
      min-width: 100%;
    `;
  if (props.inputHome)
    return css`
      border-radius: 15px 0 0 15px;
      padding-right: 2rem;
    `;
  if (props.dropdownInput) {
    return css`
      border-radius: 25px;
      background: #cca96a;
    `;
  }
};

export const InputStyled = styled.input`
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
  padding-right: 1rem;
  &::placeholder {
    color: #00000098;
    font-size: 1rem;
    margin-top: 5rem;
  }
  &:focus {
    transition: all 0.3s ease;
    border: 3px solid;
    border-color: ${theme.colors.darkPurple};
  }

  ${getInputStyles}
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ClearInputButton = styled.button`
  position: absolute;
  cursor:pointer;
  z-index: 1;
  top: 10px;
  bottom: 10px;
  right: 10px;
  border: 0;
  padding: 0 10px;
  border-radius: 50%;
  background-color: ${theme.colors.lightWhite}
  transition: background 200ms;
  outline: none;

  &:hover {
    background-color: ${theme.colors.transBlack}; 
  }
  &:before, &:after {
    content: '';
    position: absolute;
    right: 9px;
    top:4px;
    height: 12px;
    width: 2px;
    background-color: ${theme.colors.black};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
`;
