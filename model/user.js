// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});




module.exports = User;
