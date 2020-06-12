import React from "react";
import { connect } from "react-redux";

import Slider from "../slider/slider.component";

//redux imports
import {
  togglePopup,
  setPopupRealEstate,
  setPopupRealEstateID,
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
  RepsponsivFooterSecondSection,
} from "./real-estate-preview.styles";

const RealEstatePreview = ({
  realEstate,
  id,
  togglePopup,
  setPopupRealEstate,
  setPopupRealEstateID,
}) => {
  let realEstateType = "";
  if (!!realEstate["house"]) realEstateType = "house";
  else if (!!realEstate["apartment"]) realEstateType = "apartment";
  else return null;
  return (
    <Container
      tabIndex="0"
      aria-label={`Real-Estate Number: ${id + 1}, has popup`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          togglePopup();
          document.body.style.overflow = "hidden";
          setPopupRealEstate(realEstate);
          setPopupRealEstateID(id);
        }
      }}
    >
      <ImgPreviewContainer>
        <Slider
          imgArray={[
            realEstate[realEstateType]["imgs"]["cover"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["imgs"]["two"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["imgs"]["three"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["imgs"]["four"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["imgs"]["five"] +
              theme.unsplash.normalResolution,
            realEstate[realEstateType]["imgs"]["six"] +
              theme.unsplash.normalResolution,
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
          <Title>{realEstate[realEstateType]["title"]}</Title>
          <Subtitle>{realEstate[realEstateType]["subtitle"]}</Subtitle>
          <TextContainer>
            {realEstate[realEstateType]["briefDescription"]}
          </TextContainer>
        </Description>
        <Footer>
          <IconContainer>
            <img src={gpsIcon} alt="Adress:" />
            <span>
              {" " +
                realEstate[realEstateType]["adress"]["street"] +
                ", " +
                realEstate[realEstateType]["adress"]["postcode"] +
                " - " +
                realEstate[realEstateType]["adress"]["city"] +
                " - " +
                realEstate[realEstateType]["adress"]["federalstate"]}
            </span>
          </IconContainer>
          <FooterSecondSection>
            <IconContainer>
              <img src={roomIcon} alt="Rooms:" />
              <span>{" " + realEstate[realEstateType]["rooms"]}</span>
            </IconContainer>
            <IconContainer>
              <img src={propertyIcon} alt="Livingspace:" />
              <span>{" " + realEstate[realEstateType]["livingspace"]} m²</span>
            </IconContainer>
            <IconContainer>
              <img src={moneyIcon} alt="Price:" />
              <span>
                {" " +
                  thousandSeperatorDots(
                    realEstate[realEstateType]["price"].toString()
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
              <span>{" " + realEstate[realEstateType]["rooms"]}</span>
            </ResponsivIconContainer>
            <ResponsivIconContainer>
              <img src={propertyIcon} alt="Livingspace:" />
              <span>{" " + realEstate[realEstateType]["livingspace"]} m²</span>
            </ResponsivIconContainer>
            <ResponsivIconContainer>
              <img src={moneyIcon} alt="Price:" />
              <span>
                {" " +
                  thousandSeperatorDots(
                    realEstate[realEstateType]["price"].toString()
                  ) +
                  " €"}
              </span>
            </ResponsivIconContainer>
          </RepsponsivFooterSecondSection>
          <ResponsivIconContainer>
            <img src={gpsIcon} alt="Adress:" />
            <ResponsivAdress>
              {" " +
                realEstate[realEstateType]["adress"]["city"] +
                " - " +
                realEstate[realEstateType]["adress"]["federalstate"]}
            </ResponsivAdress>
          </ResponsivIconContainer>
        </ResponsivFooter>
      </ResponsivDetailsContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
  setPopupRealEstate: (realEstate) => dispatch(setPopupRealEstate(realEstate)),
  setPopupRealEstateID: (num) => dispatch(setPopupRealEstateID(num)),
});

export default connect(null, mapDispatchToProps)(RealEstatePreview);
