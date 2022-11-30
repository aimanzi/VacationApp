import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useEffect } from "react";

import "./dalatevacation.css"

const DeleteVacation: React.FC = () => {

    const [id, setId] = useState("");
    const [msg, setMsg] = useState("");

    const deleteVacation = () => {
        const postobj = {
            id,
        }

        const init_data = {
            method: "POST",
            headers: {
                "Access-Control": "Allow-Origin, ",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postobj)
        }
        fetch("http://localhost:5000/vacation/update/delete", init_data)
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                setMsg(data.message)
            })
            .catch(err => console.log(err))

        const handleRefresh = () => {
            window.setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        handleRefresh();

    }

    return (

        <div className="main-container">
            <div style={{ color: "black", borderBottom: "black solid 3px" }}>
                <h1>Delete Vacation</h1>
            </div>
            <div style={{ marginTop: "10px" }}>
                <h4>Enter Vacatinon Id: </h4>
                <input type={"text"} onChange={(e => setId(e.target.value))} />
            </div>
            <div style={{ marginTop: "5px" }}>
                <label>{msg}</label>
            </div>

            <div className="button-container">
                <div>
                    <button onClick={deleteVacation}>Delete</button>
                </div>
            </div>
            <div className="button-container" style={{ marginTop: "10px", textAlign: "center" }}>
                <Link style={{ textDecoration: "none" }} to="/vacations"><button>Return To Vacations</button></Link>
            </div>
        </div>
    )
}
export default DeleteVacation;



