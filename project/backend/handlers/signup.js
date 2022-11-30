const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config("../.env");
const signUpUsersShema = require("../models/SignUpUsers.model");
const DataBase = require("../database/database")

function SignUp(req, res) {
    console.log("**Posting From FrontEnd To SignUp**");
    let userdefinition = req.body.userdefinition;
    let mail = req.body.mail;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    console.log(userdefinition);

    password = crypto.createHash("sha256").update(process.env.KEY + password).digest("hex");

    let userData = {
        userdefinition,
        mail,
        password,
        firstname,
        lastname
    }

    if (userdefinition == ("user") || userdefinition == ("admin")) {
        console.log(true);
        signUpUsersShema.findOne({ mail })
            .then((result) => {
                if (result) {
                    console.log("User is exists");
                    res.json({ message: "user is exists ", success: false });
                } else {
                    let user = new signUpUsersShema(userData);
                    DataBase.SignUpUser(user)
                        .then(() => {
                            console.log("User Added to DataBase : succsess");
                            res.json({ message: "User Added to DataBase", success: true, user: result })
                        }).catch((err) => {
                            console.log("User Added to DataBase : failed");
                            res.json({ message: "User Added to DataBase : failed", success: false })
                        })
                }
            }).catch((err) => res.json({ message: err.toString(), success: false }))
    } else {
        console.log(false);
        res.json({ message: "missing or Wrong user definition ", success: false })
    }
}

module.exports = { SignUp };

