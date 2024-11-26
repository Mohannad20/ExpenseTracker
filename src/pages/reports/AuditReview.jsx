import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const AuditReview = () => {
  const [filter, setFilter] = useState("");
  const [dateRange, setDateRange] = useState("all");

  const transactions = [
    { id: 1, date: "2024-01-01", description: "Groceries", amount: -50 },
    { id: 2, date: "2024-01-02", description: "Salary", amount: 1500 },
    // Add more transactions here
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Audit and Review</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Detailed Logs</h3>
          <div className="flex justify-between mb-4">
            <Input
              type="text"
              placeholder="Search transactions"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-1/3 border border-primary"
            />
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[250px] py-4 border border-primary">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="lastMonth">Last Month</SelectItem>
                <SelectItem value="lastYear">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-primary text-background">Export</Button>
          </div>
          <table className="min-w-full bg-accent rounded-lg ">
            <thead>
              <tr className=" border-b">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-accent-content">
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.description}</td>
                  <td className="py-2 px-4">{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Filters for Granular View
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="dateRange">Date Range:</label>
              <Select
                id="dateRange"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-1/3"
              >
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="lastMonth">Last Month</SelectItem>
                <SelectItem value="lastYear">Last Year</SelectItem>
              </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="amountRange">Amount Range:</label>
              <Input
                type="number"
                id="amountRange"
                placeholder="Min"
                className="w-1/6 border border-primary"
              />
              <span>-</span>
              <Input type="number" placeholder="Max" className="w-1/6 border border-primary" />
            </div>
            <Button className="bg-primary text-background">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditReview;
