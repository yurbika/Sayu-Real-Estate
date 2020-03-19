import React from "react";

//component
import SignIn from "../../components/sign-in/sign-in.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

//styles
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="container">
    <Header />
    <div className="sign-in-up-container">
      <SignIn />
    </div>
    <Footer errorPage />
  </div>
);

export default SignInAndSignUpPage;
