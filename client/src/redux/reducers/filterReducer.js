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
        [action.payload.event.target.name]: action.payload.event.target.value
      };
    case HANDLE_CHECKBOX:
      console.log(action.payload.event.target.value);
      return {
        ...state,
        [action.payload.event.target.name]: action.payload.event.target.value
      };
    default:
      return state;
  }
};
