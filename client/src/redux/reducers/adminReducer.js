import {
  FETCH_ADMIN_INBOX,
  FETCH_ADMIN_INBOX_START,
  FETCH_ADMIN_INBOX_STOP,
  FETCH_ADMIN_ORDERS
} from "../actions/types";

const INITIAL_STATE = {
  inbox: null,
  inboxLoading: false,
  adminOrders: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ADMIN_INBOX:
      return { ...state, inbox: action.payload };
    case FETCH_ADMIN_INBOX_START:
      return { ...state, inboxLoading: true };
    case FETCH_ADMIN_INBOX_STOP:
      return { ...state, inboxLoading: false };
    case FETCH_ADMIN_ORDERS:
      return { ...state, adminOrders: action.payload };
    default:
      return state;
  }
};
