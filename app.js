const app = require('./config/server');

const port = process.env.PORT || 3000;

app.listen(port, mensagem => console.log(`Servidor esta funcionando na porta ${port}`));
