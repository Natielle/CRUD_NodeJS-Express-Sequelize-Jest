// Os testes de unidade normalmente são aplicados apenas no contexto de funções específicas
const request = require("supertest");
const app = require("../../../src/app.js");
// const userService = require('../../src/services/user.js');

const MAIN_ROUTE = '/users';
let user;
// let user2;

// Temos o beforeEach também que executa antes de cada um dos testes, porem é bastante custoso ficar acessando
// o banco de dados antes de cada um dos testes (caso precise)

// Executa uma única vez antes dos testes
beforeAll(async () => {
    const res = await app.services.user.insert({ 
      title: `User title test ${Date.now()}`, 
      amount: '98', 
      published: 'true'
    });
    // console.log('user:', res);
    user = { ...res.dataValues };
    // console.log('user:', user);
});


describe("Test CRUD operations of users", () => {
  test('It should find user by title', async () => {
    return await request(app)
      .get(`${MAIN_ROUTE}/${user.title}`)
      .then(response => {

        // verificando se os dados do usuário obtido são os mesmos dos dados inseridos
        expect(response.statusCode).toBe(200);
        expect(response.body[0].title).toBe(user.title);
        expect(response.body[0].amount).toBe(user.amount);
        expect(response.body[0].published).toBe(user.published);
      });
  });

  test("It should create an user", async () => {
    const newUser = { 
      title: `New user test ${Date.now()}`, 
      amount: 35, 
      published: true
    };

    return await request(app)
      .post(MAIN_ROUTE)
      .send(newUser)
      .then(response => {

        // verificando se os dados do usuário inserido foram inseridos corretamente
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newUser.title);
        expect(response.body.amount).toBe(newUser.amount);
        expect(response.body.published).toBe(newUser.published);
      });
  });

  test("It should update an user", async () => {

    const updateUser = { 
      title: `User updated test ${Date.now()}`, 
      amount: 23, 
      published: false
    };

    return await request(app)
      .put(`${MAIN_ROUTE}/${user.id}`)
      .send(updateUser)
      .then(response => {

        // verificando se os dados do usuário obtido são os mesmos dos dados inseridos
        expect(response.statusCode).toBe(201);

        // conferindo a quantidade de usuários atualizados (deve ser apenas 1)
        expect(response.body[0]).toBe(1);

        // conferindo o usuário que foi atualizado de fato
        expect(response.body[1][0].title).toBe(updateUser.title);
        expect(response.body[1][0].amount).toBe(updateUser.amount);
        expect(response.body[1][0].published).toBe(updateUser.published);

      });
  });

  test("It should delete an user", async () => {
    return await request(app)
      .delete(`${MAIN_ROUTE}/${user.id}`)
      .then(response => {
        // conferindo o status da resposta
        expect(response.statusCode).toBe(204);
      });
  });
});