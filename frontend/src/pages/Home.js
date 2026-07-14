import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header>

        <h1> Smart Waste Management System</h1>

        <nav>
          <Link to="/">Home</Link>

          <Link to="/register">Register</Link>

          <Link to="/login">Login</Link>

        </nav>

      </header>

      <div className="container">

        <div className="card">

          <h2>Clean City, Better Tomorrow </h2>

          <br />

          <p>
            Report waste easily and help keep your surroundings clean.
          </p>

          <Link to="/register">
            <button>Get Started</button>
          </Link>

        </div>

        <div className="card" style={{marginTop:"30px"}}>

          <h2>About</h2>

          <br />

          <p>
            This Smart Waste Management System allows citizens to report
            garbage problems, track complaints and maintain a cleaner city.
          </p>

        </div>

      </div>
      <div className="features">

    <div className="box">
        <h3> Report Waste</h3>
        <p>Report garbage in your area.</p>
    </div>

    <div className="box">
        <h3> Track Complaint</h3>
        <p>View complaint status.</p>
    </div>

    <div className="box">
        <h3> Analytics</h3>
        <p>View complaint reports.</p>
    </div>

</div>

      <footer>

        © 2026 Smart Waste Management System

      </footer>

    </>
  );
}

export default Home;