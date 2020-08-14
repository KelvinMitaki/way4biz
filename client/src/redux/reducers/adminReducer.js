import {
  FETCH_ADMIN_INBOX,
  FETCH_ADMIN_INBOX_START,
  FETCH_ADMIN_INBOX_STOP,
  FETCH_COMPLAINT_START,
  FETCH_COMPLAINT_STOP,
  NEW_COMPLAINT_START,
  NEW_COMPLAINT_STOP
} from "../actions/types";

const INITIAL_STATE = {
  inbox: null,
  inboxLoading: false,
  complaintLoading: false,
  complaintsCount: null,
  complaints: null,
  complaint: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ADMIN_INBOX:
      return { ...state, inbox: action.payload };
    case FETCH_ADMIN_INBOX_START:
      return { ...state, inboxLoading: true };
    case FETCH_ADMIN_INBOX_STOP:
      return { ...state, inboxLoading: false };
    case FETCH_COMPLAINT_START:
      return { ...state, complaintLoading: true };
    case FETCH_COMPLAINT_STOP:
      return { ...state, complaintLoading: false };
    case NEW_COMPLAINT_START:
      return { ...state, complaintLoading: true };
    case NEW_COMPLAINT_STOP:
      return { ...state, complaintLoading: false };
    default:
      return state;
  }
};
