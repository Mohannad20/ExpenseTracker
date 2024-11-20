import React from "react";
import { Button } from "../components/ui/button";
import { NavLink } from "react-router-dom";
import { BadgeDollarSign, Currency, Eye, HomeIcon, PlusCircleIcon, Receipt } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <h1 className="text-2xl font-bold text-center my-6">Welcome Back!</h1>
      <div className="flex flex-row justify-center">
        <div className="w-1/5 mr-20 border px-5 py-3 pt-6 pb-20 border-1 rounded-sm">
          <NavLink className='flex justify-between my-2 rounded cursor-pointer px-2 py-1  hover:bg-accent'>
            <span className="text-base flex gap-3"><HomeIcon/> Home</span>
          </NavLink>
          <NavLink className='flex justify-between my-2 rounded cursor-pointer px-2 py-1  hover:bg-accent'>
            <span className="text-base flex gap-3"><BadgeDollarSign/> Transactions</span>
          </NavLink>
          <NavLink className='flex justify-between my-2 rounded cursor-pointer px-2 py-1  hover:bg-accent'>
            <span className="text-base flex gap-3"><PlusCircleIcon/> Add Transactions</span>
          </NavLink>
          <NavLink className='flex justify-between my-2 rounded cursor-pointer px-2 py-1  hover:bg-accent'>
            <span className="text-base flex gap-3"><Currency/>Budget</span>
          </NavLink>
          <NavLink className='flex justify-between my-2 rounded cursor-pointer px-2 py-1  hover:bg-accent'>
            <span className="text-base flex gap-3"><Receipt/> Set Income</span>
          </NavLink>
          <NavLink className='flex justify-between my-2 rounded cursor-pointer px-2 py-1  hover:bg-accent'>
            <span className="text-base flex gap-3"><Eye/>View Reports</span>
          </NavLink>
          
        </div>

        <div className="w-1/2 mr-20 border px-5 py-3 border-1 rounded-sm">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-accent rounded">
              <h2 className="text-xl font-semibold">Total Balance</h2>
              <p className="text-2xl">$5,200.00</p>
            </div>
            <div className="p-4 bg-accent rounded">
              <h2 className="text-xl font-semibold">Budget Used</h2>
              <p className="text-2xl">75%</p>
            </div>
            <div className="p-4 bg-accent rounded">
              <h2 className="text-xl font-semibold">Top Spending</h2>
              <p className="text-2xl">Food - $800</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
            <ul>
              <li className="flex justify-between p-4 border-b">
                <span>Groceries</span>
                <span>- $50.00</span>
              </li>
              <li className="flex justify-between p-4 border-b">
                <span>Rent</span>
                <span>- $1,200.00</span>
              </li>
              <li className="flex justify-between p-4 border-b">
                <span>Netflix Subscription</span>
                <span>- $15.00</span>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            <Button className="border-muted bg-ring ">Add Expense</Button>
            <Button variant="secondary" className="border border-foreground">
              Add Income
            </Button>
            <Button className="bg-chart-4 border border-ring ">
              Set Budget
            </Button>
            <Button
              variant=""
              className="bg-chart-2 border border-foreground "
            >
              View Reports
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
