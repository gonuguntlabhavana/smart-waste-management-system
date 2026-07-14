import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    function handleChange(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        alert("Login Successful");

        navigate("/dashboard");
    }

    return(

        <div className="container">

            <div className="card">

                <h2>User Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        required
                    />

                    <br/>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                    />

                    <br/>

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Login;