import { createSelector } from "reselect";

const selectSignInAndSignUp = state => state.signInAndSignUp;

export const selectLogInState = createSelector(
  [selectSignInAndSignUp],
  signInAndSignUp => signInAndSignUp.logIn
);

export const selectSignUpState = createSelector(
  [selectSignInAndSignUp],
  signInAndSignUp => signInAndSignUp.signUp
);
