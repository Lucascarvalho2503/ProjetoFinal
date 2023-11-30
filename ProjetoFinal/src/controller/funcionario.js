const express = require("express");
const path = require("path");
const spawnSync = require('child_process');
const router = express.Router();
const Funcionario = require('../models/funcionario');

router.get("/funcionario", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../html/funcionarios.html"))
})

router.post("/adicionar-funcionario", async (req, res) => {
    try {
        const { nome, cargo, telefone, email } = req.body;

        
        const novoFuncionario = await Funcionario.create({
            nome: nome,
            cargo: cargo,
            telefone: telefone,
            email: email
        });

        console.log('Novo funcionário adicionado:', novoFuncionario);
        
        
        res.redirect("/funcionario");
    } catch (error) {
        console.error('Erro ao adicionar funcionário:', error);
        res.status(500).send('Erro ao adicionar funcionário ao banco de dados.');
    }
});

module.exports = router;