import React from 'react'

const GoalsCustomInsights = () => {
  return (
    <div>
        {/* User Goals and Custom Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Goals and Custom Insights</h2>
        <div className="p-4 border rounded-lg bg-accent">
          <h3 className="text-xl font-semibold mb-2 text-center">Goal Tracking</h3>
          {/* Progress bars for goals */}
        </div>
        <div className="p-4 border rounded-lg bg-accent mt-4">
          <h3 className="text-xl font-semibold mb-2 text-center">Custom Rules/Insights</h3>
          {/* Highlight user-specific habits */}
        </div>
      </section>
    </div>
  )
}

export default GoalsCustomInsights