import theme from "../../utils/theme";
import styled, { css } from "styled-components";

//verschiedene Button-Styles

const normalerButton = css`
  max-width: 13vw;
  &:active {
    background: ${theme.colors.lightPurple};
    span {
      color: ${theme.colors.lightWhite};
    }
  }
`;

const aktionsButton = css`
  background: ${theme.colors.darkPurple};
  transition: all 0.3s ease;
  border-left: none;
  border-radius: 15px;
  width: 10rem;
  max-width: 12rem;
  span {
    left: 2.5rem;
    color: ${theme.colors.lightWhite};
  }
  &:hover {
    background: ${theme.colors.lightPurple};
    letter-spacing: 2px;
  }
`;

const suchButton = css`
  ${aktionsButton};
  border-radius: 0 15px 15px 0;
`;

const sekundärerButton = css`
  margin-top: 0.2rem;
  margin-left: 2rem;
  background: none;
  width: 10rem;
  max-width: 18vw;
  border-radius: 25px;
  border-left: none;
  border: 2px solid ${theme.colors.lightWhite};
  span {
    margin-top: 1rem;
    color: ${theme.colors.lightWhite};
  }
  &:first-child {
    margin-left: 0;
  }
  &:active {
    border-color: ${theme.colors.lightPurple};
    span {
      color: ${theme.colors.lightPurple};
    }
  }
`;

const scrollButton = css`
  position: absolute;
  height: 3.5rem;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid ${theme.colors.lightWhite};
  background-color: rgba(0, 0, 0, 0);
  border-radius: 15px;
  &:hover {
    background: ${theme.colors.darkPurple};
    transition: all 0.3s ease-out;
  }
`;

const inputButton = css`
  min-width: 70%;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  & span {
    position: absolute;
    color: ${theme.colors.transDarkerBlack};
    margin-left: 15px;
  }
`;

//entscheiden welche Styles angewendet werden soll

const getButtonStyles = props => {
  if (props.scrollButton && props.sliderArrow)
    return [
      scrollButton,
      css`
        position: relative;
        bottom: 0;
        height: 2rem;
        width: 3rem;
        border: none;
        &:hover {
          background: ${theme.colors.lightPurple};
          transition: all 0.3s ease-out;
        }
      `
    ];
  if (props.scrollButton) return scrollButton;
  if (props.sekundärerButton) return sekundärerButton;
  if (props.suchButton) return suchButton;
  if (props.aktionsButton) return aktionsButton;
  if (props.inputButton) return inputButton;
  return normalerButton;
};

//allgemeine Button-Styles
//pointer-events ist auf none wegen den dropdowns damit sie von überall geschlossen
//werden können und die spans nicht mehr anklickbar sind

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  position: relative;
  min-width: 4rem;
  width: 8rem;
  max-width: 8vw;
  height: 2.5rem;
  outline: none;
  border: none;
  background: ${theme.colors.lightWhite};
  border-left: 1px solid grey;
  font-size: 1rem;

  span {
    color: rgb(0, 0, 0);
    pointer-events: none;
  }
  ${getButtonStyles}
`;

//anwenden verschiedener Positionierungen der Dropdown-Pfeile
//wurde rausgenommen jedoch die Funktionen sind immer noch drin

const getArrowContainerStyles = props => {
  if (props.scrollButton && props.sliderArrow)
    return css`
      min-width: 4rem;
      width: 3rem;
      max-width: 8vw;
      height: 2rem;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      pointer-events: none;
    `;
  if (props.scrollButton)
    return css`
      min-width: 4rem;
      width: 8rem;
      max-width: 8vw;
      height: 3.5rem;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
    `;
};

const getArrowStyles = props => {
  if (props.scrollButton && props.sliderArrow)
    return css`
      margin: -1px 0 0 -32px;
      &:before,
      &:after {
        width: 25px;
        height: 3px;
      }
      &:after {
        top: -11px;
        left: 11px;
      }
    `;
  if (props.scrollButton)
    return css`
      margin: -5px 0 0 -45px;
      &:before,
      &:after {
        width: 35px;
        height: 3px;
      }
      &:after {
        top: -16px;
        left: 16px;
      }
    `;
};

//allgemeine Dropdown-Pfeil-Styles

export const ArrowContainer = styled.div`
  position: absolute;
  right: 18px;
  bottom: -1px;
  ${getArrowContainerStyles}
`;

export const Arrow = styled.span`
  width: 13px;
  height: 13px;
  bottom: 0;
  margin-top: 2px;
  text-align: left;
  transform: rotate(45deg);

  &:before,
  &:after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 8px;
    height: 2px;
    background-color: ${theme.colors.lightWhite};
  }
  &:after {
    position: absolute;
    transform: rotate(90deg);
    top: -3px;
    left: 3px;
  }
  ${getArrowStyles}
`;
