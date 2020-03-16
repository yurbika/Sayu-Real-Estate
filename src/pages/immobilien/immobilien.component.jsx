import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component import
import Searchbar from "../../components/searchbar/searchbar.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

import RealEstatePreview from "../../components/real-estate-preview/real-estate-preview.component";

import Popup from "../../components/popup/popup.component";

import PageChanger from "../../components/page-changer/page-changer.component";

//redux imports
import { selectErgebnisse } from "../../redux/immobilien/immobilien.selectors";
import { setErgebnisse } from "../../redux/immobilien/immobilien.action";

import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput,
  selectZimmerAnzahl,
  selectPreis,
  selectFläche,
  selectMaxInput,
  selectMinInput,
  selectSeite,
  selectSuchButtonClick
} from "../../redux/filter/filter.selectors";

import { toggleSuchButtonClick } from "../../redux/filter/filter.action";

import { selectPopupState } from "../../redux/popup/popup.selectors";

//utils
import { filterData } from "../../immo-data/immo-data.utils.js";
import { ID_GENERATOR } from "../../uniqueKey.js";

import "./Liste.styles.scss";

class Immobilien extends React.Component {
  state = { noResults: false };

  componentWillMount() {
    const {
      //filter states
      maxInput,
      minInput,
      obtainingType,
      realEstateType,
      input,
      rooms,
      space
    } = this.props;

    //test für den input falls die seite ohne input angeklickt wird
    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter(i => i) : "";

    //falls der input leer ist wird nach dem buchstaben e gefiltert
    //der buchstabe e ist der meist genutzte
    let filter = {
      realEstateType: `${realEstateType}`,
      obtainingType: `${obtainingType}`,
      search: `${splitedStr.length > 0 ? input : "e"}`,
      minInput: `${minInput}`,
      maxInput: `${maxInput}`,
      rooms: `${rooms}`,
      livingspace: `${space}`
    };
    //if the search array === 0, so we have backup and not a blank page
    if (filterData(filter).allResults.length === 0) {
      this.setState({ noResults: true });
    }
  }

  componentDidMount() {
    const {
      //filter states
      maxInput,
      minInput,
      obtainingType,
      realEstateType,
      input,
      rooms,
      space,
      //real-estate action
      setResults
    } = this.props;

    //test für den input falls die seite ohne input angeklickt wird
    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter(i => i) : "";

    //falls der input leer ist wird nach dem buchstaben e gefiltert
    //der buchstabe e ist der meist genutzte
    let filter = {
      realEstateType: `${realEstateType}`,
      obtainingType: `${obtainingType}`,
      search: `${splitedStr.length > 0 ? input : "e"}`,
      minInput: `${minInput}`,
      maxInput: `${maxInput}`,
      rooms: `${rooms}`,
      livingspace: `${space}`
    };
    //if the search array === 0, so we have backup and not a blank page
    if (filterData(filter).allResults.length === 0) {
      filter = {
        realEstateType: `${realEstateType}`,
        obtainingType: `${obtainingType}`,
        search: `e`,
        minInput: `${minInput}`,
        maxInput: `${maxInput}`,
        rooms: `${rooms}`,
        livingspace: `${space}`
      };
    } else setResults(filterData(filter).allResults);
  }
  componentDidUpdate() {
    const {
      maxInput,
      minInput,
      obtainingType,
      realEstateType,
      input,
      rooms,
      space,
      searchButtonClick,
      //filter action
      toggleSearchButtonClick,
      //real-estate action
      setResults
    } = this.props;
    if (searchButtonClick) {
      let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
      splitedStr = !!input ? splitedStr.filter(i => i) : "";

      let filter = {
        realEstateType: `${realEstateType}`,
        obtainingType: `${obtainingType}`,
        search: `${splitedStr.length > 0 ? input : "e"}`,
        minInput: `${minInput}`,
        maxInput: `${maxInput}`,
        rooms: `${rooms}`,
        livingspace: `${space}`
      };
      //if the search array === 0, so we have backup and not a blank page
      if (filterData(filter).allResults.length === 0) {
        this.setState({ noResults: true });
        filter = {
          realEstateType: `${realEstateType}`,
          obtainingType: `${obtainingType}`,
          search: `e`,
          minInput: `${minInput}`,
          maxInput: `${maxInput}`,
          rooms: `${rooms}`,
          livingspace: `${space}`
        };
      } else setResults(filterData(filter).allResults);
      toggleSearchButtonClick();
    }
  }
  shouldComponentUpdate(prevProps) {
    if (
      prevProps.results !== this.props.results ||
      prevProps.searchButtonClick !== this.props.searchButtonClick ||
      prevProps.page !== this.props.page ||
      prevProps.popShow !== this.props.popShow
    )
      return true;
    else return false;
  }

  render() {
    const { popShow, page, results } = this.props;
    return (
      <div className="container-liste">
        <Header />
        <div className="container-suchleiste-immo">
          <Searchbar noBackground additionalStyle={"real-estate"} />
          {this.state.noResults ? (
            <span className="no-results">No Results</span>
          ) : null}
          <div className="immo-preview-container">
            {results.map((item, index) => {
              //wenn die index zahl geändert wird muss es auch im slider reducer die array anzahl angepasst werden
              if (index >= 20 * (page - 1) && index < 20 * (page - 1) + 20)
                return (
                  <RealEstatePreview
                    realEstate={item}
                    id={index % 20}
                    key={ID_GENERATOR("real-estate-page-")}
                  />
                );
              return null;
            })}
          </div>
          <PageChanger anzahlSeiten={Math.ceil(results.length / 20)} />
        </div>
        {popShow ? <Popup /> : null}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //Immobilien States
  results: selectErgebnisse,
  //Filter States
  obtainingType: selectBezugsart,
  price: selectPreis,
  input: selectSearchInput,
  rooms: selectZimmerAnzahl,
  space: selectFläche,
  realEstateType: selectHaustyp,
  minInput: selectMinInput,
  maxInput: selectMaxInput,
  page: selectSeite,
  searchButtonClick: selectSuchButtonClick,
  //popup
  popShow: selectPopupState
});

const mapDispatchToProps = dispatch => ({
  setResults: ergebnisseArray => dispatch(setErgebnisse(ergebnisseArray)),
  toggleSearchButtonClick: () => dispatch(toggleSuchButtonClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Immobilien);
