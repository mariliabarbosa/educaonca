'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('lessons', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      video: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teacher: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'teachers', name: 'id' }
      },
      subject: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'subjects', name: 'id' }
      },
      classes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'classes', name: 'id' }
      },
      expires_in: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('lessons');
  }
};
