//bibliotheken imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { filterData } from "../../immo-data/immo-data.utils";

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
import Results from "../dropdowns/results-dropdown.component";

//redux
import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput,
  selectZimmerAnzahl,
  selectPreis,
  selectFläche,
  selectMaxInput,
  selectMinInput,
  selectSuchButtonClick
} from "../../redux/filter/filter.selectors";
import {
  setPreis,
  resetInputMax,
  resetInputMin,
  setSearchInput,
  toggleSuchButtonClick
} from "../../redux/filter/filter.action";

import FilterActionTypes from "../../redux/filter/filter.types";

import {
  selectPreisDropdown,
  selectBezugsartDropdown,
  selectImmobilientypDropdown,
  selectZimmerDropdown,
  selectFlächeDropdown,
  selectResultsDropdown
} from "../../redux/dropdown/dropdown.selectors";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import { selectSuchtreffer } from "../../redux/results-dropdown/results.selectors";
import {
  setBundesländer,
  setStraßenPlzOrte,
  setStädteOrte,
  setSuchtreffer
} from "../../redux/results-dropdown/results.action";

//styles
import {
  SuchleisteContainer,
  Bild,
  BildContainer,
  ContentContainer,
  InputContainer,
  InputContainerZeile,
  InputContainerResponsive,
  SuchleistePopupContainer,
  SuchleistePopupContentContainer,
  SuchleistePopup,
  ButtonContainer,
  SuchleistePopupHeader,
  CloseButtonContainer,
  CloseButton
} from "./searchbar.styles";

/*Button id = filter-button ist hier notwendig damit die richtigen aktionen gefeuert 
werden damit ist es möglich die dropdowns von überall zu schließen*/

