import React from "react";

import Input from "../../components/input/input.component";

import "./sign-in.styles.scss";

const SignIn = () => (
  <form action="" className="form">
    <h2>Sign Up</h2>
    <div className="content-container">
      <div className="input-container">
        <Input registration name="username" required />
        <label htmlFor="username" className="label-name">
          <span className="content-name">Username</span>
        </label>
      </div>
      <Input registration />
      <Input registration />
      <Input registration />
    </div>
  </form>
);

export default SignIn;
