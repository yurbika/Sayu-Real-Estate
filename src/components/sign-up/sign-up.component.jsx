import React from "react";
import { withRouter } from "react-router-dom";

//components
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

//styles
import {
  Container,
  Form,
  ButtonContainer,
  InputContainer
} from "./sign-up.styles";
import "./sign-up.styles.scss";

const SignUp = ({ history }) => (
  <Form action="">
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
      <Button responsivButton>Cancel</Button>
    </ButtonContainer>
  </Form>
);

export default withRouter(SignUp);
