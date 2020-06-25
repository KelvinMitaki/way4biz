import { LOG_IN } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    default:
      return state;
  }
};
