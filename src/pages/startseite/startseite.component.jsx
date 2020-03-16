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
  StartseiteContainer,
  ContainerSuchleiste,
  BackgroundImageFilter,
  StartseiteHintergrund,
  InspirationsSection
} from "./startseite.styles";

class Startseite extends React.Component {
  componentDidMount() {
    const {
      setKlassikerArray,
      setLuxushäuserArray,
      setWohnungenArray
    } = this.props;
    setKlassikerArray(
      filterData({
        minInput: 300,
        maxInput: 1200,
        bezugsart: "mieten",
        haustyp: "wohnung"
      })["immoArray"]
    );
    setLuxushäuserArray(
      filterData({
        minInput: 1350000,
        bezugsart: "kaufen",
        haustyp: "wohnung"
      })["immoArray"]
    );
    setWohnungenArray(
      filterData({
        minInput: 1350000,
        bezugsart: "kaufen",
        haustyp: "haus"
      })["immoArray"]
    );
  }
  render() {
    const {
      expand1,
      expand2,
      expand3,
      klassikerArray,
      luxushäuserArray,
      wohnungenArray
    } = this.props;
    return (
      <StartseiteContainer>
        <Header />
        <ContainerSuchleiste>
          <BackgroundImageFilter />
          <StartseiteHintergrund />
          <Searchbar>
            <p>Finden Sie Ihre neues Zuhause</p>
            <h1>Bereit zum Umziehen?</h1>
          </Searchbar>
          <Button
            scrollButton
            onClick={() => toSection("inspirations-section")}
          />
        </ContainerSuchleiste>
        <InspirationsSection id="inspirations-section">
          {luxushäuserArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand1}
              toggleExpandButtonNum={1}
              realEstateArray={luxushäuserArray}
              filter={{
                minInput: 1350000,
                bezugsart: "kaufen",
                haustyp: "wohnung"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Luxushäuser</span>
            </InspirationContainer>
          )}
          {wohnungenArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand2}
              toggleExpandButtonNum={2}
              realEstateArray={wohnungenArray}
              filter={{
                minInput: 1350000,
                bezugsart: "kaufen",
                haustyp: "haus"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Wohnungen</span>
            </InspirationContainer>
          )}
          {klassikerArray.length < 4 ? null : (
            <InspirationContainer
              expand={expand3}
              toggleExpandButtonNum={3}
              realEstateArray={klassikerArray}
              filter={{
                minInput: 300,
                maxInput: 1200,
                bezugsart: "mieten",
                haustyp: "wohnung"
              }}
            >
              <span className="first">Inspiration</span>
              <span>Klassiker</span>
            </InspirationContainer>
          )}
        </InspirationsSection>
        <Footer />
      </StartseiteContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  expand1: selectExpand1,
  expand2: selectExpand2,
  expand3: selectExpand3,
  //startseite
  klassikerArray: selectKlassikerArray,
  luxushäuserArray: selectLuxushäuserArray,
  wohnungenArray: selectWohnungenArray
});

const mapDispatchToProps = dispatch => ({
  setKlassikerArray: array => dispatch(setKlassikerArray(array)),
  setLuxushäuserArray: array => dispatch(setLuxushäuserArray(array)),
  setWohnungenArray: array => dispatch(setWohnungenArray(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(Startseite);
