import {
  HANDLE_INCREMENT_ACTION,
  HANDLE_DECREMENT_ACTION,
  HANDLE_CHECK_ACTION
} from "../actions/types";

const INITIAL_STATE = {
  open: 0,
  proceed: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_INCREMENT_ACTION:
      return { ...state, open: state.open + 1 };
    case HANDLE_DECREMENT_ACTION:
      return { ...state, open: state.open - 1 };
    case HANDLE_CHECK_ACTION:
      return { ...state, proceed: action.payload };
    default:
      return state;
  }
};
