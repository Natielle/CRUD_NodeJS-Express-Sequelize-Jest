const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

module.exports = (app) => {
    const findAll = async (title) => {
        console.log('Passou pelo servico findAll.');
        console.log('\t title: ', title);

        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

        const listUsers = await User.findAll({ where: condition });
        // const listUsers = await User.findAll();
        return listUsers;
    };

    const insert = async (newUser) => {
      console.log('Passou pelo servico insert.');

      // tratando o erro a nivel de servico
      if(!newUser) return { error: 'Nenhum usuário foi passado.' }; 

      // TODO verificar se o usuario já existe no banco

      return await User.create(newUser); 
    };

    const update = async (userId, updatedUser) => {
      console.log('Passou pelo servico update.');

      // tratando o erro a nivel de servico
      if(!updatedUser || !userId) return { error: 'Nenhum usuário foi passado para ser alterado ou usuário não identificado.' }; 

      return await User.update(updatedUser,
        { 
          where: { id: userId },
          returning: true // retorna o objeto alterado
        });
    };

    const remove = async (userId) => {
      console.log('Passou pelo servico remove.');

      // tratando o erro a nivel de servico
      if(!userId) return { error: 'Nenhum usuário foi passado para ser deletado.' }; 

      return await User.destroy(
        { 
          where: { id: userId }
        });
    };

    return { findAll, insert, update, remove };
};
