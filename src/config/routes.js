// arquivo que faz a ligacao entre as rotas e o app
module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.findAll)
        .post(app.routes.users.create);
    
    app.route('/users/:title')
        .get(app.routes.users.findAll);

    app.route('/users/:id')
        .put(app.routes.users.update)
        .delete(app.routes.users.remove);
};

