import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

//component
import RealEstatePreview from "../../components/real-estate-preview/real-estate-preview.component";

//redux
import { selectResults } from "../../redux/real-estate/real-estate.selectors";

import {
  selectPage,
  selectTotalPages
} from "../../redux/filter/filter.selectors";

import { setPage } from "../../redux/filter/filter.action";

import { resetSliderPositions } from "../../redux/slider/slider.action";

//utils
import { ID_GENERATOR } from "../../uniqueKey.js";

//styles
import { Container } from "./real-estate-preview-container.styles";

class RealEstatePreviewContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.id !== this.props.page &&
      nextProps.page === this.props.page &&
      nextProps.match.params.id !== this.props.match.params.id
    ) {
      this.props.setPage(Number(nextProps.match.params.id));
      this.props.resetSliderPositions();
    }
  }
  render() {
    const { page, results } = this.props;
    return (
      <Container>
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
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  page: selectPage,
  totalPages: selectTotalPages,
  results: selectResults
});

const mapDispatchToProps = dispatch => ({
  setPage: num => dispatch(setPage(num)),
  //slider action
  resetSliderPositions: () => dispatch(resetSliderPositions())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RealEstatePreviewContainer)
);
