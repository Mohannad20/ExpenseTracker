import { createSlice } from "@reduxjs/toolkit";


const TransactionReducer = createSlice({
    name : 'transactions',
    initialState : [],
    reducers: {
        setTransactions : (state, action) =>  action.payload,
        addTransaction : (state, action) => {
            state.push(action.payload);
        },
        deleteTransaction : (state, action) => {
            return state.filter(transaction => transaction.id !== action.payload);
        }
    }
})


export default TransactionReducer.reducer;