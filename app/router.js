'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.get('/', 'home.render');
  app.router.get('/user', 'home.render');
  app.router.get('/logout', 'user.logout');
  app.passport.mount('github');
  app.passport.mount('yuque');
};
