'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      register_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      class: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'classes', name:'id' }
      },
      gender: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('students')
  }
};
