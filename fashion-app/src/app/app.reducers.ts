import { combineReducers } from "redux";
import cartReducer from "../app/pages/cart/cart.reducers";
import { homeReducer } from "./pages/home/home.reducers";

const appReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer
});

export default appReducer;
