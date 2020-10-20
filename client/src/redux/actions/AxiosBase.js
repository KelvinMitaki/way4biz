import Axios from "axios";
export const axios = Axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : "https://www.way4biz.com"
});
