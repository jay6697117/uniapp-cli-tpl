'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    }
  }
};
