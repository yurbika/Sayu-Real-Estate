import styled from "styled-components";
import theme from "../../utils/theme";

export const SpinnerOverlay = styled.div`
  background: ${theme.colors.black};
  border-radius: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: unset;
    width: 100%;
    padding: 25px;
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${theme.colors.lightWhite};
  border-radius: 50%;
  border-top-color: ${theme.colors.hslaDarkerBlack};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
