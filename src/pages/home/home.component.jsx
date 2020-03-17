import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { filterData } from "../../real-estate-data/real-estate-data.utils";

//import components
import Button from "../../components/button/button.component";
import Searchbar from "../../components/searchbar/searchbar.component";
import InspirationContainer from "../../components/inspiration/inspiration-container.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

//import utils
import { toSection } from "../../components/button/button.utils";

//redux imports
import {
  selectExpand1,
  selectExpand2,
  selectExpand3
} from "../../redux/inspiration/inspiration.selectors";

import {
  selectClassicArray,
  selectLuxuryArray,
  selectApartmentArray
} from "../../redux/home/home.selectors";
import {
  setClassicArray,
  setLuxuryArray,
  setApartmentArray
} from "../../redux/home/home.action";

//import styles
import {
  Container,
  SearchbarContainer,
  BackgroundImageFilter,
  HomeBackground,
  InspirationSectionContainer
} from "./home.styles";

class Home extends React.Component {
  componentDidMount() {
    const { setClassicArray, setLuxuaryArray, setApartmentArray } = this.props;
    setClassicArray(
      filterData({
        minInput: 300,
        maxInput: 1200,
        obtainingType: "rent",
        realEstateType: "apartment"
      })["realEstateArray"]
    );
    setLuxuaryArray(
      filterData({
        minInput: 1350000,
        obtainingType: "buy",
        realEstateType: "apartment"
      })["realEstateArray"]
    );
    setApartmentArray(
      filterData({
        minInput: 1350000,
        obtainingType: "buy",
        realEstateType: "house"
      })["realEstateArray"]
    );
  }
  render() {
    const {
      expand1,
      expand2,
      expand3,
      classicArray,
      luxuaryArray,
      apartmentArray
    } = this.props;
    return (
      <Container>
        <Header />
        <SearchbarContainer>
          <BackgroundImageFilter />
          <HomeBackground />
          <Searchbar>
            <p>Find your new Home</p>
            <h1>Ready to Move?</h1>
          </Searchbar>
          <Button
            scrollButton
            onClick={() => toSection("inspiration-section")}
          />
        </SearchbarContainer>
        <InspirationSectionContainer id="inspiration-section">
          {luxuaryArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand1}
              toggleExpandButtonNum={1}
              realEstateArray={luxuaryArray}
              filter={{
                minInput: 1350000,
                obtainingsType: "buy",
                realEstateType: "apartment"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Luxury</span>
            </InspirationContainer>
          )}
          {apartmentArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand2}
              toggleExpandButtonNum={2}
              realEstateArray={apartmentArray}
              filter={{
                minInput: 1350000,
                obtainingsType: "buy",
                realEstateType: "house"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Apartments</span>
            </InspirationContainer>
          )}
          {classicArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand3}
              toggleExpandButtonNum={3}
              realEstateArray={classicArray}
              filter={{
                minInput: 300,
                maxInput: 1200,
                obtainingsType: "rent",
                realEstateType: "apartment"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Classic</span>
            </InspirationContainer>
          )}
        </InspirationSectionContainer>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  expand1: selectExpand1,
  expand2: selectExpand2,
  expand3: selectExpand3,
  //home
  classicArray: selectClassicArray,
  luxuaryArray: selectLuxuryArray,
  apartmentArray: selectApartmentArray
});

const mapDispatchToProps = dispatch => ({
  setClassicArray: array => dispatch(setClassicArray(array)),
  setLuxuaryArray: array => dispatch(setLuxuryArray(array)),
  setApartmentArray: array => dispatch(setApartmentArray(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
