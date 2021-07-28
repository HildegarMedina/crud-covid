const router = require("express").Router();

const { index, novoPaciente, modificarPaciente, excluirPaciente } = require("../controllers/pacientes");

//Pacientes
router.get("/api/pacientes", index);
router.post("/api/pacientes/novo", novoPaciente);
router.post("/api/pacientes/:id", modificarPaciente);
router.delete("/api/pacientes/excluir/:id", excluirPaciente);

module.exports = router;