'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('teachers-classes', {
      teacher: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'teachers', name: 'id' }
      },
      class: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'classes', name: 'id' }
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
    return queryInterface.dropTable('teachers-classes')
  }
};
