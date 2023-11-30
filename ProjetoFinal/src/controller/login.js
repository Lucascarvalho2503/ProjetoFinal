const express = require("express");
const path = require("path");
const router = express.Router();
const Usuario = require('../models/usuario');

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../html/login.html"))
})

router.post("/acesso", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email: email } });

        if (usuario) {
            if (usuario.senha === senha) {   
                res.sendFile(path.join(__dirname,"../../html", "index.html"));
            } else { 
                res.status(401).json({ message: 'Senha incorreta' });
            }
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login', error: error.message });
    }
});

module.exports = router;

