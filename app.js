'use strict';

const assert = require('assert');

// app.js
module.exports = app => {
  // 鉴权
  app.passport.verify(async (ctx, user) => {
    assert(user.provider, 'user.provider should exists');
    assert(user.id, 'user.id should exists');

    const { id } = user;

    const existsUser = await ctx.model.User.findOne({
      where: { uuid: id },
    });
    if (existsUser) {
      return existsUser;
    }
    // 调用 service 注册新用户
    const newUser = await ctx.service.user.register(user);
    return newUser;
  });

  // 将用户序列化后再存储到会话中
  app.passport.serializeUser(async (ctx, user) => {
    const { id, uuid, name, nickname, role_id } = user;
    return { id, uuid, name, nickname, role_id };
  });

  // 从会话还原后反序列化用户
  app.passport.deserializeUser(async (ctx, user) => {
    if (user) {
      const userRes = await ctx.model.User.findOne({
        where: {
          id: user.id,
        },
      });
      const { id, uuid, name, nickname, role_id, provider, avatar_url } = userRes;
      return {
        id, uuid, name, nickname, role_id, provider, avatar_url,
      };
    }
    return null;

    // 这里必须返回一个有结果的对象，否则 ctx.isAuthenticated() 为false
  });
};
