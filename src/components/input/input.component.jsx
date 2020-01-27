import React from "react";
import { connect } from "react-redux";

//import redux
import { setInput } from "../../redux/filter/filter.action";

//import utils
import { onlyNumberkey, numberWithDots } from "./input.utils";

//import styles
import InputStyled from "./input.styles";

const Input = props => (
  <InputStyled
    {...props}
    //   onChange={inputText => props.setInput(inputText)}
    onChange={e => (e.target.value = numberWithDots(e.target.value))}
    onKeyPress={e => onlyNumberkey(e)}
  ></InputStyled>
);

//Redux

const mapDispatchToProps = dispatch => ({
  setInput: value => dispatch(setInput(value))
});

export default connect(null, mapDispatchToProps)(Input);
