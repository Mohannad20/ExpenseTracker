import React from "react";
import { Button } from "../components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', spending: 400 },
  { name: 'Feb', spending: 300 },
  { name: 'Mar', spending: 200 },
  { name: 'Apr', spending: 278 },
  { name: 'May', spending: 189 },
  { name: 'Jun', spending: 239 },
  { name: 'Jul', spending: 349 },
  { name: 'Aug', spending: 200 },
  { name: 'Sep', spending: 300 },
  { name: 'Oct', spending: 400 },
  { name: 'Nov', spending: 500 },
  { name: 'Dec', spending: 600 },
];

const pieData = [
  { name: 'Food', value: 400 },
  { name: 'Rent', value: 300 },
  { name: 'Entertainment', value: 300 },
  { name: 'Utilities', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Home = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center my-6">Welcome Back!</h1>
      
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

      {/* Data Visualization */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="p-4 bg-accent rounded">
          <h2 className="text-xl font-semibold mb-4">Spending Trends</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="spending" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="p-4 bg-accent rounded">
          <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
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
        <Button className="border-muted bg-ring">Add Expense</Button>
        <Button variant="secondary" className="border border-foreground">Add Income</Button>
        <Button className="bg-chart-4 border border-ring">Set Budget</Button>
        <Button variant="" className="bg-chart-2 border border-foreground">View Reports</Button>
      </div>
    </div>
  );
};

export default Home;