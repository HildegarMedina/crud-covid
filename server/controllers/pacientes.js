const Paciente = require("../models/user");

module.exports = {

    index: async (req, res, next) => {
        const pacientes = await Paciente.find({});
        res.status(200).json(pacientes);
    },

    novoPaciente: async (req, res, next) => {
        const novoPaciente = new Paciente(req.body);
        const paciente = await novoPaciente.save();
        res.status(200).json(paciente);
    },

    modificarPaciente: async (req, res, next) => {
        const {id} = req.params;
        const novoPaciente = req.body;
        await Paciente.findByIdAndUpdate(id, novoPaciente);
        res.status(200).json({success: true});
    },

    excluirPaciente: async (req, res, next) => {
        const { id } = req.params;
        await Paciente.findByIdAndRemove(id);
        res.status(200).json({success: true});
    },

};