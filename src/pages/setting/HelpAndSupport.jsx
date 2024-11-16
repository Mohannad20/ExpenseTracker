import React from 'react'
import { Button } from "../../components/ui/button"
import { HelpCircle, Mail, MessageSquare, Bug, ListVideo } from "lucide-react"

const HelpAndSupport = () => {
  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Help and Support</h1>

      {/* FAQs Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4 ml-7">
          <details className="cursor-pointer">
            <summary className="font-medium">How do I add new expenses?</summary>
            <p className="mt-2 text-sm text-muted-foreground pl-4">
              Click the "Add Transaction" button in the navigation bar and fill in the expense details.
            </p>
          </details>
          <details className="cursor-pointer">
            <summary className="font-medium">How can I set up budget alerts?</summary>
            <p className="mt-2 text-sm text-muted-foreground pl-4">
              Go to Settings > App Preferences > Notifications and enable Budget Alerts.
            </p>
          </details>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Contact Support</h2>
        </div>
        <div className="space-y-4 ml-7 ">
          <Button 
            variant="secondary"
            className="flex items-center gap-2 focus:outline outline-2 outline-green-500"
          >
            <Mail className="w-4 h-4" />
            Email Support
          </Button>
          <Button
            variant="secondary"
            className="flex items-center gap-2 focus:outline outline-2 outline-green-500 "
          >
            <ListVideo className="w-4 h-4" />
            Start Live Chat
          </Button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="border-b pb-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Provide Feedback</h2>
        </div>
        <div className="ml-7 ">
          <textarea 
            placeholder="Share your thoughts or suggestions..."
            className="w-full h-32 p-2 rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
          />
          <Button
            variant="secondary"
            className=" focus:outline outline-2 mt-2 outline-green-500"
          >
            Submit Feedback
          </Button>
        </div>
      </div>

      {/* Report Bug Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Bug className="w-5 h-5" />
          <h2 className="text-sm font-semibold">Report a Bug</h2>
        </div>
        <div className="ml-7">
          <textarea 
            placeholder="Describe the issue you encountered..."
            className="w-full h-32 p-2 rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
          />
          <Button
            variant="secondary"
            className="mt-2 focus:outline outline-2 outline-green-500"
          >
            Submit Bug Report
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HelpAndSupport