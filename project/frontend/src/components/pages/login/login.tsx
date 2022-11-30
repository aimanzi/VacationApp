import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";


const LogIn: React.FC = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [userdata, setUserData] = useState("")
    const navigate = useNavigate()

    const postLogInData = () => {
        const postobj = {
            mail,
            password
        };

        const init_data = {
            method: "POST",
            headers: {
                "Access-Control": "Allow-Origin, ",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postobj),
        };

        const getData = async () => {
            await fetch(`http://localhost:5000/login`, init_data)
                .then((res) => {
                    console.log('res: ', res);
                    return res.json();
                }).then((data) => {
                    console.log("data: ", data);
                    if (data.success === true) {
                        setUserData(data.user)
                        localStorage.clear();
                        let userdata: string | null = JSON.stringify(data.user);
                        localStorage.setItem("userdata", userdata);
                        navigate("/vacations")
                    } else {
                        setMsg(data.massege)
                    }
                })
                .catch((err) => console.log(err));
        }
        getData();

        const handleRefresh = () => {
            window.setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        handleRefresh();

    }

    return (

        <div className="login-main-contanier">

            <div style={{ marginTop: "10px" }}>
                <label >User Name :</label>
                <input placeholder="Enter Your Mail Address" type={"email"} onChange={(e) => setMail(e.target.value)} />
            </div>
            <div style={{ marginTop: "10px" }}>
                <label>Password : </label>
                <input placeholder="Enter Your Password" type={"password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-container" style={{ marginTop: "20px" }}>
                <button onClick={postLogInData}>Login</button>
            </div>
            <div style={{ marginTop: "10px" }}>
                <label>Did Not Sign Up Yet ? Clike Here<Link style={{ marginLeft: "5px" }} to="/signup">Sign Up</Link></label>
            </div>
            <div style={{ marginTop: "10px" }}>
                <label>{msg}</label>
            </div>

            <div className="link">
                <Link className="linkto" to="/">Home Page</Link>
            </div>

        </div>

    );
}

export default LogIn;