import React from 'react'

const ExportSharing = () => {
  const handleExport = (format) => {
    // Logic for exporting reports in different formats
    console.log(`Exporting report as ${format}`)
  }

  const handleGenerateLink = () => {
    // Logic for generating shareable links
    console.log('Generating shareable link')
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Export and Sharing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-6 text-center">Download Options</h3>
          <div className="flex justify-center space-x-4">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => handleExport('PDF')}
            >
              Export as PDF
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={() => handleExport('Excel')}
            >
              Export as Excel
            </button>
            <button 
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
              onClick={() => handleExport('CSV')}
            >
              Export as CSV
            </button>
          </div>
        </div>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-6 text-center">Shareable Reports</h3>
          <div className="flex justify-center">
            <button 
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
              onClick={handleGenerateLink}
            >
              Generate Shareable Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExportSharing