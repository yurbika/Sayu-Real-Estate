import theme from "../../utils/theme";
import styled from "styled-components";

export const InspirationsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.transBlack};
  padding-top: 75px;
  margin-right: auto;
  margin-left: auto;
  width: 950px;
  height: 100%;
  * {
    color: black;
  }
  &:last-child {
    margin-bottom: 5rem;
    border-color: ${theme.colors.transDarkerBlack};
  }
  button {
    align-self: center;
    margin: 2rem 0 2rem 0;
  }
  @media (max-width: 1200px) {
    width: 465px;
  }
  @media (max-width: 768px) {
    width: 215px;
    height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  .first {
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
