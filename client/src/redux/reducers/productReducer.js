import {
  FETCH_PRODUCTS_SEARCH,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  SINGLE_CATEGORY,
  FETCH_ALL_CATEGORIES,
  FETCH_BUYER_ORDERS,
  FETCH_BUYER_ORDER_DETAILS,
  FETCH_MORE_PRODUCTS,
  HAS_MORE_FALSE
} from "../actions/types";

const INITIAL_STATE = {
  searchedProducts: [],
  productsError: null,
  products: [],
  categories: [],
  singleCategoryProducts: [],
  buyerOrders: [],
  buyerOrderDetails: null,
  productCount: null,
  hasMore: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SEARCH:
      return { ...state, searchedProducts: action.payload };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        productCount: action.payload.productCount
      };
    case FETCH_MORE_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload.products]
      };
    case HAS_MORE_FALSE:
      return { ...state, hasMore: false };
    case FETCH_PRODUCTS_FAILED:
      return { ...state, productsError: "Fetching products failed" };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case SINGLE_CATEGORY:
      return { ...state, singleCategoryProducts: action.payload };
    case FETCH_ALL_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_BUYER_ORDERS:
      return { ...state, buyerOrders: action.payload };
    case FETCH_BUYER_ORDER_DETAILS:
      return { ...state, buyerOrderDetails: action.payload };
    default:
      return state;
  }
};
