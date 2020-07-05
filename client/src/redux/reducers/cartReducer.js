import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART
} from "../actions/types";

const INITIAL_STATE = {
  cart: [],
  wishlist: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productExists = state.cart.find(
        item => item.product._id.toString() === action.payload._id.toString()
      );
      if (productExists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product._id.toString() === action.payload._id.toString()
              ? { product: action.payload, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }]
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
    default:
      return state;
  }
};
