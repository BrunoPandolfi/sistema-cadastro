exports class EnderecoDAO{
  constructor(connection){
    this.connection = connection
  }

  cadastrarEnderecoPessoa(dados, callback)
  {
    this.connection.query('INSERT INTO endereco SET ?', dados, callback);
  }
}
