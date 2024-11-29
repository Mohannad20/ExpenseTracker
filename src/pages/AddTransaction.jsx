// Budget.jsx
import React, { useState } from 'react'
import { DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../components/ui/select'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { addTransaction } from '../redux/TransactionReducer'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const AddTransaction = ({ addTransaction }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    addTransaction(data);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center '>Add Transaction</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4 rounded shadow">
        <div className="space-y-4">
          {/* <div>
            <Label>Transaction</Label>
            <Select {...register('transactionType', { required: true })}>
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
            {errors.transactionType && <span>This field is required</span>}
          </div> */}
          <div>
            <Label>Description</Label>
            <Input
              placeholder="Description"
              {...register('description', { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.description && <span>This field is required</span>}
          </div>
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              {...register('date', { required: true })}
              className="p-2 border w-full rounded flex flex-col"
            />
            {errors.date && <span>This field is required</span>}
          </div>
          <div>
            <Label>Amount</Label>
            <Input
              type="number"
              step="0.01"
              {...register('amount', { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.amount && <span>This field is required</span>}
          </div>
          <div>
            <Label>Category</Label>
            <Input
              placeholder="Category"
              {...register('category', { required: true })}
              className="w-full p-2 border rounded"
            />
            {errors.category && <span>This field is required</span>}
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
  );
};

export default AddTransaction;