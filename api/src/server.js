const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
// from here parvaiz


const cors = require("cors")
const express = require("express");
const app = express();
const port = 8080
const { MongoClient } = require("mongodb")
const UserRoute=require("./Routes/userRoutes")

const dbconnection=require('./DbConnection')
dbconnection()
app.use(express.json())
app.use(cors())

const fs=require("fs")

app.use(express.static('public'))
app.use("/userApi", UserRoute)


app.use("*", (req, res) => {    // if no API are made 
        res.send(" Itwalkin could not fetch this API")    
})



app.listen(port, () => {
    console.log(`app running on port ${port} for booking`)
})
