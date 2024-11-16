import React from "react";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen px-8 py-6">
      <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
      
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
        <Button className='border-muted bg-ring '>Add Expense</Button>
        <Button variant='secondary' className='border border-foreground'>Add Income</Button>
        <Button className='bg-chart-5 border border-ring text-primary'>Set Budget</Button>
        <Button variant='' className='bg-chart-2 border border-foreground text-primary'>View Reports</Button>
      </div>
    </div>
  );
};

export default Home;
