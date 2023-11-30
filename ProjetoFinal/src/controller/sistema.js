const express = require("express");
const path = require("path");
const router = express.Router();
const Item = require("../models/item");
const Funcionario = require("../models/funcionario");

router.get("/sistema", (req, res) => {
    res.sendFile(path.join(__dirname, "../../html/index.html"));
});


router.post("/remover-item", async (req, res) => {
    const nomeItem = req.body.item;

    try {
        const resultado = await Item.destroy({
            where: { nome: nomeItem }
        });

        if (resultado === 1) {
            res.redirect("/sistema");
        } else if (resultado === 0) {
            res.status(404).json({ error: 'Item não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover o item' });
    }
});

router.post("/remover-funcionario", async (req, res) => {
    const nomeFuncionario = req.body.id;

    try {
        const resultado = await Funcionario.destroy({
            where: { nome: nomeFuncionario }
        });

        if (resultado === 1) {
            res.redirect("/sistema");
        } else if (resultado === 0) {
            res.status(404).json({ error: 'Funcionário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover o funcionário' });
    }
});

module.exports = router;