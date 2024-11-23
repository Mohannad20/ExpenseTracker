import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const timeBasedTrendsData = [
  { name: 'Q1', Expenses: 4000, Income: 2400 },
  { name: 'Q2', Expenses: 3000, Income: 1398 },
  { name: 'Q3', Expenses: 2000, Income: 9800 },
  { name: 'Q4', Expenses: 2780, Income: 3908 },
];

const comparisonsData = [
  { name: 'Jan', ThisYear: 4000, LastYear: 2400 },
  { name: 'Feb', ThisYear: 3000, LastYear: 1398 },
  { name: 'Mar', ThisYear: 2000, LastYear: 9800 },
  { name: 'Apr', ThisYear: 2780, LastYear: 3908 },
];

const categoryData = [
  { name: 'Food', value: 400 },
  { name: 'Rent', value: 300 },
  { name: 'Utilities', value: 300 },
  { name: 'Entertainment', value: 200 },
];

const incomeExpenseData = [
  { name: 'Income', value: 5000 },
  { name: 'Expenses', value: 3000 },
];

const data = [
    { name: 'Bank Account', value: 400 },
    { name: 'Wallet', value: 300 },
    { name: 'Credit Card', value: 300 },
    { name: 'Other', value: 200 },
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Reports = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Reports</h1>

      {/* Historical Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Historical Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold my-2 text-center">Time-Based Trends</h3>
            <div className='flex justify-center mt-4'>
              <LineChart
                width={600}
                height={300}
                data={timeBasedTrendsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend />
                <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
                <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Comparisons</h3>
            <div className='flex justify-center mt-4'>
              <BarChart
                width={600}
                height={300}
                data={comparisonsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend />
                <Bar dataKey="ThisYear" fill="#8884d8" />
                <Bar dataKey="LastYear" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
      </section>

      {/* Consolidated Summaries */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consolidated Summaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Category-Based Summaries</h3>
            <div className='flex justify-center mt-4'>
              <PieChart width={400} height={400}>
                <Pie
                  data={categoryData}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={150}
                  innerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Income vs. Expense Comparison</h3>
            <div className='flex justify-center mt-4'>
              <BarChart
                width={600}
                height={300}
                data={incomeExpenseData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </div>
      </section>

      {/* Data Segmentation */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Segmentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Account Overview</h3>
            {/* Table or pie chart for account overview */}
            
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Recurring Patterns</h3>
            {/* Highlight recurring transactions */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Biggest Expenses</h3>
            {/* Table for biggest expenses */}
          </div>
        </div>
      </section>

      {/* Advanced Reporting */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Advanced Reporting</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Customizable Reports</h3>
          {/* Filters for customizable reports */}
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">Forecasting</h3>
          {/* Line chart for forecasting */}
        </div>
      </section>

      {/* Export and Sharing */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Export and Sharing</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Download Options</h3>
          {/* Buttons for exporting reports */}
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">Shareable Reports</h3>
          {/* Generate shareable links */}
        </div>
      </section>

      {/* Comparative Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comparative Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Compare Categories, Time Periods, or Accounts</h3>
            {/* Side-by-side bar charts or tables */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Variance Indicators</h3>
            {/* Color-coded indicators */}
          </div>
        </div>
      </section>

      {/* Visual Storytelling */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Visual Storytelling</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Progress Bars and Insights</h3>
          {/* Progress bars and callouts */}
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">Visual Annotations</h3>
          {/* Annotations on charts */}
        </div>
      </section>

      {/* Multi-Dimensional Breakdown */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Multi-Dimensional Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">By Time</h3>
            {/* Weekly, monthly, or yearly breakdowns */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">By Category</h3>
            {/* Data by subcategories */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">By Payment Method</h3>
            {/* Spending by payment methods */}
          </div>
        </div>
      </section>

      {/* User Goals and Custom Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Goals and Custom Insights</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Goal Tracking</h3>
          {/* Progress bars for goals */}
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">Custom Rules/Insights</h3>
          {/* Highlight user-specific habits */}
        </div>
      </section>

      {/* Audit and Review */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Audit and Review</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Detailed Logs</h3>
          {/* Comprehensive table of past transactions */}
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">Filters for Granular View</h3>
          {/* Filters for specific reports */}
        </div>
      </section>
    </div>
  );
};

export default Reports;