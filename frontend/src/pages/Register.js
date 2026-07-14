import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert("Registration Successful");

        navigate("/login");
    }

    return (

        <div className="container">

            <div className="card">

                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <button type="submit">
                        Register
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Register;