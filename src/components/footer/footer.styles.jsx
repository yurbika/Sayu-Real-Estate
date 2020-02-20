import theme from "../../variablen-styles/theme";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${theme.colors.black};
  color: ${theme.colors.lightWhite};
`;
