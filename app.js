'use strict';

module.exports = app => {
  require('./lib/index')(app);
  app.locals.assets = app.assets;
};
