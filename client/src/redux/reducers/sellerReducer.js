import { FETCH_SELLER, REGISTER_SELLER_FAILED } from "../actions/types";

const INITIAL_STATE = {
  seller: null,
  sellerRegisterError: null
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
    default:
      return state;
  }
};
