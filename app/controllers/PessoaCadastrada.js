const db = require ('../../config/dbConnection');
const {PessoaCadastradaDAO} = require ('../models/PessoaCadastradaDAO');
const {Pessoa} = require ('../objetos/Pessoa');

class PessoaCadastrada{

  constructor(){

  }

  cadastrarNovaPessoa (req, res)
  {
    let connection = db();
    connection.connect();
    let pessoaDAO = new PessoaCadastradaDAO(connection);
    let novaPessoa = new Pessoa(req.body);
    pessoaDAO.cadastrarPessoa(novaPessoa);
  }

  obterPessoasCadastradas(req, res){
    let connection = db();
    connection.connect();
    let listaPessoas = new PessoaCadastradaDAO(connection);
    listaPessoas.obterListaPessoasCads((err, result)=>{
      res.send(result.rows);
    });
  };

};

module.exports = {PessoaCadastrada};
