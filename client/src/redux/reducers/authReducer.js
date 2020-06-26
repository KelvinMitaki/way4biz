import { LOG_IN, LOG_IN_FAILED, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
  error: null
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
      return { ...state, isSignedIn: action.payload.isLoggedIn };
    default:
      return state;
  }
};
