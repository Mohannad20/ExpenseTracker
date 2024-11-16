import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Button } from '../../components/ui/button'

const BudgetAndExpenseSettings = () => {
  const [newCategory, setNewCategory] = useState('')
  const [budgetLimit, setBudgetLimit] = useState('')
  const [recurring, setRecurring] = useState({
    name: '',
    amount: '',
    frequency: 'monthly'
  })
  

  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Edit Budget And Expense Settings</h1>
      <div className="flex">
        <div className="w-1/2 border-r-2">
          {/* Default Categories Section */}
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm font-semibold mb-2">Default Categories</span>
            <div>
              <Select>
                <SelectTrigger className='w-[345px]'>
                  <SelectValue placeholder='Select category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Category</SelectLabel>
                    <SelectItem value='food'>Food</SelectItem>
                    <SelectItem value='shopping'>Shopping</SelectItem>
                    <SelectItem value='travel'>Travel</SelectItem>
                    <SelectItem value='utilities'>Utilities</SelectItem>
                    <SelectItem value='entertainment'>Entertainment</SelectItem>
                    {/* <SelectItem value=''>{newCategory}</SelectItem> */}

                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add new category"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Add Category
              </Button>
            </div>
          </div>
          
          {/* Budget Limits Section */}
          <div className="flex flex-col ml-4 my-6">
            <span className="text-sm font-semibold mb-2">Budget Limits</span>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Monthly Budget Limit</label>
                <input
                  type="number"
                  value={budgetLimit}
                  onChange={(e) => setBudgetLimit(e.target.value)}
                  placeholder="Enter amount"
                  className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
                />
              </div>
              <Button 
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Save Limit
              </Button>
            </div>
          </div>

        </div>
        <div className='w-1/2'>

          {/* Recurring Expenses Section */}
        
          <div className="flex flex-col ml-8 my-6">
            <span className="text-sm font-semibold mb-2">Recurring Expenses</span>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={recurring.name}
                  onChange={(e) => setRecurring({...recurring, name: e.target.value})}
                  placeholder="Expense name"
                  className="w-[200px] size-8 px-3 py-2 mb-2 mr-2 rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
                />
                <input
                  type="number"
                  value={recurring.amount}
                  onChange={(e) => setRecurring({...recurring, amount: e.target.value})}
                  placeholder="Amount"
                  className="w-[200px] size-8 px-3 py-2 mb-2 rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
                />
                <Select value={recurring.frequency} onValueChange={(value) => setRecurring({...recurring, frequency: value})}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Frequency</SelectLabel>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Add Recurring Expense
              </Button>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default BudgetAndExpenseSettings