class Searchbar extends React.Component {
  /*dieser abteil des codes ist nur notwendig für die überprüfung des window-width damit ein rerender gefeuert wird um das richtige component zu render*/
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
      maxInput,
      minInput,
      setPreis,
      bezugsart,
      haustyp,
      resetInputMax,
      resetInputMin,
      input,
      setBundesländer,
      setStraßenPlzOrte,
      setStädteOrte,
      setSuchtreffer,
      zimmerAnzahl,
      fläche,
      suchButtonClick
    } = this.props;
    if (
      input !== prevProps.input ||
      maxInput !== prevProps.maxInput ||
      minInput !== prevProps.minInput ||
      bezugsart !== prevProps.bezugsart ||
      haustyp !== prevProps.haustyp ||
      zimmerAnzahl !== prevProps.zimmerAnzahl ||
      fläche !== prevProps.fläche ||
      suchButtonClick !== prevProps.suchButtonClick
    ) {
      let filter = {
        haustyp: `${haustyp}`,
        bezugsart: `${bezugsart}`,
        search: `${input}`,
        minInput: `${minInput}`,
        maxInput: `${maxInput}`,
        zimmerAnzahl: `${zimmerAnzahl}`,
        wohnfläche: `${fläche}`
      };
      const {
        bundeslaenderArray,
        staedteOrteArray,
        straßenPlzOrtArray,
        suchtreffer
      } = filterData(filter);
      setSuchtreffer(suchtreffer);
      setBundesländer(bundeslaenderArray);
      setStraßenPlzOrte(straßenPlzOrtArray);
      setStädteOrte(staedteOrteArray);
    }

    if (prevProps.bezugsart !== bezugsart) {
      resetInputMax();
      resetInputMin();
    }

    if (prevProps.minInput !== minInput || prevProps.maxInput !== maxInput)
      setPreis(checkInputValue(minInput, maxInput));
  }

  render() {
    const {
      bezugsart,
      input,
      preis,
      zimmerAnzahl,
      haustyp,
      fläche,
      preisDropdown,
      bezugsartDropdown,
      immobilientypDropdown,
      zimmerDropdown,
      flächeDropdown,
      suchtreffer,
      toggleDropdown,
      setSearchInput,
      resultsDropdown,
      children,
      additionalStyle,
      history,
      location,
      noBackground,
      toggleSuchButtonClick
    } = this.props;
    //dieses if else ist für die refs damit unterschieden werden unter den dropdowns
    if (this.state.windowWidth > 768) {
      return (
        <SuchleisteContainer additionalStyle={additionalStyle}>
          <BildContainer noBackground={noBackground}>
            <Bild />
          </BildContainer>
          <ContentContainer>
            {children}
            <InputContainer>
              <InputContainerZeile>
                <Input
                  inputHome
                  id="filter-button"
                  inputType="search"
                  placeholder="Where: Place, State or Postcode"
                  deleteButton
                  value={input}
                  onChange={e => {
                    setSearchInput(e.target.value);
                    //!!!input sorgt dafür das wenn der input geleert wird das es trotzdem danach ausgelöst wird
                    if (
                      (suchtreffer > 0 || suchtreffer === null || !!!input) &&
                      !resultsDropdown
                    ) {
                      toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                    }
                  }}
                  onFocus={() => {
                    //dieser if hier sorgt dafür das beim focus auch wenn der input leer ist alle dropdowns geschloßen werden bis auf result
                    if (
                      (preisDropdown ||
                        bezugsartDropdown ||
                        immobilientypDropdown ||
                        zimmerDropdown ||
                        flächeDropdown) &&
                      !!!input
                    )
                      toggleDropdown(
                        DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE
                      );
                    if (!!input && suchtreffer > 0 && !resultsDropdown)
                      toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                  }}
                  onKeyPress={e => {
                    checkSearchInput(e);
                    if (e.key === "Enter") {
                      toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                      toggleSuchButtonClick();
                      history.push("/real-estate");
                    }
                  }}
                />
                <Button
                  normalButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {bezugsart}
                </Button>
                <Button
                  normalerButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {haustyp}
                </Button>
                <Button
                  searchButton
                  onClick={() => {
                    history.push("/real-estate");
                    toggleSuchButtonClick();
                  }}
                >
                  {suchtreffer > 0 && !!input
                    ? `${thousandSeperatorDots(suchtreffer.toString())} Treffer`
                    : "Suchen"}
                </Button>
              </InputContainerZeile>
              {/*damit die dropdowns unter den buttons sind */}
              <InputContainerZeile shadow>
                <Input inputHome />
                {resultsDropdown && suchtreffer > 0 && input !== "" ? (
                  <Results additionalStyle={"results-dropdown"} />
                ) : null}
                <Button normalButton dropdown id="filter-button">
                  {bezugsartDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"bezugsart-dropdown"}
                      responsiv
                      children={[bezugsart === "Mieten" ? "Kaufen" : "Mieten"]}
                      type={FilterActionTypes.SET_BEZUGSART}
                    />
                  ) : null}
                </Button>
                <Button normalButton dropdown id="filter-button">
                  {immobilientypDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"haus-dropdown"}
                      children={[haustyp === "Wohnung" ? "Haus" : "Wohnung"]}
                      type={FilterActionTypes.SET_HAUSTYP}
                    />
                  ) : null}
                </Button>
                <Button searchButton></Button>
              </InputContainerZeile>
              {/*zweite Reihe der Suchleiste*/}
              <InputContainerZeile>
                <Button
                  secondaryButton
                  price
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {preis}
                </Button>
                <Button
                  secondaryButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {zimmerAnzahl}
                </Button>
                <Button
                  secondaryButton
                  onClick={() =>
                    toggleDropdown(
                      DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN
                    )
                  }
                  id="filter-button"
                >
                  {fläche}
                </Button>
              </InputContainerZeile>
              <InputContainerZeile shadowSekundär>
                <Button secondaryButton dropdown id="filter-button">
                  {preisDropdown ? (
                    <PriceDropdown additionalStyle={"preis-dropdown"} />
                  ) : null}
                </Button>
                <Button secondaryButton dropdown id="filter-button">
                  {zimmerDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"zimmer-dropdown"}
                      children={[
                        "1 RM. +",
                        "2 RMS. +",
                        "3 RMS. +",
                        "4 RMS. +",
                        "5 RMS. +"
                      ]}
                      type={FilterActionTypes.SET_ZIMMERANZAHL}
                    />
                  ) : null}
                </Button>
                <Button secondaryButton dropdown id="filter-button">
                  {flächeDropdown ? (
                    <SelectionDropdown
                      additionalStyle={"flaeche-dropdown"}
                      children={[
                        "70 m² +",
                        "100 m² +",
                        "200 m² +",
                        "300 m² +",
                        "400 m² +",
                        "500 m² +"
                      ]}
                      type={FilterActionTypes.SET_FLÄCHE}
                    />
                  ) : null}
                </Button>
              </InputContainerZeile>
            </InputContainer>
          </ContentContainer>
        </SuchleisteContainer>
      );
    } else {
      return (
        <SuchleisteContainer additionalStyle={additionalStyle}>
          <BildContainer noBackground={noBackground}>
            <Bild />
          </BildContainer>
          <ContentContainer>
            {children}
            <InputContainerResponsive>
              <Button
                inputButton
                onClick={() => {
                  document
                    .getElementById("suchleistenpopup")
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
                  toggleSuchButtonClick();
                }}
              >
                {suchtreffer > 0 && !!input
                  ? `${thousandSeperatorDots(suchtreffer.toString())} Treffer`
                  : "Suchen"}
              </Button>
              <SuchleistePopupContainer id="suchleistenpopup">
                <SuchleistePopup
                  /*weil es ein Form-element ist muss onClick gestoppt werden*/
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  <SuchleistePopupHeader>
                    <h2>SUCHEN</h2>
                    <CloseButtonContainer
                      onClick={() => {
                        document
                          .getElementById("suchleistenpopup")
                          .classList.remove("show");
                        document.body.style.overflowY = "visible";
                      }}
                    >
                      <CloseButton />
                    </CloseButtonContainer>
                  </SuchleistePopupHeader>
                  <SuchleistePopupContentContainer>
                    <Input
                      inputHomeResponsiv
                      id="filter-button"
                      inputType="search"
                      placeholder="Where: Place, State or Postcode"
                      deleteButton
                      value={input}
                      onChange={e => {
                        setSearchInput(e.target.value);
                        //!!!input sorgt dafür das wenn der input geleert wird das es trotzdem danach ausgelöst wird
                        if (
                          (suchtreffer > 0 ||
                            suchtreffer === null ||
                            !!!input) &&
                          !resultsDropdown
                        ) {
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_RESULTS_HIDDEN
                          );
                        }
                      }}
                      onFocus={() => {
                        //dieser if hier sorgt dafür das beim focus auch wenn der input leer ist alle dropdowns geschloßen werden bis auf result
                        if (
                          (preisDropdown ||
                            bezugsartDropdown ||
                            immobilientypDropdown ||
                            zimmerDropdown ||
                            flächeDropdown) &&
                          !!!input
                        )
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE
                          );
                        if (!!input && suchtreffer > 0 && !resultsDropdown)
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_RESULTS_HIDDEN
                          );
                      }}
                      onKeyPress={e => {
                        checkSearchInput(e);
                        if (e.key === "Enter") {
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_RESULTS_HIDDEN
                          );
                          toggleSuchButtonClick();
                          history.push("/real-estate");
                          document
                            .getElementById("suchleistenpopup")
                            .classList.remove("show");
                          document.body.style.overflowY = "visible";
                        }
                      }}
                    />
                    <Button
                      responsivButtonPrice
                      preis
                      onClick={() =>
                        toggleDropdown(
                          DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN
                        )
                      }
                      id="filter-button"
                    >
                      {preis}
                    </Button>

                    <ButtonContainer>
                      <Button
                        responsivButton
                        onClick={() =>
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN
                          )
                        }
                        id="filter-button"
                      >
                        {bezugsart}
                      </Button>
                      <Button
                        responsivButton
                        onClick={() =>
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN
                          )
                        }
                        id="filter-button"
                      >
                        {haustyp}
                      </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                      <Button
                        responsivButton
                        onClick={e => {
                          e.preventDefault();
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN
                          );
                        }}
                        id="filter-button"
                      >
                        {zimmerAnzahl}
                      </Button>
                      <Button
                        responsivButton
                        onClick={() =>
                          toggleDropdown(
                            DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN
                          )
                        }
                        id="filter-button"
                      >
                        {fläche}
                      </Button>
                    </ButtonContainer>
                    <Button
                      searchButton
                      responsivButton
                      onClick={() => {
                        if (location.pathname === "/real-estate")
                          document
                            .getElementById("suchleistenpopup")
                            .classList.remove("show");
                        else history.push("/real-estate");
                        document.body.style.overflowY = "visible";
                        toggleSuchButtonClick();
                      }}
                    >
                      {suchtreffer > 0 && !!input
                        ? `${thousandSeperatorDots(
                            suchtreffer.toString()
                          )} Treffer`
                        : "Suchen"}
                    </Button>
                  </SuchleistePopupContentContainer>
                  <SuchleistePopupContentContainer shadowResponsiv>
                    <Input inputHomeResponsiv></Input>
                    {resultsDropdown && suchtreffer > 0 && input !== "" ? (
                      <Results
                        additionalStyle={"results-dropdown responsiv-dropdown"}
                      />
                    ) : null}
                    {/*id ist für das styling */}
                    <Button responsivButtonPrice dropdown id="preis-dropdown">
                      {preisDropdown ? (
                        <PriceDropdown
                          additionalStyle={"preis-dropdown responsiv-dropdown"}
                        />
                      ) : null}
                    </Button>
                    {/*id ist für das styling */}
                    <ButtonContainer id="mieten-wohnung-dropdown">
                      <Button responsivButton dropdown>
                        {bezugsartDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              bezugsart === "Mieten" ? "Kaufen" : "Mieten"
                            ]}
                            type={FilterActionTypes.SET_BEZUGSART}
                          />
                        ) : null}
                      </Button>
                      <Button responsivButton dropdown>
                        {immobilientypDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              haustyp === "Wohnung" ? "Haus" : "Wohnung"
                            ]}
                            type={FilterActionTypes.SET_HAUSTYP}
                          />
                        ) : null}
                      </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                      <Button responsivButton dropdown>
                        {zimmerDropdown ? (
                          <SelectionDropdown
                            additionalStyle={"responsiv-dropdown"}
                            children={[
                              "1 RM. +",
                              "2 RMS. +",
                              "3 RMS. +",
                              "4 RMS. +",
                              "5 RMS. +"
                            ]}
                            type={FilterActionTypes.SET_ZIMMERANZAHL}
                          />
                        ) : null}
                      </Button>
                      <Button responsivButton dropdown>
                        {flächeDropdown ? (
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
                            type={FilterActionTypes.SET_FLÄCHE}
                          />
                        ) : null}
                      </Button>
                    </ButtonContainer>
                  </SuchleistePopupContentContainer>
                </SuchleistePopup>
              </SuchleistePopupContainer>
            </InputContainerResponsive>
          </ContentContainer>
        </SuchleisteContainer>
      );
    }
  }
}

