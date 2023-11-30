const Sequelize = require('sequelize');
const db = require('../dao/db');

const Item = db.define('Item', {
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

Item.sync({ alter: true })
    .then(() => {
        console.log('Modelo Item sincronizado com sucesso.');
    })
    .catch(error => {
        console.error('Erro ao sincronizar modelo Item:', error);
    });

module.exports = Item;