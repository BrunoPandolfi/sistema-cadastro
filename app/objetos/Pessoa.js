class Pessoa{
  constructor(dados)
  {
    this.pessoa_cpf =  dados.cpf;
    this.pessoa_nome = dados.nome;
    this.pessoa_mae = dados.nome_mae;
    this.pessoa_dt_nasc = dados.data_nasc;
    this.pessoa_rg = dados.rg;
    this.pessoa_sexo = dados.sexo;
  }
}

module.exports = { Pessoa }
