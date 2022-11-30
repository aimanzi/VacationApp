import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom";

import "./signup.css";

const SignUp: React.FC = () => {
    const [userdefinition, setUserDefinition] = useState("")
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mailmessage, setMailMessage] = useState("");
    const [passwordmessage, setPasswordMessage] = useState("");
    const [msg, setMsg] = useState("")

    const validations = () => {
        let passStatus = [];
        let mailstatus;

        //mail validation
        const Emailregex = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (Emailregex.test(mail)) {
            mailstatus = true;
            setMailMessage("valid mail address");
        } else {
            mailstatus = false;
            setMailMessage("invailed/missing mail address");
        }

        //password validation
        const length = password.length >= 8;
        if (length) {
            passStatus.push(true);
        } else {
            passStatus.push("password leght is wrong");
        }
        const numbers = password.match(/[0-9]/);
        if (numbers) {
            passStatus.push(true);
        } else {
            passStatus.push("number Condition missing in the password");
        }
        const uppercase = password.match(/[A-Z]/);
        if (uppercase) {
            passStatus.push(true);
        } else {
            passStatus.push("UperCase Condition is Missing");
        }
        const lowercase = password.match(/[a-z]/);
        if (lowercase) {
            passStatus.push(true);
        } else {
            passStatus.push("LowerCase Condition is Missing");
        }
        const english = password.match(
            /^[a(/^[a-zA-Z0-9\\!\@\#\$\%\^\&\*\?\>\<\,\.\/\;\:\'\"\|\+\=\-\_\;]/
        );
        if (english) {
            passStatus.push(true);
        } else {
            passStatus.push("English Condition is Missing");
        }
        const special_chara = password.match(
            /[`\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\,\.\/\'\]\[\<\>\?\"\:\ ]/
        );
        if (special_chara) {
            passStatus.push(true);
        } else {
            passStatus.push("Special Character Condition is Missing");
        }
        const passing = passStatus.every((a) => a === true);
        if (passing) {
            setPasswordMessage("valid password");
        } else {
            setPasswordMessage("invalid/missing password");
        }

        if (passing === true && mailstatus === true) {
            postData();
        }
    };

    const postData = () => {
        const postobj = {
            userdefinition,
            mail,
            password,
            firstname,
            lastname
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
        fetch("http://localhost:5000/signup", init_data)
            .then((response) => response.json()).then(data => {
                console.log(data);
                console.log(data.message);
                setMsg(data.message)
            })

            .catch((err) => console.log(err));

        const handleRefresh = () => {
            window.setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        handleRefresh();

    };





    return (
        <div className="signup-main-contanier">
            <div className="input-container">
                <div>
                    <label> User Definition : </label>
                    <input placeholder="User Or Admin" type={"text"} onChange={(e) => setUserDefinition(e.target.value)} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{ marginRight: "35px" }}>Mail : </label>
                    <input type={"email"} onChange={(e) => setMail(e.target.value)} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label>Password : </label>
                    <input type={"password"} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label>First Name : </label>
                    <input type={"text"} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div style={{ marginTop: "10px" }}><label>Last Name : </label>
                    <input type={"text"} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <button onClick={validations} style={{ marginTop: "10px", marginLeft: "50px" }}>Sign Up</button>
                </div>
            </div>
            <div className="link">
                <Link className="linkto" to="/">Home Page</Link>
            </div>
            <div>
                <label>{msg}</label>
                <label>{mailmessage}</label>
                <label>{passwordmessage}</label>
            </div>

        </div>
    );
}

export default SignUp;