import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux import
import { selectSearchInput } from "../../redux/filter/filter.selectors";
import { clearSearchInput } from "../../redux/filter/filter.action";

//import styles
import { InputStyled, Wrapper, ClearInputButton } from "./input.styles";

const Input = (props) => {
  if (!props.deleteButton) return <InputStyled autoComplete="off" {...props} />;
  else
    return (
      <Wrapper>
        <InputStyled autoComplete="off" {...props} />
        {!!props.input ? (
          <ClearInputButton
            id="filter-button"
            onClick={() => props.clearSearchInput()}
            aria-label="clear input"
          />
        ) : null}
      </Wrapper>
    );
};

const mapStateToProps = createStructuredSelector({
  //Filter States
  input: selectSearchInput,
});

const mapDispatchToProps = (dispatch) => ({
  clearSearchInput: () => dispatch(clearSearchInput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
