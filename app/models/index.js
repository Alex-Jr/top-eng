const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:', { 
//   logging: console.log
// }) // Example for sqlite

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/dev-db.sqlite',
  logging: console.log,
  define: {
    freezeTableName: true
  }
});

const Proposito = require(`./propositos.model`)(sequelize);
const Diretriz = require(`./diretrizes.model`)(sequelize);
const Objetivo = require(`./objetivos.model`)(sequelize);
const Indicador = require(`./indicadores.model`)(sequelize);

// this is bad but here we are
Proposito.hasMany(Diretriz)
Diretriz.belongsTo(Proposito)

// // should be n to n, but its 1 to n because its simple
Diretriz.hasMany(Objetivo);
Objetivo.belongsTo(Diretriz);

// // should be n to n, but its 1 to n because its simple
Objetivo.hasMany(Indicador);
Indicador.belongsTo(Objetivo);

module.exports = {
  sequelize,
  Proposito,
  Diretriz,
  Objetivo,
  Indicador
}