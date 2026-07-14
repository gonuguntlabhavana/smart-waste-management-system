function ComplaintHistory() {

    return (

        <div className="container">

            <div className="card">

                <h2>Complaint History</h2>

                <table>

                    <tr>
                        <th>ID</th>
                        <th>Location</th>
                        <th>Waste Type</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>101</td>
                        <td>Bus Stand</td>
                        <td>Plastic Waste</td>
                        <td>Pending</td>
                    </tr>

                    <tr>
                        <td>102</td>
                        <td>Market</td>
                        <td>Organic Waste</td>
                        <td>Completed</td>
                    </tr>

                    <tr>
                        <td>103</td>
                        <td>School Road</td>
                        <td>Paper Waste</td>
                        <td>Pending</td>
                    </tr>

                </table>

            </div>

        </div>

    );
}

export default ComplaintHistory;