//bibliotheken imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { filterData } from "../../real-estate-data/real-estate-data.utils";

//Component imports
import Input from "../input/input.component";
import {
  checkInputValue,
  checkSearchInput,
  thousandSeperatorDots
} from "../input/input.utils";

import Button from "../button/button.component";

import PriceDropdown from "../dropdowns/price-dropdown.component";
import SelectionDropdown from "../dropdowns/selection-dropdown.component";
import ResultsDropdown from "../dropdowns/results-dropdown.component";

//redux
import {
  selectObtainingType,
  selectRealEstateType,
  selectSearchInput,
  selectRooms,
  selectPrice,
  selectSpace,
  selectMaxInput,
  selectMinInput,
  selectSearchButtonClick
} from "../../redux/filter/filter.selectors";
import {
  setPrice,
  resetInputMax,
  resetInputMin,
  setSearchInput,
  toggleSearchButtonClick
} from "../../redux/filter/filter.action";

import FilterActionTypes from "../../redux/filter/filter.types";

import {
  selectPriceDropdown,
  selectObtainingTypeDropdown,
  selectRealEstateTypeDropdown,
  selectRoomsDropdown,
  selectSpaceDropdown,
  selectResultsDropdown
} from "../../redux/dropdown/dropdown.selectors";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import { selectHits } from "../../redux/results-dropdown/results.selectors";
import {
  setFederalstates,
  setStreetsPostcodeLocalities,
  setCitiesLocalities,
  setHits
} from "../../redux/results-dropdown/results.action";

//styles
import {
  SearchbarContainer,
  Img,
  ImgContainer,
  ContentContainer,
  InputContainer,
  InputContainerRow,
  InputContainerResponsive,
  SearchbarPopupContainer,
  SearchbarPopupContentContainer,
  SearchbarPopup,
  ButtonContainer,
  SearchbarPopupHeader,
  CloseButtonContainer,
  CloseButton
} from "./searchbar.styles";

/*the attribute for the buttions with the id = filter-button is only necessary for only one purpose
to prevent the dropdowns from closing on click, anything else will close the dropdowns*/

