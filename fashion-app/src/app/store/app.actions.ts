import { createStore } from "redux";
import appReducer from "./app.reducers";

const store = createStore(appReducer);

export default store;
