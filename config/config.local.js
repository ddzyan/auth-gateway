/* eslint valid-jsdoc: "off" */

'use strict';


module.exports = () => {
  const config = exports = {};

  config.passportGithub = {
    key: 'e3fe9c5fa43d66a0087f',
    secret: '3e47e41244233f4d01b05cc5cce55c56e743a00d',
    callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  exports.passportYuque = {
    key: 'MbPWrXcOtcQ52S4OgEO7',
    secret: 'hMyoWI4kbsFhhpbOfOTNPNIuy5uYlhkAmEE4MwkJ',
    callbackURL: '/passport/yuque/callback',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
