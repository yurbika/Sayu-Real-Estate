import theme from "../../utils/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 75px;
`;

export const SearchbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 1120px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95vw;
  }
`;

export const NoResults = styled.span`
  display: flex;
  background: ${theme.colors.brown};
  align-items: center;
  justify-content: center;
  height: 125px;
  width: 100%;
  border-radius: 15px;
  margin-bottom: 35px;
  font-size: 25px;
  letter-spacing: 5px;
`;

export const RealEstatePreviewContainer = styled.div`
  & > * {
    margin-bottom: 35px;
  }
`;
