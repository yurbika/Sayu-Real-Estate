import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

//redux
import { toggleSignIn } from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.action";

//styles
import {
  Container,
  Form,
  ButtonContainer,
  InputContainer,
} from "../sign-up/sign-up.styles";

const SignIn = ({ toggleSignIn, history }) => (
  <Form action="" logIn id="log-in-form">
    <h2>Log In</h2>
    <Container>
      <InputContainer>
        <Input
          registration
          name="username"
          type="text"
          aria-label="username"
          required
        />
        <label htmlFor="username">
          <span>Username</span>
        </label>
      </InputContainer>
      <InputContainer>
        <Input registration type="password" name="password" required />
        <label htmlFor="password">
          <span>Password</span>
        </label>
      </InputContainer>
    </Container>
    <ButtonContainer>
      <Button actionButton onClick={() => history.push("/")}>
        Log In
      </Button>
      <Button responsivButton onClick={() => toggleSignIn()}>
        Registration
      </Button>
    </ButtonContainer>
  </Form>
);

const mapDispatchToProps = (dispatch) => ({
  toggleSignIn: () => dispatch(toggleSignIn()),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
