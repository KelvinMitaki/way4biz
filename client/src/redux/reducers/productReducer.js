import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAILED } from "../actions/types";

const INITIAL_STATE = {
  products: [],
  productsError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCTS_FAILED:
      return { ...state, productsError: "Fetching products failed" };
    default:
      return state;
  }
};
