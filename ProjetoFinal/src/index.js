const express = require("express");
const path = require("path");
const login = require("./controller/login");
const funcionario_controller = require("./controller/funcionario");
const item_controller = require("./controller/item");
const sistema_controller = require("./controller/sistema");
const lista_itens = require("./controller/lista-itens");
const lista_funcionarios = require("./controller/lista-funcionarios");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./dao/db');
const Item = require('./models/item');


db.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
  });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../html')); 


const cssPath = path.join(__dirname, '../css');
app.use('/css', express.static(cssPath, {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  },
}));

app.use(login);
app.use(funcionario_controller);
app.use(item_controller);
app.use(sistema_controller);
app.use(lista_itens);
app.use(lista_funcionarios);


app.listen('3300', () => {
  console.log("Servidor funcionando");
});