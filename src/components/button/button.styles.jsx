import theme from "../../variablen-styles/theme";
import styled, { css } from "styled-components";

//verschiedene Button-Styles

const normalerButton = css`
  max-width: 13vw;
  span {
    position: absolute;
    left: 1rem;
    top: 0;
    margin-top: 0.6rem;
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
  max-width: 17vw;
  border-left: none;
  border-bottom: 2px solid ${theme.colors.lightWhite};
  span {
    position: absolute;
    left: 0;
    color: ${theme.colors.lightWhite};
  }
  &:first-child {
    margin-left: 0;
  }
`;

const scrollButton = css`
  position: absolute;
  z-index: 10;
  height: 3.5rem;
  top: 86vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid ${theme.colors.lightWhite};
  background-color: rgba(0, 0, 0, 0);
  border-radius: 15px;
  .arrow-container {
    bottom: 2.4rem;
    right: 5.3rem;
    transform: rotate(45deg);
  }
  &:hover {
    background: ${theme.colors.darkPurple};
    letter-spacing: 2px;
    transition: all 0.3s ease-out;
  }
`;

//entscheiden welche Styles angewendet werden soll

const getButtonStyles = props => {
  if (props.scrollButton) return scrollButton;
  if (props.sekundärerButton) return sekundärerButton;
  if (props.suchButton) return suchButton;
  if (props.aktionsButton) return aktionsButton;
  return normalerButton;
};

//allgemeine Button-Styles

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
  }
  ${getButtonStyles}
`;

//anwenden verschiedener Positionierungen der Dropdown-Pfeile

const getArrowContainerStyles = props => {
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
  if (props.normalerButton)
    return css`
      bottom: 1.9rem;
      right: 2.5rem;
    `;
  if (props.suchButton || props.aktionsButton)
    return css`
      display: none;
    `;
};

const getArrowStyles = props => {
  if (props.normalerButton)
    return css`
      &:before,
      &:after {
        background-color: ${theme.colors.transDarkerBlack};
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
