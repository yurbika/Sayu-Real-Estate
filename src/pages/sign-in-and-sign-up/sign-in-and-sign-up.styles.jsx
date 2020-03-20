import styled from "styled-components";

export const Container = styled.div`
  min-height: 750px;
  height: calc(100vh - 150px);
  @media (max-width: 768px) {
    height: calc(100vh);
  }
`;

export const ContentContaienr = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  min-height: inherit;
  align-items: center;
  justify-content: center;
  padding: 15px;
  @media (max-width: 768px) {
    margin-top: -100px;
  }
`;
