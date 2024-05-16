// models/News.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Blog = sequelize.define('Blog', {
  category: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

module.exports = Blog;
