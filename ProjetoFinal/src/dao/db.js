const Sequelize = require("sequelize");

const sequelize = new Sequelize("Clientes", "postgres", "postgres", {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(function () {
        console.log("Conexao realizada com sucesso!")
    })
    .catch(function (error) {
        console.error("Erro na conexao:", error)
});

module.exports = sequelize;