module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usuario", {
    title: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdat'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updatedat'        
    },

  });

  return User;
};