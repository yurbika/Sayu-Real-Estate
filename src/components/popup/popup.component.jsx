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
import { CloseButton } from "../searchbar/searchbar.styles";

//assets
import moneyIconBrown from "../../assets/money-icon-brown.png";
import gpsIconBrown from "../../assets/gps-icon-brown.png";
import propertyIcon from "../../assets/property-icon.png";
import roomIcon from "../../assets/room-icon.png";
import areaIcon from "../../assets/area-icon.png";
import clockIcon from "../../assets/clock-icon.png";

class Popup extends React.Component {
  render() {
    const { realEstate, realEstateID, togglePopup } = this.props;
    let realEstateType = "";
    if (!!realEstate["haus"]) realEstateType = "haus";
    else if (!!realEstate["wohnung"]) realEstateType = "wohnung";
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
                <Rotate>BRIEF-INFORMATION</Rotate>
              </RotateContainer>
              <Container>
                <SliderInfoContainer>
                  <SliderContainer>
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
                      id={realEstateID}
                    />
                  </SliderContainer>
                  <InfosContainer>
                    <InfosContent>
                      <HeaderSpan titleSpan>
                        {realEstate[realEstateType]["titel"]}
                      </HeaderSpan>
                      <IconContainer>
                        <img src={gpsIconBrown} alt="Adress:" />
                        <span>
                          {" " +
                            realEstate[realEstateType]["adresse"]["straße"] +
                            ", " +
                            realEstate[realEstateType]["adresse"][
                              "postleitzahl"
                            ] +
                            " - " +
                            realEstate[realEstateType]["adresse"]["stadt"] +
                            " - " +
                            realEstate[realEstateType]["adresse"]["bundesland"]}
                        </span>
                      </IconContainer>
                      <IconContainer>
                        <img src={moneyIconBrown} alt="Price:" />
                        <HeaderSpan price>
                          {" " +
                            thousandSeperatorDots(
                              realEstate[realEstateType]["preis"].toString()
                            ) +
                            " €"}
                        </HeaderSpan>
                      </IconContainer>
                      <BoxInfo>
                        <IconContainer>
                          <img src={roomIcon} alt="Rooms:" />
                          <span>
                            {" " + realEstate[realEstateType]["zimmer"]}
                          </span>
                        </IconContainer>
                        <IconContainer>
                          <img src={propertyIcon} alt="Livingspace:" />
                          <span>
                            {" " + realEstate[realEstateType]["wohnfläche"]} m²
                          </span>
                        </IconContainer>
                        {!!realEstate[realEstateType]["grundstück"] ? (
                          <IconContainer>
                            <img src={areaIcon} alt="Property:" />
                            <span>
                              {" " + realEstate[realEstateType]["grundstück"]}
                              m²
                            </span>
                          </IconContainer>
                        ) : null}
                      </BoxInfo>
                    </InfosContent>
                    <InfosFooter>
                      <IconContainer>
                        <img src={clockIcon} alt="Publishing:" />
                        <span>
                          {"published " +
                            realEstate[realEstateType][
                              "vergangeneTageSeitVeröffentlichung"
                            ] +
                            " Days ago"}
                        </span>
                      </IconContainer>
                    </InfosFooter>
                  </InfosContainer>
                  <SliderPreview
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
                    id={realEstateID}
                  />
                </SliderInfoContainer>
              </Container>
            </Section>
            <Section>
              <RotateContainer second>
                <Rotate>PREVIEW</Rotate>
              </RotateContainer>
              <MainContentContainer>
                <MainContent>
                  <InformationContainer>
                    <GridContainer>
                      <GridItem house>
                        <span>Type:</span>
                        <span>
                          {realEstateType.charAt(0).toUpperCase() +
                            realEstateType.slice(1)}
                        </span>
                      </GridItem>
                      <GridItem house>
                        <span>Rooms:</span>
                        <span>{realEstate[realEstateType]["zimmer"]}</span>
                      </GridItem>
                      <GridItem house>
                        <span>Livingspace:</span>
                        <span>
                          {realEstate[realEstateType]["wohnfläche"]} m²
                        </span>
                      </GridItem>
                      <GridItem house>
                        <span>Bathrooms:</span>
                        <span>{realEstate[realEstateType]["badezimmer"]}</span>
                      </GridItem>
                      {realEstateType === "haus" ? (
                        <GridItem house>
                          <span>Property</span>
                          <span>
                            {realEstate[realEstateType]["grundstück"]} m²
                          </span>
                        </GridItem>
                      ) : null}
                      <GridItem house>
                        <span>Obtainingtype:</span>
                        <span>
                          {realEstate[realEstateType]["bezugsart"]
                            .charAt(0)
                            .toUpperCase() +
                            realEstate[realEstateType]["bezugsart"].slice(1)}
                        </span>
                      </GridItem>
                    </GridContainer>
                    {realEstate[realEstateType]["bezugsart"] === "kaufen" ? (
                      <GridContainer price>
                        <GridItem price>
                          <span>Price:</span>
                          <span>
                            {thousandSeperatorDots(
                              realEstate[realEstateType]["preis"].toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price>
                          <span>Broker-Commision:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["preis"] * 4.76) /
                                  100
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price>
                          <span>Notary-Fee:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["preis"] / 100) *
                                  1.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price>
                          <span>Real-Estate-Transfer-Tax:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["preis"] / 100) *
                                  3.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price>
                          <span>Land-Register-Entry-Fee:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["preis"] / 100) *
                                  0.5
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
                        realEstate[realEstateType]["adresse"]["latitude"],
                        realEstate[realEstateType]["adresse"]["longitude"]
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
  realEstate: selectPopupImmo,
  realEstateID: selectPopupImmoID
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
