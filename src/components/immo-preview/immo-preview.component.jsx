import React from "react";
import { connect } from "react-redux";

import Slider from "../../components/slider/slider.component";

//redux imports
import {
  togglePopup,
  setPopupImmo,
  setPopupImmoID
} from "../../redux/popup/popup.action";

//utils
import { numberWithDots } from "../input/input.utils";

//assets
import moneyIcon from "../../assets/money-icon.png";
import gpsIcon from "../../assets/gps-icon.png";
import propertyIcon from "../../assets/property-icon.png";
import roomIcon from "../../assets/room-icon.png";

//styles
import {
  Container,
  BildPreviewContainer,
  DetailsContainer,
  Beschreibung,
  Titel,
  Untertitel,
  TextContainer,
  Footer,
  IconContainer,
  FooterSecondSection,
  //reponsiv styles
  ResponsivDetailsContainer,
  ResponsivFooter,
  ResponsivAdresse,
  ResponsivIconContainer,
  RepsponsivFooterSecondSection
} from "./immo-preview.styles";

const ImmoPreview = ({
  immo,
  id,
  togglePopup,
  setPopupImmo,
  setPopupImmoID
}) => {
  let haustyp = "";
  if (!!immo["haus"]) haustyp = "haus";
  else if (!!immo["wohnung"]) haustyp = "wohnung";
  else return null;
  return (
    <Container>
      <BildPreviewContainer>
        <Slider
          imgArray={[
            immo[haustyp]["bilder"]["titelbild"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            immo[haustyp]["bilder"]["zweites"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            immo[haustyp]["bilder"]["drittes"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            immo[haustyp]["bilder"]["vier"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            immo[haustyp]["bilder"]["fünf"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
            immo[haustyp]["bilder"]["sechs"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop"
          ]}
          alt={haustyp}
          id={id}
          onClick={() => {
            togglePopup();
            document.body.style.overflow = "hidden";
            setPopupImmo(immo);
            setPopupImmoID(id);
          }}
        />
      </BildPreviewContainer>
      <DetailsContainer
        onClick={() => {
          togglePopup();
          document.body.style.overflow = "hidden";
          setPopupImmo(immo);
          setPopupImmoID(id);
        }}
      >
        <Beschreibung>
          <Titel>{immo[haustyp]["titel"]}</Titel>
          <Untertitel>{immo[haustyp]["untertitel"]}</Untertitel>
          <TextContainer>{immo[haustyp]["kurzeBeschreibung"]}</TextContainer>
        </Beschreibung>
        <Footer>
          <IconContainer>
            <img src={gpsIcon} alt="Adresse:" />
            <span>
              {" " +
                immo[haustyp]["adresse"]["straße"] +
                ", " +
                immo[haustyp]["adresse"]["postleitzahl"] +
                " - " +
                immo[haustyp]["adresse"]["stadt"] +
                " - " +
                immo[haustyp]["adresse"]["bundesland"]}
            </span>
          </IconContainer>
          <FooterSecondSection>
            <IconContainer>
              <img src={roomIcon} alt="Zimmer:" />
              <span>{" " + immo[haustyp]["zimmer"]}</span>
            </IconContainer>
            <IconContainer>
              <img src={propertyIcon} alt="Wohnfläche:" />
              <span>{" " + immo[haustyp]["wohnfläche"]} m²</span>
            </IconContainer>
            <IconContainer>
              <img src={moneyIcon} alt="Preis:" />
              <span>
                {" " + numberWithDots(immo[haustyp]["preis"].toString()) + " €"}
              </span>
            </IconContainer>
          </FooterSecondSection>
        </Footer>
      </DetailsContainer>
      <ResponsivDetailsContainer>
        <ResponsivFooter>
          <RepsponsivFooterSecondSection>
            <ResponsivIconContainer>
              <img src={roomIcon} alt="Zimmer:" />
              <span>{" " + immo[haustyp]["zimmer"]}</span>
            </ResponsivIconContainer>
            <ResponsivIconContainer>
              <img src={propertyIcon} alt="Wohnfläche:" />
              <span>{" " + immo[haustyp]["wohnfläche"]} m²</span>
            </ResponsivIconContainer>
            <ResponsivIconContainer>
              <img src={moneyIcon} alt="Preis:" />
              <span>
                {" " + numberWithDots(immo[haustyp]["preis"].toString()) + " €"}
              </span>
            </ResponsivIconContainer>
          </RepsponsivFooterSecondSection>
          <ResponsivIconContainer>
            <img src={gpsIcon} alt="Adresse:" />
            <ResponsivAdresse>
              {" " +
                immo[haustyp]["adresse"]["stadt"] +
                " - " +
                immo[haustyp]["adresse"]["bundesland"]}
            </ResponsivAdresse>
          </ResponsivIconContainer>
        </ResponsivFooter>
      </ResponsivDetailsContainer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  setPopupImmo: immo => dispatch(setPopupImmo(immo)),
  setPopupImmoID: num => dispatch(setPopupImmoID(num))
});

export default connect(null, mapDispatchToProps)(ImmoPreview);
