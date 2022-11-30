const vacationSchema = require("../models/vacation.models");
const DataBase = require("../database/database")


//adding vacation 
function AddVacation(req, res) {
    console.log("**Upload Vacation Data**");
    let data = req.body;
    console.log(req.body.startdate);
    if (data.description == ("") || data.img == ("") || data.startdate == ("") || data.enddate == ("") || data.price == ("") || data.destination == ("")) {
        console.log('vacation data is missing ot empty');
        res.json({ message: "vacation data is missing ot empty", success: false })
    } else {
        let vacation = new vacationSchema(data);
        DataBase.VcationUpload(vacation)
        res.json({ message: "Vacation Data Added to DataBas", success: true, result: vacation })
    }
}


//display vacations
function DisplayVacation(req, res) {
    console.log("**Fetching Vacation List From DataBase**");
    let vacation = vacationSchema;
    vacation.find().sort({ startdata: 1 })
        .then((result) => {
            console.log("Uplodaing Vacation Completed");
            res.json({ message: "Uplodaing Vacation Completed ", success: true, vacation: result });
        })
        .catch((err) => res.json({ message: "Uplodaing Vacation Failed", success: false }))
}

//delete vacation
function DeleteVacation(req, res) {
    console.log("**deleting vacation from DataBase**");
    let _id = req.body._id;
    let vacation = vacationSchema;
    if (_id == ("")) {
        console.log('vacation ID is missing ot empty');
        res.json({ message: "vacation ID is missing ot empty", success: false })
    } else {
        vacation.findOneAndDelete({ _id })
            .then((result) => {
                if (result) {
                    console.log("Delleting Vacation ById Completed");
                    res.json({ message: "Delleting Vacation ById Completed ", success: true, user: result });
                } else {
                    console.log("Delleting Vacation ById Failed");
                    res.json({ message: "Delleting Vacation ById Failed", success: falset });
                }
            }).catch((err) => res.json({ message: "Deleting Failed", success: false }))
    }
}

//update vacations
function UpdateVacation(req, res) {
    console.log("**Update vacation Data **");
    let data = req.body;
    let _id = data.id;
    console.log(_id);
    let description = data.description;
    let destination = data.destination;
    let startdate = data.startdate;
    let enddate = data.enddate;
    let img = data.img;
    let price = data.price;

    let obj = {
        description,
        destination,
        startdate,
        enddate,
        img,
        price
    }

    let vacation = vacationSchema;
    if (description == ("") || img == ("") || startdate == ("") || enddate == ("") || price == ("") || destination == ("")) {
        console.log('vacation data is missing ot empty');
        res.json({ message: "vacation data is missing ot empty", success: false })
    } else {
        vacation.findByIdAndUpdate(_id, { $set: obj }, { new: true }, (err, doc) => {
            if (err == null) {
                console.log("Data Update Succsess");
                res.json({ message: "Data Update Succsess ", success: true, vacation: data });
            } else {
                console.log("Data Update Failed");
                res.json({ message: "Data Update Failed ", success: false });
            }
        })
    }
}

module.exports = { UpdateVacation, DeleteVacation, AddVacation, DisplayVacation }


