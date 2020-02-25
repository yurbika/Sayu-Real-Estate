import theme from "../../variablen-styles/theme";
import styled, { css } from "styled-components";

const getAdditionalStyleForSuchleisteContainer = props => {
  if (props.additionalStyle === "liste")
    return css`
      margin: 35px auto;
      width: 100%;
      position: relative;
    `;
};

const getAdditionalStyleForFilter = props => {
  if (props.additionalStyle === "liste")
    return css`
      background: ${theme.colors.hslaDarkerBlack};
      border-radius: 15px;
    `;
};

export const SuchleisteContainer = styled.div`
  position: absolute;
  top: 35%;
  bottom: 0;
  right: 0;
  left: 0;
  h1 {
    font-size: 3rem;
    z-index: 1;
  }
  p {
    margin-top: 1rem;
    font-size: 1.8rem;
    z-index: 1;
  }
  ${getAdditionalStyleForSuchleisteContainer}
`;

export const Filter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 2.5em;
  z-index: 3;
  ${getAdditionalStyleForFilter}
`;

export const Bild = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
min-width: 950px;
min-height: 285px;
overflow:hidden;
background: ${theme.colors.hslaBlack} border-box;
border-radius: 2.5em;
&::before{
    content: "";
    position: absolute;
    min-height: 500px;
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${theme.img});
    z-index: -1;
    filter: blur(10px);`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;
  max-width: 60vw;
  height: 8rem;
  margin: 1rem;
`;

export const InputContainerZeile = styled.div`
  display: flex;
  z-index: 1;
  &:last-child {
    margin-top: 1rem;
  }
  &:first-child {
    border-radius: 15px;
    box-shadow: 3px 3px 10px ${theme.colors.black};
    z-index: 3;
  }
`;
