import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import ProfileSetting from "./ProfileSetting";
import AppPreferences from "./AppPreferences";
import BudgetAndExpenseSettings from "./BudgetAndExpenseSettings";
import PrivacyAndSecurity from "./PrivacyAndSecurity";
import Integrations from "./Integrations";
import HelpAndSupport from "./HelpAndSupport";
import LegalAndInformation from "./LegalAndInformation";  
import { Combine, HelpCircle, Settings2Icon, ShieldCheck, Signature, UserCircle2, Wallet } from "lucide-react";

const Setting = () => {
  // Navigation items
  const navItems = [
    { label: "Profile Settings", path: "profileSetting" , icon : <UserCircle2 />},
    { label: "App Preferences", path: "appPreferences" , icon : <Settings2Icon />},
    { label: "Budget and Expense Settings", path: "budgetAndExpenseSettings" , icon : <Wallet />},
    { label: "Privacy and Security", path: "privacyAndSecurity" , icon : <ShieldCheck /> },
    { label: "Integrations", path: "integrations" , icon : <Combine /> },
    { label: "Help and Support", path: "helpAndSupport" , icon : <HelpCircle /> },
    { label: "Legal and Information", path: "legalAndInformation"  , icon : <Signature />},
  ];

  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  
  // Rest of your navItems array stays the same
  
  const getCurrentLabel = () => {
    const currentItem = navItems.find(item => item.path === currentPath);
    return currentItem ? currentItem.label : "Settings";
  };
  return (
    <div className="min-h-screen text-primary px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mt-5">Settings</h1>
      
      {/* Changed flex container to column on mobile */}
      <div className="flex flex-col lg:flex-row justify-center mt-6 gap-6">
        {/* Responsive Sidebar */}
        <div className="w-full lg:w-1/4 xl:w-1/5 border px-4 py-3 pb-6 rounded-sm">
          <h1 className="text-lg font-bold text-center my-3 border-b pb-4">
          General
          </h1>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex justify-between my-1 rounded cursor-pointer px-2 py-2 ${
                  isActive ? "bg-gray-800 text-white" : "hover:bg-accent"
                }`
              }
            >
              <span className="text-base flex items-center gap-3">{item.icon}{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Responsive Main Content */}
        <div className="w-full lg:w-3/5 xl:w-1/2 border px-4 py-3 rounded-sm">
          <h1 className="text-lg font-bold text-center my-3 border-b pb-4">
            {getCurrentLabel()}
          </h1>
          <div className="flex flex-col">
            <Routes>
              <Route path="profileSetting" element={<ProfileSetting />} />
              <Route path="appPreferences" element={<AppPreferences />} />
              <Route path="budgetAndExpenseSettings" element={<BudgetAndExpenseSettings />}/>
              <Route path="privacyAndSecurity" element={<PrivacyAndSecurity />}/>
              <Route path="integrations" element={<Integrations />} />
              <Route path="helpAndSupport" element={<HelpAndSupport />} />
              <Route path="legalAndInformation" element={<LegalAndInformation />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
