import theme from "../../variablen-styles/theme";
import img from "../../assets/startseiten_hintergrund.jpg";
import styled from "styled-components";

export const StartseiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContainerSuchleiste = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundImageFilter = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${theme.colors.black};
  opacity: 35%;
`;

export const StartseiteHintergrund = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${img});
`;

export const Test = styled.div`
  width: 100%;
  height: 100%;
`;
