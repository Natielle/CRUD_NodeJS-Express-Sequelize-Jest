const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
  test("It should response the GET method with status 200", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Esse texto aparece no corpo da página HTML no navegador.');
      });
  });
});