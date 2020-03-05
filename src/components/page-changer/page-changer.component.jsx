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
import FilterActionTypes from "../../redux/filter/filter.types";

//utils
import "./page-changer.styles.scss";

class PageChanger extends React.Component {
  render() {
    const { dropdown, toggleDropdown, seite } = this.props;
    const { anzahlSeiten } = this.props;
    let optionsArray = [];
    for (let i = 0; i < anzahlSeiten - 1; i++) {
      optionsArray.push(1 + i);
    }

    return (
      <div className="page-changer-container">
        <Button pageChanger sekundär links scrollButton>
          vorherige Seite
        </Button>
        <Button
          pageChanger
          scrollButton
          onClick={() =>
            toggleDropdown(
              DropdownActionTypes.TOGGLE_PAGECHANGERDROPDOWN_HIDDEN
            )
          }
          id="filter-button"
        >
          {seite}
        </Button>

        <Button pageChanger sekundär scrollButton rechts>
          nächste Seite
        </Button>
        <Button pageChanger dropdown>
          {/*hier fehlt noch ein typ für den dropdown*/}
          {dropdown ? (
            <AuswahlDropdown
              additionalStyle={"page-changer"}
              type={FilterActionTypes.SET_SEITE}
            >
              {optionsArray}
            </AuswahlDropdown>
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
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageChanger);
