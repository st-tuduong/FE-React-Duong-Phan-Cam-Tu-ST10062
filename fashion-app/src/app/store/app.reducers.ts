import { combineReducers } from "redux";
import homeReducer from "../pages/home/home.reducers";

const appReducer = combineReducers({
  products: homeReducer
})

export default appReducer;