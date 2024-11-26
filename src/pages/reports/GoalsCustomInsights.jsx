import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const goalsData = [
  { name: 'Exercise Regularly', progress: 70 },
  { name: 'Read More Books', progress: 50 },
  { name: 'Save Money', progress: 30 },
];

const GoalsCustomInsights = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">User Goals and Custom Insights</h2>
        <div className="p-6 border rounded-lg bg-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-center">Goal Tracking</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={goalsData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" />
              <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
              <Legend />
              <Bar dataKey="progress" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6 border rounded-lg bg-accent shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Custom Rules/Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-green-500 mr-2">check_circle</span>
              <p className="text-lg">You have consistently exercised 3 times a week for the past month.</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-green-500 mr-2">check_circle</span>
              <p className="text-lg">You have read 2 books this month, keep it up!</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-green-500 mr-2">check_circle</span>
              <p className="text-lg">You have saved 20% of your income this month.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsCustomInsights;