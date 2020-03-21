'use strict';

const fs = require('fs');
const assert = require('assert');
const ASSETS = Symbol('Application#ASSETS');

module.exports = app => {
  assert(app.config.webpackAssets.file, 'should pass options.file');
  const rawdata = fs.readFileSync(app.config.webpackAssets.file, { encoding: 'utf8' });
  const assets = JSON.parse(rawdata);
  Object.defineProperty(app, 'assets', {
    get() {
      if (!this[ASSETS]) {
        this[ASSETS] = assets;
      }
      return this[ASSETS];
    },
  });
};
