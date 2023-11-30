const Sequelize = require('sequelize');
const db = require('../dao/db');

const Sistema = db.define('Sistema', {
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
    preco: {
        type: Sequelize.FLOAT, 
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Sistema.sync({ alter: true })
    .then(() => {
        console.log('Modelo Sistema sincronizado com sucesso.');
    })
    .catch(error => {
        console.error('Erro ao sincronizar modelo Sistema:', error);
    });

module.exports = Sistema;