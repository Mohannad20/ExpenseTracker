import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    { id: 1, date: '2024-03-15', description: 'Grocery Shopping', amount: 150.00, category: 'Food' },
    { id: 2, date: '2024-03-1', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
    { id: 3, date: '2024-03-12', description: 'Gas Bill', amount: 43.00, category: 'Utilities' },
    { id: 4, date: '2024-03-14', description: 'Gas Bill', amount: 42.00, category: 'Utilities' },
    { id: 5, date: '2024-03-18', description: 'Gas Bill', amount: 141.00, category: 'Atilities' },
  ],
  sortOrder: { date: 'desc', category: 'asc', amount: 'desc' },
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    deleteTransaction: (state, action) => {
        console.log('delete', action.payload);
        console.log('delete', state.transactions);
        state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        console.log('delete', state.transactions);
    },
    setTransactions : (state, action) => {
        state.transactions = action.payload;
    },
    addTransaction : (state, action) => {
        const maxId = state.transactions.reduce((max, transaction) => (transaction.id > max ? transaction.id : max), 0);
        state.transactions.push({ id: maxId + 1, ...action.payload});
    },
    editTransaction : (state, action) => {
        state.transactions = state.transactions.map(transaction => transaction.id === action.payload.id ? action.payload : transaction);
    },
    sortByDate: (state) => {
        state.transactions.sort((a, b) => {
            return state.sortOrder.date === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        });
        state.sortOrder.date = state.sortOrder.date === 'asc' ? 'desc' : 'asc';

    },
    sortByCategory : (state) => {
        state.transactions.sort((a, b) => {
            return state.sortOrder.category === 'desc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
        });
        state.sortOrder.category = state.sortOrder.category === 'asc' ? 'desc' : 'asc';
    },
    sortByAmount : (state) => {
        state.transactions.sort((a, b) => {
            return state.sortOrder.amount === 'asc' ? a.amount - b.amount : b.amount - a.amount;
        });
        state.sortOrder.amount = state.sortOrder.amount === 'asc' ? 'desc' : 'asc';

  },
}});

export const { deleteTransaction, setTransactions, addTransaction, editTransaction, sortByDate, sortByCategory, sortByAmount } = transactionSlice.actions;
export default transactionSlice.reducer;