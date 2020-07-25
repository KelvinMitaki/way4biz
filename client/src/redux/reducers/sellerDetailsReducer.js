import {
  HANDLE_INCREMENT_ACTION,
  HANDLE_DECREMENT_ACTION,
  HANDLE_CHECK_ACTION,
  STORE_SELLER_IMAGE
} from "../actions/types";

const INITIAL_STATE = {
  open: 0,
  proceed: false,
  sellerImageUrl: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_INCREMENT_ACTION:
      return { ...state, open: state.open + 1 };
    case HANDLE_DECREMENT_ACTION:
      return { ...state, open: state.open - 1 };
    case HANDLE_CHECK_ACTION:
      return { ...state, proceed: action.payload };
    case STORE_SELLER_IMAGE:
      return {
        ...state,
        sellerImageUrl: [...state.sellerImageUrl, action.payload]
      };
    default:
      return state;
  }
};
