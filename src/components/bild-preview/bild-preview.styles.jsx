import theme from "../../utils/theme";
import styled from "styled-components";

export const HoverContainer = styled.div`
  position: absolute;
  cursor: default;
  display: none;
  animation: fadein 0.45s;
  flex-direction: column;
  background: ${theme.colors.lightPurpleOpacity};
  top: 0;
  width: 100%;
  height: 100%;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const KurzBeschreibung = styled.span`
  font-size: 0.8rem;
  margin: 0.5rem;
  letter-spacing: 1.2px;
`;

export const HoverFooter = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
  display: flex;
  align-items: flex-end;
`;

export const Zimmer = styled.span`
  border-right: 1px solid black;
  padding-right: 5px;
`;

export const Flaeche = styled.span`
  padding-left: 5px;
`;

export const Preis = styled.span`
  margin-left: auto;
`;

export const BildPreviewContainer = styled.div`
  position: relative;
  text-align: center;
  box-shadow: 5px 5px 5px 0px ${theme.colors.hslaBlack};
  img {
    width: 100%;
    height: 100%;
  }
  &:hover ${HoverContainer} {
    display: flex;
  }
`;
