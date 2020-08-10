'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '主键',
      },
      uuid: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        comment: '第三方ID',
      },
      avatar_url: {
        type: Sequelize.STRING(200),
        allowNull: true,
        comment: '头像地址',
      },
      provider: {
        type: Sequelize.STRING(20),
        allowNull: true,
        comment: '第三方账号提供方',
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: '用户名称',
      },
      nickname: {
        type: Sequelize.STRING(20),
        allowNull: true,
        comment: '用户昵称',
      },
      role_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        comment: '角色',
      },
      password: {
        type: Sequelize.STRING(40),
        allowNull: true,
        comment: '用户密码',
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
