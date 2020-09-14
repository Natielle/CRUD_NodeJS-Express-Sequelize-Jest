const app = require('./app');

// colocando o servidor node para responder na porta 3001
// tem que separar o servidor para executar os testes

app.listen(3001, () => {
    console.log('A aplicacao esta no ar. O servidor está ouvindo...')
}); 