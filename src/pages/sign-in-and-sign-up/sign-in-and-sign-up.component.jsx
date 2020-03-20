import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

//redux
import {
  selectLogInState,
  selectSignUpState
} from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.selectors";

//styles
import { Container, ContentContaienr } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = ({ logInShow, signUpShow }) => (
  <Container>
    <Header />
    <ContentContaienr>
      {signUpShow ? <SignUp /> : null}
      {logInShow ? <SignIn /> : null}
    </ContentContaienr>
    <Footer errorPage />
  </Container>
);

const mapStateToProps = createStructuredSelector({
  logInShow: selectLogInState,
  signUpShow: selectSignUpState
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
