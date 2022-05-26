const path = require('path');
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'output'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    publicPath: '/'
  },
  plugins: [new CleanWebpackPlugin()]
});