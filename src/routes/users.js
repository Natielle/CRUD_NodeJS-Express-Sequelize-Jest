module.exports = (app) => {
  const findAll = async (req, res) => {
      console.log('Passou pela rota findAll.');
      
      var title = req.params.title;
      title = title ? title : '';

      await app.services.user.findAll(title).then(data => {
          res.json(data);
      })
      // tratando o erro a nível de rota
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while retrieving users."
          });
      });
  };

  const create = async (req, res) => {

    console.log('Passou pela rota create.');
    const newUser = req.body;
    console.log('newUser: ', newUser);

    const result = await app.services.user.insert(newUser);  

    // tratando o erro a nivel de rota
    if (result.error) return res.status(400).json(result);
    
    // envia um status 201 e a resposta em json
    return res.status(201).json(result);
  };

  const update = async (req, res) => {

    console.log('Passou pela rota update.');
    const userId = req.params.id;
    const newUser = req.body;
    console.log('newUser: ', newUser);

    const result = await app.services.user.update(userId, newUser);  

    // tratando o erro a nivel de rota
    if (result.error) return res.status(400).json(result);
    
    // envia um status 201 e a resposta em json
    return res.status(201).json(result);
  };

  const remove = async (req, res) => {

    console.log('Passou pela rota remove.');
    const userId = req.params.id;

    const result = await app.services.user.remove(userId);  

    // tratando o erro a nivel de rota
    if (result.error) return res.status(400).json(result);
    
    // envia um status 204 e a resposta em json
    return res.status(204).json(result);
  };
  
  return { findAll, create, update, remove };
};
