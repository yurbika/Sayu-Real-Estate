import SignInAndSignUpActionTypes from "./sign-in-and-sign-up.types";

const INITIAL_STATE = {
  logInShow: true,
  signUpShow: false
};

const signInAndSignUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInAndSignUpActionTypes.TOGGLE_LOG_IN:
      return {
        ...state,
        logInShow: true,
        signUpShow: false
      };
    case SignInAndSignUpActionTypes.TOGGLE_SIGN_UP:
      return {
        ...state,
        logInShow: false,
        signUpShow: true
      };

    default:
      return state;
  }
};

export default signInAndSignUpReducer;
