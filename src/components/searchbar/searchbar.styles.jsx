import theme from "../../utils/theme";
import styled, { css } from "styled-components";

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  max-width: inherit;
  height: inherit;
  background: ${theme.colors.hslaLightBlack} border-box;
  &::before {
    content: "";
    position: absolute;
    min-height: 500px;
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${theme.img});
    z-index: -1;
    filter: blur(10px);
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  max-width: inherit;
  height: inherit;
  border-radius: 35px;

  h1 {
    font-size: 2.7rem;
    z-index: 1;
  }
  p {
    margin-top: 1rem;
    font-size: 1.8rem;
    z-index: 1;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
      z-index: 1;
    }
    p {
      margin-top: 1rem;
      font-size: 1rem;
      z-index: 1;
    }
  }
`;

export const InputContainer = styled.div`
  max-width: 705px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputContainerResponsive = styled.div`
  display: none;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 65vw;
  margin-top: 35px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SearchbarPopupHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid ${theme.colors.hslaLightBlack};

  h2 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
`;

//could change div in to form

export const SearchbarPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
`;

export const SearchbarPopupContainer = styled.div`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${theme.colors.brown};
  z-index: 5;
  transform: translate3d(0, -100vh, 0);
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;

  &.show {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

/*--------------------------------------------*/

const getAdditonalStyle = props => {
  if (props.additionalStyle === "real-estate")
    return css`
      margin: 30px 0;
      width: inherit;
      max-width: 100%;

      background: hsla(0, 0%, 0%, 0.5);
      border-radius: 15px;
      @media (max-width: 768px) {
        height: 100px;
        & > * > div {
          margin: 0;
          max-width: 90%;
        }
      }
    `;

  if (props.noBackground)
    return css`
      display: none;
    `;

  if (props.shadow) {
    return css`
      position: absolute;
      top: 0;
    `;
  }
  if (props.shadowSecondary) {
    return css`
      position: absolute;
      bottom: 0;
      z-index: 1;
    `;
  }
  if (props.shadowResponsiv) {
    return css`
      position: absolute;
      top: 0;
      margin-top: 80px;
      & > * {
        &:nth-child(2) {
          z-index: 6;
        }
        &#price-dropdown {
          z-index: 4;
        }
        &#obtainingType-dropdown,
        &#obtainingType-dropdown > * {
          z-index: 3;
        }
        &:nth-child(4) > * {
          z-index: 2;
        }
      }
    `;
  }
};
export const SearchbarContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 950px;
  height: 285px;
  border-radius: 35px;
  ${getAdditonalStyle}
`;

export const ImgContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: inherit;
  max-width: inherit;
  height: inherit;
  overflow: hidden;
  border-radius: 35px;
  ${getAdditonalStyle}
`;

export const SearchbarPopupContentContainer = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 320px;
  margin-top: 30px;
  padding: 0 15px;

  & > * {
    margin-bottom: 15px;
    &:first-child {
      z-index: 7;
    }
    &:nth-child(2) {
      z-index: 5;
    }
    &:nth-child(3) > * {
      z-index: 4;
    }
    &:nth-child(4) > * {
      z-index: 3;
    }
  }

  ${getAdditonalStyle}
`;

export const InputContainerRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  &:nth-child(2) {
    z-index: 3;
  }

  &:nth-child(3) {
    margin-top: 15px;
    z-index: 2;
  }

  &:first-child {
    border-radius: 15px;
    box-shadow: 3px 3px 10px ${theme.colors.black};
    z-index: 4;
  }
  ${getAdditonalStyle}
`;

//---------------close button------
export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  height: 100%;
  cursor: pointer;
`;

export const CloseButton = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0);
  margin-top: 23px;
  cursor: pointer;

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
    bottom: 0px;
    background: ${theme.colors.lightWhite};
    transform: rotate(-45deg);
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0px;
    background: ${theme.colors.lightWhite};
    transform: rotate(45deg);
  }
`;
