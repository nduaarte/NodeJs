const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProducts = require('./src/routes/products');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use('/products', rotaProducts);

//quando na encontra rota:
app.use((req, res, next) => {
  const erro = new Error('Não encontrado!');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    message: error.message
  })
});

module.exports = app;