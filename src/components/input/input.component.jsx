import React from "react";
import { connect } from "react-redux";

import InputStyled from "./input.styles";
import { setInput } from "../../redux/filter/filter.action";

const Input = props => (
  <InputStyled
    {...props}
    onChange={inputText => props.setInput(inputText)}
  ></InputStyled>
);

const mapDispatchToProps = dispatch => ({
  setInput: value => dispatch(setInput(value))
});

export default connect(null, mapDispatchToProps)(Input);
