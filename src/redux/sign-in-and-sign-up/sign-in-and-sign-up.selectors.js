import { createSelector } from "reselect";

const selectSignInAndSignUp = state => state.signInAndSignUp;

export const selectLogInState = createSelector(
  [selectSignInAndSignUp],
  signInAndSignUp => signInAndSignUp.logInShow
);

export const selectSignUpState = createSelector(
  [selectSignInAndSignUp],
  signInAndSignUp => signInAndSignUp.signUpShow
);
