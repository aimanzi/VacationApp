const expess = require("express");
const app = expess();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config("../.env");
const port = process.env.PORT;
const userRouter = require("../routers/users.router")
const DataBase = require("../database/database");
app.use(expess.json());
app.use(cors())
app.use(userRouter);




app.get("/", (req, res) => {
    console.log("server is running");
    res.json({ Server_Conntion: "Succsess" })
})

DataBase.connent()

app.listen(port, () => {
    console.log(`the server is listen to port http://localhost:${port}`);
});



// app.set("view engine", "ejs");
// let gfs;
// const conn = DataBase.connent();
// conn.once("open", function () {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection("photos");
// });
// const upload = require("../middleware/uploadimg");
// app.use("/file", upload);
// const Grid = require("gridfs-stream");

// app.get("/file/:filename", async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ filename: req.params.filename });
//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(res);
//     } catch (error) {
//         res.send("not found");
//     }
// });


