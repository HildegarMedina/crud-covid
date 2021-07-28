const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const userRouters = require("./routes/pacientes");

//Database
require("./database");

//Settings
app.set("port", process.env.PORT || 8000);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
//app.use(userRouters);

//Run server
app.listen(app.get("port"), () => {
    console.log("Server on port: " + app.get("port"));
})