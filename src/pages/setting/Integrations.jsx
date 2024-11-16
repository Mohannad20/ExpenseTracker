import React, { useState } from 'react'
import { Button } from "../../components/ui/button"
import { FileSpreadsheet, Cloud, Link2, AlertCircle, Banknote } from "lucide-react"

const Integrations = () => {
  const [connectedBanks, setConnectedBanks] = useState([])
  const [syncStatus, setSyncStatus] = useState('idle')

  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Manage Integrations</h1>
      
      {/* Bank Connections Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Banknote className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Connect to Banks</h2>
        </div>
        <div className="space-y-4 ml-7">
          <Button 
            variant="secondary"
            className="focus:outline outline-2 outline-green-500"
          >
            <Link2 className="w-4 h-4 mr-2" />
            Connect New Bank Account
          </Button>
          {connectedBanks.length === 0 && (
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              No banks connected yet
            </p>
          )}
        </div>
      </div>

      {/* Export Options Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileSpreadsheet className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Export Data</h2>
        </div>
        <div className="space-y-3 ml-7">
          <Button 
            variant="secondary"
            className="focus:outline outline-2 outline-green-500 w-32"
          >
            Export as CSV
          </Button>
          <Button 
            variant="secondary"
            className="focus:outline outline-2 outline-green-500 w-32 ml-3"
          >
            Export as PDF
          </Button>
          <Button 
            variant="secondary"
            className="focus:outline outline-2 outline-green-500 w-32 ml-3"
          >
            Export as Excel
          </Button>
        </div>
      </div>

      {/* Sync Settings Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Sync Options</h2>
        </div>
        <div className="space-y-4 ml-7">
          <div className="flex items-center gap-4">
            <span className="text-sm">Auto-sync</span>
            <input 
              type="checkbox" 
              className="toggle border-green-500 checked:bg-green-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Sync with Google Drive</span>
            <input 
              type="checkbox" 
              className="toggle border-green-500 checked:bg-green-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Sync with Dropbox</span>
            <input 
              type="checkbox" 
              className="toggle border-green-500 checked:bg-green-500"
            />
          </div>
          <Button 
            variant="secondary"
            className="focus:outline outline-2 outline-green-500"
            onClick={() => setSyncStatus('syncing')}
          >
            Sync Now
          </Button>
          {syncStatus === 'syncing' && (
            <p className="text-sm text-green-500">Syncing in progress...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Integrations