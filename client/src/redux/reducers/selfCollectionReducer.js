import { SELF_COLLECTION_ADDRESS } from "../actions/types";

const INITIAL_STATE = {
  address: {},
  city: "Ngong Road Apartments, Ngong Road, Nairobi, Kenya"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELF_COLLECTION_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
