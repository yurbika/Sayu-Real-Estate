import theme from "../../utils/theme";
import styled from "styled-components";

export const StartseiteContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100%;
  padding-bottom: 75px;
`;

export const ContainerSuchleiste = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  height: 100vh;
`;

export const BackgroundImageFilter = styled.div`
  height: 100%;
  min-height: 500px;
  width: 100%;
  position: absolute;
  background: ${theme.colors.black};
  opacity: 35%;
`;

export const StartseiteHintergrund = styled.div`
  height: 100%;
  min-height: 500px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${theme.img});
`;

export const InspirationsSection = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;
