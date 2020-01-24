import React from "react";
import { connect } from "react-redux";

//import styles
import InputStyled from "./input.styles";

//import redux
import { setInput } from "../../redux/filter/filter.action";

const Input = props => (
  <InputStyled
    {...props}
    //   onChange={inputText => props.setInput(inputText)}
    onKeyPress={props.number ? e => onlyNumberkey(e) : null}
  ></InputStyled>
);

//funktion entscheidet ob es eine zahl ist oder nicht

const onlyNumberkey = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
  return true;
};

//Redux

const mapDispatchToProps = dispatch => ({
  setInput: value => dispatch(setInput(value))
});

export default connect(null, mapDispatchToProps)(Input);
