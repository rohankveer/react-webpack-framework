/* eslint-disable no-undef */
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      publicPath: '/'
    }),
    new ReactRefreshWebpackPlugin(),
    //new BundleAnalyzerPlugin()
  ],
  devServer: {
    client: {
      overlay: true,
    },
    host: 'localhost',
    port: 9090,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  target: 'web'
});