import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'


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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ConsolidatedSummarie = () => {
  return (
    <div>
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
                  outerRadius={80}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
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
    </div>
  )
}

export default ConsolidatedSummarie