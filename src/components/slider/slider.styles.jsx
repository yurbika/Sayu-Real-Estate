import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: inherit;
  height: 100%;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  pointer-events: none;

  & > * {
    pointer-events: visible;
  }
`;

export const LeftArrowContainer = styled.div`
  margin-left: auto;
  transform: rotate(-90deg);
`;

export const RightArrowContainer = styled.div`
  transform: rotate(90deg);
`;
