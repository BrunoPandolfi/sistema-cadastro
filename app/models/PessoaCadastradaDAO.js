class PessoaCadastradaDAO{
  constructor(connection){
    this.connection = connection;
  }

  cadastrarPessoa (dados)
  {
    this.connection.query(
      "INSERT INTO pessoa VALUES ('" +
      dados.pessoa_cpf + "','" +
      dados.pessoa_nome + "','" +
      dados.pessoa_mae + "','" +
      dados.pessoa_dt_nasc + "','" +
      dados.pessoa_rg + "','" +
      dados.pessoa_sexo + "');", (err, result)=>{
        console.log(err);
    });
    console.log(dados);
  }

  obterListaPessoasCads(callback)
  {
    this.connection.query('SELECT * FROM pessoa', callback);
  }
}

module.exports = {PessoaCadastradaDAO};
