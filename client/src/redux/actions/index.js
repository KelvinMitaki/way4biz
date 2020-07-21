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
  HAS_MORE_FALSE,
  MORE_SINGLE_CATEGORY_PRODUCTS,
  HAS_MORE_CATEGORY_FALSE,
  SIGN_IN_CLICK,
  REGISTER_CLICK,
  FETCH_SINGLE_PRODUCT,
  FETCH_RELATED_PRODUCTS,
  FETCH_PENDING_REVIEWS,
  FETCH_ORDERS_LOADING_START,
  FETCH_ORDERS_LOADING_STOP,
  FETCH_PENDING_REVIEWS_LOADING_START,
  FETCH_PENDING_REVIEWS_LOADING_STOP,
  FETCH_SELLER_ORDERS_START,
  FETCH_SELLER_ORDERS_STOP,
  FETCH_SELLER_PRODUCTS_START,
  FETCH_SELLER_PRODUCTS_STOP,
  SINGLE_CATEGORY_START,
  SINGLE_CATEGORY_STOP,
  SINGLE_PRODUCT_START,
  SINGLE_PRODUCT_STOP,
  PRODUCT_REVIEWS,
  FETCH_USER_START,
  FETCH_USER_STOP,
  FILTERED_PRODUCTS_START,
  FILTERED_PRODUCTS_STOP,
  HANDLE_CHECKBOX,
  HANDLE_CHANGE,
  REVERT_FILTER,
  RADIO_BUTTON,
  FETCH_SELLER_REVIEWS_START,
  FETCH_SELLER_REVIEWS_STOP,
  FETCH_SELLER_REVIEWS,
  STORE_DESCRIPTION,
  STORE_IMAGE,
  STORE_IMAGE_START,
  STORE_IMAGE_STOP,
  REDIRECT_ON_FAIL_START,
  REDIRECT_ON_FAIL_STOP,
  EDIT_PRODUCT,
  DELETE_IMAGE_START,
  DELETE_IMAGE_STOP,
  DELETE_IMAGE,
  UNPERSIST_IMAGE,
  PAYMENT_DISTANCE_START,
  PAYMENT_DISTANCE_STOP,
  PAYMENT_DISTANCE,
  GET_STOCK,
  GET_STOCK_START,
  GET_STOCK_STOP,
  FETCH_VERIFIED_SELLERS,
  FETCH_SELLERS_STOP,
  FETCH_SELLERS_START,
  FETCH_VERIFIED_SELLER,
  FETCH_NEW_SELLER,
  FETCH_NEW_SELLERS,
  FETCH_NEW_SELLERS_START,
  FETCH_NEW_SELLERS_STOP,
  FETCH_ADMIN_ORDERS,
  FETCH_ADMIN_ORDERS_START,
  FETCH_ADMIN_ORDERS_STOP,
  FETCH_ADMIN_PENDING_ORDERS,
  FETCH_ALL_ORDERS,
  HAS_MORE_ORDERS_FALSE,
  ADMIN_RADIO,
  FETCH_MORE_ALL_ORDERS,
  FETCH_ADMIN_ORDER,
  FETCH_ORDER_BY_ID
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
    if (res.data && res.data.phoneNumber) {
      res.data.phoneNumber = res.data.phoneNumber.toString();
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
    dispatch({ type: FETCH_USER_START });
    const res = await axios.get("/api/current_user");
    console.log("Cpus: ", res.data.Cpus);
    if (res.data.user.phoneNumber) {
      res.data.user.phoneNumber = res.data.user.phoneNumber.toString();
    }
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: FETCH_USER_STOP });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILED });
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_USER_STOP });
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
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
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
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }

    dispatch({ type: LOADING_STOP });
  }
};

export const fetchProductsSearch = searchTerm => async dispatch => {
  try {
    if (searchTerm.trim()) {
      const res = await axios.post("/api/product/search", {
        searchTerm
      });
      dispatch({ type: FETCH_PRODUCTS_SEARCH, payload: res.data });
    }
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
    dispatch({ type: UPDATE_PASSWORD_LOGGED_IN_FAILED });
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: LOADING_STOP });
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
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
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
export const fetchSellerNumber = history => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get("/api/number/verify");
    dispatch({ type: FETCH_SELLER_NUMBER, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    history.push("/seller/register");
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
    dispatch({ type: FETCH_SELLER_PRODUCTS_START });
    const res = await axios.get(
      `/api/products/seller/${getState().auth.user._id}`
    );
    dispatch({ type: FETCH_SELLER_PRODUCTS, payload: res.data });
    dispatch({ type: FETCH_SELLER_PRODUCTS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLER_PRODUCTS_STOP });
    console.log(error.response);
  }
};