//Redux

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  preis: selectPreis,
  input: selectSearchInput,
  zimmerAnzahl: selectZimmerAnzahl,
  fläche: selectFläche,
  haustyp: selectHaustyp,
  minInput: selectMinInput,
  maxInput: selectMaxInput,
  suchButtonClick: selectSuchButtonClick,
  //Dropdown States
  preisDropdown: selectPreisDropdown,
  bezugsartDropdown: selectBezugsartDropdown,
  immobilientypDropdown: selectImmobilientypDropdown,
  zimmerDropdown: selectZimmerDropdown,
  flächeDropdown: selectFlächeDropdown,
  resultsDropdown: selectResultsDropdown,
  //Results States
  suchtreffer: selectSuchtreffer
});

const mapDispatchToProps = dispatch => ({
  //dropdown action
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  //filter action
  setPreis: preis => dispatch(setPreis(preis)),
  resetInputMax: () => dispatch(resetInputMax()),
  resetInputMin: () => dispatch(resetInputMin()),
  setSearchInput: value => dispatch(setSearchInput(value)),
  toggleSuchButtonClick: () => dispatch(toggleSuchButtonClick()),
  //results action
  setBundesländer: bundesländerArray =>
    dispatch(setBundesländer(bundesländerArray)),
  setStädteOrte: städteOrteArray => dispatch(setStädteOrte(städteOrteArray)),
  setStraßenPlzOrte: straßenPlzOrteArray =>
    dispatch(setStraßenPlzOrte(straßenPlzOrteArray)),
  setSuchtreffer: num => dispatch(setSuchtreffer(num))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Searchbar)
);
