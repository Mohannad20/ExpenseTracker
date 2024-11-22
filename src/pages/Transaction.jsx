import React, { useState } from 'react'
import { Search, ArrowUpDown, Pencil, Trash2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog'
import AddTransaction from './AddTransaction'

const Transaction = () => {
  const [transactions] = useState([
    { id: 1, date: '2024-03-15', description: 'Grocery Shopping', amount: 150.00, category: 'Food' },
    { id: 2, date: '2024-03-14', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
    { id: 2, date: '2024-03-14', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
    { id: 2, date: '2024-03-14', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
    { id: 2, date: '2024-03-14', description: 'Gas Bill', amount: 45.00, category: 'Utilities' },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  return (
    <div className='min-h-screen p-6'>
      <h1 className='text-2xl text-center font-bold mb-8'>Transactions</h1>
      
      {/* Search and Filter */}
      <div className='flex flex-wrap gap-4 mb-6 p-6'>
        <div className='flex items-center bg-white rounded-lg px-3 py-2 shadow'>
          <Search className='text-gray-400 w-4 h-4' />
          <input
            type='text'
            placeholder='Search transactions...'
            className='ml-2 outline-none bg-white text-black'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className='rounded-lg px-3 py-2 pr-2 bg-white text-black shadow'
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="food">Food</option>
          <option value="utilities">Utilities</option>
          <option value="transport">Transport</option>
        </select>
      </div>

      {/* Transactions Table */}
      <div className='mx-6 rounded-lg    shadow overflow-x-auto p-'>
        <table className='w-full 6'>
          <thead className='bg-accent'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Date <ArrowUpDown className='inline ml-1 cursor-pointer w-4 h-4' />
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Description
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Category <ArrowUpDown className='inline ml-1 cursor-pointer w-4 h-4' />
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Amount <ArrowUpDown className='inline ml-1 cursor-pointer w-4 h-4' />
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
                <td className='px-6 py-4'>${transaction.amount.toFixed(2)}</td>
                <td className='px-6 py-4'>
                  <button className='text-blue-600 hover:text-blue-800 mr-3'>
                    <Pencil className='w-4 h-4' />
                  </button>
                  <button className='text-red-600 hover:text-red-800'>
                    <Trash2 className='w-4 h-4' />
                  </button>
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
              <AddTransaction/>
            </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Transaction