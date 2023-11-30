const express = require("express");
const router = express.Router();
const Funcionario = require('../models/funcionario'); 


router.get("/funcionarios", async (req, res) => {
    try {
        
        const funcionarios = await Funcionario.findAll();

        
        res.render('lista-funcionarios', { funcionarios: funcionarios });
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send('Erro ao buscar funcionários no banco de dados.');
    }
});

module.exports = router;