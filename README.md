# CRUD base em NodeJS, express, Sequelize e Jest

## Iniciando um projeto

 `npm init -y`: cria o arquivo package.json

## Todos npms que serão utilizados

- ``npm install express --save``
- ``npm install --save sequelize``
- ``npm install --save pg pg-hstore # Postgres``
- ``npm install body-parser``
- ``npm i --save consign``
- Dependências para teste: ``npm install --save-dev babel-cli babel-preset-env jest supertest superagent``

## Configurando o ambiente de teste para usar o jest pelo terminal

Alterar o package.json:

```{json}
  ...
  "scripts": {
    "start": "node src/server.js",
    "test": "jest"
  }
  ...
```

## Executando o projeto

Para executar o **servidor**, basta usar o comando: ``npm start``. E para verificar se está funcionando mesmo, basta acessar a url ``http://localhost:3001/`` pelo navegador.

Para executar os **testes**, basta usar o comando: ``npm test`` e todos os testes serão executados.

Para executar apenas parte dos testes com base no nome, basta executar: ``npm test app`` e todos os testes do arquivo `app.test.js` serão executados.

Para executar apenas os testes unitários ou de integração basta utilizar o seguinte comando: `npm test '/units'` ou `npm test '/integrations'`

## Código SQL

```{SQL}
CREATE DATABASE crud_database;

DROP TABLE usuarios;

CREATE TABLE usuarios(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  amount INTEGER,
  published BOOLEAN,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);

INSERT INTO usuarios (title, amount, published, createdAt, updatedAt) VALUES ('titulo exemplo', 105, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
```

## Sobre os status do HTTP

- 200: OK (requisição foi bem sucedida)
- 201: Created (requisição foi bem sucedida e foi criado um novo recurso como resultado)
- 204: No Content
- 404: Not Found (rota não encontrada)

Link para mais status: [Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
