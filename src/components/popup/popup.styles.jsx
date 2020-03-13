import styled, { css } from "styled-components";
import theme from "../../utils/theme";

//allgemeine styles für den popup

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${theme.colors.transBlack};
  z-index: 10;
  margin: auto;
`;

export const PopupContentContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  width: 80vw;
  background: ${theme.colors.lightWhite};
  overflow: scroll;
  @media (max-width: 1023px) {
    width: 100vw;
  }
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 0;
`;

export const AllContentContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const getAdditionalStyleRotate = props => {
  if (props.second)
    return css`
      background: ${theme.colors.purple};
    `;
};

export const RotateContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 75px;
  height: inherit;
  background: ${theme.colors.lightPurple};
  @media (max-width: 1023px) {
    display: none;
  }
  ${getAdditionalStyleRotate}
`;

export const Rotate = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  font-weight: bold;
  letter-spacing: 10px;
`;

export const Section = styled.div`
  display: flex;
`;

//sektions bedingte styles
export const Container = styled.div`
  padding-top: 35px;
  padding-bottom: 100px;
  background: ${theme.colors.brown};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    padding: 50px 0;
    width: 100%;
    flex-direction: column;
  }
`;
export const SliderInfoContainer = styled.div`
  position: relative;
  display: flex;
  padding: 15px 15px 0 15px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    & :nth-child(3) {
      display: none;
    }
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 450px;
  height: inherit;

  img {
    border-radius: 15px;
  }
`;

export const InfosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: inherit;
  max-height: 275px;
  width: 100%;
  padding: 15px 15px 15px 50px;
  background: ${theme.colors.lightWhite};
  border-radius: 15px;
  & > * > *,
  & > * > * > * {
    color: ${theme.colors.brown};
  }
  @media (max-width: 1023px) {
    height: 350px;
    max-width: 500px;
    width: 100%;
    padding: 5px 10px;
    margin-top: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 20px;
    margin-right: 5px;
  }
`;

export const InfosContent = styled.div`
  display: flex;
  flex-direction: column;
  & div:first-of-type {
    border-bottom: 1px solid ${theme.colors.hslaBlack};
  }
  & :nth-child(3) {
    display: flex;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  & div:first-child {
    border-bottom: none;
    box-shadow: none;
  }
  & > * {
    color: ${theme.colors.lightWhite};
    background: ${theme.colors.brown};
    padding: 15px;
    box-shadow: -5px 0px 10px -2px ${theme.colors.hslaBlack};
  }
`;

export const InfosFooter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 15px;
  border-top: 1px solid ${theme.colors.hslaBlack};
  @media (max-width: 1023px) {
    font-size: 13px;
  }
`;

const getAdditionalStylesSpan = props => {
  if (props.titel)
    return css`
      margin-bottom: 5px;
    `;
  if (props.preis)
    return css`
      margin-top: 15px;
      margin-bottom: 15px;
    `;
};

export const HeaderSpan = styled.span`
  font-size: 25px;
  ${getAdditionalStylesSpan}
`;

//second section

export const MainContentContainer = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    margin-top: unset;
  }
`;

export const MainContent = styled.div` max-width: 895px;
width: 100%;
height: inherit;
display: flex;
padding: 15px 15px 0 15px;
margin-bottom: 75px;
justify-content: space-between;
@media (max-width: 1023px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin-bottom: 15px;
  }`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  height: 100%;
  border: 1px solid black;
  border-radius: 15px;
  & > * {
    margin: 15px;
  }
  @media (max-width: 1023px) {
    width: inherit;
    max-width: 450px;
  }
`;

const getAdditionalStyleGrid = props => {
  if (props.preis)
    return css`
      grid-template-columns: repeat(auto-fit, minmax(0, 350px));
    `;
};

export const GridContainer = styled.div`
  max-width: inherit;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 180px));
  background: ${theme.colors.hslaBlack};
  border-radius: 15px;
  padding: 15px;
  ${getAdditionalStyleGrid}
`;

const getAdditionalStyleGridItem = props => {
  if (props.haus)
    return css`
      & :first-child {
        display: inline-block;
        width: 100px;
      }
    `;
  if (props.preis)
    return css`
      & > * {
        display: inline-block;
        width: 150px;
      }
    `;
};

export const GridItem = styled.div`
  ${getAdditionalStyleGridItem}
`;

export const MapContainer = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 370px;
  height: 100vh;
  max-height: 370px;
  @media (max-width: 1023px) {
    width: inherit;
    max-width: 450px;
    height: 100vh;
    max-height: 450px;
  }
`;
