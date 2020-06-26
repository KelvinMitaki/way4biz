import {
  LOG_IN,
  LOG_IN_FAILED,
  FETCH_USER,
  LOADING_START,
  LOADING_STOP,
  REGISTER,
  REGISTER_FAILED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  error: null,
  loading: false,
  showEmailConfirm: false,
  success: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case LOG_IN_FAILED:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        error:
          "The email and password you entered did not match our records. Please double-check and try again."
      };
    case FETCH_USER:
      if (action.payload.isLoggedIn) {
        return {
          ...state,
          isSignedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      return { ...state, isSignedIn: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_STOP:
      return { ...state, loading: false };
    case REGISTER:
      return { ...state, showEmailConfirm: true };
    case REGISTER_FAILED:
      return { ...state, error: "That email address is already in use" };
    case RESET_PASSWORD:
      return { ...state, success: action.payload.message };
    case RESET_PASSWORD_FAILED:
      return { ...state, error: "No user with that email found" };
    default:
      return state;
  }
};
