'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'test', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default_value'
      // Other options here
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'test');
    // Add logic for reverting the column addition
  }
};
