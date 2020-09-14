// Os testes de unidade normalmente são aplicados apenas no contexto de funções específicas
const request = require("supertest");
const app = require("../../src/app.js");
const userService = app.services.user;

let user; 

test('Should create an user', async () => {
  const newUser = { 
    title: `User title test ${Date.now()}`, 
    amount: 67, 
    published: true
  };

  const res = await userService.insert(newUser);
  
  user = { ...res.dataValues };

  expect(user.title).toBe(newUser.title);
  expect(user.amount).toBe(newUser.amount);
  expect(user.published).toBe(newUser.published);
});
