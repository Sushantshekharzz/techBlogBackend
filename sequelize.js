// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'test', {
  host: 'localhost',
  dialect: 'postgres', // Or any other supported dialect
});

module.exports = sequelize;
