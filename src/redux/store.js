import { createStore } from "redux";
import progressReducer from "./reducers";

// Create Redux store
const store = createStore(progressReducer);

export default store;
