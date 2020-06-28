import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  product: productReducer
});
