const Paciente = require("../models/Pacientes");

module.exports = {

    index: async (req, res, next) => {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    },

    novoPaciente: async (req, res, next) => {
        const paciente = new Paciente(req.body);
        await paciente.save()
            .then(usr => res.json(usr))
            .catch(err => res.json({result: "Precisa preencher tudos os dados"}));
    },

    modificarPaciente: async (req, res, next) => {
        const {id} = req.params;
        const novoPaciente = req.body;
        await Paciente.findByIdAndUpdate(_id=id, novoPaciente)
        .then(res => {
            res.json({result: true});
        }).catch(err => {
            res.json({result: err});
        });
    },

    excluirPaciente: async (req, res, next) => {
        const { id } = req.params;
        await Paciente.findByIdAndRemove(id, function (err, docs) {
            if (err){
                res.json({result: "ID Inválido"});
            }else{
                res.json({result: true});
            }
        });
    },

};