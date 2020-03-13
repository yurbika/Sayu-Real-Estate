import styled, { css } from "styled-components";
import theme from "../../utils/theme";

export const SliderPreviewContainer = styled.div`
  position: absolute;
  max-width: inherit;
  bottom: -155px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    cursor: pointer;
  }
  .active {
    border: 2px solid ${theme.colors.darkPurple};
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const ImgContainer = styled.div`
  position: relative;
  max-width: 120px;
  max-height: 120px;
  border-radius: 15px;
  margin-right: 15px;
`;

const getAdditionalStyleOverlay = props => {
  if (props.hidden)
    return css`
      display: none;
    `;
};

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  pointer-events: none;
  ${getAdditionalStyleOverlay}
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 15px;
  transform: rotate(-90deg);
`;

export const LeftArrow = styled.div`
  position: absolute;
  transform: rotate(90deg);
  left: 0;
`;
