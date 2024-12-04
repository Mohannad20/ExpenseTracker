import React from 'react';

const ExportSharing = () => {
  const handleExport = (format) => {
    console.log(`Exporting as ${format}`);
  };

  const handleGenerateLink = () => {
    console.log('Generating shareable link');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Export and Sharing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-6 text-center">Download Options</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full md:w-auto"
              onClick={() => handleExport('PDF')}
            >
              Export as PDF
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full md:w-auto"
              onClick={() => handleExport('Excel')}
            >
              Export as Excel
            </button>
            <button 
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 w-full md:w-auto"
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
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 w-full md:w-auto"
              onClick={handleGenerateLink}
            >
              Generate Shareable Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportSharing;