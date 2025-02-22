const mongoose = require("mongoose");
//const port = process.env.PORT
const port = 8080
const dotenv =require("dotenv");
dotenv.config();
function dbconnection(){
// mongoose.connect(process.env.URL)
mongoose.connect("mongodb://127.0.0.1:27017/HCLAssisment")
    .then((res) => { console.log("connected") })
    .catch((err) => { console.log("failed") })
}

module.exports=dbconnection