import {
  HANDLE_CHANGE,
  HANDLE_CHECKBOX,
  REVERT_FILTER
} from "../actions/types";

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
    case REVERT_FILTER:
      return {
        ...state,
        priceMax: null,
        priceMin: null,
        rating: false,
        freeShipping: false,
        latest: false
      };
    default:
      return state;
  }
};
