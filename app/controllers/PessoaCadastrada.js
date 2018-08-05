const db = require ('../../config/dbConnection');
const {PessoaCadastradaDAO} = require ('../models/PessoaCadastradaDAO');
const { EnderecoDAO } = require ('../models/EnderecoDAO');

class PessoaCadastrada{

  constructor(){

  }

  cadastrarNovaPessoa (req, res)
  {
    let connection = db();
    connection.connect();
    let pessoaDAO = new PessoaCadastradaDAO(connection);
    let enderecoDAO = new EnderecoDAO(connection);
    pessoaDAO.cadastrarPessoa(req.body);
    enderecoDAO.cadastrarEnderecoPessoa(req.body);
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
