const express = require("express");
const router = express.Router();
const Item = require('../models/item');


router.get("/itens", async (req, res) => {
    try {
        
        const itens = await Item.findAll();

        
        res.render('lista-itens', { itens: itens });
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        res.status(500).send('Erro ao buscar itens no banco de dados.');
    }
});

module.exports = router;