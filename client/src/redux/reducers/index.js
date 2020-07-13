import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";
import sellerRegisterReducer from "./sellerRegisterReducer";
import cartReducer from "./cartReducer";
import OrderDetailsPersist from "./OrderDetailsPersist";
import filterReducer from "./filterReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer", "detailsPersist"]
};

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  product: productReducer,
  sellerRegister: sellerRegisterReducer,
  cartReducer: cartReducer,
  detailsPersist: OrderDetailsPersist,
  filter: filterReducer
});
export default persistReducer(persistConfig, reducers);
