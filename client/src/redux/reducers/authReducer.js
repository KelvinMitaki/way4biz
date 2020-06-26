import { LOG_IN, LOG_IN_FAILED } from "../actions/types";

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
        error: "Invalid email or password"
      };
    default:
      return state;
  }
};
