import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom"
import "./addvacation.css"

const AddVacation: React.FC = () => {

    const [id, setId] = useState("");
    const [description, setDiscription] = useState("");
    const [destination, setDistination] = useState("");
    const [img, setImg] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");

    const postData = () => {
        const postobj = {
            description,
            destination,
            img,
            startdate,
            enddate,
            price
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
        fetch("http://localhost:5000/vacation/addVacation", init_data)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMsg(data.message)
            })
            .catch(err => console.log(err))

        const handleRefresh = () => {
            window.setTimeout(() => {
                window.location.reload();
            }, 700);
        }
        handleRefresh();
    }


    return (

        <div className="Addmain-container">
            <div style={{ color: "red", borderBottom: "black solid 3px" }}>
                <h1>Add Vacation</h1>
            </div>
            <div className="divs">
                <label>Description : </label>
                <textarea rows={3} typeof={"text"} onChange={(e => setDiscription(e.target.value))}></textarea>
            </div>
            <div className="divs">
                <label>Destination : </label>
                <input type={"text"} onChange={(e => setDistination(e.target.value))}></input>
            </div>
            <div className="divs">
                <label>Image : </label>
                <input type={"text"} onChange={(e => setImg(e.target.value))} />
            </div>
            <div className="divs">
                <label>Start Date : </label>
                <input type={"date"} onChange={(e => setStartDate(e.target.value))}></input>
            </div>
            <div className="divs">
                <label>End Date : </label>
                <input type={"date"} onChange={(e => setEndDate(e.target.value))}></input>
            </div>
            <div className="divs">
                <label >Price: </label>
                <input type={"text"} onChange={(e => setPrice(e.target.value))}></input>
            </div>
            <div style={{ marginTop: "5px" }}>
                <label>{msg}</label>
            </div>
            <div className="button-container">
                <button onClick={postData}>Uplode</button>
            </div>
            <div className="button-container">
                <Link to="/vacations"><button>Return</button></Link>
            </div>
        </div>
    )
}
export default AddVacation;



