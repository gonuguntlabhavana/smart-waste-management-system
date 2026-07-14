import { useState } from "react";

function ReportWaste() {

    const [complaint, setComplaint] = useState({
        location: "",
        wasteType: "",
        description: ""
    });

    function handleChange(e) {
        setComplaint({
            ...complaint,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert("Complaint Submitted Successfully");

        console.log(complaint);
    }

    return (
        <div className="container">

            <div className="card">

                <h2>Report Waste</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <select
                        name="wasteType"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Waste Type</option>
                        <option>Plastic Waste</option>
                        <option>Organic Waste</option>
                        <option>Paper Waste</option>
                        <option>Glass Waste</option>
                        <option>Metal Waste</option>
                    </select>

                    <br />

                    <textarea
                        name="description"
                        rows="5"
                        placeholder="Enter Description"
                        onChange={handleChange}
                        required
                    ></textarea>

                    <br />

                    <input type="file" />

                    <br />

                    <button type="submit">
                        Submit Complaint
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ReportWaste;