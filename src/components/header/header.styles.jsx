import theme from "../../variablen-styles/theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: absolute;
  z-index: 1;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: ${theme.colors.transBlack};
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
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;

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
  }
`;