const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */
module.exports = (sequelize) => {
  const Diretriz = sequelize.define("diretriz", {
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
    propositoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'proposito',
        key: 'id',
      },
    }
  }, {

  });

  return Diretriz;
}