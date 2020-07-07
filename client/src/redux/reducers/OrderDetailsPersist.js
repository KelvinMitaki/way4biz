import { FETCH_SELLER_ORDER_DETAILS } from "../actions/types";

const INITIAL_STATE = {
  sellerOrderDetails: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SELLER_ORDER_DETAILS:
      return { ...state, sellerOrderDetails: action.payload };
    default:
      return state;
  }
};