class Searchbar extends React.Component {
  //this section is only for checking the window-width
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0 };
    this.checkWindowWidth = this.checkWindowWidth.bind(this);
  }
  checkWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    this.checkWindowWidth();
    window.addEventListener("resize", this.checkWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWindowWidth);
  }
  /*----------------------------------------------------------------*/

  componentDidUpdate(prevProps) {
    const {
      //filter states
      obtainingType,
      input,
      realEstateType,
      maxInput,
      minInput,
      rooms,
      space,
      searchButtonClick,
      //filter actions
      setPrice,
      resetInputMax,
      resetInputMin,
      //results actions
      setFederalStates,
      setStreetsPostcodeLocalities,
      setCitiesLocalities,
      setHits
    } = this.props;
    if (
      input !== prevProps.input ||
      maxInput !== prevProps.maxInput ||
      minInput !== prevProps.minInput ||
      obtainingType !== prevProps.obtainingType ||
      realEstateType !== prevProps.realEstateType ||
      rooms !== prevProps.rooms ||
      space !== prevProps.space ||
      searchButtonClick !== prevProps.searchButtonClick
    ) {
      let filter = {
        realEstateType: `${realEstateType}`,
        obtainingType: `${obtainingType}`,
        search: `${input}`,
        minInput: `${minInput}`,
        maxInput: `${maxInput}`,
        rooms: `${rooms}`,
        livingspace: `${space}`
      };
      const {
        federalStatesArray,
        citiesLocalitiesArray,
        streetsPostcodeLocalitiesArray,
        hits
      } = filterData(filter);
      setHits(hits);
      setFederalStates(federalStatesArray);
      setStreetsPostcodeLocalities(streetsPostcodeLocalitiesArray);
      setCitiesLocalities(citiesLocalitiesArray);
    }

    if (prevProps.obtainingType !== obtainingType) {
      resetInputMax();
      resetInputMin();
    }

    if (prevProps.minInput !== minInput || prevProps.maxInput !== maxInput)
      setPrice(checkInputValue(minInput, maxInput));
  }

  render() {
    const {
      //filter states
      obtainingType,
      input,
      price,
      rooms,
      realEstateType,
      space,
      //dropdown states
      priceDropdown,
      obtainingTypeDropdown,
      realEstateTypeDropdown,
      roomsDropdown,
      spaceDropdown,
      resultsDropdown,
      //results states
      hits,
      //dropdown action
      toggleDropdown,
      //filter states
      setSearchInput,
      toggleSearchButtonClick,
      //props
      children,
      additionalStyle,
      history,
      location,
      noBackground
    } = this.props;
    //this if else is necessary for the ref distinction
    if (this.state.windowWidth > 768) {
      return (
        <SearchbarContainer additionalStyle={additionalStyle}>
          <ImgContainer noBackground={noBackground}>
            <Img />
          </ImgContainer>
          <ContentContainer>
            {children}
            <InputContainer>
              <InputContainerRow>
                <Input
                  inputHome
                  id="filter-button"
                  inputType="search"
                  placeholder="Where: Place, State or Postcode"
                  deleteButton
                  value={input}
                  onChange={e => {
                    setSearchInput(e.target.value);
                    /*after deleting it should also trigger the closing action*/
                    if (
                      (hits > 0 || hits === null || !!!input) &&
                      !resultsDropdown
                    ) {
                      toggleDropdown(
                        DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                      );
                    }
                  }}
                  onFocus={() => {
                    /*even if the input is empty all dropdowns except results should close
                    thats the purpose of this if */
                    if (
                      (priceDropdown ||
                        obtainingTypeDropdown ||
                        realEstateTypeDropdown ||
                        roomsDropdown ||
                        spaceDropdown) &&
                      !!!input
                    )
                      toggleDropdown(
                        DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE
                      );
                    if (!!input && hits > 0 && !resultsDropdown)
                      toggleDropdown(
                        DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                      );
                  }}
                  onKeyPress={e => {
                    checkSearchInput(e);
                    if (e.key === "Enter") {
                      toggleDropdown(
                        DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                      );
                      toggleSearchButtonClick();
                      history.push("/real-estate");
                    }
                  }}
                />
                <Button
                  normalButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_OBTAININGTYPE_DROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {obtainingType}
                </Button>
                <Button
                  normalButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_REALESTATETYPE_DROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {realEstateType}
                </Button>
                <Button
                  searchButton
                  onClick={() => {
                    history.push("/real-estate");
                    toggleSearchButtonClick();
                  }}
                >
                  {hits > 0 && !!input
                    ? `${thousandSeperatorDots(hits.toString())} Hits`
                    : "Search"}
                </Button>
              </InputContainerRow>
              {/*this section is only for styling purpose so the buttons can
              be placed under the first row */}
              <InputContainerRow shadow>
                <Input inputHome />
                {resultsDropdown && hits > 0 && input !== "" ? (
                  <ResultsDropdown additionalStyle={"results-dropdown"} />
                ) : null}
                <Button normalButton dropdown id="filter-button">
                  {obtainingTypeDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"obtainingType-dropdown"}
                      responsiv
                      children={[
                        obtainingType === "Mieten" ? "Kaufen" : "Mieten"
                      ]}
                      type={FilterActionTypes.SET_OBTAININGTYPE}
                    />
                  ) : null}
                </Button>
                <Button normalButton dropdown id="filter-button">
                  {realEstateTypeDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"house-dropdown"}
                      children={[
                        realEstateType === "Wohnung" ? "Haus" : "Wohnung"
                      ]}
                      type={FilterActionTypes.SET_REALESTATETYPE}
                    />
                  ) : null}
                </Button>
                <Button searchButton></Button>
              </InputContainerRow>
              {/*second row of the search bar*/}
              <InputContainerRow>
                <Button
                  secondaryButton
                  price
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {price}
                </Button>
                <Button
                  secondaryButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_ROOMS_DROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {rooms}
                </Button>
                <Button
                  secondaryButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_SPACE_DROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {space}
                </Button>
              </InputContainerRow>
              {/*this section is only for styling purpose so the buttons can
              be placed under the second row */}

              <InputContainerRow shadowSecondary>
                <Button secondaryButton dropdown id="filter-button">
                  {priceDropdown ? (
                    <PriceDropdown additionalStyle={"price-dropdown"} />
                  ) : null}
                </Button>
                <Button secondaryButton dropdown id="filter-button">
                  {roomsDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"rooms-dropdown"}
                      children={[
                        "1 RM. +",
                        "2 RMS. +",
                        "3 RMS. +",
                        "4 RMS. +",
                        "5 RMS. +"
                      ]}
                      type={FilterActionTypes.SET_ROOMS}
                    />
                  ) : null}
                </Button>
                <Button secondaryButton dropdown id="filter-button">
                  {spaceDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"space-dropdown"}
                      children={[
                        "70 m² +",
                        "100 m² +",
                        "200 m² +",
                        "300 m² +",
                        "400 m² +",
                        "500 m² +"
                      ]}
                      type={FilterActionTypes.SET_SPACE}
                    />
                  ) : null}
                </Button>
              </InputContainerRow>
            </InputContainer>
          </ContentContainer>
        </SearchbarContainer>
      );
    } else {
      return (
        <SearchbarContainer additionalStyle={additionalStyle}>
          <ImgContainer noBackground={noBackground}>
            <Img />
          </ImgContainer>
          <ContentContainer>
            {children}
            <InputContainerResponsive>
              <Button
                inputButton
                onClick={() => {
                  document
                    .getElementById("searchbarPopup")
                    .classList.add("show");
                  document.body.style.overflowY = "hidden";
                }}
              >
                {!!input ? input : "Where: Place, State or Postcode"}
              </Button>
              <Button
                searchButton
                onClick={() => {
                  history.push("/real-estate");
                  toggleSearchButtonClick();
                }}
              >
                {hits > 0 && !!input
                  ? `${thousandSeperatorDots(hits.toString())} Hits`
                  : "Search"}
              </Button>
              <SearchbarPopupContainer id="searchbarPopup">
                <SearchbarPopup
                  /*if the element was a html-form*/
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  <SearchbarPopupHeader>
                    <h2>SEARCH</h2>
                    <CloseButtonContainer
                      onClick={() => {
                        document
                          .getElementById("searchbarPopup")
                          .classList.remove("show");
                        document.body.style.overflowY = "visible";
                      }}
                    >
                      <CloseButton />
                    </CloseButtonContainer>
                  </SearchbarPopupHeader>
                  <SearchbarPopupContentContainer>
                    <Input
                      inputHomeResponsiv
                      id="filter-button"
                      inputType="search"
                      placeholder="Where: Place, State or Postcode"
                      deleteButton
                      value={input}
                      onChange={e => {
                        setSearchInput(e.target.value);
                        if (
                          (hits > 0 || hits === null || !!!input) &&
                          !resultsDropdown
                        ) {
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                          );
                        }
                      }}
                      onFocus={() => {
                        /*after deleting it should also trigger the closing action*/
                        if (
                          (priceDropdown ||
                            obtainingTypeDropdown ||
                            realEstateTypeDropdown ||
                            roomsDropdown ||
                            spaceDropdown) &&
                          !!!input
                        )
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE
                          );
                        if (!!input && hits > 0 && !resultsDropdown)
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                          );
                      }}
                      onKeyPress={e => {
                        checkSearchInput(e);
                        if (e.key === "Enter") {
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                          );
                          toggleSearchButtonClick();
                          history.push("/real-estate");
                          document
                            .getElementById("searchbarPopup")
                            .classList.remove("show");
                          document.body.style.overflowY = "visible";
                        }
                      }}
                    />
                    <Button
                      responsivButtonPrice
                      price
                      onClick={() =>
                        toggleDropdown(
                          DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN
                        )
                      }
                      id="filter-button"
                    >
                      {price}
                    </Button>

                    <ButtonContainer>
                      <Button
                        responsivButton
                        onClick={() =>
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_OBTAININGTYPE_DROPDOWN_HIDDEN
                          )
                        }
                        id="filter-button"
                      >
                        {obtainingType}
                      </Button>
                      <Button
                        responsivButton
                        onClick={() =>
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_REALESTATETYPE_DROPDOWN_HIDDEN
                          )
                        }
                        id="filter-button"
                      >
                        {realEstateType}
                      </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                      <Button
                        responsivButton
                        onClick={e => {
                          e.preventDefault();
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_ROOMS_DROPDOWN_HIDDEN
                          );
                        }}
                        id="filter-button"
                      >
                        {rooms}
                      </Button>
                      <Button
                        responsivButton
                        onClick={() =>
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_SPACE_DROPDOWN_HIDDEN
                          )
                        }
                        id="filter-button"
                      >
                        {space}
                      </Button>
                    </ButtonContainer>
                    <Button
                      searchButton
                      responsivButton
                      onClick={() => {
                        if (location.pathname === "/real-estate")
                          document
                            .getElementById("searchbarPopup")
                            .classList.remove("show");
                        else history.push("/real-estate");
                        document.body.style.overflowY = "visible";
                        toggleSearchButtonClick();
                      }}
                    >
                      {hits > 0 && !!input
                        ? `${thousandSeperatorDots(hits.toString())} Hits`
                        : "Search"}
                    </Button>
                  </SearchbarPopupContentContainer>
                  <SearchbarPopupContentContainer shadowResponsiv>
                    <Input inputHomeResponsiv></Input>
                    {resultsDropdown && hits > 0 && input !== "" ? (
                      <ResultsDropdown
                        additionalStyle={"results-dropdown responsiv-dropdown"}
                      />
                    ) : null}
                    {/*id is for the styling in searchbar.styles */}
                    <Button responsivButtonPrice dropdown id="price-dropdown">
                      {priceDropdown ? (
                        <PriceDropdown
                          additionalStyle={"price-dropdown responsiv-dropdown"}
                        />
                      ) : null}
                    </Button>
                    {/*id is for the styling in searchbar.styles */}
                    <ButtonContainer id="obtainingType-dropdown">
                      <Button responsivButton dropdown>
                        {obtainingTypeDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              obtainingType === "Mieten" ? "Kaufen" : "Mieten"
                            ]}
                            type={FilterActionTypes.SET_OBTAININGTYPE}
                          />
                        ) : null}
                      </Button>
                      <Button responsivButton dropdown>
                        {realEstateTypeDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              realEstateType === "Wohnung" ? "Haus" : "Wohnung"
                            ]}
                            type={FilterActionTypes.SET_REALESTATETYPE}
                          />
                        ) : null}
                      </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                      <Button responsivButton dropdown>
                        {roomsDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              "1 RM. +",
                              "2 RMS. +",
                              "3 RMS. +",
                              "4 RMS. +",
                              "5 RMS. +"
                            ]}
                            type={FilterActionTypes.SET_ROOMS}
                          />
                        ) : null}
                      </Button>
                      <Button responsivButton dropdown>
                        {spaceDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              "70 m² +",
                              "100 m² +",
                              "200 m² +",
                              "300 m² +",
                              "400 m² +",
                              "500 m² +"
                            ]}
                            type={FilterActionTypes.SET_SPACE}
                          />
                        ) : null}
                      </Button>
                    </ButtonContainer>
                  </SearchbarPopupContentContainer>
                </SearchbarPopup>
              </SearchbarPopupContainer>
            </InputContainerResponsive>
          </ContentContainer>
        </SearchbarContainer>
      );
    }
  }
}

