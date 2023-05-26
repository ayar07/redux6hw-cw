import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./reducers/bookSlice";
import cartReducer from "./reducers/cartSlice";

const rootReducer = combineReducers({
  booksReducer,
  cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;