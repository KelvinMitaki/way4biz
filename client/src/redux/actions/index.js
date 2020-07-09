import axios from "axios";

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
  FETCH_PRODUCTS_SEARCH,
  FETCH_PRODUCTS_FAILED,
  UPDATE_PASSWORD_LOGGED_IN,
  UPDATE_PASSWORD_LOGGED_IN_FAILED,
  REGISTER_SELLER,
  REGISTER_SELLER_FAILED,
  FETCH_SELLER,
  FETCH_SELLER_NUMBER,
  INVALID_VERIFICATION_CODE,
  RESET_TOKEN_CHECK,
  FETCH_SELLER_PRODUCTS,
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  FETCH_CATEGORIES,
  SINGLE_CATEGORY,
  FETCH_ALL_CATEGORIES,
  MAKE_ORDER,
  FETCH_SELLER_ORDERS,
  FETCH_SELLER_ORDER_DETAILS,
  FETCH_BUYER_ORDERS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  FETCH_BUYER_ORDER_DETAILS,
  FETCH_MORE_PRODUCTS,
  HAS_MORE_FALSE
} from "./types";

export const logIn = (credentials, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.post("/api/login", credentials);

    if (res.data && res.data.phoneNumber) {
      res.data.phoneNumber = res.data.phoneNumber.toString();
    }
    dispatch({
      type: LOG_IN,
      payload: res.data
    });
    dispatch({ type: LOADING_STOP });
    history.push("/");
  } catch (error) {
    getState().form.LoginForm.values.password = "";
    dispatch({ type: LOADING_STOP });
    dispatch({ type: LOG_IN_FAILED });
  }
};
export const sellerLogIn = (credentials, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.post("/api/seller/login", credentials);
    if (res.data.user && res.data.user.phoneNumber) {
      res.data.user.phoneNumber = res.data.user.phoneNumber.toString();
    }
    dispatch({
      type: LOG_IN,
      payload: res.data
    });
    dispatch({ type: LOADING_STOP });
    history.push("/seller-dashboard");
  } catch (error) {
    getState().form.SellerLogin.values.password = "";
    dispatch({ type: LOADING_STOP });
    dispatch({ type: LOG_IN_FAILED });
  }
};
export const register = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });
    await axios.post("/api/register", credentials);
    dispatch({ type: REGISTER });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    console.log(error);
    getState().form.RegisterForm.values.email = "";
    dispatch({ type: REGISTER_FAILED });
    dispatch({ type: LOADING_STOP });
  }
};

export const fetchUser = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/current_user");
    console.log("Cpus: ", res.data.Cpus);
    if (res.data.user.phoneNumber) {
      res.data.user.phoneNumber = res.data.user.phoneNumber.toString();
    }
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILED });
    dispatch({ type: LOADING_STOP });
  }
};

export const passwordReset = email => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.post("/api/reset", email);
    dispatch({ type: RESET_PASSWORD, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    console.log(error);
    dispatch({ type: RESET_PASSWORD_FAILED });
    dispatch({ type: LOADING_STOP });
  }
};

export const editUser = (credentials, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: LOADING_START });
    const userId = getState().auth.user._id;
    const res = await axios.patch(`/api/user/edit/${userId}`, credentials);
    if (res.data.user.phoneNumber) {
      res.data.user.phoneNumber = res.data.user.phoneNumber.toString();
    }
    dispatch({ type: EDIT_USER, payload: res.data });
    dispatch({ type: LOADING_STOP });
    history.push("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_USER_FAILED });
    dispatch({ type: LOADING_STOP });
  }
};
export const checkoutUser = (credentials, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: LOADING_START });
    const userId = getState().auth.user._id;
    const res = await axios.patch(`/api/user/edit/${userId}`, credentials);
    if (res.data.user.phoneNumber) {
      res.data.user.phoneNumber = res.data.user.phoneNumber.toString();
    }
    dispatch({ type: CHECKOUT_USER, payload: res.data });
    dispatch({ type: LOADING_STOP });
    history.push("/checkout");
  } catch (error) {
    console.log(error);
    dispatch({ type: CHECKOUT_USER_FAILED });
    dispatch({ type: LOADING_STOP });
  }
};

export const fetchProductsSearch = searchTerm => async dispatch => {
  try {
    const res = await axios.post("/api/product/search", {
      searchTerm
    });
    dispatch({ type: FETCH_PRODUCTS_SEARCH, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILED });
    console.log(error.response);
  }
};

export const updatePasswordLoggedIn = (
  formValues,
  history
) => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const { currentPassword, newPassword } = formValues;
    const res = await axios.patch("/api/loggedIn/reset/password", {
      currentPassword,
      newPassword
    });
    dispatch({ type: UPDATE_PASSWORD_LOGGED_IN, payload: res.data });
    dispatch({ type: LOADING_STOP });
    history.push("/");
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    dispatch({ type: UPDATE_PASSWORD_LOGGED_IN_FAILED });
    console.log(error);
  }
};

