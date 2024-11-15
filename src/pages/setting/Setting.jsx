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
    <div className="min-h-screen text-primary">
      <h1 className="text-2xl font-bold text-center mt-5">Settings</h1>
      <div className="flex justify-center mt-6">
        {/* Sidebar */}
        <div className="w-1/5 mr-20 border px-5 py-3 pb-20 border-1 rounded-sm">
          <h1 className="text-lg font-bold text-center my-3 border-b pb-4">
          General
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
              <span className="text-base flex gap-3">{item.icon}{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-1/2 mr-20 border px-5 py-3 border-1 rounded-sm">
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
