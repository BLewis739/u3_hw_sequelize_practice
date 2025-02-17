'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init(
    {
      city: DataTypes.STRING,
      enrollment: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'School',
      tableName: 'schools'
    }
  )
  return School
}