export const addProduct = (product, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });

    await axios.post(`/api/product/add/${getState().auth.user._id}`, product);
    dispatch({ type: ADD_PRODUCT });
    dispatch({ type: LOADING_STOP });
    history.push("/seller-products");
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const storeImage = image => async dispatch => {
  try {
    dispatch({ type: STORE_IMAGE_START });
    const uploadConfig = await axios.get("/api/image/upload");
    if (uploadConfig.data.url) {
      await axios.put(uploadConfig.data.url, image, {
        headers: {
          "Content-Type": image.type
        }
      });
      dispatch({
        type: STORE_IMAGE,
        payload: uploadConfig.data.key
      });

      dispatch({ type: STORE_IMAGE_STOP });
      return;
    }
    dispatch({ type: STORE_IMAGE_STOP });
    throw new Error("Error getting url");
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    console.log(error.response.data);
    dispatch({ type: STORE_IMAGE_STOP });
  }
};
export const unpersistImage = () => {
  return {
    type: UNPERSIST_IMAGE
  };
};

export const editProduct = (formvalues, productId, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: LOADING_START });
    await axios.patch(
      `/api/product/edit/${getState().auth.user._id}/${productId}`,
      formvalues
    );
    dispatch({ type: EDIT_PRODUCT });
    dispatch({ type: LOADING_STOP });
    history.push("/seller-products");
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
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

export const fetchAllCategories = () => async dispatch => {
  try {
    dispatch({ type: SINGLE_CATEGORY_START });
    const res = await axios.get("/api/fetch/all/categories");
    dispatch({ type: FETCH_ALL_CATEGORIES, payload: res.data });
    dispatch({ type: SINGLE_CATEGORY_STOP });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: SINGLE_CATEGORY_STOP });
  }
};

export const makeOrder = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_START });
    const distanceId =
      getState().detailsPersist.distance &&
      getState().detailsPersist.distance._id;
    await axios.post("/api/new/order", { ...credentials, distanceId });
    dispatch({ type: MAKE_ORDER });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchSellerOrders = () => async dispatch => {
  try {
    dispatch({ type: FETCH_SELLER_ORDERS_START });
    const res = await axios.get("/api/seller/orders");
    dispatch({ type: FETCH_SELLER_ORDERS, payload: res.data });
    dispatch({ type: FETCH_SELLER_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLER_ORDERS_STOP });
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
    dispatch({ type: FETCH_ORDERS_LOADING_START });
    const res = await axios.get("/api/orders");
    dispatch({ type: FETCH_BUYER_ORDERS, payload: res.data });
    dispatch({ type: FETCH_ORDERS_LOADING_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_ORDERS_LOADING_STOP });
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
    dispatch({ type: FETCH_ORDERS_LOADING_START });
    const res = await axios.get(`/api/buyer/order/details/${orderId}`);
    dispatch({ type: FETCH_BUYER_ORDER_DETAILS, payload: res.data });
    dispatch({ type: FETCH_ORDERS_LOADING_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_ORDERS_LOADING_STOP });
    console.log(error.response);
  }
};

export const hasMoreFalse = () => {
  return {
    type: HAS_MORE_FALSE
  };
};
export const hasMoreCategoryFalse = () => {
  return {
    type: HAS_MORE_CATEGORY_FALSE
  };
};
export const fetchProducts = () => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.post(`/api/products`, { itemsToSkip: 0 });
    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
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

export const signInClick = () => {
  return {
    type: SIGN_IN_CLICK
  };
};

export const registerClick = () => {
  return {
    type: REGISTER_CLICK
  };
};

export const fetchSingleProduct = productId => async dispatch => {
  try {
    dispatch({ type: SINGLE_PRODUCT_START });
    const res = await axios.get(`/api/product/${productId}`);
    dispatch({ type: FETCH_SINGLE_PRODUCT, payload: res.data });
    dispatch({ type: SINGLE_PRODUCT_STOP });
  } catch (error) {
    dispatch({ type: SINGLE_PRODUCT_STOP });
    console.log(error.response);
  }
};

export const fetchRelatedProducts = subcategory => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    const res = await axios.get(
      `/api/products/category/subcategory/${subcategory}`
    );
    dispatch({ type: FETCH_RELATED_PRODUCTS, payload: res.data });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    console.log(error.response);
  }
};

