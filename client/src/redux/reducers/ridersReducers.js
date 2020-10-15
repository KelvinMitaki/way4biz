import {
  FETCH_SUCCESSFUL_DELIVERIES_START,
  SUCCESSFUL_DELIVERIES_FETCHED,
  FETCH_SUCCESSFUL_DELIVERIES_STOP,
} from "../actions/types";

const initialState = {
  fetchingSuccessfulDeliveries: false,
  successfulDeliveriesFetched: false,
};

export default ridersReducer = (state = initialsState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
