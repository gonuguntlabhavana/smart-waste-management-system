import React from "react";

function ComplaintHistory() {
  const complaints = [
    {
      id: 101,
      location: "Bus Stand",
      waste: "Plastic Waste",
      status: "Pending",
    },
    {
      id: 102,
      location: "Market",
      waste: "Organic Waste",
      status: "Completed",
    },
    {
      id: 103,
      location: "School Road",
      waste: "Paper Waste",
      status: "Pending",
    },
  ];

  return (
    <div className="history-container">
      <h2>Complaint History</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Waste Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.location}</td>
              <td>{complaint.waste}</td>
              <td>
                <span
                  className={
                    complaint.status === "Completed"
                      ? "completed"
                      : "pending"
                  }
                >
                  {complaint.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComplaintHistory;