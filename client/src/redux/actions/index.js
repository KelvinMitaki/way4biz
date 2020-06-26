import axios from "axios";

import { LOG_IN, LOG_IN_FAILED } from "./types";

export const logIn = credentials => async dispatch => {
  try {
    const res = await axios.post("/api/login", credentials);
    console.log(res.data);
    dispatch({
      type: LOG_IN,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: LOG_IN_FAILED });
  }
};
