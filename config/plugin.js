'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  passportYuque: {
    enable: true,
    package: 'egg-passport-yuque',
  },
};
