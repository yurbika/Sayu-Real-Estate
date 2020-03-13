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
`;

export const BoxInfo = styled.div`
  display: flex;
  & :first-child {
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
  if (props.title)
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
