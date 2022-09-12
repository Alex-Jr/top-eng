const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */
module.exports = (sequelize) => {
  const Objetivo = sequelize.define("objetivo", {
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
    diretrizId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'diretriz',
        key: 'id',
      },
    }
  }, {

  });

  return Objetivo;
}