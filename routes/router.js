const express = require('express');
const router = express.Router();
const db = require('../config/dbConnection');


let conexao = db();

conexao.connect();

router.post('/cadastrarPessoa', (req, res) => {
  console.log(req.body.nome);
  res.status(200).send({
    mensagem: "Formulário enviado com sucesso"
  });
});

router.get('/obterPessoasCadastradas', (req, res) => {
  conexao.query('select * from pessoa', (err, result) =>{
    res.send(result.rows);
  });
});

module.exports = router;