export const fetchPendingReviews = () => async dispatch => {
  try {
    dispatch({ type: FETCH_PENDING_REVIEWS_LOADING_START });
    const res = await axios.get("/api/pending/reviews");
    dispatch({ type: FETCH_PENDING_REVIEWS, payload: res.data });
    dispatch({ type: FETCH_PENDING_REVIEWS_LOADING_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_PENDING_REVIEWS_LOADING_STOP });
    console.log(error.response);
  }
};

export const submitReview = (
  review,
  rating,
  productId,
  orderId,
  history
) => async dispatch => {
  try {
    dispatch({ type: FETCH_SELLER_REVIEWS_START });
    await axios.post(`/api/new/review/${productId}/${orderId}`, {
      title: review.title,
      body: review.body,
      rating
    });
    dispatch({ type: FETCH_SELLER_REVIEWS_STOP });
    history.push("/pending/reviews");
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLER_REVIEWS_STOP });
    console.log(error.response);
  }
};
export const redirectOnFail = (
  productId,
  orderId,
  history
) => async dispatch => {
  try {
    dispatch({ type: REDIRECT_ON_FAIL_START });
    const res = await axios.get(`/api/url/add/review/${productId}/${orderId}`);
    if (!res.data.order) {
      history.push("/pending/reviews");
    }
    dispatch({ type: REDIRECT_ON_FAIL_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: REDIRECT_ON_FAIL_STOP });
    history.push("/pending/reviews");
  }
};

export const fetchProductReviews = productId => async dispatch => {
  try {
    dispatch({ type: FETCH_ORDERS_LOADING_START });
    const res = await axios.get(`/api/product/reviews/${productId}`);
    dispatch({ type: PRODUCT_REVIEWS, payload: res.data });
    dispatch({ type: FETCH_ORDERS_LOADING_STOP });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_LOADING_STOP });
    console.log(error);
    console.log(error.response);
  }
};
export const singleCategory = (category, filter, history) => async (
  dispatch,
  getState
) => {
  try {
    const test = {};
    const sort = {};
    if (filter.rating) {
      test.rating = { $gte: 4 };
    }
    if (filter.freeShipping) {
      test.freeShipping = true;
    }

    if (filter.priceMin) {
      test.price = { $gte: filter.priceMin };
    }
    if (filter.priceMax) {
      test.price = { ...test.price, $lte: filter.priceMax };
    }
    if (filter.priceMin > filter.priceMax) {
      test.price = { $gte: filter.priceMax, $lte: filter.priceMin };
    }
    if (filter.price === "highestPrice") {
      sort.price = -1;
    }
    if (filter.price === "lowestPrice") {
      sort.price = 1;
    }
    test.category = category;
    if (Object.keys(sort).length === 0) {
      sort.price = 1;
    }
    dispatch({ type: SINGLE_CATEGORY_START });
    const res = await axios.post(`/api/products/skip/category`, {
      itemsToSkip: 0,
      test,
      sort
    });
    dispatch({ type: SINGLE_CATEGORY, payload: res.data });
    dispatch({ type: SINGLE_CATEGORY_STOP });
    // history.push(`/products/category/${category}`);
  } catch (error) {
    dispatch({ type: SINGLE_CATEGORY_STOP });
    console.log(error.response);
    history.push("/categories");
  }
};
export const moreSingleCategoryProducts = (category, filter) => async (
  dispatch,
  getState
) => {
  try {
    const test = {};
    const sort = {};
    if (filter.rating) {
      test.rating = { $gte: 4 };
    }
    if (filter.freeShipping) {
      test.freeShipping = true;
    }
    if (filter.priceMin) {
      test.price = { $gte: filter.priceMin };
    }
    if (filter.priceMax) {
      test.price = { ...test.price, $lte: filter.priceMax };
    }
    if (filter.priceMin > filter.priceMax) {
      test.price = { $gte: filter.priceMax, $lte: filter.priceMin };
    }

    if (filter.price === "highestPrice") {
      sort.price = -1;
    }
    if (filter.price === "lowestPrice") {
      sort.price = 1;
    }
    test.category = category;
    if (Object.keys(sort).length === 0) {
      sort.price = 1;
    }
    // const itemsToSkip = getState().product.itemsToSkip;
    const prodCount = getState().product.categoryProductCount;
    const singleProdLength = getState().product.singleCategoryProducts.length;
    if (singleProdLength < prodCount) {
      dispatch({ type: FILTERED_PRODUCTS_START });
      const res = await axios.post(`/api/products/skip/category`, {
        itemsToSkip: singleProdLength,
        test,
        sort
      });
      dispatch({ type: MORE_SINGLE_CATEGORY_PRODUCTS, payload: res.data });
    }
    dispatch({ type: FILTERED_PRODUCTS_STOP });
  } catch (error) {
    dispatch({ type: FILTERED_PRODUCTS_STOP });
    console.log(error);
    console.log(error.response);
  }
};
// export const fetchFilteredProducts = (filter, category) => async dispatch => {
//   try {
//     dispatch({ type: FILTERED_PRODUCTS_START });
//     const test = {};

