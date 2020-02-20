import styled, { css } from "styled-components";

const getHeight = props => {
  if (props.expand)
    return css`
      max-height: 5000px;
    `;
};

export const BilderVorschau = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, max(208px));
  grid-auto-rows: 208px;
  grid-gap: 35px;
  margin-top: 15px;
  padding-bottom: 15px;
  max-height: 215px;
  transition: max-height 1.45s ease-in;

  &:before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, max(208px));
  }
  ${getHeight}
`;
