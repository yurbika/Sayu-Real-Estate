import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../../components/button/button.component";
import SelectionDropdown from "../../components/dropdowns/selection-dropdown.component";

//redux imports
import { selectPageChangerDropdown } from "../../redux/dropdown/dropdown.selectors";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import { selectPage } from "../../redux/filter/filter.selectors";
import { setDropdown } from "../../redux/filter/filter.action";
import FilterActionTypes from "../../redux/filter/filter.types";

import { resetSliderPositions } from "../../redux/slider/slider.action";

//styles
import { PageChangerContainer } from "./page-changer.styles";

class PageChanger extends React.Component {
  render() {
    const {
      dropdown,
      toggleDropdown,
      resetSliderPositions,
      page,
      anzahlSeiten,
      setDropdown
    } = this.props;
    let optionsArray = [];
    for (let i = 0; i < anzahlSeiten; i++) {
      optionsArray.push(1 + i);
    }
    return (
      <PageChangerContainer>
        {page > 1 ? (
          <Button
            pageChanger
            secondary
            left
            scrollButton
            onClick={() => {
              setDropdown(page - 1, FilterActionTypes.SET_PAGE);
              window.scrollTo(0, 0);
              resetSliderPositions();
            }}
          >
            previous Page
          </Button>
        ) : (
          <Button pageChanger noOpacity secondary left scrollButton>
            previous Page
          </Button>
        )}
        <Button
          pageChanger
          scrollButton
          noArrow={anzahlSeiten === 0 ? true : false}
          onClick={() => {
            if (anzahlSeiten > 0)
              toggleDropdown(
                DropdownActionTypes.TOGGLE_PAGECHANGER_DROPDOWN_HIDDEN
              );
          }}
          id="filter-button"
        >
          {page}
        </Button>

        {page === anzahlSeiten ? (
          <Button pageChanger noOpacity secondary>
            next Page
          </Button>
        ) : anzahlSeiten === 0 ? (
          <Button pageChanger noOpacity secondary>
            next Page
          </Button>
        ) : (
          <Button
            pageChanger
            secondary
            scrollButton
            right
            onClick={() => {
              setDropdown(page + 1, FilterActionTypes.SET_PAGE);
              window.scrollTo(0, 0);
              resetSliderPositions();
            }}
          >
            next Page
          </Button>
        )}
        <Button pageChanger dropdown>
          {/*hier fehlt noch ein typ für den dropdown*/}
          {dropdown ? (
            anzahlSeiten === 0 ? null : (
              <SelectionDropdown
                additionalStyle={"page-changer"}
                type={FilterActionTypes.SET_PAGE}
                backToTop
              >
                {optionsArray}
              </SelectionDropdown>
            )
          ) : null}
        </Button>
      </PageChangerContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dropdown: selectPageChangerDropdown,
  //filter
  page: selectPage
});

const mapDispatchToProps = dispatch => ({
  //dropdown action
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  //filter action
  setDropdown: (payload, type) => dispatch(setDropdown(payload, type)),
  //slider action
  resetSliderPositions: () => dispatch(resetSliderPositions())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageChanger);
