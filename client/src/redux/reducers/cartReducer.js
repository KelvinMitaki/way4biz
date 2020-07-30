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
  FETCH_WISHLIST_PRODUCTS_STOP
} from "../actions/types";

const INITIAL_STATE = {
  cart: [],
  wishlist: [],
  typing: "",
  wishlistLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productExists = state.cart.find(
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
      return { ...state, wishlist: action.payload };
    case FETCH_WISHLIST_PRODUCTS_START:
      return { ...state, wishlistLoading: true };
    case FETCH_WISHLIST_PRODUCTS_STOP:
      return { ...state, wishlistLoading: false };
    default:
      return state;
  }
};
