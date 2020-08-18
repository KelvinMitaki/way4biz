import {
  PAYMENT_DISTANCE_START,
  PAYMENT_DISTANCE_STOP,
  DELIVERY_OPEN_ACTION,
  DELIVERY_CLOSE_ACTION
} from "../actions/types";

const INITIAL_VALUES = {
  paymentPerDistanceLoading: false,
  delivery: false
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
    default:
      return state;
  }
};
