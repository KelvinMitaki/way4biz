import {
  PAYMENT_DISTANCE_START,
  PAYMENT_DISTANCE_STOP,
  DELIVERY_OPEN_ACTION,
  DELIVERY_CLOSE_ACTION,
  MAKE_ORDER_START,
  MAKE_ORDER_STOP
} from "../actions/types";

const INITIAL_VALUES = {
  paymentPerDistanceLoading: false,
  delivery: false,
  makeOrderLoading: false
};

export default (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case PAYMENT_DISTANCE_START:
      return { ...state, paymentPerDistanceLoading: true };
    case PAYMENT_DISTANCE_STOP:
      return { ...state, paymentPerDistanceLoading: false };
    case DELIVERY_OPEN_ACTION:
      return { ...state, delivery: true };
    case DELIVERY_CLOSE_ACTION:
      return { ...state, delivery: false };
    case MAKE_ORDER_START:
      return { ...state, makeOrderLoading: true };
    case MAKE_ORDER_STOP:
      return { ...state, makeOrderLoading: false };
    default:
      return state;
  }
};
