import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Fingerprint,
  KeyRound,
  ShieldAlert,
  Download,
  Trash2,
} from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useSelector } from "react-redux";

const PrivacyAndSecurity = () => {
  const [isPinEnabled, setIsPinEnabled] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);
  const userData = useSelector((state) => state.profile);
  console.log(userData);

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFont("Clash Display");
    doc.setFontSize(20);
    // title
    doc.text("Account Data", 105, 10, null, null, "center");

    doc.setFontSize(12);
    doc.text("Name: " + userData.username, 10, 20);
    doc.text("Email: " + userData.email, 10, 25);

    const tableData = [
      ["Month", 'Income', 'Expense'],
      ["Jan", 400, 300],
      ["Feb", 300, 400],
      ["Mar", 200, 350],
      ["Apr", 278, 550],
      ["Dec", 600, 500],
      ["Nov", 500, 670],
      ["Oct", 400, 600],
      ["Sep", 300, 700],
      ["Aug", 200, 300],
      ["Jul", 349, 100],
      ["Jun", 239, 30],
      ["May", 189, 230],
      ["Budget", "3000"],
    ];

    autoTable(doc, {
      startY: 30,
      head: [tableData[0]],
      body: tableData.slice(1),
    });

    doc.save("account-data.pdf");
  };

  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Edit Privacy and Security</h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
        <div className=" lg:border-r-2">
          {/* Authentication Settings */}
          <div className="flex flex-col ml-4 my-6">
            <span className="text-sm font-semibold mb-4">
              Authentication Settings
            </span>
            <div className="space-y-4">
              {/* PIN/Password Toggle */}
              <div className="flex items-center ">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4" />
                  <span className="text-sm">Enable PIN/Password</span>
                </div>
                <input
                  type="checkbox"
                  checked={isPinEnabled}
                  onChange={() => setIsPinEnabled(!isPinEnabled)}
                  className="toggle ml-4 border-green-500 checked:bg-green-500"
                />
              </div>

              {/* Biometric Authentication */}
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4" />
                  <span className="text-sm">Biometric Authentication</span>
                </div>
                <input
                  type="checkbox"
                  checked={isBiometricEnabled}
                  onChange={() => setIsBiometricEnabled(!isBiometricEnabled)}
                  className="toggle ml-4 border-green-500 checked:bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* Account Data Management */}
          <div className="flex flex-col lg:ml-6 ml-6 my-6">
            <span className="text-sm font-semibold mb-4">
              Manage Account Data
            </span>
            <div className="space-y-4">
              {/* Data Usage */}
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                <span className="text-sm">Data Usage: 2.5 MB</span>
              </div>

              <div className="flex flex-row gap-3">
                {/* Export Data */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-2 focus:outline outline-2 outline-green-500"
                  onClick={exportToPDF}
                >
                  <Download className="w-4 h-4" />
                  Export Account Data
                </Button>

                {/* Delete Account */}
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndSecurity;
