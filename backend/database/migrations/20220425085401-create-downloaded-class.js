'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('downloaded-classes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      lesson: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'lessons', name: 'id' }
      },
      student: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', name: 'id' }
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
    queryInterface.dropTable('downloaded-classes');
  }
};
