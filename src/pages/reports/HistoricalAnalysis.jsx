import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
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
const HistoricalAnalysis = () => {
  return (
    <div>
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
    </div>
  )
}

export default HistoricalAnalysis