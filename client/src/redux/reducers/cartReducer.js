import { ADD_TO_CART } from "../actions/types";

const INITIAL_STATE = {
  cart: [],
  wishlist: []
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
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    default:
      return state;
  }
};
