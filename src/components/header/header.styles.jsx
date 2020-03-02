import theme from "../../utils/theme";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  z-index: 2;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  background: ${theme.colors.transDarkerBlack};
  &.startseite {
    background: ${theme.colors.transBlack};
    margin-bottom: 25px;
    position: absolute;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  padding: 20px;
  cursor: pointer;

  .logo {
    height: inherit;
    width: inherit;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &.hidden {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const getOptionLinkStyle = props => {
  if (!props.responsiv)
    return css`
      &.registrieren {
        border-left: 2px solid ${theme.colors.lightWhite};
        margin-left: 2rem;
        margin-right: 1rem;
        padding-left: 3rem;
      }
      &:last-child {
        margin-right: 50px;
      }
    `;
};

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.darkPurple};
    & span {
      color: ${theme.colors.darkPurple};
    }
  }

  &.aktiv {
    cursor: default;
    & span {
      color: ${theme.colors.darkPurple};
      font-weight: bold;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid ${theme.colors.darkPurple};
      letter-spacing: 0.5px;
      transition: all 0.3s ease-in;
    }
  }

  &:last-child {
    border: 1px solid ${theme.colors.lightWhite};
    border-radius: 25px;
    &:hover {
      border-color: ${theme.colors.darkPurple};
    }
  }
  ${getOptionLinkStyle}
`;

export const HamburgerMenuItems = styled.div`
  position: relative;
  background: ${theme.colors.lightWhite};
  transition: all 0ms 300ms;
  width: inherit;
  height: inerhit;
  margin: 0 15px;

  &,
  &:after,
  &:before {
    width: 35px;
    height: 3px;
    border-radius: 5px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    background: white;
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    background: white;
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  &.animate {
    background: rgba(255, 255, 255, 0);

    &:after,
    &:before {
      z-index: 11;
    }

    &:after {
      top: 0;
      transform: rotate(45deg);
      transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &:before {
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;

export const HamburgerMenu = styled.div`
  height: 100%;
  display: none;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ResponsiveMenu = styled.div`
  width: 25vw;
  min-width: 175px;
  max-width: 200px;
  height: 100vh;
  float: right;
  background: ${theme.colors.brown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  transform: translate3d(200px, 0, 0);

  a {
    transform: translate3d(-150px, 0, 0);
    transition: transform 0.15s ease-in;
  }
  & > * {
    margin-bottom: 15px;
  }

  &.slide-in {
    transform: translate3d(0, 0, 0);
    a {
      transform: translate3d(0, 0, 0);
      &:first-child {
        transition-delay: 0.2s;
      }
      &:nth-child(2) {
        transition-delay: 0.3s;
      }
      &:nth-child(3) {
        transition-delay: 0.5s;
      }
      &:last-child {
        transition-delay: 0.6s;
      }
    }
  }
`;

export const ResponsiveMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${theme.colors.hslaDarkerBlack};
  opacity: 0;
  transition: all 0.3s ease-in;
  z-index: -10;
  pointer-events: none;

  &.hidden {
    opacity: 1;
    z-index: 10;
    pointer-events: visible;
  }
`;
