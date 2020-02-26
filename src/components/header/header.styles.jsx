import theme from "../../utils/theme";
import styled from "styled-components";
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
  &.karte {
    display: none;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 9rem;
  padding: 20px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &.hidden {
    display: none;
  }
`;

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

  &.registrieren {
    border-left: 2px solid ${theme.colors.lightWhite};
    margin-left: 2rem;
    margin-right: 1rem;
    padding-left: 3rem;
  }

  &:last-child {
    border: 1px solid ${theme.colors.lightWhite};
    border-radius: 25px;
    margin-right: 50px;
    &:hover {
      border-color: ${theme.colors.darkPurple};
    }
  }
`;
