import { HANDLE_CHANGE, HANDLE_CHECKBOX } from "../actions/types";

const INITIAL_STATE = {
  priceMax: null,
  priceMin: null,
  rating: false,
  freeShipping: false,
  latest: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.event.name]: action.payload.event.value
      };
    case HANDLE_CHECKBOX:
      return {
        ...state,
        [action.payload.event.name]: action.payload.event.checked
      };
    default:
      return state;
  }
};
