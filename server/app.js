const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

const app = express();

const pacientesRouters = require("./routes/pacientes");

//Database
require("./database");

//Settings
app.set("port", process.env.PORT || 8000);

//Middleware
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(pacientesRouters);

//Run server
app.listen(app.get("port"), () => {
    console.log("Server on port: " + app.get("port"));
})