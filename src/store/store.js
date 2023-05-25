import { configureStore, combineReducers } from "@reduxjs/toolkit"
import booksReducer from "./redusers/bookSlice"

const rootReducer = combineReducers({
    booksReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;