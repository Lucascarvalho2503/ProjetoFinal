const Sequelize = require('sequelize');
const db = require('../dao/db');

const Usuario = db.define(
    'Usuario', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true 
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

Usuario.sync({ alter: true });

module.exports = Usuario;