import { Link } from "react-router-dom";

function Dashboard(){

    return(

        <div className="container">

            <div className="card">

                <h2>Dashboard</h2>

                <p>Welcome to Smart Waste Management System</p>

                <br/>

                <Link to="/report">
                    <button>Report Waste</button>
                </Link>

                <br/><br/>

                <Link to="/history">
                    <button>Complaint History</button>
                </Link>

                <br/><br/>

                <Link to="/analytics">
                    <button>Analytics</button>
                </Link>

                <br/><br/>

                <Link to="/">
                    <button>Logout</button>
                </Link>

            </div>

        </div>

    );

}

export default Dashboard;