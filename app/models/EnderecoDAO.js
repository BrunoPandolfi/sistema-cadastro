class EnderecoDAO{
  constructor(connection){
    this.connection = connection
  }

  cadastrarEnderecoPessoa(dados, callback)
  {
    const endereco = dados.endereco;
    this.connection.query("INSERT INTO endereco VALUES ('" +
    endereco.cep + "','" +
    endereco.numero_casa + "','" +
    endereco.complemento + "','" +
    endereco.bairro + "','" +
    endereco.cidade + "','" +
    endereco.estado + "','" +
    dados.cpf + "','" +
    endereco.nome_rua + "');" , (err, result)=>
    {
      if (err == null)
      {
        console.log("Endereco cadastrado com sucesso");
      }
    });
  }
}

module.exports = {EnderecoDAO};
