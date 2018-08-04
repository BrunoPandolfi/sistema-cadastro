const {PessoaCadastrada} = require('../controllers/PessoaCadastrada');
const express = require('express');
const router = express.Router();


router.post('/cadastrarPessoa', (req, res) => {
  let controlePessoa = new PessoaCadastrada();
  controlePessoa.cadastrarNovaPessoa(req, res);
});

router.get('/obterPessoasCadastradas', (req, res) => {
  let controlePessoa = new PessoaCadastrada();
  controlePessoa.obterPessoasCadastradas(req, res);
});

module.exports = router;
