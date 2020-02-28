import theme from "../../utils/theme";
import styled, { css } from "styled-components";

export const SuchleisteContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 950px;
  height: 285px;
  border-radius: 35px;
`;

export const BildContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: inherit;
  max-width: inherit;
  height: inherit;
  overflow: hidden;
  border-radius: 35px;
`;

export const Bild = styled.div`
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
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
width: inherit;
max-width: inherit;
height: inherit;
border-radius: 35px;

h1 {
    font-size: 3rem;
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
`;

///////////

const getAdditonalStyle = props => {
  if (props.shadow) {
    return css`
      position: absolute;
      top: 0;
    `;
  }
  if (props.shadowSekundär) {
    return css`
      position: absolute;
      bottom: 0;
      z-index: -1;
    `;
  }
};

export const InputContainer = styled.div`
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

export const InputContainerZeile = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  &:nth-child(3) {
    margin-top: 15px;
  }

  &:first-child {
    border-radius: 15px;
    box-shadow: 3px 3px 10px ${theme.colors.black};
    z-index: 3;
  }
  ${getAdditonalStyle}
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
