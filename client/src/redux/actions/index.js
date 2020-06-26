import { LOG_IN } from "./types";

export const logIn = credentials => {
  return {
    type: LOG_IN,
    payload: credentials
  };
};
