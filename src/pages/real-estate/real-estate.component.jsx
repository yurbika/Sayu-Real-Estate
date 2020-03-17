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
  selectObtainingType,
  selectRealEstateType,
  selectSearchInput,
  selectRooms,
  selectPrice,
  selectSpace,
  selectMaxInput,
  selectMinInput,
  selectPage,
  selectSearchButtonClick
} from "../../redux/filter/filter.selectors";

import {
  toggleSearchButtonClick,
  resetPage
} from "../../redux/filter/filter.action";

import { selectPopupState } from "../../redux/popup/popup.selectors";

//utils
import { filterData } from "../../immo-data/immo-data.utils.js";
import { ID_GENERATOR } from "../../uniqueKey.js";

//styles
import {
  Container,
  SearchbarContainer,
  NoResults,
  RealEstatePreviewContainer
} from "./real-estate.styles";

class RealEstate extends React.Component {
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

    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter(i => i) : "";

    //input === "" => search will be set to e
    //e is the most used letter in german
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

    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter(i => i) : "";

    //input === "" => search will be set to e
    //e is the most used letter in german
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

  componentWillUnmount() {
    this.props.resetPage();
  }

  render() {
    const { popShow, page, results } = this.props;
    return (
      <Container>
        <Header />
        <SearchbarContainer>
          <Searchbar noBackground additionalStyle={"real-estate"} />
          {this.state.noResults ? <NoResults>No Results</NoResults> : null}
          <RealEstatePreviewContainer>
            {results.map((item, index) => {
              //if index exceeds 20, slider reducer needs to be adjusted
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
          </RealEstatePreviewContainer>
          <PageChanger anzahlSeiten={Math.ceil(results.length / 20)} />
        </SearchbarContainer>
        {popShow ? <Popup /> : null}
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //real estate States
  results: selectErgebnisse,
  //Filter States
  obtainingType: selectObtainingType,
  price: selectPrice,
  input: selectSearchInput,
  rooms: selectRooms,
  space: selectSpace,
  realEstateType: selectRealEstateType,
  minInput: selectMinInput,
  maxInput: selectMaxInput,
  page: selectPage,
  searchButtonClick: selectSearchButtonClick,
  //popup
  popShow: selectPopupState
});

const mapDispatchToProps = dispatch => ({
  setResults: ergebnisseArray => dispatch(setErgebnisse(ergebnisseArray)),
  toggleSearchButtonClick: () => dispatch(toggleSearchButtonClick()),
  resetPage: () => dispatch(resetPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(RealEstate);
