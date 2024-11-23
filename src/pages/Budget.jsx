import React, { useState } from 'react';
import { 
  Wallet, 
  PlusCircle, 
  AlertCircle,
  ChevronRight,
  DollarSign,
  PieChart
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({
    category: '',
    amount: ''
  });

  const addBudget = (e) => {
    e.preventDefault();
    if (!newBudget.category || !newBudget.amount) return;
    
    setBudgets([...budgets, {
      ...newBudget,
      spent: 10,
      id: Date.now()
    }]);
    setNewBudget({ category: '', amount: '' });
  };

  return (
    <div className='min-h-screen p-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-center gap-2 mb-8'>
          <Wallet className='w-8 h-8 text-blue-500' />
          <h2 className='text-2xl font-bold'>Budget Management</h2>
        </div>

        {/* Add Budget Form */}
        <form onSubmit={addBudget} className='mb-8 bg-background p-4 rounded-lg shadow'>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <Input
                type='text'
                placeholder='Budget Category'
                className='w-full p-2 border rounded'
                value={newBudget.category}
                onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
              />
            </div>
            <div className='flex items-center'>
              <DollarSign className='w-5 h-5 text-gray-400' />
              <Input
                type='number'
                placeholder='Amount'
                className='w-32 p-2 border rounded'
                value={newBudget.amount}
                onChange={(e) => setNewBudget({...newBudget, amount: e.target.value})}
              />
            </div>
            <Button 
              type='submit'
              className='bg-blue-500 flex justify-center items-center text-white rounded hover:bg-blue-600 gap-2'
            >
              <PlusCircle className='w-5 h-5' />
              Add Budget
            </Button>
          </div>
        </form>

        {/* Budget List */}
        <div className='space-y-4'>
          {budgets.map(budget => (
            <div key={budget.id} className='border bg-accent p-4 rounded-lg shadow'>
              <div className='flex items-center justify-between mb-2'>
                <div className='flex items-center gap-2'>
                  <PieChart className='w-5 h-5 text-blue-500' />
                  <span className='font-semibold'>{budget.category}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span>${budget.spent} / ${budget.amount}</span>
                  <ChevronRight className='w-5 h-5 text-gray-400' />
                </div>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div 
                  className='bg-blue-500 h-2 rounded-full'
                  style={{ width: `${(budget.spent / budget.amount) * 100}%` }}
                ></div>
              </div>
              {budget.spent > budget.amount && (
                <div className='flex items-center gap-2 text-red-500 mt-2'>
                  <AlertCircle className='w-4 h-4' />
                  <span className='text-sm'>Budget exceeded</span>
                </div>
              )}
            </div>
          ))}
          {budgets.length === 0 && (
            <div className='text-center text-gray-500 py-8'>
              <Wallet className='w-12 h-12 mx-auto mb-2 text-gray-400' />
              <p>No budgets set. Add your first budget above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Budget;