const express = require("express");
const path = require("path");
const spawnSync = require('child_process');
const router = express.Router();
const Item = require('../models/item');

router.get("/item", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../html/itens.html"))
})

router.post("/adicionar-item", async (req, res) => {
    try {
        const { nome, preco, quantidade } = req.body;

        
        const novoItem = await Item.create({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        });

        console.log('Novo item adicionado:', novoItem);
        res.redirect("/item");
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
        res.status(500).send('Erro ao adicionar item ao banco de dados.');
    }
});

module.exports = router;