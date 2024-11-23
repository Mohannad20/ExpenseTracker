import React from 'react'

const MultiDimensionalBreakdown = () => {
  return (
    <div>
      {/* Multi-Dimensional Breakdown */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Multi-Dimensional Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">By Time</h3>
            {/* Weekly, monthly, or yearly breakdowns */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">By Category</h3>
            {/* Data by subcategories */}
          </div>
          <div className="p-4 border rounded-lg bg-accent">
            <h3 className="text-xl font-semibold mb-2 text-center">By Payment Method</h3>
            {/* Spending by payment methods */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MultiDimensionalBreakdown