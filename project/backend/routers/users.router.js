const express = require("express");
userRouter = express.Router();
const cors = require("cors");
userRouter.use(cors());
const dotenv = require("dotenv");
dotenv.config("../.env");
const logindata = require("../handlers/logindata");
const signupdata = require("../handlers/signup");
const vacation = require("../handlers/vacation");
const follow = require("../handlers/follow")

//user data

userRouter.post("/login", logindata.logIn);
userRouter.post("/signup", signupdata.SignUp);
userRouter.get("/vacation/list", vacation.DisplayVacation);

//admin editing function

userRouter.post("/vacation/addVacation", vacation.AddVacation);
userRouter.post("/vacation/update", vacation.UpdateVacation);
userRouter.delete("/vacation/update/delete", vacation.DeleteVacation);
userRouter.post("/vacation/update/:_id", vacation.UpdateVacation);
userRouter.post("/vacation/follow", follow.UpdateFollowingVacation);


module.exports = userRouter;
























// userRouter.get("/all", (req, res) => {
//     res.send("all users");
// })
// const FindVacation = require("../middleware/vacationData")

// userRouter.get("/single/:id", (req, res) => {
//     res.send("one users");

// })
// userRouter.delete("/:id", (req, res) => {
//     res.send("delete one users");

// })
// userRouter.patch("/:id", (req, res) => {
//     res.send("update users");
// })

// const upload = require("../middleware/uploadimg");

// userRouter.post("/upload", upload.single("file"), async (req, res) => {
//     if (req.file === undefined) return res.send("you must select a file.");
//     const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
//     return res.send(imgUrl);
// });
