const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express(); // inicializa o app 

// --------- middlewares -----------
// adicionando o bodyparser para conseguir ler o corpo da resposta
app.use(bodyParser.json());
// ---------------------------------

// tentando usar a rota diretamente
// app.use('/api/v1/user', userRoutes);

// vai importar todos os middlewares necessarios
consign({'cwd': 'src'})
    .include('./config/middlewares.js')
    .then('./services')
    .then('./routes')
    .then('./config/routes.js')
    .into(app);

// para a rota '/' o servidor responde status 200
app.get('/', (req, res) => {
  res.status(200).send('Esse texto aparece no corpo da página HTML no navegador.');
  console.log('Requisicao realizada na raiz da API. Está funcionando...');
});


module.exports = app;
