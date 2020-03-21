'use strict';
const path = require('path');

module.exports = appInfo => {
  return {
    webpackAssets: {
      file: path.join(appInfo.baseDir, 'app', 'a.json'),
    },
  };
};
