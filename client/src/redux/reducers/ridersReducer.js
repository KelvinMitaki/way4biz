import {
  RIDER_REGISTER_START,
  RIDER_REGISTERED,
  RIDER_REGISTER_STOP,
  RIDER_REGISTER_ERROR,
  FETCH_SUCCESSFUL_DELIVERIES_START,
  SUCCESSFUL_DELIVERIES_FETCHED,
  FETCH_SUCCESSFUL_DELIVERIES_STOP,
  FETCH_PENDING_DELIVERIES_START,
  FETCH_PENDING_DELIVERIES_STOP,
  PENDING_DELIVERIES_FETCHED,
} from "../actions/types";

const initialState = {
  riderRegisterLoading: false,
  riderRegisterError: null,
  fetchingSuccessfulDeliveries: false,
  successfulDeliveriesFetched: false,
  fetchingPendingDeliveries: false,
  pendingDeliveriesDetched: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RIDER_REGISTER_START:
      return { ...state, riderRegisterLoading: true };
    case RIDER_REGISTERED:
      return { ...state, riderRegisterLoading: false, riderRegistered: true };
    case RIDER_REGISTER_ERROR:
      return {
        ...state,
        riderRegisterLoading: false,
        riderRegisterError: action.data,
      };
    case FETCH_SUCCESSFUL_DELIVERIES_START:
      return { ...state, fetchingSuccessfulDeliveries: true };
    case SUCCESSFUL_DELIVERIES_FETCHED:
      return {
        ...state,
        fetchingSuccessfulDeliveries: false,
        successfulDeliveriesFetched: true,
      };
    case FETCH_SUCCESSFUL_DELIVERIES_STOP:
      return { ...state, fetchingSuccessfulDeliveries: false };
    case FETCH_PENDING_DELIVERIES_START:
      return { ...state, fetchingPendingDeliveries: true };
    case PENDING_DELIVERIES_FETCHED:
      return {
        ...state,
        fetchingPendingDeliveries: false,
        pendingDeliveriesDetched: true,
      };
    case FETCH_PENDING_DELIVERIES_STOP:
      return { ...state, fetchingPendingDeliveries: false };
    default:
      return state;
  }
};
