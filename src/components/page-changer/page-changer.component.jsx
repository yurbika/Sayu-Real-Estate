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
import { setPage, setTotalPages } from "../../redux/filter/filter.action";
import FilterActionTypes from "../../redux/filter/filter.types";

import { resetSliderPositions } from "../../redux/slider/slider.action";

//styles
import { PageChangerContainer } from "./page-changer.styles";

class PageChanger extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.pages !== nextProps.pages)
      this.props.setTotalPages(nextProps.pages);
  }

  render() {
    const {
      dropdown,
      toggleDropdown,
      resetSliderPositions,
      page,
      pages,
      setPage,
    } = this.props;

    let optionsArray = [];
    for (let i = 0; i < pages; i++) {
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
              setPage(page - 1);
              window.scrollTo(0, 0);
              resetSliderPositions();
            }}
          >
            previous Page
          </Button>
        ) : (
          <Button
            pageChanger
            noOpacity
            secondary
            left
            scrollButton
            tabIndex="-1"
          >
            previous Page
          </Button>
        )}
        <Button
          pageChanger
          scrollButton
          noArrow={pages <= 1 ? true : false}
          onClick={() => {
            if (pages > 1)
              toggleDropdown(
                DropdownActionTypes.TOGGLE_PAGECHANGER_DROPDOWN_HIDDEN
              );
          }}
          id="filter-button"
        >
          {page}
        </Button>

        {page === pages ? (
          <Button pageChanger noOpacity secondary tabIndex="-1">
            next Page
          </Button>
        ) : pages === 0 ? (
          <Button pageChanger noOpacity secondary tabIndex="-1">
            next Page
          </Button>
        ) : (
          <Button
            pageChanger
            secondary
            scrollButton
            right
            onClick={() => {
              setPage(page + 1);
              window.scrollTo(0, 0);
              resetSliderPositions();
            }}
          >
            next Page
          </Button>
        )}
        <Button
          pageChanger
          dropdown
          aria-label="page changer dropdown"
          aria-haspopup="true"
        >
          {dropdown ? (
            pages === 0 ? null : (
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
  page: selectPage,
});

const mapDispatchToProps = (dispatch) => ({
  //dropdown action
  toggleDropdown: (toggle) => dispatch(toggleDropdown(toggle)),
  //filter action
  setPage: (payload) => dispatch(setPage(payload)),
  setTotalPages: (num) => dispatch(setTotalPages(num)),
  //slider action
  resetSliderPositions: () => dispatch(resetSliderPositions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageChanger);
