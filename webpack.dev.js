const path = require('path');
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
});