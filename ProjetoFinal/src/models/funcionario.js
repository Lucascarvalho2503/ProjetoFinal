const Sequelize = require('sequelize');
const db = require('../dao/db');

const Funcionario = db.define('Funcionario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Funcionario.sync({ alter: true })
    .then(() => {
        console.log('Modelo Funcionario sincronizado com sucesso.');
    })
    .catch(error => {
        console.error('Erro ao sincronizar modelo Funcionario:', error);
    });

module.exports = Funcionario;