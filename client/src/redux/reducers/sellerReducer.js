import {
  FETCH_SELLER,
  REGISTER_SELLER_FAILED,
  FETCH_SELLER_NUMBER,
  INVALID_VERIFICATION_CODE
} from "../actions/types";

const INITIAL_STATE = {
  seller: null,
  sellerNumber: null,
  sellerRegisterError: null,
  errorVerifying: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SELLER:
      return { ...state, seller: action.payload };
    case REGISTER_SELLER_FAILED:
      return {
        ...state,
        sellerRegisterError: action.payload
      };
    case FETCH_SELLER_NUMBER:
      return { ...state, sellerNumber: { number: action.payload } };
    case INVALID_VERIFICATION_CODE:
      return { ...state, errorVerifying: action.payload };
    default:
      return state;
  }
};
