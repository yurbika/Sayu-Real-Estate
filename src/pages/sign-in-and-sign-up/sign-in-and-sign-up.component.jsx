import React from "react";

//component
//import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

//styles
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="container">
    <Header />
    <div className="sign-in-up-container">
      <SignUp />
    </div>
    <Footer errorPage />
  </div>
);

export default SignInAndSignUpPage;
