const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:', { 
  logging: console.log
}) // Example for sqlite

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database/dev-db.sqlite',
//   logging: console.log
// });

const Proposito = require(`./propositos.model`)(sequelize);

module.exports = {
  sequelize,
  Proposito
}