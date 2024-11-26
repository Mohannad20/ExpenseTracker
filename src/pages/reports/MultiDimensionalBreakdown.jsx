import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../components/ui/select';

const data = [
  { name: 'Week 1', value: 400 },
  { name: 'Week 2', value: 300 },
  { name: 'Week 3', value: 200 },
  { name: 'Week 4', value: 278 },
];

const MultiDimensionalBreakdown = () => {
  const [period, setPeriod] = useState('monthly');
  const [category, setCategory] = useState('time');

  const renderChart = () => {
    switch (category) {
      case 'time':
        return (
          <div className="p-6 border rounded-lg bg-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-center">By Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend/>
                <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      case 'category':
        return (
          <div className="p-6 border rounded-lg bg-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-center">By Category</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend/>
                <Bar dataKey="value" fill="#82ca9d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      case 'payment':
        return (
          <div className="p-6 border rounded-lg bg-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-center">By Payment Method</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
                <Legend/>
                <Bar dataKey="value" fill="#ffc658" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Multi-Dimensional Breakdown</h2>
        <div className="flex justify-center mb-6">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[250px] py-4">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="time">By Time</SelectItem>
              <SelectItem value="category">By Category</SelectItem>
              <SelectItem value="payment">By Payment Method</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {renderChart()}
      </section>
    </div>
  );
};

export default MultiDimensionalBreakdown;