export const registerSeller = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });

    const res = await axios.post("/api/seller/register", credentials);

    dispatch({ type: REGISTER_SELLER, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    if (error.response.data.email) {
      getState().form.SellerRegister.values.email = "";
      dispatch({
        type: REGISTER_SELLER_FAILED,
        payload: error.response.data.email
      });
      dispatch({ type: LOADING_STOP });
      return;
    }
    if (Object.keys(error.response.data.keyPattern)[0] === "phoneNumber") {
      dispatch({
        type: REGISTER_SELLER_FAILED,
        payload: "That phone number already exists"
      });
      dispatch({ type: LOADING_STOP });
      return;
    }
    getState().form.SellerRegister.values[
      Object.keys(error.response.data.keyPattern)[0]
    ] = "";
    dispatch({
      type: REGISTER_SELLER_FAILED,
      payload: "That store name already exists"
    });
    dispatch({ type: LOADING_STOP });
  }
};

export const fetchSeller = () => async dispatch => {
  try {
    const res = await axios.get("/api/current_seller");
    if (res.data.phoneNumber) {
      res.data.phoneNumber = res.data.phoneNumber.toString();
    }
    dispatch({ type: FETCH_SELLER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = (formvalues, history) => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    await axios.post("/api/twilio", formvalues);
    dispatch({ type: LOADING_STOP });
    history.push("/number/verify");
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};
export const fetchSellerNumber = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/number/verify");
    console.log(res.data);
    dispatch({ type: FETCH_SELLER_NUMBER, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error);
  }
};
export const verifyCode = (formValues, history) => async (
  dispatch,
  getState
) => {
  try {
    formValues.phoneNumber = getState().sellerRegister.sellerNumber.number;
    dispatch({ type: LOADING_START });
    await axios.post("/api/twilio/verify", formValues);
    dispatch({ type: LOADING_STOP });
    history.push("/seller/sign-in");
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    getState().form.VerifySellerNumber.values.code = "";
    dispatch({
      type: INVALID_VERIFICATION_CODE,
      payload: "The Verification code you entered is invalid. Please try again"
    });
  }
};

export const resetTokenCheck = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/password/reset/callback");
    dispatch({ type: RESET_TOKEN_CHECK, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const forgotPassword = (formvalues, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: LOADING_START });
    await axios.post(
      `/api/reset/${getState().sellerRegister.resetToken}`,
      formvalues
    );
    dispatch({ type: LOADING_STOP });
    history.push("/sign-in");
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchSellerProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get(
      `/api/products/seller/${getState().auth.user._id}`
    );
    dispatch({ type: FETCH_SELLER_PRODUCTS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const addProduct = (product, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.post(
      `/api/product/${getState().auth.user._id}`,
      product
    );
    console.log(res.data);
    dispatch({ type: ADD_PRODUCT });
    dispatch({ type: LOADING_STOP });
    history.push("/seller-products");
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const itemsToSkip = getState().product.products.length;
    dispatch({ type: LOADING_START });
    const res = await axios.post(`/api/products`, { itemsToSkip });
    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const editProduct = (formvalues, productId, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: LOADING_START });
    await axios.patch(
      `/api/product/${getState().auth.user._id}/${productId}`,
      formvalues
    );
    dispatch({ type: LOADING_STOP });
    history.push("/seller-products");
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
};

export const deleteFromCart = product => {
  return {
    type: DELETE_FROM_CART,
    payload: product
  };
};

export const fetchCategories = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/products/find/categories");
    dispatch({ type: FETCH_CATEGORIES, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const singleCategory = (category, history) => async (
  dispatch,
  getState
) => {
  try {
    const itemsToSkip = getState().product.singleCategoryProducts.length;

    dispatch({ type: LOADING_START });
    const res = await axios.post(`/api/products/skip/${category}`, {
      itemsToSkip
    });
    dispatch({ type: SINGLE_CATEGORY, payload: res.data });
    dispatch({ type: LOADING_STOP });
    history.push(`/products/category/${category}`);
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchAllCategories = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/fetch/all/categories");
    dispatch({ type: FETCH_ALL_CATEGORIES, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: LOADING_STOP });
  }
};

export const makeOrder = credentials => async dispatch => {
  try {
    dispatch({ type: LOADING_START });

    await axios.post("/api/new/order", credentials);
    dispatch({ type: MAKE_ORDER });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchSellerOrders = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/seller/orders");
    dispatch({ type: FETCH_SELLER_ORDERS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchSellerOrderDetails = orderDetails => {
  return {
    type: FETCH_SELLER_ORDER_DETAILS,
    payload: orderDetails
  };
};

export const fetchBuyerOrders = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/orders");
    dispatch({ type: FETCH_BUYER_ORDERS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const addToWishlist = product => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product
  };
};

export const removeFromWishlist = product => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product
  };
};

export const fetchBuyerOrderDetails = orderId => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get(`/api/buyer/order/details/${orderId}`);
    dispatch({ type: FETCH_BUYER_ORDER_DETAILS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchMoreProducts = () => async (dispatch, getState) => {
  try {
    const itemsToSkip = getState().product.products.length;
    dispatch({ type: LOADING_START });
    const res = await axios.post("/api/products", { itemsToSkip });
    dispatch({ type: FETCH_MORE_PRODUCTS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const hasMoreFalse = () => {
  return {
    type: HAS_MORE_FALSE
  };
};
