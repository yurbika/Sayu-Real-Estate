import React from "react";
import { withRouter } from "react-router-dom";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./sign-up.styles.scss";

const SignUp = ({ history }) => (
  <form action="" className="form">
    <h2>Sign Up</h2>
    <div className="content-container">
      <div className="input-container">
        <Input registration name="username" required />
        <label htmlFor="username" className="label-name">
          <span className="content-name">Username</span>
        </label>
      </div>
      <div className="input-container">
        <Input
          registration
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <label htmlFor="email" className="label-name">
          <span className="content-name">Email</span>
        </label>
      </div>
      <div className="input-container">
        <Input registration type="password" name="password" required />
        <label htmlFor="password" className="label-name">
          <span className="content-name">Password</span>
        </label>
      </div>
      <div className="input-container">
        <Input registration type="password" name="password" required />
        <label htmlFor="password" className="label-name">
          <span className="content-name">Confirm Password</span>
        </label>
      </div>
    </div>
    <div className="button-container">
      <Button actionButton onClick={() => history.push("/")}>
        Submit
      </Button>
      <Button responsivButton>Cancel</Button>
    </div>
  </form>
);

export default withRouter(SignUp);
