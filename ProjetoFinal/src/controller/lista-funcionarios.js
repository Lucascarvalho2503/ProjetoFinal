const express = require("express");
const router = express.Router();
const Funcionario = require('../models/funcionario'); // Importe o modelo de funcionário

// Rota para listar funcionários
router.get("/funcionarios", async (req, res) => {
    try {
        // Consulta no banco de dados para obter todos os funcionários
        const funcionarios = await Funcionario.findAll();

        // Renderiza a página HTML com os dados dos funcionários
        res.render('lista-funcionarios', { funcionarios: funcionarios });
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send('Erro ao buscar funcionários no banco de dados.');
    }
});

module.exports = router;