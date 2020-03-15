import theme from "../../utils/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${theme.colors.hslaDarkerBlack};
  border-radius: 15px;
  cursor: pointer;
  min-height: 360px;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: unset;
  }
`;

export const ImgPreviewContainer = styled.div`
  width: 360px;
  height: inherit;
  img {
    border-radius: 15px 0 0 15px;
  }
  @media (max-width: 768px) {
    height: unset;
    width: 100%;
    padding: 25px;
    img {
      border-radius: 15px;
    }
  }
`;

//normal viewing styles

export const DetailsContainer = styled.div`
  padding: 5px 0 5px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  margin-bottom: 15px;
`;

export const TextContainer = styled.div`
  line-height: 20px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 20px;
    margin-right: 5px;
  }
  & > * {
    margin-bottom: 5px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-items: center;
`;

export const FooterSecondSection = styled.div`
  display: flex;
  margin-top: 15px;
  & > * {
    margin-right: 15px;
  }
`;

//responsiv viewing styles

export const ResponsivDetailsContainer = styled.div`
  display: none;
  font-size: 20px;
  align-self: center;
  justify-self: center;
  margin: 15px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ResponsivFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 20px;
    margin-right: 5px;
  }
  & > * {
    margin-bottom: 5px;
  }
`;

export const ResponsivAdress = styled.span`
  font-size: 15px;
`;

export const ResponsivIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RepsponsivFooterSecondSection = styled.div`
  display: flex;
  margin-bottom: 15px;
  & > * {
    margin-right: 25px;
  }

  div:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 578px) {
    & > * {
      margin-right: 5px;
    }
  }
`;
