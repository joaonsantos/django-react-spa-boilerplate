const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  entry: ['./src/index.js'],
  devtool: "inline-source-map",
  watch: true
});
