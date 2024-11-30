import React from "react";
import { Button } from "../components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import Login  from "./Login";

const data = [
  { name: "Jan", spending: 400, income: 300 },
  { name: "Feb", spending: 300, income: 400 },
  { name: "Mar", spending: 200, income: 350 },
  { name: "Apr", spending: 278, income: 550 },
  { name: "May", spending: 189, income: 230 },
  { name: "Jun", spending: 239, income: 30 },
  { name: "Jul", spending: 349, income: 100 },
  { name: "Aug", spending: 200, income: 300 },
  { name: "Sep", spending: 300, income: 700 },
  { name: "Oct", spending: 400, income: 600 },
  { name: "Nov", spending: 500, income: 670 },
  { name: "Dec", spending: 600, income: 500 },
];

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 300 },
  { name: "Entertainment", value: 300 },
  { name: "Utilities", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Home = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const user = useSelector((state) => state.auth.user);
  return (
    isLogged ? (
      <div className="min-h-screen p-6">

    

      <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center my-6">Welcome {user.displayName}</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 p-6">
      <div className="p-4 bg-primary text-background rounded">
      <h2 className="text-xl font-semibold">Total Balance</h2>
      <p className="text-2xl">$5,200.00</p>
      </div>
      <div className="p-4 bg-accent rounded">
      <h2 className="text-xl font-semibold">Budget Used</h2>
      <p className="text-2xl">75%</p>
      </div>
      <div className="p-4 bg-chart-2 rounded">
      <h2 className="text-xl font-semibold">Top Spending</h2>
      <p className="text-2xl">Food - $800</p>
      </div>
      <div className="p-4 bg-chart-1 rounded">
      <h2 className="text-xl font-semibold">Total Income</h2>
      <p className="text-2xl">$5000</p>
      </div>
      <div className="p-4 bg-destructive rounded text-destructive-foreground">
          <h2 className="text-xl font-semibold">Total Expenses</h2>
          <p className="text-2xl">$500</p>
          </div>
          </div>
          
          <div className="bg-accent rounded p-6 mx-6 mt-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Budget Progress</h2>
        <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{ borderRadius: '8px' }} />
              <Legend />
              <Bar dataKey="spending" fill="#8884d8" />
              <Bar dataKey="income" fill="#82ca9d" />
              </BarChart>
              </ResponsiveContainer>
              </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Data Visualization */}
              <div className="grid grid-rows-2 gap-4">
              <div className="p-4 bg-accent rounded">
              <h2 className="text-xl font-semibold mb-4 text-center">Spending Trends</h2>
            <div className="flex justify-center items-center">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="income" stroke="#8884d4" />
                  <Line type="monotone" dataKey="spending" stroke="#82ca4d" />
                  <CartesianGrid stroke="#82aa9d" strokeWidth={0.3} />
                  <XAxis dataKey="name" stroke="#82aa9d" />
                  <YAxis stroke="#82aa9d" />
                  <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{ borderRadius: '8px' }} />
                  <Legend />
                  </LineChart>
                  </ResponsiveContainer>
            </div>
            </div>
            <div className="p-4 bg-accent rounded">
            <h2 className="text-xl font-semibold mb-4 text-center">Category Breakdown</h2>
            <div className="flex justify-center items-center">
            <ResponsiveContainer width="100%" height={400}>
            <PieChart>
            <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius="80%"
                    innerRadius="50%"
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{ borderRadius: '8px' }} />
                  </PieChart>
                  </ResponsiveContainer>
                  </div>
                  </div>
                  </div>
                  
                  <div className="flex flex-col border rounded-lg p-6">
                  {/* Recent Transactions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
            <ul>
            <li className="flex text-destructive justify-between p-4 border-b">
            <span className="w-1/3 text-left">Groceries</span>
            <span className="w-1/3 text-center">10/07/2024</span>
            <span className="w-1/3 text-right">- $50.00</span>
            </li>
            <li className="flex text-destructive justify-between p-4 border-b">
            <span className="w-1/3 text-left">Rent</span>
            <span className="w-1/3 text-center">10/07/2024</span>
            <span className="w-1/3 text-right">- $1,200.00</span>
            </li>
            <li className="flex text-destructive justify-between p-4 border-b">
            <span className="w-1/3 text-left">Netflix Subscription</span>
            <span className="w-1/3 text-center">10/07/2024</span>
            <span className="w-1/3 text-right">- $15.00</span>
            </li>
            <li className="flex text-destructive justify-between p-4 border-b">
            <span className="w-1/3 text-left">Clothes</span>
            <span className="w-1/3 text-center">10/07/2024</span>
            <span className="w-1/3 text-right">- $540.00</span>
            </li>
            <li className="flex text-destructive justify-between p-4 border-b">
                <span className="w-1/3 text-left">Electricity</span>
                <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">- $200.00</span>
                </li>
                <li className="flex text-destructive justify-between p-4 border-b">
                <span className="w-1/3 text-left">Club Subscription</span>
                <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">- $150.00</span>
                </li>
                <li className="flex text-chart-2 justify-between p-4 border-b">
                <span className="w-1/3 text-left">Salary</span>
                <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">+ $15000.00</span>
                </li>
                <li className="flex text-chart-2 justify-between p-4 border-b">
                <span className="w-1/3 text-left">Freelance</span>
                <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">+ $1500.00</span>
                </li>
                </ul>
                <h2 className="text-2xl font-bold mt-8 mb-4">Upcoming/Recurring Expenses</h2>
                <ul>
                <li className="flex text-chart-3 justify-between p-4 border-b">
                <span className="w-1/3 text-left">Rent</span>
                <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">- $2000.00</span>
                </li>
                <li className="flex text-chart-3 justify-between p-4 border-b">
                <span className="w-1/3 text-left">Fitness club</span>
                <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">- $500.00</span>
              </li>
              <li className="flex text-chart-3 justify-between p-4 border-b">
              <span className="w-1/3 text-left">Netflix Subscription</span>
              <span className="w-1/3 text-center">10/07/2024</span>
                <span className="w-1/3 text-right">- $20.00</span>
              </li>
              </ul>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button className="border-muted bg-ring">Add Expense</Button>
            <Button variant="secondary" className="border border-foreground">
            Add Income
            </Button>
            <Button className="bg-chart-4 border border-ring">Set Budget</Button>
            <Button variant="" className="bg-chart-2 border border-foreground">
            View Reports
            </Button>
            </div>
            </div>
            </div>
            </div>

      </div>
    ) : (
      <Login />
    )
  ) 
};

export default Home;