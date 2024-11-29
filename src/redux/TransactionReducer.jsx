import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    { id: 1, date: '2024-03-15', description: 'Grocery Shopping', amount: 150.00, category: 'Food' },
    { id: 2, date: '2024-03-1', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
    { id: 3, date: '2024-03-12', description: 'Gas Bill', amount: 43.00, category: 'Utilities' },
    { id: 4, date: '2024-03-14', description: 'Gas Bill', amount: 42.00, category: 'Utilities' },
    { id: 5, date: '2024-03-18', description: 'Gas Bill', amount: 141.00, category: 'Atilities' },
  ],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
    },
    setTransactions : (_, action) =>  action.payload,
    addTransaction : (state, action) => {
        state.transactions.push(action.payload);
    },
  },
});

export const { deleteTransaction, setTransactions, addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;