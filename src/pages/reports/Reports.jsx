import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  History,
  FileText,
  Database,
  BarChart2,
  Share2,
  LineChart,
  PieChart,
  Layers,
  Target,
  ClipboardCheck
} from 'lucide-react';

// Import components
import HistoricalAnalysis from './HistoricalAnalysis';
import ConsolidatedSummarie from './ConsolidatedSummarie';
import DataSegmentation from './DataSegmentation';
import AdvancedReporting from './AdvancedReporting';
import ExportSharing from './ExportSharing';
import ComparativeInsights from './ComparativeInsights';
import VisualStorytelling from './VisualStorytelling';
import MultiDimensionalBreakdown from './MultiDimensionalBreakdown';
import GoalsCustomInsights from './GoalsCustomInsights';
import AuditReview from './AuditReview';

const navItems = [
  { label: "Historical Analysis", path: "historicalAnalysis", icon: <History /> },
  { label: "Consolidated Summarie", path: "consolidatedSummarie", icon: <FileText /> },
  { label: "Data Segmentation", path: "dataSegmentation", icon: <Database /> },
  { label: "Advanced Reporting", path: "advancedReporting", icon: <BarChart2 /> },
  { label: "Export and Sharing", path: "exportSharing", icon: <Share2 /> },
  { label: "Comparative Insights", path: "comparativeInsights", icon: <LineChart /> },
  { label: "Visual Storytelling", path: "visualStorytelling", icon: <PieChart /> },
  { label: "Multi-Dimensional Breakdown", path: "multiDimensionalBreakdown", icon: <Layers /> },
  { label: "User Goals and Custom Insights", path: "GoalsCustomInsights", icon: <Target /> },
  { label: "Audit and Review", path: "auditReview", icon: <ClipboardCheck /> }
];

const Reports = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-3xl font-bold my-8 text-center">Reports</h1>

      <div className="flex justify-center mt-6">
        {/* Sidebar */}
        <div className="w-1/4 mr-20 border px-5 py-3 pb-20 border-1 rounded-sm">
          <h1 className="text-lg font-bold text-center my-3 border-b pb-4">
            General Reports
          </h1>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex justify-between my-1 rounded cursor-pointer px-2 py-1 ${
                  isActive ? "bg-gray-800 text-white" : "hover:bg-accent"
                }`
              }
            >
              <span className="text-base flex gap-3">
                {item.icon}
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-11/12 px-6 border py-3 border-1 rounded-sm">
          <h1 className="text-lg font-bold text-center my-3 border-b pb-4">
            {/* {getCurrentLabel()} */}ss
          </h1>
          <div className="flex flex-col">
            <Routes>
              
              <Route path='/historicalAnalysis' element={<HistoricalAnalysis/>} />
              <Route path='/consolidatedSummarie' element={<ConsolidatedSummarie/>} />
              <Route path='/dataSegmentation' element={<DataSegmentation/>} />
              <Route path='/advancedReporting' element={<AdvancedReporting/>} />
              <Route path='/exportSharing' element={<ExportSharing/>} />
              <Route path='/comparativeInsights' element={<ComparativeInsights/>} />
              <Route path='/visualStorytelling' element={<VisualStorytelling/>} />
              <Route path='/multiDimensionalBreakdown' element={<MultiDimensionalBreakdown/>} />
              <Route path='/GoalsCustomInsights' element={<GoalsCustomInsights/>} />
              <Route path='/auditReview' element={<AuditReview/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;