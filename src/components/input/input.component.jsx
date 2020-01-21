import React from "react";
import { connect } from "react-redux";

import InputStyled from "./input.styles";
import { setInput } from "../../redux/filter/filter.action";

const Input = props => (
  <InputStyled
    {...props}
    //   onChange={inputText => props.setInput(inputText)}
    onKeyPress={props.number ? e => onlyNumberkey(e) : null}
  ></InputStyled>
);

const onlyNumberkey = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
  return true;
};

const mapDispatchToProps = dispatch => ({
  setInput: value => dispatch(setInput(value))
});

export default connect(null, mapDispatchToProps)(Input);
