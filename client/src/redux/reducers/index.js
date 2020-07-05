import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";
import sellerRegisterReducer from "./sellerRegisterReducer";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"]
};

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  product: productReducer,
  sellerRegister: sellerRegisterReducer,
  cartReducer: cartReducer
});
export default persistReducer(persistConfig, reducers);
