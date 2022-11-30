import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage: React.FC = () => {

    return (
        <div className="home-contanier">
            <div>
                <h1>Wellcom To Home Page</h1>
            </div>
            <div className="label-container">
                <div className="linkto">
                    <label style={{ color: "red", marginRight: '10px' }}>You Didn't Sign Up Yet Click Here </label>
                    <Link className="link" to="/signup">SignUp</Link>
                </div>
                <div className="linkto">
                    <label style={{ color: "green", marginRight: '10px' }}>Allready Signed Up Click Here </label>
                    <Link className="link" to="/login">Login</Link>
                </div>
            </div>

        </div>
    )
}
export default HomePage;