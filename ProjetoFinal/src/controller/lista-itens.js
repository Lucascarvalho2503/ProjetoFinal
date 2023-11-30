const express = require("express");
const router = express.Router();
const Item = require('../models/item');

// Rota para listar itens
router.get("/itens", async (req, res) => {
    try {
        // Consulta no banco de dados para obter todos os itens
        const itens = await Item.findAll();

        // Renderiza a página HTML com os dados dos itens
        res.render('lista-itens', { itens: itens });
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        res.status(500).send('Erro ao buscar itens no banco de dados.');
    }
});

module.exports = router;