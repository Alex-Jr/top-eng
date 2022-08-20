const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */
module.exports = (sequelize) => {
  const Proposito = sequelize.define("proposito", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {

  });

  return Proposito;
}