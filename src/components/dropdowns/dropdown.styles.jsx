import theme from "../../utils/theme";
import styled, { css } from "styled-components";

export const InputListContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
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
  padding: 45px 5px 10px 5px;
  position: relative;
  border-radius: 0 0 15px 15px;
  border: 1px solid ${theme.colors.hslaBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: inline-block;
    list-style: none;
    width: 80%;
    top: 50%;
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
  position: absolute;
  left: 0;
  margin-top: 15px;
  font-size: 0.9rem;
  z-index: 2;
  border: 1px solid ${theme.colors.hslaBlack};
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;

  h4 {
    color: black;
  }

  ul {
    display: inline-block;
    list-style: none;

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
  position: absolute;
  left: 12px;
  margin-top: 20px;
  display: flex;
  padding: 15px;
  width: 375px;
  border: 1px solid ${theme.colors.hslaBlack};
  z-index: 3;

  input {
    width: 100%;
  }
  ${InputListContainer}
  ul {
    list-style: none;
    width: 100%;
    display: none;
    margin-top: 10px;
    margin-left: 10px;
    text-align: start;
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
    display: inline-block;
  }
`;

const NormalDropdown = css`
  border-radius: 0 15px 15px 15px;
  padding: 10px 5px;
  left: 12px;
  margin-top: 38px;
  width: calc(100% - 25px);
`;

//funktionen für die spezifischen seiten
const getAdditionalStyle = props => {
  switch (props.additionalStyle) {
    case "page-changer":
      return [
        AuswahlDropdown,
        css`
          display: inline-block;
          max-height: 150px;
          width: inherit;
          min-width: inherit;
          padding: 0;
          padding-top: 25px;
          padding-bottom: 15px;
          margin-top: 15px;
          text-align: center;
          overflow-y: scroll;
          overflow-x: hidden;
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
            border-radius: 15px;
          }
          &::-webkit-scrollbar-track-piece {
            background: transparent;
            margin: 10px 0;
          }
        `
      ];
    case "responsiv-dropdown":
      return [
        AuswahlDropdown,
        NormalDropdown,
        css`
          margin-top: 40px;
        `
      ];
    case "bezugsart-dropdown":
    case "haus-dropdown":
      return AuswahlDropdown;
    case "zimmer-dropdown":
    case "flaeche-dropdown":
      return [AuswahlDropdown, NormalDropdown];
    case "results-dropdown responsiv-dropdown":
      return [
        ResultsDropdown,
        css`
          top: 0;
          width: calc(100% - 30px);
          margin: 15px;
        `
      ];
    case "results-dropdown":
      return ResultsDropdown;
    case "preis-dropdown responsiv-dropdown":
      return [
        PreisDropdown,
        css`
          max-width: calc(100% - 15px);
          justify-content: space-evenly;
        `
      ];
    case "preis-dropdown":
      return PreisDropdown;
    default:
      return "";
  }
};

//--------------------------------------------------------------------//

export const DropdownContainer = styled.div`
  width: inherit;
  background-color: ${theme.colors.lightWhite};
  border-radius: 0 25px 25px 25px;
  padding: 35px 15px;
  z-index: 3;
  ${getAdditionalStyle}
`;
