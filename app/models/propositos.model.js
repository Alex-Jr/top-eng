const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */
module.exports = (sequelize) => {
  const Proposito = sequelize.define("proposito", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {

  });

  return Proposito;
}