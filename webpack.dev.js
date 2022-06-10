/* eslint-disable no-undef */
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [
  new HtmlWebpackPlugin({
    template: './app/index.html',
    publicPath: '/',
    favicon: 'images/favicon.png'
  }),
  new webpack.DefinePlugin({
    __DEBUG__: true
  }),
  new ReactRefreshWebpackPlugin()
];
if (process.env.DEBUG === 'analyze') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js'
  },
  plugins: plugins,
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