import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import TransactionReducer from "./TransactionReducer";
import ProfileReducer from './ProfileReducer'

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        transactions : TransactionReducer,
        profile : ProfileReducer,
    }
})

export default store;