import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import "./updatevacation.css"

function UpdateVacationData() {

    const [msg, setMsg] = useState("");
    
    //-----------------------------------------------------------------------------------------------//

    let vacationdata: any;
    let localdata = localStorage.getItem("vacation");
    localdata ? vacationdata = JSON.parse(localdata) : console.log("localStorage is empty");
    console.log(vacationdata);
    let description1 = vacationdata.description;
    let destination1 = vacationdata.destination;
    let img1 = vacationdata.img;
    let startdate1 = vacationdata.startdate;
    let enddate1 = vacationdata.enddate;
    let price1 = vacationdata.price;


    //-----------------------------------------------------------------------------------------------//

    const upDateVacation = () => {
        let id = vacationdata._id;
        const description = (document.getElementById("1") as HTMLInputElement).value;
        const destination = (document.getElementById("2") as HTMLInputElement).value;
        const startdate = (document.getElementById("4") as HTMLInputElement).value;
        const enddate = (document.getElementById("4") as HTMLInputElement).value;
        const price = (document.getElementById("6") as HTMLInputElement).value;
        const img = (document.getElementById("3") as HTMLInputElement).value;


        const postobj = {
            id,
            description,
            destination,
            img,
            startdate,
            enddate,
            price
        };

        const init_data = {
            method: "POST",
            headers: {
                "Access-Control": "Allow-Origin",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postobj)
        }
        fetch("http://localhost:5000/vacation/update", init_data)
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
        <div className="update-main-container" >
            <div style={{ color: "red", borderBottom: "black solid 3px" }}>
                <h1>Update Vacation</h1>
            </div>
            <div className="divs">
                <label>Description : </label>
                <input type={"text"} defaultValue={description1} id={"1"} ></input>
            </div>
            <div className="divs">
                <label>Destination : </label>
                <input type={"text"} defaultValue={destination1} id={"2"}></input>
            </div>
            <div className="divs">
                <label>Image : </label>
                <input type={"text"} defaultValue={img1} id={"3"} />
            </div>
            <div className="divs">
                <label>Start Date : </label>
                <input type={"date"} defaultValue={startdate1} id={"4"} ></input>
            </div>
            <div className="divs">
                <label>End Date : </label>
                <input type={"date"} defaultValue={enddate1} id={"5"} ></input>
            </div>
            <div className="divs">
                <label >Price: </label>
                <input type={"text"} defaultValue={price1} id={"6"}></input>
            </div>
            <div>
                <label>{msg}</label>
            </div>
            <div className="button-container">
                <button onClick={upDateVacation}>Update</button>
            </div>
            <div className="button-container">
                <Link to="/vacations"><button>Return</button></Link>
            </div>
        </div >
    )
}


export default UpdateVacationData;



