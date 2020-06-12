import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component imports
import Slider from "../../components/slider/slider.component";
import SliderPreview from "../slider-preview/slider-preview.component";
import PopupMap from "../../components/popup-map/popup-map.component";

//redux imports
import {
  selectPopupRealEstate,
  selectPopupRealEstateID,
} from "../../redux/popup/popup.selectors";

import { togglePopup } from "../../redux/popup/popup.action";

//utils
import { popupRef } from "../../utils/utils";
import { thousandSeperatorDots } from "../input/input.utils";
import theme from "../../utils/theme";

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
  MapContainer,
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
  constructor(props) {
    super(props);
    this.timeOutId = null;
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  componentDidMount() {
    this.focusDiv();
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.props.togglePopup();
      document.body.style.overflowY = "visible";
    });
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.popup).focus();
  }

  render() {
    const { realEstate, realEstateID, togglePopup } = this.props;
    let realEstateType = "";
    if (!!realEstate["house"]) realEstateType = "house";
    else if (!!realEstate["apartment"]) realEstateType = "apartment";
    else return null;

    return (
      <PopupContainer
        autoFocus
        tabIndex="0"
        ref="popup"
        aria-label="Popup open"
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
      >
        <PopupContentContainer ref={popupRef}>
          <CloseButtonContainer
            className="closebutton-container"
            onClick={() => {
              togglePopup();
              document.body.style.overflowY = "visible";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                togglePopup();
                document.body.style.overflowY = "visible";
              }
            }}
            aria-label="close popup"
          >
            <CloseButton />
          </CloseButtonContainer>
          <AllContentContainer>
            <Section tabIndex="0" aria-label="brief-information">
              <RotateContainer>
                <Rotate>BRIEF-INFORMATION</Rotate>
              </RotateContainer>
              <Container>
                <SliderInfoContainer>
                  <SliderContainer>
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
                      id={realEstateID}
                    />
                  </SliderContainer>
                  <InfosContainer>
                    <InfosContent tabIndex="0" aria-label="information">
                      <HeaderSpan titleSpan tabIndex="0">
                        {realEstate[realEstateType]["title"]}
                      </HeaderSpan>
                      <IconContainer tabIndex="0">
                        <img src={gpsIconBrown} alt="Adress:" />
                        <span>
                          {" " +
                            realEstate[realEstateType]["adress"]["street"] +
                            ", " +
                            realEstate[realEstateType]["adress"]["postcode"] +
                            " - " +
                            realEstate[realEstateType]["adress"]["city"] +
                            " - " +
                            realEstate[realEstateType]["adress"][
                              "federalstate"
                            ]}
                        </span>
                      </IconContainer>
                      <IconContainer tabIndex="0">
                        <img src={moneyIconBrown} alt="Price:" />
                        <HeaderSpan price tabIndex="0">
                          {" " +
                            thousandSeperatorDots(
                              realEstate[realEstateType]["price"].toString()
                            ) +
                            " €"}
                        </HeaderSpan>
                      </IconContainer>
                      <BoxInfo>
                        <IconContainer tabIndex="0">
                          <img src={roomIcon} alt="Rooms:" />
                          <span tabIndex="0">
                            {" " + realEstate[realEstateType]["rooms"]}
                          </span>
                        </IconContainer>
                        <IconContainer tabIndex="0">
                          <img src={propertyIcon} alt="Livingspace:" />
                          <span tabIndex="0">
                            {" " + realEstate[realEstateType]["livingspace"]} m²
                          </span>
                        </IconContainer>
                        {!!realEstate[realEstateType]["property"] ? (
                          <IconContainer tabIndex="0">
                            <img src={areaIcon} alt="Property:" />
                            <span tabIndex="0">
                              {" " + realEstate[realEstateType]["property"]}
                              m²
                            </span>
                          </IconContainer>
                        ) : null}
                      </BoxInfo>
                    </InfosContent>
                    <InfosFooter>
                      <IconContainer tabIndex="0">
                        <img src={clockIcon} alt="Publishing:" />
                        <span tabIndex="0">
                          {"Published " +
                            realEstate[realEstateType]["publishedDaysAgo"] +
                            " Days ago"}
                        </span>
                      </IconContainer>
                    </InfosFooter>
                  </InfosContainer>
                  <SliderPreview
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
                    id={realEstateID}
                  />
                </SliderInfoContainer>
              </Container>
            </Section>
            <Section tabIndex="0" aria-label="preview">
              <RotateContainer second>
                <Rotate>PREVIEW</Rotate>
              </RotateContainer>
              <MainContentContainer>
                <MainContent>
                  <InformationContainer>
                    <GridContainer tabIndex="0">
                      <GridItem house tabIndex="0">
                        <span>Type:</span>
                        <span>
                          {realEstateType.charAt(0).toUpperCase() +
                            realEstateType.slice(1)}
                        </span>
                      </GridItem>
                      <GridItem house tabIndex="0">
                        <span>Rooms:</span>
                        <span>{realEstate[realEstateType]["rooms"]}</span>
                      </GridItem>
                      <GridItem house tabIndex="0">
                        <span>Livingspace:</span>
                        <span>
                          {realEstate[realEstateType]["livingspace"]} m²
                        </span>
                      </GridItem>
                      <GridItem house tabIndex="0">
                        <span>Bathrooms:</span>
                        <span>{realEstate[realEstateType]["bathrooms"]}</span>
                      </GridItem>
                      {realEstateType === "house" ? (
                        <GridItem house tabIndex="0">
                          <span>Property</span>
                          <span>
                            {realEstate[realEstateType]["property"]} m²
                          </span>
                        </GridItem>
                      ) : null}
                      <GridItem house tabIndex="0">
                        <span>Obtainingtype:</span>
                        <span>
                          {realEstate[realEstateType]["obtainingType"]
                            .charAt(0)
                            .toUpperCase() +
                            realEstate[realEstateType]["obtainingType"].slice(
                              1
                            )}
                        </span>
                      </GridItem>
                    </GridContainer>
                    {realEstate[realEstateType]["obtainingType"] === "buy" ? (
                      <GridContainer price>
                        <GridItem price tabIndex="0">
                          <span>Price:</span>
                          <span>
                            {thousandSeperatorDots(
                              realEstate[realEstateType]["price"].toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price tabIndex="0">
                          <span>Broker-Commision:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["price"] * 4.76) /
                                  100
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price tabIndex="0">
                          <span>Notary-Fee:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["price"] / 100) *
                                  1.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price tabIndex="0">
                          <span>Real-Estate-Transfer-Tax:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["price"] / 100) *
                                  3.5
                              ).toString()
                            ) + " €"}
                          </span>
                        </GridItem>
                        <GridItem price tabIndex="0">
                          <span>Land-Register-Entry-Fee:</span>
                          <span>
                            {thousandSeperatorDots(
                              Math.floor(
                                (realEstate[realEstateType]["price"] / 100) *
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
                        realEstate[realEstateType]["adress"]["latitude"],
                        realEstate[realEstateType]["adress"]["longitude"],
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
  realEstate: selectPopupRealEstate,
  realEstateID: selectPopupRealEstateID,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
