import React from 'react'
import { Button } from "../../components/ui/button"
import { FileText, Shield, Info, ExternalLink } from "lucide-react"

const LegalAndInformation = () => {
  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Legal Information</h1>

      {/* Terms of Service Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Terms of Service</h2>
        </div>
        <div className="ml-7 space-y-4">
          <p className="text-sm text-muted-foreground">
            Review our terms and conditions for using the Expense Tracker app.
          </p>
          <Button 
            variant="secondary"
            className="flex items-center gap-2 focus:outline outline-2 outline-green-500"
          >
            <ExternalLink className="w-4 h-4" />
            View Terms of Service
          </Button>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Privacy Policy</h2>
        </div>
        <div className="ml-7 space-y-4">
          <p className="text-sm text-muted-foreground">
            Learn how we handle and protect your personal information.
          </p>
          <Button 
            variant="secondary"
            className="flex items-center gap-2 focus:outline outline-2 outline-green-500"
          >
            <ExternalLink className="w-4 h-4" />
            View Privacy Policy
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5" />
          <h2 className="text-sm font-semibold">About</h2>
        </div>
        <div className="ml-7 space-y-4">
          <div className="text-sm space-y-2">
            <p><span className="font-medium">Version:</span> 1.0.0</p>
            <p><span className="font-medium">Developer:</span> Your Name</p>
            <p><span className="font-medium">Contact:</span> support@expensetracker.com</p>
            <p><span className="font-medium">Website:</span> www.expensetracker.com</p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            © 2024 Expense Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalAndInformation