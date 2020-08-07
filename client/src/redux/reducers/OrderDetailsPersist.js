import {
  FETCH_SELLER_ORDER_DETAILS,
  PAYMENT_DISTANCE,
  FETCH_SELLER_ORDERS
} from "../actions/types";

const INITIAL_STATE = {
  sellerOrderDetails: [],
  distance: null,
  sellerOrders: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SELLER_ORDER_DETAILS:
      return { ...state, sellerOrderDetails: action.payload };
    case PAYMENT_DISTANCE:
      return { ...state, distance: action.payload };

    case FETCH_SELLER_ORDERS:
      return { ...state, sellerOrders: action.payload };
    default:
      return state;
  }
};
