const mongoose = require("mongoose");
const SignUpUsers = require("../models/SignUpUsers.model");
const VacationInfo = require("../models/vacation.models");
const Follow = require("../models/SignUpUsers.model")

class DataBase {
    static async connent() {
        await mongoose.connect("mongodb+srv://aimanzi:12345@cluster0.izzgyc5.mongodb.net/?retryWrites=true&w=majority")
            .then((result) => {
                (!result) ?
                    console.log("connected to MongoDb in process") : console.log("DataBase staus:", "connecting to DataBase Succsess")
            })
            .catch(err => console.log("DataBase status :", "MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted"))
    }

    static async disconnect() {
        await mongoose.disconnect();
    }

    static SignUpUser(data) {
        SignUpUsers.insertMany(data).then((result) => {
            console.log(result);
        });
    }

    static VcationUpload(data) {
        VacationInfo.insertMany(data).then((result) => {
            console.log(result);
        });
    }

    static FollowingUpdate(data) {
        Follow.insertMany(data).then((result) => {
            console.log(result);
        });
    }

}







module.exports = DataBase;



