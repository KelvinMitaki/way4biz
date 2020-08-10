import {
  SELF_COLLECTION_ADDRESS,
  SELF_COLLECTION_START,
  SELF_COLLECTION_STOP
} from "../actions/types";

const INITIAL_STATE = {
  address: {},
  city: "Ngong Road Apartments, Ngong Road, Nairobi, Kenya",
  selfCollectionLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELF_COLLECTION_ADDRESS:
      return { ...state, address: action.payload };
    case SELF_COLLECTION_START:
      return { ...state, selfCollectionLoading: true };
    case SELF_COLLECTION_STOP:
      return { ...state, selfCollectionLoading: false };
    default:
      return state;
  }
};