//Redux

const mapStateToProps = createStructuredSelector({
  //Filter States
  obtainingType: selectObtainingType,
  price: selectPrice,
  input: selectSearchInput,
  rooms: selectRooms,
  space: selectSpace,
  realEstateType: selectRealEstateType,
  minInput: selectMinInput,
  maxInput: selectMaxInput,
  searchButtonClick: selectSearchButtonClick,
  //Dropdown States
  priceDropdown: selectPriceDropdown,
  obtainingTypeDropdown: selectObtainingTypeDropdown,
  realEstateTypeDropdown: selectRealEstateTypeDropdown,
  roomsDropdown: selectRoomsDropdown,
  spaceDropdown: selectSpaceDropdown,
  resultsDropdown: selectResultsDropdown,
  //Results States
  hits: selectHits
});

const mapDispatchToProps = dispatch => ({
  //dropdown action
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  //filter action
  setPrice: price => dispatch(setPrice(price)),
  resetInputMax: () => dispatch(resetInputMax()),
  resetInputMin: () => dispatch(resetInputMin()),
  setSearchInput: value => dispatch(setSearchInput(value)),
  toggleSearchButtonClick: () => dispatch(toggleSearchButtonClick()),
  //results action
  setFederalStates: federalStatesArray =>
    dispatch(setFederalstates(federalStatesArray)),
  setCitiesLocalities: citiesLocalitiesArray =>
    dispatch(setCitiesLocalities(citiesLocalitiesArray)),
  setStreetsPostcodeLocalities: streetsPostcodeLocalitiesArray =>
    dispatch(setStreetsPostcodeLocalities(streetsPostcodeLocalitiesArray)),
  setHits: num => dispatch(setHits(num))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Searchbar)
);
