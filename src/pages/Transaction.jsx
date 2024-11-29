import React, { useState } from "react";
import { Search, ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import AddTransaction from "./AddTransaction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  deleteTransaction,
  sortByAmount,
  sortByCategory,
  sortByDate,
} from "../redux/TransactionReducer";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";

const Transaction = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions); // Adjust the state path as needed
  console.log(transactions);

  const filteredTransactions = transactions.filter((transaction) => {
    const searchLower = searchTerm.toLowerCase();
    const matchedSearch =
      transaction.description?.toLowerCase().includes(searchLower) ||
      transaction.category?.toLowerCase().includes(searchLower) ||
      transaction.amount?.toString().includes(searchTerm);
    const matchedCategory = filterCategory === "all" || transaction.category === filterCategory;
    return matchedSearch && matchedCategory;
  });

  const handleCategoryChange = (value) => {
    setFilterCategory(value);
  }
  const isLogged = useSelector((state) => state.auth.isLogged);

return (
  isLogged ? (

    <div className="min-h-screen p-6">
      <h1 className="text-2xl text-center font-bold mb-8">Transactions</h1>

      {/* Search and Filter */}
      <div className="flex flex-row gap-4 mb-6 p-6">
        <div className="flex items-center bg-accent rounded-lg px-3 py-2 shadow w-full sm:w-auto">
          <Search className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="ml-2 outline-none bg-accent text-primary w-full sm:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <Select onValueChange={handleCategoryChange} >
          <SelectTrigger className="w-[260px] py-4">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="food">Food</SelectItem>
            <SelectItem value="utilities">Utilities</SelectItem>
            <SelectItem value="transport">Transport</SelectItem> */}
            <SelectItem value="all">All</SelectItem>
            {transactions.map((transaction) => (
              <SelectItem key={transaction.id} value={transaction.category}>
                {transaction.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Transactions Table */}
      <div className="mx-6 rounded-lg shadow overflow-x-auto p-">
        <table className="w-full">
          <thead className="bg-primary-foreground">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                Date{" "}
                <ArrowUpDown
                  onClick={() => dispatch(sortByDate())}
                  className="inline ml-1 cursor-pointer w-4 h-4"
                  />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                Category{" "}
                <ArrowUpDown
                  onClick={() => dispatch(sortByCategory())}
                  className="inline ml-1 cursor-pointer w-4 h-4"
                  />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                Amount{" "}
                <ArrowUpDown
                  onClick={() => dispatch(sortByAmount())}
                  className="inline ml-1 cursor-pointer w-4 h-4"
                  />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-accent ">
            {filteredTransactions.length>0 ? (
              filteredTransactions.map((transaction) => (
                <tr
                key={transaction.id}
                className="text-primary hover:bg-accent-content"
                >
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.date}
                </td>
                <td className="px-6 py-4">{transaction.description}</td>
                <td className="px-6 py-4">{transaction.category}</td>
                <td className="px-6 py-4">${transaction.amount}</td>
                <td className="px-6 py-4">
                  <Dialog>
                    <DialogTrigger>
                      <Button className="text-blue-600 bg-accent hover:text-blue-800 mr-6">
                        <Pencil className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <AddTransaction transaction={transaction} />
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="text-red-600 bg-accent hover:text-red-800"
                    onClick={() => dispatch(deleteTransaction(transaction.id))}
                    >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="my-6 mx-6">
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Add Transaction</Button>
          </DialogTrigger>
          <DialogContent>
            <AddTransaction />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
 : (
  <Login />
  ));
};

export default Transaction;
