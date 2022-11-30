const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config("../.env");
const signUpUsersShema = require("../models/SignUpUsers.model")
const DataBase = require("../database/database")

function logIn(req, res) {
    console.log("**Posting From FrontEnd To Login**");
    let mail = req.body.mail;
    let password = req.body.password;

    password = crypto.createHash("sha256").update(process.env.KEY + password).digest("hex");

    if (mail == ("") || password == ("")) {
        console.log("user name or password is missing");
        res.json({ massege: "user name or password is missing", success: false });
    } else {
        signUpUsersShema.findOne({ mail })
            .then((result) => {
                if (result != null) {
                    console.log("Username Is Exists");
                    if (result.password == password) {
                        res.json({ massege: "User Login Success", success: true, user: result });
                    } else {
                        res.json({ massege: "User Password Is Missing/Not Correct ", success: false });
                    };
                } else {
                    res.json({ massege: "User Not Exists", success: false });
                }
            }).catch((err) => res.json({ massege: "user login failed ", success: false }));
    }
}

module.exports = { logIn };




















