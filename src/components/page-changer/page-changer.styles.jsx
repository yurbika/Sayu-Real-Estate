import styled from "styled-components";

export const PageChangerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  margin-bottom: 75px;
  z-index: 1;

  button:nth-of-type(2) {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
  }

  button:last-of-type {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
