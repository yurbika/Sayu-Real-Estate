import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

//redux
import { toggleLogIn } from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.action";

//styles
import {
  Container,
  Form,
  ButtonContainer,
  InputContainer
} from "./sign-up.styles";

const SignUp = ({ toggleLogIn, history }) => (
  <Form action="" id="sign-up-form">
    <h2>Sign Up</h2>
    <Container>
      <InputContainer>
        <Input registration name="username" required />
        <label htmlFor="username">
          <span>Username</span>
        </label>
      </InputContainer>
      <InputContainer>
        <Input
          registration
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <label htmlFor="email">
          <span>Email</span>
        </label>
      </InputContainer>
      <InputContainer>
        <Input registration type="password" name="password" required />
        <label htmlFor="password">
          <span>Password</span>
        </label>
      </InputContainer>
      <InputContainer>
        <Input registration type="password" name="password" required />
        <label htmlFor="password">
          <span>Confirm Password</span>
        </label>
      </InputContainer>
    </Container>
    <ButtonContainer>
      <Button actionButton onClick={() => history.push("/")}>
        Submit
      </Button>
      <Button
        responsivButton
        onClick={() => {
          toggleLogIn();
        }}
      >
        Cancel
      </Button>
    </ButtonContainer>
  </Form>
);

const mapDispatchToProps = dispatch => ({
  toggleLogIn: () => dispatch(toggleLogIn())
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
