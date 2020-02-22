import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//links/rechts pfeil
//endlos klickbar

const Slider = ({ imgArray, alt }) => {
  return (
    <div>
      <div className="links-pfeil"></div>
      <div className="rechts-pfeil"></div>
      <img src={imgArray[0]} alt={alt} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({});

export default connect()(Slider);
