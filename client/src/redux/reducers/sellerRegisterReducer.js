import {
  FETCH_SELLER,
  REGISTER_SELLER_FAILED,
  FETCH_SELLER_NUMBER,
  INVALID_VERIFICATION_CODE,
  RESET_TOKEN_CHECK,
  FETCH_SELLER_PRODUCTS,
  FETCH_SELLER_ORDERS,
  FETCH_VERIFIED_SELLERS,
  FETCH_SELLERS_START,
  FETCH_SELLERS_STOP,
  FETCH_VERIFIED_SELLER,
  FETCH_NEW_SELLER,
  FETCH_NEW_SELLERS,
  FETCH_NEW_SELLERS_START,
  FETCH_NEW_SELLERS_STOP,
  ACCEPT_SELLER_REQUEST_START,
  ACCEPT_SELLER_REQUEST_STOP,
  FETCH_SELLER_START,
  FETCH_SELLER_STOP
} from "../actions/types";

const INITIAL_STATE = {
  seller: null,
  sellerNumber: null,
  sellerRegisterError: null,
  errorVerifying: null,
  resetToken: null,
  sellerProducts: null,
  sellerOrders: [],
  verifiedSellers: null,
  fetchSellersLoading: false,
  verifiedSeller: null,
  newSellers: null,
  newSeller: null,
  newSellerLoading: false,
  sellerRequestLoading: false,
  fetchSellerLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SELLER:
      return { ...state, seller: action.payload };
    case REGISTER_SELLER_FAILED:
      return {
        ...state,
        sellerRegisterError: action.payload
      };
    case FETCH_SELLER_NUMBER:
      return {
        ...state,
        sellerNumber:
          typeof action.payload === "number" ? { number: action.payload } : {}
      };
    case INVALID_VERIFICATION_CODE:
      return { ...state, errorVerifying: action.payload };
    case RESET_TOKEN_CHECK:
      return { ...state, resetToken: action.payload };
    case FETCH_SELLER_PRODUCTS:
      return { ...state, sellerProducts: action.payload };
    case FETCH_SELLER_ORDERS:
      return { ...state, sellerOrders: action.payload };
    case FETCH_VERIFIED_SELLERS:
      return { ...state, verifiedSellers: action.payload };
    case FETCH_SELLERS_START:
      return { ...state, fetchSellersLoading: true };
    case FETCH_SELLERS_STOP:
      return { ...state, fetchSellersLoading: false };
    case FETCH_VERIFIED_SELLER:
      return { ...state, verifiedSeller: action.payload };
    case FETCH_NEW_SELLER:
      return { ...state, newSeller: action.payload };
    case FETCH_NEW_SELLERS:
      return { ...state, newSellers: action.payload };
    case FETCH_NEW_SELLERS_START:
      return { ...state, newSellerLoading: true };
    case FETCH_NEW_SELLERS_STOP:
      return { ...state, newSellerLoading: false };
    case ACCEPT_SELLER_REQUEST_START:
      return { ...state, sellerRequestLoading: true };
    case ACCEPT_SELLER_REQUEST_STOP:
      return { ...state, sellerRequestLoading: false };
    case FETCH_SELLER_START:
      return { ...state, fetchSellerLoading: true };
    case FETCH_SELLER_STOP:
      return { ...state, fetchSellerLoading: false };
    default:
      return state;
  }
};
