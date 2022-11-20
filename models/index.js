const Sequelize = require("sequelize");
const DATABASE = "crud";
const USER = "root";
const PASSWORD = "Vinod@!&321";
const HOST = "localhost";
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: "mysql",
    operatorsAliases: false,
  
    pool: {
      max: 5,     
      min: 0,     
      idle: 10000
    }
  });
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.users = require("./user")(sequelize, Sequelize);
  module.exports = db;