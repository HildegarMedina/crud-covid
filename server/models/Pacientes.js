//Modules
const mongoose = require("mongoose");
const {Schema} = mongoose;

//Schema
const PacientesSchema = new Schema({
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    teste: {type: Boolean, required: true, default: 0}
});

//Exports
module.exports = mongoose.model("pacientes", PacientesSchema);