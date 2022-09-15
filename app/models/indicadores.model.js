const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */
module.exports = (sequelize) => {
  const Indicador = sequelize.define("indicador", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    sinonimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fonte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    impacto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nocao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    analise: {
      type: DataTypes.STRING,
      allowNull: true
    },
    calculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    objetivoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'objetivo',
        key: 'id',
      },
    }
  }, {

  });

  return Indicador;
}