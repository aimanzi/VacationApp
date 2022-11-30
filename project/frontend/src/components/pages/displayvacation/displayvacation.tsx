import { useEffect, useState, } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom"
import "./displayvacation.css"


const VacationDisplay: React.FC = () => {
    const [msg, setMsg] = useState("");
    const [vacationdata, setVacationData] = useState([])
    const [searchData, setSearchData] = useState("")
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();

    //-------------------------------------------------------------------------------------------//
    //cheaking user data :

    let userData
    let localdata = localStorage.getItem("userdata")
    localdata ? userData = JSON.parse(localdata) : console.log("localStorage is empty");
    let usertype = userData.userdefinition;
    let userMongoId = userData._id;
    let user: userdata;

    if (localStorage.getItem("userdata")) {
        user = JSON.parse(localStorage.getItem("userdata") as string) as userdata;
    }


    //-------------------------------------------------------------------------------------------//
    //get data from backend:

    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:5000/vacation/list")
                .then(response => response.json())
                .then(data => {
                    setVacationData(data.vacation)
                })
                .catch(err => { console.log("reject", err); });
        }
        getData();
    }, [])

    //-------------------------------------------------------------------------------------------//
    //search filter:

    const FilterData = () => {
        return vacationdata.filter((item: vacationTyps) => {
            return item.destination.toLowerCase().includes(searchData.toLowerCase())
                || item.description.toLowerCase().includes(searchData.toLowerCase())
        });
    }

    //-------------------------------------------------------------------------------------------//
    //deleting vacation :

    const deletVacation = (_id: string) => {
        const postobj = {
            _id,
        }

        const init_data = {
            method: "DELETE",
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
            })
            .catch(err => console.log(err))

        window.location.reload();
    }

    //-------------------------------------------------------------------------------------------//
    //update vacation with new data:

    const updateVacation = (d: any) => {
        let vacationdata: string | null = JSON.stringify(d);
        localStorage.setItem("vacation", vacationdata);
        navigate("/updatevacation")
    }

    //-------------------------------------------------------------------------------------------//
    //follow:

    const updateFollowingId = (vacationId: string) => {

        let vacationid: string = vacationId;
        localStorage.setItem("vacationid", vacationid);

        const postobj = {
            userMongoId,
            vacationId
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
        fetch("http://localhost:5000/vacation/follow", init_data)
            .then(response => response.json())
            .then(data => {

                if (data.succsess) {
                    localStorage.setItem("userdata", JSON.stringify(data.user));
                    setRefresh(val => !val);
                }
            })
            .catch(err => console.log(err))
    }

    //-------------------------------------------------------------------------------------------//

    return (
        <div className="maindisplay-container" >
            <header className="header-container">
                <div>
                    <label className="user">Wellcome : {userData.firstname + (" ") + userData.lastname}</label>
                </div>
                <div >
                    <h1 style={{ margin: "0 50px" }}>Wellcome To Our Vacations List </h1>
                </div>
                <div>
                    <label><Link className="logout" to="/">logout</Link></label>
                </div>
            </header>
            <div className="add-container">
                <div>
                    {usertype == "admin" ? (
                        <Link to="/addvacation"><button>Add Vacation</button></Link>
                    ) : ("")}
                </div>
            </div>
            <div>
                <div className="search-container">
                    <label>Serch : </label>
                    <input placeholder="Destination/Description" type="search" onChange={e => setSearchData(e.target.value)} />
                </div>
            </div>
            <div className="grid-container">
                {FilterData().map((d: vacationTyps) => {
                    return (

                        <div key={d._id} className="grid-item">

                            <div className="follow-container">{user.follow.includes(d._id) ? (<label>F</label>) : ("")}</div>
                            <div><label > {d.description} </label></div>
                            <div><label > {d.destination}</label> </div>
                            <div><label > <img alt="" src={d.img} ></img></label></div>
                            <div><label >Strat Date : {(d.startdate)} </label></div>
                            <div><label >End Date : {d.enddate}</label> </div>
                            <div ><label >price: {d.price}</label> </div>

                            <div className="option-container">
                                <div>
                                    {(usertype == "user" && user.follow.includes(d._id)) ? (
                                        <button onClick={() => updateFollowingId(d._id)} >UnFollow</button>
                                    ) : ((usertype == "user") && (user.follow.includes(d._id) == false)) ? (
                                        <button onClick={() => updateFollowingId(d._id)} >Follow</button>) : ("")
                                    }

                                </div>
                                <div>
                                    {usertype == "admin" ? (
                                        <button onClick={() => updateVacation(d)} >UPDATE</button>
                                    ) : ("")}
                                </div>
                                <div>
                                    {usertype == "admin" ? (
                                        <button onClick={() => deletVacation(d._id)} >DELETE</button>
                                    ) : ("")}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}


export default VacationDisplay;



function createStore(counter: (state: number | undefined, action: any) => number) {
    throw new Error("Function not implemented.");
}

interface vacationTyps {
    _id: string,
    id: string,
    description: string,
    destination: string,
    startdate: string,
    enddate: string,
    price: String,
    img: string
    d: Array<string>
};

interface usestateTyos {
    vacationdata: Array<Object>
    searchData: string,
    user: any,
}

interface userdata {
    id: String;
    firstname: string;
    lastname: string;
    follow: string[]
};