//     if (filter.rating) {
//       test.rating = { $gte: 4 };
//     }
//     if (filter.freeShipping) {
//       test.freeShipping = true;
//     }
//     test.category = category;

//     const res = await axios.post(`/api/products/filter`, { test });
//     console.log(res.data);
//     // dispatch({ type: FILTERED_PRODUCTS, payload: res.data });
//     dispatch({ type: FILTERED_PRODUCTS_STOP });
//   } catch (error) {
//     dispatch({ type: FILTERED_PRODUCTS_STOP });
//     console.log(error.response);
//   }
// };

export const handleCheckboxAction = (event, category, history) => (
  dispatch,
  getState
) => {
  dispatch({ type: HANDLE_CHECKBOX, payload: { event } });
  const filter = getState().filter;

  getState().product.singleCategoryProducts = [];
  getState().product.itemsToSkip = 0;
  dispatch(singleCategory(category, filter, history));
};
export const handleChangeAction = event => (dispatch, getState) => {
  // getState().product.itemsToSkip = 0;
  // getState().product.singleCategoryProducts = [];
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      event
    }
  });
};

export const revertFilter = (category, filter, history) => (
  dispatch,
  getState
) => {
  dispatch({
    type: REVERT_FILTER
  });
  dispatch(singleCategory(category, getState().filter, history));
};
export const handleRadioButtonAction = (category, event, history) => (
  dispatch,
  getState
) => {
  getState().product.singleCategoryProducts = [];
  getState().product.itemsToSkip = 0;

  dispatch({
    type: RADIO_BUTTON,
    payload: {
      event
    }
  });
  dispatch(singleCategory(category, getState().filter, history));
};

export const fetchSellerReviews = () => async dispatch => {
  try {
    dispatch({ type: FETCH_SELLER_REVIEWS_START });
    const res = await axios.get(`/api/seller/reviews`);
    dispatch({ type: FETCH_SELLER_REVIEWS, payload: res.data });
    dispatch({ type: FETCH_SELLER_REVIEWS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLER_REVIEWS_STOP });
    console.log(error.response);
  }
};

export const storeDescription = description => {
  return {
    type: STORE_DESCRIPTION,
    payload: description
  };
};

export const deleteImage = (imageUrl, productId) => async dispatch => {
  try {
    dispatch({ type: DELETE_IMAGE_START });
    await axios.post(`/api/images/delete/${productId}`, {
      imageUrl
    });
    await dispatch(fetchSellerProducts());
    dispatch({ type: DELETE_IMAGE, payload: imageUrl });
    dispatch({ type: DELETE_IMAGE_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: DELETE_IMAGE_STOP });
    console.log(error.response.data);
  }
};

export const paymentPerDistance = details => async dispatch => {
  try {
    dispatch({ type: PAYMENT_DISTANCE_START });
    const res = await axios.post(`/api/buyer/destination`, details);

    dispatch({ type: PAYMENT_DISTANCE, payload: res.data });
    dispatch({ type: PAYMENT_DISTANCE_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: PAYMENT_DISTANCE_STOP });
    console.log(error.response);
  }
};
// PROTECT THIS ROUTE LATER
export const getStock = () => async dispatch => {
  try {
    dispatch({ type: GET_STOCK_START });
    const res = await axios.get("/api/root/admin/stock/report");
    dispatch({ type: GET_STOCK, payload: res.data });
    dispatch({ type: GET_STOCK_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: GET_STOCK_STOP });
    console.log(error.response);
  }
};

export const fetchVerifiedSellers = () => async dispatch => {
  try {
    dispatch({ type: FETCH_SELLERS_START });
    const res = await axios.get("/api/verified/sellers");
    dispatch({
      type: FETCH_VERIFIED_SELLERS,
      payload: res.data.verifiedSellers
    });
    dispatch({ type: FETCH_SELLERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLERS_STOP });
    console.log(error.response);
  }
};

export const fetchVerifiedSeller = (sellerId, history) => async dispatch => {
  try {
    dispatch({ type: FETCH_SELLERS_START });
    const res = await axios.get(`/api/verified/seller/${sellerId}`);
    dispatch({ type: FETCH_VERIFIED_SELLER, payload: res.data });
    dispatch({ type: FETCH_SELLERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLERS_STOP });
    history.push("/");
  }
};

