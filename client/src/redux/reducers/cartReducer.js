import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  MAKE_ORDER,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  HANDLE_SEARCH_TERM,
  HANDLE_URL_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  FETCH_WISHLIST_PRODUCTS,
  FETCH_WISHLIST_PRODUCTS_START,
  FETCH_WISHLIST_PRODUCTS_STOP,
  FETCH_CART_ITEMS_START,
  FETCH_CART_ITEMS_STOP,
  FETCH_CART_ITEMS
} from "../actions/types";

const INITIAL_STATE = {
  cart: [],
  wishlist: [],
  typing: "",
  wishlistLoading: false,
  cartLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productExists =
        state.cart &&
        state.cart.find(
          product => product._id.toString() === action.payload._id.toString()
        );
      if (productExists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item._id.toString() === action.payload._id.toString()
              ? { ...action.payload, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [{ ...action.payload, quantity: 1 }, ...state.cart]
      };
    case REMOVE_FROM_CART:
      const existingCartItem = state.cart.find(
        item => item._id.toString() === action.payload._id.toString()
      );
      if (existingCartItem.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(
            item => item._id.toString() !== action.payload._id.toString()
          )
        };
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item._id.toString() === action.payload._id.toString()
            ? { ...action.payload, quantity: action.payload.quantity - 1 }
            : item
        )
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          item => item._id.toString() !== action.payload._id.toString()
        )
      };
    case MAKE_ORDER:
      return { ...state, cart: [] };
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: [action.payload, ...state.wishlist] };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item._id !== action.payload._id)
      };
    case HANDLE_SEARCH_TERM:
      return { ...state, typing: action.payload };
    case HANDLE_URL_SEARCH_TERM:
      return { ...state, typing: action.payload };
    case CLEAR_SEARCH_TERM:
      return { ...state, typing: "" };
    case FETCH_WISHLIST_PRODUCTS:
      const ids = new Set(state.wishlist.map(p => p._id));
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          ...action.payload.filter(prod => !ids.has(prod._id))
        ]
      };
    case FETCH_WISHLIST_PRODUCTS_START:
      return { ...state, wishlistLoading: true };
    case FETCH_WISHLIST_PRODUCTS_STOP:
      return { ...state, wishlistLoading: false };
    case FETCH_CART_ITEMS_START:
      return { ...state, cartLoading: true };
    case FETCH_CART_ITEMS_STOP:
      return { ...state, cartLoading: false };
    case FETCH_CART_ITEMS:
      const productIds = new Set(state.cart.map(p => p._id));
      return {
        ...state,
        cart: [
          ...state.cart,
          ...action.payload.filter(prod => !productIds.has(prod._id))
        ]
      };
    default:
      return state;
  }
};
