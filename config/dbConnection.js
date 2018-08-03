const pg = require('pg');

module.exports = () =>{
  const conString = "postgres://akiro:123456@localhost:5432/sistemacadastrodb";
  let conexao = new pg.Client(conString);
  return conexao;
}
