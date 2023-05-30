/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const { Model, DataTypes } = require('sequelize');

class Users extends Model {}

module.exports = (sequelize) => {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'Users',
      paranoid: false,
      timestamps: false,
    },
  );
  return Users;
};
