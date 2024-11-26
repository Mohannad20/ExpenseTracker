import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  Legend,
} from "recharts";

const progressData = [
  { name: "Q1", value: 75 },
  { name: "Q2", value: 82 },
  { name: "Q3", value: 90 },
  { name: "Q4", value: 95 },
];

const trendData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1600 },
  { month: "Jun", users: 2000 },
];

const VisualStorytelling = () => {
  return (
    <div className="max-w-7xl  p-6">
      <h2 className="text-3xl font-bold mb-8">Visual Storytelling</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg bg-accent shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Quarterly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
              <Legend/>
              <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 border rounded-lg bg-accent shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User Growth Trajectory</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip labelStyle={{ color: "#8884d8" }} contentStyle={{borderRadius: '8px'}}/>
              <Legend/>
              <Line
                type="monotone"
                dataKey="users"
                stroke="#82ca9d"
                strokeWidth={2}
              />
              <ReferenceLine y={1000} stroke="red" strokeDasharray="3 3">
                <Label value="Target" position="right" />
              </ReferenceLine>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VisualStorytelling;
