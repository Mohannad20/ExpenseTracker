import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const DataSegmentation = () => {
  // Sample data - replace with your actual data
  const accountData = [
    { name: 'Savings', value: 4000 },
    { name: 'Checking', value: 3000 },
    { name: 'Investment', value: 2000 }
  ];

  const recurringData = [
    { name: 'Jan', amount: 400 },
    { name: 'Feb', amount: 450 },
    { name: 'Mar', amount: 400 },
    { name: 'Apr', amount: 450 },
    { name: 'May', amount: 400 }
  ];

  const expensesData = [
    { name: 'Rent', amount: 1200 },
    { name: 'Utilities', amount: 300 },
    { name: 'Groceries', amount: 500 },
    { name: 'Transport', amount: 200 },
    { name: 'Entertainment', amount: 150 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Data Segmentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Account Overview */}
          <div className="p-6 border rounded-lg bg-accent shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Account Overview</h3>
            <div className="flex justify-center">
              <PieChart width={300} height={300}>
                <Pie
                  data={accountData}
                  cx={150}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {accountData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend />
              </PieChart>
            </div>
          </div>

          {/* Recurring Patterns */}
          <div className="p-6 border rounded-lg bg-accent shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Recurring Patterns</h3>
            <div className="flex justify-center">
              <LineChart width={300} height={300} data={recurringData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </div>
          </div>

          {/* Biggest Expenses */}
          <div className="p-6 border rounded-lg bg-accent shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Biggest Expenses</h3>
            <div className="flex justify-center">
              <BarChart width={300} height={300} data={expensesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Bar dataKey="amount" fill="#8884d8">
                  {expensesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>

        {/* Additional Insights Section */}
        <div className="mt-8 p-6 border rounded-lg bg-accent shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Total Balance</h4>
              <p className="text-2xl font-bold text-primary">$9,000</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Monthly Recurring</h4>
              <p className="text-2xl font-bold text-primary">$2,350</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Largest Expense</h4>
              <p className="text-2xl font-bold text-primary">$1,200</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSegmentation;