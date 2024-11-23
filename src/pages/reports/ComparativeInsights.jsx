import React from 'react'

const ComparativeInsights = () => {
  return (
    <div>
        {/* Comparative Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comparative Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Compare Categories, Time Periods, or Accounts</h3>
            {/* Side-by-side bar charts or tables */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">Variance Indicators</h3>
            {/* Color-coded indicators */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComparativeInsights