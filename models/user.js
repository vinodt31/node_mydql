module.exports = (sequelize, Sequelize) => {
  
    const User = sequelize.define("user", {
      first_name: {
         type: Sequelize.STRING
      },
      last_name : {
         type: Sequelize.STRING
      },
      email_id: {
         type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.BOOLEAN
      }
    });

    return User;
  };