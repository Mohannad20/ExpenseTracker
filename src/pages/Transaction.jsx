import React, { useState } from 'react'
import { Search, ArrowUpDown, Pencil, Trash2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog'
import AddTransaction from './AddTransaction'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { deleteTransaction } from '../redux/TransactionReducer'
import { useDispatch } from 'react-redux'

const Transaction = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-03-15', description: 'Grocery Shopping', amount: 150.00, category: 'Food' },
    { id: 2, date: '2024-03-1', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
    { id: 3, date: '2024-03-12', description: 'Gas Bill', amount: 43.00, category: 'Utilities' },
    { id: 4, date: '2024-03-14', description: 'Gas Bill', amount: 42.00, category: 'Utilities' },
    { id: 5, date: '2024-03-18', description: 'Gas Bill', amount: 141.00, category: 'Atilities' },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState({ date: 'desc', category: 'asc', amount: 'desc' });

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]);
  };

  const sortByDate = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      return sortOrder.date === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    });
    setTransactions(sortedTransactions);
    setSortOrder({ ...sortOrder, date: sortOrder.date === 'asc' ? 'desc' : 'asc' });
  };
  const sortbyCategory = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      return sortOrder.category === 'desc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category)
    });

    setTransactions(sortedTransactions);
    setSortOrder({ ...sortOrder, category: sortOrder.category === 'asc' ? 'desc' : 'asc' });

  }
  const sortByAmount = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      return sortOrder.amount === 'asc' ? a.amount - b.amount : b.amount - a.amount
    });
    setTransactions(sortedTransactions);
    setSortOrder({...sortOrder, amount : sortOrder.amount === 'asc' ? 'desc' : 'asc'})
  }

  const dispatch = useDispatch();
  // const transactions = useSelector(state => state.transactions.transactions); // Adjust the state path as needed


  return (
    <div className='min-h-screen p-6'>
      <h1 className='text-2xl text-center font-bold mb-8'>Transactions</h1>
      
      {/* Search and Filter */}
      <div className='flex flex-row gap-4 mb-6 p-6'>
        <div className='flex items-center bg-accent rounded-lg px-3 py-2 shadow w-full sm:w-auto'>
          <Search className='text-gray-400 w-4 h-4' />
          <input
            type='text'
            placeholder='Search transactions...'
            className='ml-2 outline-none bg-accent text-primary w-full sm:w-auto'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select
        >
          <SelectTrigger className='w-[260px] py-4'>
            <SelectValue placeholder='Select category' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='food'>Food</SelectItem>
            <SelectItem value='utilities'>Utilities</SelectItem>
            <SelectItem value='transport'>Transport</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Transactions Table */}
      <div className='mx-6 rounded-lg shadow overflow-x-auto p-'>
        <table className='w-full'>
          <thead className='bg-accent'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Date <ArrowUpDown onClick={() => sortByDate()} className='inline ml-1 cursor-pointer w-4 h-4' />
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Description
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Category <ArrowUpDown onClick={() => sortbyCategory()} className='inline ml-1 cursor-pointer w-4 h-4' />
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Amount <ArrowUpDown onClick={() => sortByAmount()} className='inline ml-1 cursor-pointer w-4 h-4' />
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-accent-foreground '>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className='text-accent'>
                <td className='px-6 py-4 whitespace-nowrap'>{transaction.date}</td>
                <td className='px-6 py-4'>{transaction.description}</td>
                <td className='px-6 py-4'>{transaction.category}</td>
                <td className='px-6 py-4'>${transaction.amount}</td>
                <td className='px-6 py-4'>
                  <Button className='text-blue-600 hover:text-blue-800 mr-6'>
                    <Pencil className='w-4 h-4' />
                  </Button>
                  <Button className='text-red-600 hover:text-red-800' onClick={()=> dispatch(deleteTransaction(transaction.id))}>
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='my-6 mx-6'>
        <Dialog>
            <DialogTrigger>
              <Button variant='outline'>Add Transaction</Button>
            </DialogTrigger>
            <DialogContent>
              <AddTransaction addTransaction={addTransaction} />
            </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Transaction