import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  min-height: 750px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * > * {
    color: ${theme.colors.black};
  }

  img {
    padding: 15px;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    @media (max-width: 1024px) {
      max-width: 400px;
      max-height: 400px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: -75px;
  }
`;

export const TextContainer = styled.div`
  max-width: 750px;
  margin: 15px;
  h2 {
    text-align: center;
    margin-bottom: 15px;
  }
`;
