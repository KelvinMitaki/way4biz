import axios from "axios";

import { LOG_IN, LOG_IN_FAILED, FETCH_USER } from "./types";

export const logIn = (credentials, history) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/api/login", credentials);
    dispatch({
      type: LOG_IN,
      payload: res.data
    });
    history.push("/");
  } catch (error) {
    getState().form.LoginForm.values.password = "";
    dispatch({ type: LOG_IN_FAILED });
  }
};

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: LOG_IN_FAILED });
  }
};
