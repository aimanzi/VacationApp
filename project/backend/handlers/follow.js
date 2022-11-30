// const Follow = require("../models/Following")
const DataBase = require("../database/database")
const Follow = require("../models/SignUpUsers.model")


function UpdateFollowingVacation(req, res) {
    let id = req.body.userMongoId;
    let vacationid = req.body.vacationId;

    let followObj = {
        vacationid
    }
    Follow.findById(id)
        .then(async (result) => {
            console.log(result);
            if (result) {
                if (result.follow.includes(vacationid)) {
                    console.log("the user is following the current vacation");
                    result.follow.remove(vacationid);
                    await result.save();
                    res.json({ message: " the user stopped following this vacation", succsess: true, user: result })
                } else {
                    result.follow.push(vacationid);
                    await result.save();
                    res.json({ message: "vacation following updated", succsess: true, user: result });
                }
            } else {
                let following = new Follow(followObj)
                DataBase.FollowingUpdate(following)
                console.log("user vacation following updated");
                res.json({ message: "User does not exist!", succsess: false });
            }
        }).catch((err) => res.json({ massege: "user following failed ", success: false }));
}

module.exports = { UpdateFollowingVacation }