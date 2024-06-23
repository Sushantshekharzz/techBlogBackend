'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'test');

   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'test', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'default_value'
        // Other options here
      });
    // Add logic for reverting the column addition
  }
};
