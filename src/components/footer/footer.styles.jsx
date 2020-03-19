import theme from "../../utils/theme";
import styled, { css } from "styled-components";

const getAdditionalStyle = props => {
  if (props.errorPage)
    return css`
      position: relative;
    `;
};

export const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${theme.colors.black};
  color: ${theme.colors.lightWhite};
  ${getAdditionalStyle}
`;
