// Budget.jsx
import React, { useState } from 'react'
import { DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../components/ui/select'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    type: 'expense',
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add transaction handling logic
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center '>Add Transaction</DialogTitle>
      </DialogHeader>
    <form onSubmit={handleSubmit} className=" mx-auto p-4 rounded shadow">
      {/* <h3 className="text-xl mb-4">Add Transaction</h3> */}
      <div className="space-y-4">
        <div>
          {/* <select 
            value={transaction.type}
            onChange={(e) => setTransaction({...transaction, type: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select> */}
          <Label>Transaction</Label>
          <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="select a transaction" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type of transaction</SelectLabel>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
        </div>
        <div>
          <Label>Amount</Label>
          <Input 
          type="number"
          placeholder="Amount"
          value={transaction.amount}
          onChange={(e) => setTransaction({...transaction, amount: e.target.value})}
          className="w-full p-2 border rounded"/>
        </div>
        <div>
        <Label>Category</Label>

          <Input 
          type="text"
          placeholder="Category"
          value={transaction.category}
          onChange={(e) => setTransaction({...transaction, category: e.target.value})}
          className="w-full p-2 border rounded"
          />
        </div>
        <div>
        <Label>Description</Label>
          <Input
            type="text"
            placeholder="Description"
            value={transaction.description}
            onChange={(e) => setTransaction({...transaction, description: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
        <Label>Date</Label>

          <Input
            type="date"
            value={transaction.date}
            onChange={(e) => setTransaction({...transaction, date: e.target.value})}
            className="p-2 border w-full rounded flex flex-col"
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </Button>
      </div>
    </form>
    </DialogContent>

  )
}

export default AddTransaction;