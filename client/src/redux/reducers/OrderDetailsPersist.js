import { FETCH_SELLER_ORDER_DETAILS, PAYMENT_DISTANCE } from "../actions/types";

const INITIAL_STATE = {
  sellerOrderDetails: [],
  distance: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SELLER_ORDER_DETAILS:
      return { ...state, sellerOrderDetails: action.payload };
    case PAYMENT_DISTANCE:
      return { ...state, distance: action.payload };
    default:
      return state;
  }
};
