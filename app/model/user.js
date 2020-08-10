'use strict';

const moment = require('moment');

module.exports = app => {
  const { Sequelize } = app.Sequelize;

  const User = app.model.define('user', {
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
    avatar_url: {
      type: Sequelize.STRING(200),
      allowNull: true,
      comment: '头像地址',
    },
    password: {
      type: Sequelize.STRING(40),
      allowNull: true,
      comment: '用户密码',
    },
    created_at: {
      type: Sequelize.DATE,
      get() {
        // TODO get created_at 无效
        return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    updated_at: {
      type: Sequelize.DATE,
      get() {
        // TODO get created_at 无效
        return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  });

  // 创建表间关系
  User.associate = () => {
    // app.model.Student.belongsTo(app.model.StudentInfo, { foreignKey: 'sid' });
    // 由于是将student的主键，保存到studentInfo中，所以要用hasOne，foreignKey是添加到studentInfo中的外键名称
    // app.model.Student.hasOne(app.model.StudentInfo, { foreignKey: 'sid' });
  };

  return User;

};
