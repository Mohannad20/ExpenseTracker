import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import TransactionReducer from "./TransactionReducer";

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        transactions : TransactionReducer,
    }
})

export default store;