import React from "react";
import { connect } from "react-redux";

import Slider from "../slider/slider.component";

//redux imports
import {
  togglePopup,
  setPopupRealEstate,
  setPopupRealEstateID
} from "../../redux/popup/popup.action";

//utils
import { thousandSeperatorDots } from "../input/input.utils";
import theme from "../../utils/theme";

//assets
import moneyIcon from "../../assets/money-icon.png";
import gpsIcon from "../../assets/gps-icon.png";
import propertyIcon from "../../assets/property-icon.png";
import roomIcon from "../../assets/room-icon.png";

//styles
import {
  Container,
  ImgPreviewContainer,
  DetailsContainer,
  Description,
  Title,
  Subtitle,
  TextContainer,
  Footer,
  IconContainer,
  FooterSecondSection,
  //reponsiv styles
  ResponsivDetailsContainer,
  ResponsivFooter,
  ResponsivAdress,
  ResponsivIconContainer,
  RepsponsivFooterSecondSection
} from "./real-estate-preview.styles";

const RealEstatePreview = ({
  realEstate,
  id,
  togglePopup,
  setPopupRealEstate,
  setPopupRealEstateID
}) => {
  let realEstateType = "";
  if (!!realEstate["haus"]) realEstateType = "haus";
  else if (!!realEstate["wohnung"]) realEstateType = "wohnung";
  else return null;
  return (
    <Container>
      <ImgPreviewContainer>
        <Slider
          imgArray={[
            realEstate[realEstateType]["bilder"]["titelbild"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["bilder"]["zweites"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["bilder"]["drittes"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["bilder"]["vier"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["bilder"]["fünf"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["bilder"]["sechs"] +
              theme.unsplash.normalResolution
          ]}
          alt={realEstateType}
          id={id}
          onClick={() => {
            togglePopup();
            document.body.style.overflow = "hidden";
            setPopupRealEstate(realEstate);
            setPopupRealEstateID(id);
          }}
        />
      </ImgPreviewContainer>
      <DetailsContainer
        onClick={() => {
          togglePopup();
          document.body.style.overflow = "hidden";
          setPopupRealEstate(realEstate);
          setPopupRealEstateID(id);
        }}
      >
        <Description>
          <Title>{realEstate[realEstateType]["titel"]}</Title>
          <Subtitle>{realEstate[realEstateType]["untertitel"]}</Subtitle>
          <TextContainer>
            {realEstate[realEstateType]["kurzeBeschreibung"]}
          </TextContainer>
        </Description>
        <Footer>
          <IconContainer>
            <img src={gpsIcon} alt="Adress:" />
            <span>
              {" " +
                realEstate[realEstateType]["adresse"]["straße"] +
                ", " +
                realEstate[realEstateType]["adresse"]["postleitzahl"] +
                " - " +
                realEstate[realEstateType]["adresse"]["stadt"] +
                " - " +
                realEstate[realEstateType]["adresse"]["bundesland"]}
            </span>
          </IconContainer>
          <FooterSecondSection>
            <IconContainer>
              <img src={roomIcon} alt="Rooms:" />
              <span>{" " + realEstate[realEstateType]["zimmer"]}</span>
            </IconContainer>
            <IconContainer>
              <img src={propertyIcon} alt="Livingspace:" />
              <span>{" " + realEstate[realEstateType]["wohnfläche"]} m²</span>
            </IconContainer>
            <IconContainer>
              <img src={moneyIcon} alt="Price:" />
              <span>
                {" " +
                  thousandSeperatorDots(
                    realEstate[realEstateType]["preis"].toString()
                  ) +
                  " €"}
              </span>
            </IconContainer>
          </FooterSecondSection>
        </Footer>
      </DetailsContainer>
      <ResponsivDetailsContainer>
        <ResponsivFooter>
          <RepsponsivFooterSecondSection>
            <ResponsivIconContainer>
              <img src={roomIcon} alt="Rooms:" />
              <span>{" " + realEstate[realEstateType]["zimmer"]}</span>
            </ResponsivIconContainer>
            <ResponsivIconContainer>
              <img src={propertyIcon} alt="Livingspace:" />
              <span>{" " + realEstate[realEstateType]["wohnfläche"]} m²</span>
            </ResponsivIconContainer>
            <ResponsivIconContainer>
              <img src={moneyIcon} alt="Price:" />
              <span>
                {" " +
                  thousandSeperatorDots(
                    realEstate[realEstateType]["preis"].toString()
                  ) +
                  " €"}
              </span>
            </ResponsivIconContainer>
          </RepsponsivFooterSecondSection>
          <ResponsivIconContainer>
            <img src={gpsIcon} alt="Adress:" />
            <ResponsivAdress>
              {" " +
                realEstate[realEstateType]["adresse"]["stadt"] +
                " - " +
                realEstate[realEstateType]["adresse"]["bundesland"]}
            </ResponsivAdress>
          </ResponsivIconContainer>
        </ResponsivFooter>
      </ResponsivDetailsContainer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  setPopupRealEstate: realEstate => dispatch(setPopupRealEstate(realEstate)),
  setPopupRealEstateID: num => dispatch(setPopupRealEstateID(num))
});

export default connect(null, mapDispatchToProps)(RealEstatePreview);
