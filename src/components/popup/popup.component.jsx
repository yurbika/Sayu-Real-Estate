import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component imports
import Slider from "../../components/slider/slider.component";
import SliderPreview from "../slider-preview/slider-preview.component";
import PopupMap from "../../components/popup-map/popup-map.component";

//redux imports
import {
  selectPopupImmo,
  selectPopupImmoID
} from "../../redux/popup/popup.selectors";

import { togglePopup } from "../../redux/popup/popup.action";

//utils
import { popupRef } from "../../utils/utils";
import { thousandSeperatorDots } from "../input/input.utils";

//styles
import {
  //generally styles
  PopupContainer,
  PopupContentContainer,
  CloseButtonContainer,
  AllContentContainer,
  RotateContainer,
  Rotate,
  Section,

  //section styles
  Container,
  IconContainer,

  //first section
  SliderInfoContainer,
  SliderContainer,
  InfosContainer,
  InfosContent,
  BoxInfo,
  InfosFooter,
  HeaderSpan,

  //second section
  MainContentContainer,
  MainContent,
  InformationContainer,
  GridContainer,
  GridItem,
  MapContainer
} from "./popup.styles";
import { CloseButton } from "../suchleiste/suchleiste.styles";

//assets
import moneyIconBrown from "../../assets/money-icon-brown.png";
import gpsIconBrown from "../../assets/gps-icon-brown.png";
import propertyIcon from "../../assets/property-icon.png";
import roomIcon from "../../assets/room-icon.png";
import areaIcon from "../../assets/area-icon.png";
import clockIcon from "../../assets/clock-icon.png";

class Popup extends React.Component {
  render() {
    const { immo, immoID, togglePopup } = this.props;
    let haustyp = "";
    if (!!immo["haus"]) haustyp = "haus";
    else if (!!immo["wohnung"]) haustyp = "wohnung";
    else return null;

    return (
      <PopupContainer>
        <PopupContentContainer ref={popupRef}>
          <CloseButtonContainer
            className="closebutton-container"
            onClick={() => {
              togglePopup();
              document.body.style.overflowY = "visible";
            }}
          >
            <CloseButton />
          </CloseButtonContainer>
          <AllContentContainer>
            <Section>
              <RotateContainer>
                <Rotate>KURZINFORMATION</Rotate>
              </RotateContainer>
              <Container>
                <SliderInfoContainer>
                  <SliderContainer>
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
                      id={immoID}
                    />
                  </SliderContainer>
                  <InfosContainer>
                    <InfosContent>
                      <HeaderSpan titel>{immo[haustyp]["titel"]}</HeaderSpan>
                      <IconContainer>
                        <img src={gpsIconBrown} alt="Adresse:" />
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
                      <IconContainer>
                        <img src={moneyIconBrown} alt="Preis:" />
                        <HeaderSpan preis>
                          {" " +
                            thousandSeperatorDots(
                              immo[haustyp]["preis"].toString()
                            ) +
                            " €"}
                        </HeaderSpan>
                      </IconContainer>
                      <BoxInfo>
                        <IconContainer>
                          <img src={roomIcon} alt="Zimmer:" />
                          <span>{" " + immo[haustyp]["zimmer"]}</span>
                        </IconContainer>
                        <IconContainer>
                          <img src={propertyIcon} alt="Wohnfläche:" />
                          <span>{" " + immo[haustyp]["wohnfläche"]} m²</span>
                        </IconContainer>
                        {!!immo[haustyp]["grundstück"] ? (
                          <IconContainer>
                            <img src={areaIcon} alt="Grundstück:" />
                            <span>{" " + immo[haustyp]["grundstück"]} m²</span>
                          </IconContainer>
                        ) : null}
                      </BoxInfo>
                    </InfosContent>
                    <InfosFooter>
                      <IconContainer>
                        <img src={clockIcon} alt="Veröffentlichung:" />
                        <span>
                          {"veröffentlich vor " +
                            immo[haustyp][
                              "vergangeneTageSeitVeröffentlichung"
                            ] +
                            " Tage"}
                        </span>
                      </IconContainer>
                    </InfosFooter>
                  </InfosContainer>
                  <SliderPreview
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
                    id={immoID}
                  />
                </SliderInfoContainer>
              </Container>
            </Section>
            <Section>
              <RotateContainer second>
                <Rotate>VORSCHAU</Rotate>
              </RotateContainer>
              <MainContentContainer>
                <MainContent>
                  <InformationContainer>
                    <GridContainer>
                      <GridItem haus>
                        <span>Typ:</span>
                        <span>
                          {haustyp.charAt(0).toUpperCase() + haustyp.slice(1)}
                        </span>
                      </GridItem>
                      <GridItem haus>
                        <span>Zimmer:</span>
                        <span>{immo[haustyp]["zimmer"]}</span>
                      </GridItem>
                      <GridItem haus>
                        <span>Wohnfläche:</span>
                        <span>{immo[haustyp]["wohnfläche"]} m²</span>
                      </GridItem>
                      <GridItem haus>
                        <span>Badezimmer:</span>
                        <span>{immo[haustyp]["badezimmer"]}</span>
                      </GridItem>
                      {haustyp === "haus" ? (
                        <GridItem haus>
                          <span>Grundstück</span>
                          <span>{immo[haustyp]["grundstück"]} m²</span>
                        </GridItem>
                      ) : null}
                      <GridItem haus>
                        <span>Bezugsart:</span>
                        <span>
                          {immo[haustyp]["bezugsart"].charAt(0).toUpperCase() +
                            immo[haustyp]["bezugsart"].slice(1)}
                        </span>
                      </GridItem>
                    </GridContainer>
                    {immo[haustyp]["bezugsart"] === "kaufen" ? (
                      <GridContainer preis>
                        <GridItem preis>
                          <span>Preis:</span>
                          <span>
                            {thousandSeperatorDots(
                              immo[haustyp]["preis"].toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem preis>
                          <span>Marklerprovision:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (immo[haustyp]["preis"] * 4.76) / 100
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem preis>
                          <span>Notarkosten:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (immo[haustyp]["preis"] / 100) * 1.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem preis>
                          <span>Grunderwerbsteuer</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (immo[haustyp]["preis"] / 100) * 3.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem preis>
                          <span>Grundbucheintrag</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (immo[haustyp]["preis"] / 100) * 0.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                      </GridContainer>
                    ) : null}
                  </InformationContainer>
                  <MapContainer>
                    <PopupMap
                      pos={[
                        immo[haustyp]["adresse"]["latitude"],
                        immo[haustyp]["adresse"]["longitude"]
                      ]}
                    />
                  </MapContainer>
                </MainContent>
              </MainContentContainer>
            </Section>
          </AllContentContainer>
        </PopupContentContainer>
      </PopupContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  immo: selectPopupImmo,
  immoID: selectPopupImmoID
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
