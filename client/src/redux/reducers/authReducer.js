import {
  LOG_IN,
  LOG_IN_FAILED,
  FETCH_USER,
  LOADING_START,
  LOADING_STOP,
  REGISTER,
  REGISTER_FAILED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD,
  EDIT_USER,
  EDIT_USER_FAILED,
  FETCH_USER_FAILED,
  CHECKOUT_USER,
  CHECKOUT_USER_FAILED,
  UPDATE_PASSWORD_LOGGED_IN,
  UPDATE_PASSWORD_LOGGED_IN_FAILED,
  REGISTER_SELLER,
  REGISTER_SELLER_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  error: null,
  registerError: null,
  loading: false,
  showEmailConfirm: false,
  success: null,
  editUserError: null,
  checkoutUserError: null,
  updatePasswordMessage: null,
  updatePasswordError: null,
  sellerRegisterError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case LOG_IN_FAILED:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        error:
          "The email and password you entered did not match our records. Please double-check and try again."
      };
    case FETCH_USER_FAILED:
      return { ...state, isSignedIn: false, user: null };
    case FETCH_USER:
      if (action.payload.isLoggedIn) {
        return {
          ...state,
          isSignedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      return { ...state, isSignedIn: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_STOP:
      return { ...state, loading: false };
    case REGISTER:
      return { ...state, showEmailConfirm: true };
    case REGISTER_FAILED:
      return {
        ...state,
        registerError: "That email address is already in use"
      };
    case RESET_PASSWORD:
      return { ...state, success: action.payload.message };
    case RESET_PASSWORD_FAILED:
      return { ...state, error: "No user with that email found" };
    case EDIT_USER:
      if (action.payload.isLoggedIn) {
        return {
          ...state,
          isSignedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      return { ...state, isSignedIn: false };
    case CHECKOUT_USER:
      if (action.payload.isLoggedIn) {
        return {
          ...state,
          isSignedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      return { ...state, isSignedIn: false };
    case CHECKOUT_USER_FAILED:
      return { ...state, checkoutUserError: "Saving changes failed" };
    case EDIT_USER_FAILED:
      return { ...state, editUserError: "Saving changes failed" };
    case UPDATE_PASSWORD_LOGGED_IN:
      return { ...state, updatePasswordMessage: action.payload.message };
    case UPDATE_PASSWORD_LOGGED_IN_FAILED:
      return {
        ...state,
        updatePasswordError:
          "Update Password failed, Please double-check your current password and try again"
      };
    case REGISTER_SELLER:
      return { ...state, showEmailConfirm: true };
    case REGISTER_SELLER_FAILED:
      return {
        ...state,
        sellerRegisterError: action.payload
      };
    default:
      return state;
  }
};
