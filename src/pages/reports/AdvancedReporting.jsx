import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Calendar, Download, Filter, Settings 
} from 'react-feather';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Button } from '../../components/ui/button';

const AdvancedReporting = () => {
  const [dateRange, setDateRange] = useState('monthly');
  
  const sampleData = [
    { month: 'Jan', income: 4000, expenses: 2400, profit: 1600 },
    { month: 'Feb', income: 3000, expenses: 1398, profit: 1602 },
    { month: 'Mar', income: 2000, expenses: 9800, profit: -7800 },
    { month: 'Apr', income: 2780, expenses: 3908, profit: -1128 },
    { month: 'May', income: 1890, expenses: 4800, profit: -2910 },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold ">Advanced Reporting</h1>
        <div className="flex gap-4">
         
          <Select onChange={(e) => setDateRange(e.target.value)} >
            <SelectTrigger className='w-[280px] py-5' >
              <SelectValue className='text-lg' placeholder='select a time interval'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='weekly'>Weekly</SelectItem>
              <SelectItem value='monthly'>Monthly</SelectItem>
              <SelectItem value='yearly'>Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button className=" bg-primary text-background " size='lg'>
            <Download size={18} />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {['Total Revenue', 'Total Expenses', 'Net Profit', 'Growth Rate'].map((metric) => (
          <div key={metric} className="p-4 bg-accent rounded-lg shadow-sm">
            <h3 className="text-sm text-primary">{metric}</h3>
            <p className="text-2xl font-bold">$24,500</p>
            <span className="text-sm text-green-500">+12.5% vs last period</span>
          </div>
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-accent rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#8884d8" />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-accent rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Profit Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
              <Legend />
              <Bar dataKey="profit" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Data Table */}
      <div className="bg-accent rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Detailed Transactions</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-accent-content rounded-lg">
              <Filter size={18} />
            </button>
            <button className="p-2 hover:bg-accent-content rounded-lg">
              <Settings size={18} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-4">Date</th>
                <th className="p-4">Transaction</th>
                <th className="p-4">Category</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row} className="border-b hover:bg-accent-content">
                  <td className="p-4">2024-03-{row}</td>
                  <td className="p-4">Transaction #{row}</td>
                  <td className="p-4">Category {row}</td>
                  <td className="p-4">${(row * 100).toLocaleString()}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdvancedReporting;