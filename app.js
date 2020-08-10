'use strict';

const assert = require('assert');

// app.js
module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    // 检查用户
    assert(user.provider, 'user.provider should exists');
    assert(user.id, 'user.id should exists');

    console.log(user);
    const { id } = user;

    const existsUser = await ctx.model.User.findOne({ uuid: id });
    if (existsUser) {
      return existsUser;
    }
    // 调用 service 注册新用户
    const newUser = await ctx.service.user.register(user);
    return newUser;
  });

  // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  app.passport.serializeUser(async (ctx, user) => {
    const { id, uuid, name, nickname, role_id } = user;
    return { id, uuid, name, nickname, role_id };
  });

  // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  app.passport.deserializeUser(async (ctx, user) => {
    if (user) {
      const userRes = await ctx.model.User.findOne({ id: user.id });
      const { id, uuid, name, nickname, role_id, provider, avatar_url } = userRes;
      return {
        id, uuid, name, nickname, role_id, provider, avatar_url,
      };
    }
    return null;

    // 这里必须返回一个有结果的对象，否则 ctx.isAuthenticated() 为false
  });
};