export const fetchNewSellers = () => async dispatch => {
  try {
    dispatch({ type: FETCH_SELLERS_START });
    const res = await axios.get("/api/new/sellers");
    dispatch({ type: FETCH_NEW_SELLERS, payload: res.data });
    dispatch({ type: FETCH_SELLERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_SELLERS_STOP });
    console.log(error.response);
  }
};
export const fetchNewSeller = (sellerId, history) => async dispatch => {
  try {
    dispatch({ type: FETCH_NEW_SELLERS_START });
    const res = await axios.get(`/api/new/seller/${sellerId}`);
    dispatch({ type: FETCH_NEW_SELLER, payload: res.data });
    dispatch({ type: FETCH_NEW_SELLERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    history.push("/");
    dispatch({ type: FETCH_NEW_SELLERS_STOP });
    console.log(error.response);
  }
};

export const fetchAdminOrders = () => async dispatch => {
  try {
    dispatch({ type: FETCH_ADMIN_ORDERS_START });
    const res = await axios.get("/api/root/admin/orders");
    dispatch({ type: FETCH_ADMIN_ORDERS, payload: res.data });
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
  }
};

export const fetchAdminPendingOrders = () => async dispatch => {
  try {
    dispatch({ type: FETCH_ADMIN_ORDERS_START });
    const res = await axios.get("/api/root/admin/pending/orders");
    dispatch({ type: FETCH_ADMIN_PENDING_ORDERS, payload: res.data });
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
    console.log(error.response);
  }
};

export const fetchAllOrders = filter => async dispatch => {
  try {
    let test = {};
    if (!filter) {
      test = null;
    }

    if (filter && filter === "today") {
      test = Date.now() / 1000 - 60 * 60 * 24;
    }
    if (filter && filter === "lastWeek") {
      test = Date.now() / 1000 - 60 * 60 * 24 * 7;
    }
    if (filter && filter === "lastMonth") {
      test = Date.now() / 1000 - 60 * 60 * 24 * 30;
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_START });
    const res = await axios.post("/api/root/admin/all/orders", {
      itemsToSkip: 0,
      test
    });
    dispatch({ type: FETCH_ALL_ORDERS, payload: res.data });
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
    console.log(error.response);
  }
};

export const adminRadio = event => (dispatch, getState) => {
  getState().product.ordersToSkip = 0;
  getState().product.orderCount = 0;
  dispatch({
    type: ADMIN_RADIO,
    payload: {
      event
    }
  });
};

export const fetchMoreAllOrders = filter => async (dispatch, getState) => {
  try {
    let test = {};
    if (!filter) {
      test = {};
    }

    if (filter && filter === "today") {
      test = Date.now() / 1000 - 60 * 60 * 24;
    }
    if (filter && filter === "lastWeek") {
      test = Date.now() / 1000 - 60 * 60 * 24 * 7;
    }
    if (filter && filter === "lastMonth") {
      test = Date.now() / 1000 - 60 * 60 * 24 * 30;
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_START });
    const prodCount = getState().product.orderCount;
    const singleProdLength = getState().product.allAdminOrders.length;
    if (singleProdLength < prodCount) {
      const res = await axios.post("/api/root/admin/all/orders", {
        itemsToSkip: singleProdLength,
        test
      });
      dispatch({ type: FETCH_MORE_ALL_ORDERS, payload: res.data });
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
    console.log(error.response);
  }
};

export const hasMoreOrdersFalse = () => {
  return {
    type: HAS_MORE_ORDERS_FALSE
  };
};

export const fetchAdminOrder = (orderId, history) => async dispatch => {
  try {
    dispatch({ type: FETCH_ADMIN_ORDERS_START });
    const res = await axios.get(`/api/root/admin/order/${orderId}`);
    dispatch({ type: FETCH_ADMIN_ORDER, payload: res.data });
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.stringValue
    ) {
      history.push("/");
    }
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
    console.log(error.response);
  }
};

export const fetchOrderById = orderId => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_ADMIN_ORDERS_START });
    const res = await axios.get(`/api/root/admin/order/${orderId}`);
    dispatch({ type: FETCH_ORDER_BY_ID, payload: res.data });
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  } catch (error) {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.buyer
    ) {
      return (window.location.href = "/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.seller
    ) {
      return (window.location.href = "/seller/sign-in");
    }
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.stringValue
    ) {
      getState.product.orderError = "No Order with that ID";
    }
    console.log(error.response);
    dispatch({ type: FETCH_ADMIN_ORDERS_STOP });
  }
};
