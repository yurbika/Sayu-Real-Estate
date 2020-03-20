import React from "react";
import { withRouter } from "react-router-dom";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

//styles
import {
  Container,
  Form,
  ButtonContainer,
  InputContainer
} from "../sign-up/sign-up.styles";

const SignIn = ({ history }) => (
  <Form action="" logIn id="log-in-form" className="show">
    <h2>Log In</h2>
    <Container>
      <InputContainer>
        <Input registration name="username" required />
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
      <Button
        responsivButton
        onClick={() => {
          document.getElementById("sign-up-form").classList.remove("show");
          document.getElementById("login-in-form").classList.add("show");
        }}
      >
        Registration
      </Button>
    </ButtonContainer>
  </Form>
);

export default withRouter(SignIn);
