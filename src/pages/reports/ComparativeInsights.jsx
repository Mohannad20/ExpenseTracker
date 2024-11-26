import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const ComparativeInsights = () => {
  const [comparisonType, setComparisonType] = useState("categories");
  const [period, setPeriod] = useState("monthly");

  const chartData = [
    { name: "Jan", 2023: 65, 2024: 70 },
    { name: "Feb", 2023: 59, 2024: 62 },
    { name: "Mar", 2023: 80, 2024: 75 },
    { name: "Apr", 2023: 81, 2024: 85 },
  ];

  return (
    <div className="p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comparative Insights</h2>

        <div className="mb-6 flex gap-4">
          <Select value={comparisonType} onValueChange={setComparisonType}>
            <SelectTrigger className="w-[250px] py-4">
              <SelectValue placeholder="Select comparison type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="categories">Categories</SelectItem>
              <SelectItem value="periods">Time Periods</SelectItem>
              <SelectItem value="accounts">Accounts</SelectItem>
            </SelectContent>
          </Select>

          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[250px] py-4">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart Comparison */}
          <div className="p-4 border rounded-lg bg-accent shadow">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Comparative Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2023" fill="#8884d8" />
                <Bar dataKey="2024" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Variance Panel */}
          <div className="p-4 border rounded-lg bg-accent shadow">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Variance Summary
            </h3>
            <div className="space-y-4">
              {chartData.map((item) => {
                const variance = item["2024"] - item["2023"];
                const color = variance > 0 ? "text-green-600" : "text-red-600";
                return (
                  <div
                    key={item.name}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <span>{item.name}</span>
                    <span className={color}>
                      {variance > 0 ? "+" : ""}
                      {variance}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparativeInsights;
