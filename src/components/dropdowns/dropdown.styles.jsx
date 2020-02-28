import theme from "../../utils/theme";
import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const BindeStrich = styled.div`
  position: relative;
  width: 10px;
  height: 2.2rem;
  margin-right: 5px;
  margin-left: 5px;
  span {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-bottom: 2px solid ${theme.colors.brown};
  }
`;

//hier werden die styles für die verschiedenen dropdowns ausgewählt
const AuswahlDropdown = css`
  z-index: 1;
  width: inherit;
  max-width: inherit;
  height: 2.5rem;
  padding-top: 60px;
  position: relative;
  border-radius: 0 0 15px 15px;
  border: 1px solid ${theme.colors.hslaBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    list-style: none;
    position: absolute;
    width: 80%;
    top: 50%;
    text-align: center;
    li {
      cursor: pointer;
      width: 100%;
      color: black;
      padding: 5px;
      &:hover {
        color: ${theme.colors.darkPurple};
        border: 1px solid ${theme.colors.darkPurple};
        border-radius: 25px;
      }
    }
  }
`;
const ResultsDropdown = css`
  border: 1px solid ${theme.colors.hslaBlack};
  &::before,
  &::after {
    display: none;
  }
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  h4 {
    color: black;
  }
  ul {
    list-style: none;
    min-width: 26rem;
    max-width: 35rem;
    li {
      cursor: pointer;
      width: 100%;
      color: black;
      padding: 5px;
      padding-left: 15px;
      &:hover {
        color: ${theme.colors.darkPurple};
        border: 1px solid ${theme.colors.darkPurple};
        border-radius: 25px;
      }
    }
  }
`;

const PreisDropdown = css`
  //diese zeile lässt den dropdown unter dem button sein

  transform: translate3d(-3rem, 283px, 0px) !important;
  height: 360px;
  border: 1px solid ${theme.colors.hslaBlack};

  input {
    width: 100%;
  }
  ${InputContainer}
  ul {
    list-style: none;
    display: none;
    margin-top: 10px;
    margin-left: 10px;
    li {
      cursor: pointer;
      padding: 5px;
      width: 90%;
      color: black;
      &:hover {
        color: ${theme.colors.darkPurple};
        border: 1px solid ${theme.colors.darkPurple};
        border-radius: 25px;
      }
    }
  }
  #preis-min {
    display: block;
  }
`;

const HausDropdown = css``;

const ZimmerDropdown = css`
  transform: translate3d(0, 183px, 0px) !important;
  border-radius: 0 15px 15px 15px;
  width: 8rem;
  height: 10.2rem;
  ul {
    position: absolute;
    top: 5%;
  }
`;

const FlächeDropdown = css`
  transform: translate3d(12rem, 200px, 0px) !important;
  border-radius: 0 15px 15px 15px;
  width: 8rem;
  min-height: 12.2rem;
  ul {
    position: absolute;
    top: 5%;
  }
`;
//funktionen für die spezifischen seiten
const getAdditionalStyle = props => {
  switch (props.additionalStyle) {
    case "bezugsart-dropdown":
      return AuswahlDropdown;
    case "bezugsart-dropdown-liste":
      return [
        AuswahlDropdown,
        css`
          transform: translate3d(1px, 5px, 0px) !important;
        `
      ];
    case "haus-dropdown":
      return [AuswahlDropdown, HausDropdown];
    case "haus-dropdown-liste":
      return [
        AuswahlDropdown,
        [
          HausDropdown,
          css`
            transform: translate3d(8.05rem, 5px, 0px) !important;
          `
        ]
      ];
    case "zimmer-dropdown":
      return [AuswahlDropdown, ZimmerDropdown];
    case "zimmer-dropdown-liste":
      return [
        AuswahlDropdown,
        [
          ZimmerDropdown,
          css`
            transform: translate3d(0, 132px, 0px) !important;
          `
        ]
      ];
    case "flaeche-dropdown":
      return [AuswahlDropdown, FlächeDropdown];
    case "flaeche-dropdown-liste":
      return [
        AuswahlDropdown,
        [
          FlächeDropdown,
          css`
            transform: translate3d(12rem, 148px, 0px) !important;
          `
        ]
      ];
    case "results-dropdown":
      return ResultsDropdown;
    case "results-dropdown-liste":
      return ResultsDropdown;

    case "preis-dropdown":
      return PreisDropdown;
    case "preis-dropdown-liste":
      return [
        PreisDropdown,
        css`
          transform: translate3d(-3rem, 230px, 0px) !important;
        `
      ];
    default:
      return "";
  }
};

const getAdditionalStyleForResults = props => {
  if (props.additionalStyle === "results-dropdown-liste")
    return css`
      transform: translate3d(-22rem, -22px, 0px) !important;
    `;
};

//--------------------------------------------------------------------//

export const DropdownContainer = styled.div`
  width: inherit;
  display: flex;
  background-color: ${theme.colors.lightWhite};
  border-radius: 0 25px 25px 25px;
  padding: 35px 15px;
  z-index: 3;
  ${getAdditionalStyle}
`;

export const ResultsContainer = styled.div`
  position: absolute;
  left: 0;
  margin-top: 15px;
  font-size: 0.9rem;
  z-index: 2;
  ${getAdditionalStyleForResults}
`;
