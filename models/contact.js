// models/News.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Contact = sequelize.define('Contact', {
    email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  
 
 
});

module.exports = Contact;
