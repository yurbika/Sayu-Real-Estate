import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { filterData } from "../../immo-data/immo-data.utils";

//import components
import Button from "../../components/button/button.component";
import Searchbar from "../../components/searchbar/searchbar.component";
import InspirationContainer from "../../components/inspiration/inspiration-container.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

//import funktion
import { toSection } from "../../components/button/button.utils";

//redux imports
import {
  selectExpand1,
  selectExpand2,
  selectExpand3
} from "../../redux/inspiration-sketion/inspiration.selectors";

import {
  selectKlassikerArray,
  selectLuxushäuserArray,
  selectWohnungenArray
} from "../../redux/startseite/startseite.selectors";
import {
  setKlassikerArray,
  setLuxushäuserArray,
  setWohnungenArray
} from "../../redux/startseite/startseite.action";

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
        obtainingType: "mieten",
        realEstateType: "wohnung"
      })["realEstateArray"]
    );
    setLuxuaryArray(
      filterData({
        minInput: 1350000,
        obtainingType: "kaufen",
        realEstateType: "wohnung"
      })["realEstateArray"]
    );
    setApartmentArray(
      filterData({
        minInput: 1350000,
        obtainingType: "kaufen",
        realEstateType: "haus"
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
                obtainingsType: "kaufen",
                realEstateType: "wohnung"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Luxuary</span>
            </InspirationContainer>
          )}
          {apartmentArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand2}
              toggleExpandButtonNum={2}
              realEstateArray={apartmentArray}
              filter={{
                minInput: 1350000,
                obtainingsType: "kaufen",
                realEstateType: "haus"
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
                obtainingsType: "mieten",
                realEstateType: "wohnung"
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
  classicArray: selectKlassikerArray,
  luxuaryArray: selectLuxushäuserArray,
  apartmentArray: selectWohnungenArray
});

const mapDispatchToProps = dispatch => ({
  setClassicArray: array => dispatch(setKlassikerArray(array)),
  setLuxuaryArray: array => dispatch(setLuxushäuserArray(array)),
  setApartmentArray: array => dispatch(setWohnungenArray(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
