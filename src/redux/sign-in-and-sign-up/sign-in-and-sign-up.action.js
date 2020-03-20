import SignInAndSignUpActionTypes from "./sign-in-and-sign-up.types";

export const toggleLogIn = () => ({
  type: SignInAndSignUpActionTypes.TOGGLE_LOG_IN
});

export const toggleSignIn = () => ({
  type: SignInAndSignUpActionTypes.TOGGLE_SIGN_UP
});
