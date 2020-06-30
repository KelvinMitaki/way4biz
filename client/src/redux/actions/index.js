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
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  UPDATE_PASSWORD_LOGGED_IN,
  UPDATE_PASSWORD_LOGGED_IN_FAILED,
  REGISTER_SELLER,
  REGISTER_SELLER_FAILED
} from "./types";

export const logIn = (credentials, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.post("/api/login", credentials);
    if (res.data.user && res.data.user.phoneNumber) {
      res.data.user.phoneNumber = res.data.user.phoneNumber.toString();
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

export const fetchProducts = searchTerm => async dispatch => {
  try {
    const res = await axios.post("/api/product/search", {
      searchTerm
    });
    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILED });
    console.log(error);
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
