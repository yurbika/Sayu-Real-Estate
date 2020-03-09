import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../../components/button/button.component";
import AuswahlDropdown from "../../components/dropdowns/auswahl-dropdown.component";

//redux imports
import { selectPageChangerDropdown } from "../../redux/dropdown/dropdown.selectors";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import { selectSeite } from "../../redux/filter/filter.selectors";
import { setArt } from "../../redux/filter/filter.action";
import FilterActionTypes from "../../redux/filter/filter.types";

//utils
import "./page-changer.styles.scss";

class PageChanger extends React.Component {
  render() {
    const {
      dropdown,
      toggleDropdown,
      seite,
      anzahlSeiten,
      setArt
    } = this.props;
    let optionsArray = [];
    for (let i = 0; i < anzahlSeiten; i++) {
      optionsArray.push(1 + i);
    }
    return (
      <div className="page-changer-container">
        {seite > 1 ? (
          <Button
            pageChanger
            sekundär
            links
            scrollButton
            onClick={() => setArt(seite - 1, FilterActionTypes.SET_SEITE)}
          >
            vorherige Seite
          </Button>
        ) : (
          <Button pageChanger noOpacity sekundär links scrollButton>
            vorherige Seite
          </Button>
        )}
        <Button
          pageChanger
          scrollButton
          noArrow={anzahlSeiten === 0 ? true : false}
          onClick={() => {
            if (anzahlSeiten > 0)
              toggleDropdown(
                DropdownActionTypes.TOGGLE_PAGECHANGERDROPDOWN_HIDDEN
              );
          }}
          id="filter-button"
        >
          {seite}
        </Button>

        {seite === anzahlSeiten ? (
          <Button pageChanger noOpacity sekundär>
            nächste Seite
          </Button>
        ) : anzahlSeiten === 0 ? (
          <Button pageChanger noOpacity sekundär>
            nächste Seite
          </Button>
        ) : (
          <Button
            pageChanger
            sekundär
            scrollButton
            rechts
            onClick={() => setArt(seite + 1, FilterActionTypes.SET_SEITE)}
          >
            nächste Seite
          </Button>
        )}
        <Button pageChanger dropdown>
          {/*hier fehlt noch ein typ für den dropdown*/}
          {dropdown ? (
            anzahlSeiten === 0 ? null : (
              <AuswahlDropdown
                additionalStyle={"page-changer"}
                type={FilterActionTypes.SET_SEITE}
              >
                {optionsArray}
              </AuswahlDropdown>
            )
          ) : null}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dropdown: selectPageChangerDropdown,
  //filter
  seite: selectSeite
});

const mapDispatchToProps = dispatch => ({
  //dropdown action
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  //filter action
  setArt: (payload, type) => dispatch(setArt(payload, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageChanger);
