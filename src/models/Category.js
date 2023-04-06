
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  })

  return CategoryTable;
}