const express = require('express');
const router = express.Router();

//retorna todos os produtos
router.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Usando o GET dentro da rota de produtos'
  })
});

//insere um produto
router.post('/', (req, res) => {

  const produto = {
    nome: req.body.nome,
    preco: req.body.preco
  };
  res.status(201).send({
    mensagem: 'usando o POST dentro da rota de produtos',
    produtoCriado: produto
  });
});

//retorna um produto expecífico
router.get('/:id_produto', (req, res) => {
  res.status(200).send({
    mensagem: 'Usando o GET de um produto exclusivo',
    id: id
  });
});

//altera um produto
router.patch('/', (req, res) => {
  res.status(201).send({
    mensagem: 'Usando o PATCH'
  });
});

//deleta um produto
router.delete('/', (req, res) => {
  res.status(201).send({
    mensagem: 'Usando o DELETE'
  });
});

module.exports = router;