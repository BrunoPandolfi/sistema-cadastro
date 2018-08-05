class PessoaCadastradaDAO{
  constructor(connection){
    this.connection = connection;
  }

  cadastrarPessoa (dados)
  {
    this.connection.query(
      "INSERT INTO pessoa VALUES ('" +
      dados.cpf + "','" +
      dados.nome + "','" +
      dados.nome_mae + "','" +
      dados.data_nasc + "','" +
      dados.rg + "','" +
      dados.sexo + "');", (err, result)=>{
        if (err == null)
        {
          console.log('Pessoa cadastrada com sucesso');
        }
    });
  }

  obterListaPessoasCads(callback)
  {
    this.connection.query('SELECT * FROM pessoa', callback);
  }
}

module.exports = {PessoaCadastradaDAO};
