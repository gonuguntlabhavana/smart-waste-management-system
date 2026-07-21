import React from "react";

function Analytics() {
  return (
    <div className="analytics-container">
      <h2>Waste Analytics Dashboard</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Total Complaints</h3>
          <p>15</p>
        </div>

        <div className="analytics-card">
          <h3>Pending</h3>
          <p>5</p>
        </div>

        <div className="analytics-card">
          <h3>Completed</h3>
          <p>10</p>
        </div>

        <div className="analytics-card">
          <h3>Plastic Waste</h3>
          <p>6</p>
        </div>

        <div className="analytics-card">
          <h3>Organic Waste</h3>
          <p>5</p>
        </div>

        <div className="analytics-card">
          <h3>Paper Waste</h3>
          <p>4</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;