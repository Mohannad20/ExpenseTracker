import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Fingerprint,
  KeyRound,
  ShieldAlert,
  Download,
  Trash2,
} from "lucide-react";

const PrivacyAndSecurity = () => {
  const [isPinEnabled, setIsPinEnabled] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Edit Privacy and Security</h1>
      <div className="flex">
        <div className="w-1/2 border-r-2">
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

        <div className="w-1/2">
          {/* Account Data Management */}
          <div className="flex flex-col ml-8 my-6">
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
