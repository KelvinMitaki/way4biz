import { FETCH_PRODUCTS_SEARCH, FETCH_PRODUCTS_FAILED } from "../actions/types";

const INITIAL_STATE = {
  searchedProducts: [],
  productsError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SEARCH:
      return { ...state, searchedProducts: action.payload };
    case FETCH_PRODUCTS_FAILED:
      return { ...state, productsError: "Fetching products failed" };
    default:
      return state;
  }
};
