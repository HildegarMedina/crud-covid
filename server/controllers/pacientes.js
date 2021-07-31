const Paciente = require("../models/Pacientes");

module.exports = {

    index: async (req, res, next) => {
        const pacientes = await Paciente.find({});
        res.status(200).json(pacientes);
    },

    novoPaciente: async (req, res, next) => {
        const novoPaciente = new Paciente(req.body);
        const paciente = await novoPaciente.save()
        .then(res => {
            res.status(200).json(paciente);
        }).catch(err => {
            res.status(200).json({result: "precisa preencher tudos os dados"});
        })
    },

    modificarPaciente: async (req, res, next) => {
        const {id} = req.params;
        const novoPaciente = req.body;
        await Paciente.findByIdAndUpdate(_id=id, novoPaciente)
        .then(res => {
            res.status(200).json({result: true});
        }).catch(err => {
            res.status(200).json({result: err});
        });
    },

    excluirPaciente: async (req, res, next) => {
        const { id } = req.params;
        await Paciente.findByIdAndRemove(id, function (err, docs) {
            if (err){
                res.status(200).json({result: "ID Inválido"});
            }else{
                res.status(200).json({result: true});
            }
        });
    },

};