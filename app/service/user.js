'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async register(user) {
    if (!user) throw new ReferenceError('user is undefined');
    const { id, provider, name, profile } = user;
    const { name: nickname, avatar_url } = profile;

    await this.ctx.model.User.create({
      uuid: id,
      provider,
      name,
      nickname,
      avatar_url,
    });
  }
}

module.exports = UserService;
