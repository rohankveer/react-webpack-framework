// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    chunkFilename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      publicPath: '/',
      favicon: 'images/favicon.png',
    }),
    new webpack.DefinePlugin({
      __DEBUG__: true,
    }),
    new ReactRefreshWebpackPlugin(),
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
    historyApiFallback: true,
  },
  devtool: 'source-map',
  target: 'web',
}
