import React from "react";
import { connect } from "react-redux";

import Slider from "../slider/slider.component";

//redux imports
import {
  togglePopup,
  setPopupImmo,
  setPopupImmoID
} from "../../redux/popup/popup.action";

//utils
import { thousandSeperatorDots } from "../input/input.utils";

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
  setPopupImmo,
  setPopupImmoID
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
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            realEstate[realEstateType]["bilder"]["zweites"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            realEstate[realEstateType]["bilder"]["drittes"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            realEstate[realEstateType]["bilder"]["vier"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            realEstate[realEstateType]["bilder"]["fünf"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            realEstate[realEstateType]["bilder"]["sechs"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop"
          ]}
          alt={realEstateType}
          id={id}
          onClick={() => {
            togglePopup();
            document.body.style.overflow = "hidden";
            setPopupImmo(realEstate);
            setPopupImmoID(id);
          }}
        />
      </ImgPreviewContainer>
      <DetailsContainer
        onClick={() => {
          togglePopup();
          document.body.style.overflow = "hidden";
          setPopupImmo(realEstate);
          setPopupImmoID(id);
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
  setPopupImmo: realEstate => dispatch(setPopupImmo(realEstate)),
  setPopupImmoID: num => dispatch(setPopupImmoID(num))
});

export default connect(null, mapDispatchToProps)(RealEstatePreview);
