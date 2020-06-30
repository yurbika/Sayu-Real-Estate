import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component import
import Searchbar from "../../components/searchbar/searchbar.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

import RealEstatePreviewContainer from "../../components/real-estate-preview-container/real-estate-preview-container.component";

import Popup from "../../components/popup/popup.component";

import PageChanger from "../../components/page-changer/page-changer.component";

//redux imports
import { selectResults } from "../../redux/real-estate/real-estate.selectors";
import { setResults } from "../../redux/real-estate/real-estate.action";

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
  selectTotalPages,
  selectSearchButtonClick,
} from "../../redux/filter/filter.selectors";

import {
  toggleSearchButtonClick,
  setPage,
  resetPage,
} from "../../redux/filter/filter.action";

import { selectPopupState } from "../../redux/popup/popup.selectors";

import { resetSliderPositions } from "../../redux/slider/slider.action";

//utils
import { filterData } from "../../real-estate-data/real-estate-data.utils.js";

//styles
import { Container, SearchbarContainer, NoResults } from "./real-estate.styles";

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
      space,
    } = this.props;

    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter((i) => i) : "";

    //input === "" => search will be set to e
    //e is the most used letter in german
    let filter = {
      realEstateType: `${realEstateType}`,
      obtainingType: `${obtainingType}`,
      search: `${splitedStr.length > 0 ? input : "e"}`,
      minInput: `${minInput}`,
      maxInput: `${maxInput}`,
      rooms: `${rooms}`,
      livingspace: `${space}`,
    };
    //if the search array === 0, so we have backup and not a blank page
    if (filterData(filter).allResults.length === 0) {
      this.setState({ noResults: true });
    } else this.setState({ noResults: false });
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
      setResults,
    } = this.props;

    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter((i) => i) : "";

    //input === "" => search will be set to e
    //e is the most used letter in german
    let filter = {
      realEstateType: `${realEstateType}`,
      obtainingType: `${obtainingType}`,
      search: `${splitedStr.length > 0 ? input : "e"}`,
      minInput: `${minInput}`,
      maxInput: `${maxInput}`,
      rooms: `${rooms}`,
      livingspace: `${space}`,
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
        livingspace: `${space}`,
      };
    } else setResults(filterData(filter).allResults);
  }
  componentDidUpdate(prevProps) {
    const {
      maxInput,
      minInput,
      obtainingType,
      realEstateType,
      input,
      rooms,
      space,
      searchButtonClick,
      page,
      //filter action
      toggleSearchButtonClick,
      //real-estate action
      setResults,
      //props
      history,
    } = this.props;
    this.props.resetSliderPositions();

    if (page !== prevProps.page) {
      history.push(`/real-estate/${page}`);
      history.goForward();
    }

    if (searchButtonClick) {
      let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
      splitedStr = !!input ? splitedStr.filter((i) => i) : "";

      let filter = {
        realEstateType: `${realEstateType}`,
        obtainingType: `${obtainingType}`,
        search: `${splitedStr.length > 0 ? input : "e"}`,
        minInput: `${minInput}`,
        maxInput: `${maxInput}`,
        rooms: `${rooms}`,
        livingspace: `${space}`,
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
          livingspace: `${space}`,
        };
      } else setResults(filterData(filter).allResults);
      if (filterData(filter).allResults.length === 0) {
        this.setState({ noResults: true });
      } else this.setState({ noResults: false });
      toggleSearchButtonClick();
    }
  }
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.results !== this.props.results ||
      nextProps.searchButtonClick !== this.props.searchButtonClick ||
      nextProps.page !== this.props.page ||
      nextProps.popShow !== this.props.popShow
    )
      return true;
    else return false;
  }

  componentWillUnmount() {
    this.props.resetPage();
    this.props.resetSliderPositions();
  }

  render() {
    const { popShow, results } = this.props;
    return (
      <Container>
        <Header />
        <SearchbarContainer>
          <Searchbar noBackground additionalStyle={"real-estate"} />
          {this.state.noResults ? <NoResults>No Results</NoResults> : null}
          <RealEstatePreviewContainer />
          <PageChanger pages={Math.ceil(results.length / 20)} />
        </SearchbarContainer>
        {popShow ? <Popup /> : null}
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //real estate States
  results: selectResults,
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
  totalPages: selectTotalPages,
  searchButtonClick: selectSearchButtonClick,
  //popup
  popShow: selectPopupState,
});

const mapDispatchToProps = (dispatch) => ({
  setResults: (resultsArray) => dispatch(setResults(resultsArray)),
  toggleSearchButtonClick: () => dispatch(toggleSearchButtonClick()),
  setPage: (num) => dispatch(setPage(num)),
  resetPage: () => dispatch(resetPage()),
  resetSliderPositions: () => dispatch(resetSliderPositions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RealEstate);
